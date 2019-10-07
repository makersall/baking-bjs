Line 28 uses the boundingBox to obtain the absolute position of each item ignoring the vertex positions
(If you want an accurate height line 29 will give it to you)

Items you want to use are listed in the parts array line 31

EDIT Almost forgot I have changed the order of items in the sandwich array to match the order they are displayed on screen (otherwise the yPositions are in the wrong order)

Line 39 increments the y displacement for missing items (it will be negative)

This y displacement is added to the next item that is used.

---------------------------------------------------------------------------------------------------

var createScene = function () {
    
    var scene = new BABYLON.Scene(engine);

	var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, Math.PI / 2.2, 1, BABYLON.Vector3.Zero(), scene);

	camera.attachControl(canvas, true);

	var light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 1, 0), scene);


    BABYLON.SceneLoader.ImportMesh("", "https://datachefs.org/pages/babylonjs/dataviz/sandwich/", "sandwich.glb", scene, function (meshes) {          

        var sandwich = [  
            {id: "node_id30",  height: 0.04,  name: 'Bottom Bun', chosen: 0},
            {id: 'node_id32',  height: 0.05,  name: 'Hamburger', chosen: 0},
            {id: 'node_id34',  height: 0.033,  name: 'Cheddar Cheese', chosen: 0},
            {id: 'node_id46',  height: 0.02,  name: 'Ketchup', chosen: 0},
            {id: 'node_id44',  height: 0.02,  name: 'Mustard', chosen: 0},
            {id: 'node_id48',  height: 0.02,  name: 'Lettuce', chosen: 0},
            {id: 'node_id36',  height: 0.03,  name: 'Tomato', chosen: 0},
            {id: 'node_id38',  height: 0.05,  name: 'Pickle', chosen: 0},
            {id: 'node_id40',  height: 0.03,  name: 'Red Onion', chosen: 0},
            {id: 'node_id42',  height: 0.02,  name: 'Top Bun', chosen: 0},
        ];

        for (let i = 0; i < 10; i++) {
            sandwich[i].yPosition = (scene.getMeshByID(sandwich[i].id).getBoundingInfo().boundingBox.maximumWorld.y + scene.getMeshByID(sandwich[i].id).getBoundingInfo().boundingBox.minimumWorld.y) / 2;
            //sandwich[i].height = scene.getMeshByID(sandwich[i].id).getBoundingInfo().boundingBox.maximumWorld.y - scene.getMeshByID(sandwich[i].id).getBoundingInfo().boundingBox.minimumWorld.y;
        };
        var parts = [0, 1, 3, 7, 8, 9]; // parts MUST start with 0 and end with 9, be in order and only occur once

        var partNb = 0;
        var yDisplacement = 0;
        for (let p = 0; p < parts.length; p++) {
            console.log(partNb, parts[p])
            while (partNb < parts[p] && partNb < 9) {
                scene.getMeshByID(sandwich[partNb].id).isVisible = false;
                yDisplacement += sandwich[partNb].yPosition - sandwich[partNb + 1].yPosition;
                partNb++;
            }
            scene.getMeshByID(sandwich[parts[p]].id).position.y +=yDisplacement;
            partNb++;
        };

    });

    return scene;
};
