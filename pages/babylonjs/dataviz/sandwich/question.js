
var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

var createScene = function () {
    var scene = new BABYLON.Scene(engine);  
    scene.createDefaultCameraOrLight(true, true, true);
    // scene.createDefaultEnvironment();


    BABYLON.SceneLoader.Append("http://datachefs.org/pages/babylonjs/dataviz/sandwich/", "sandwich.glb", scene, function (scene) {      


        var sandwich = [  
            {id: "node_id30",  height: 0.0,  name: 'Bottom Bun', chosen: 0},
            {id: 'node_id32',  height: 0.07,  name: 'Hamburger', chosen: 0},
            {id: 'node_id34',  height: 0.05,  name: 'Cheddar Cheese', chosen: 0},
            {id: 'node_id36',  height: 0.03,  name: 'Tomato', chosen: 0},
            {id: 'node_id38',  height: 0.05,  name: 'Pickle', chosen: 0},
            {id: 'node_id40',  height: 0.03,  name: 'Red Onion', chosen: 0},
            {id: 'node_id42',  height: 0.02,  name: 'Top Bun', chosen: 0},
            {id: 'node_id44',  height: 0.05,  name: 'Mustard', chosen: 0},
            {id: 'node_id46',  height: 0.05,  name: 'Ketchup', chosen: 0},
            {id: 'node_id48',  height: 0.05,  name: 'Lettuce', chosen: 0},
        ];



        var i = 0;
        var y = -0.139
        console.log("\n", sandwich[i].name, sandwich[i].id, 'is height', y, "\n");
        scene.getMeshByID(sandwich[i].id).position = new BABYLON.Vector3(-0.2, y, 0.27);

        i = 1;
        y = -0.156;
        console.log("\n", sandwich[i].name, sandwich[i].id, 'is height', y,"\n");
        scene.getMeshByID(sandwich[i].id).position = new BABYLON.Vector3(-0.2, y, 0.27);


        i = 2;
        y = -0.186;
        console.log("\n", sandwich[i].name, sandwich[i].id, 'is height', y, "\n");
        scene.getMeshByID(sandwich[i].id).position = new BABYLON.Vector3(-0.2, y, 0.27);



    });
    scene.debugLayer.show();
    
    return scene;
};


var scene = createScene(); //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () { 
        scene.render();
});
