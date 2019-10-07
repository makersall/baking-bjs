// https://playground.babylonjs.com/#C0RGLQ#1

// Get set up
var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

var createScene = function () {
    
    var scene = new BABYLON.Scene(engine);  
    scene.createDefaultCameraOrLight(true, true, true);
    scene.createDefaultEnvironment();


    BABYLON.SceneLoader.ImportMesh("", "https://datachefs.org/pages/babylonjs/dataviz/sandwich/", "sandwich.glb", scene, function (meshes) {          

        var sandwich = [  
            {id: "node_id30",  height: 0.04,  name: 'Bottom Bun', chosen: 0},
            {id: 'node_id32',  height: 0.05,  name: 'Hamburger', chosen: 0},
            {id: 'node_id34',  height: 0.033,  name: 'Cheddar Cheese', chosen: 0},
            {id: 'node_id48',  height: 0.02,  name: 'Lettuce', chosen: 0},
            {id: 'node_id40',  height: 0.03,  name: 'Red Onion', chosen: 0},
            {id: 'node_id36',  height: 0.03,  name: 'Tomato', chosen: 0},
            {id: 'node_id38',  height: 0.05,  name: 'Pickle', chosen: 0},
            {id: 'node_id46',  height: 0.02,  name: 'Ketchup', chosen: 0},
            {id: 'node_id44',  height: 0.02,  name: 'Mustard', chosen: 0},
            {id: 'node_id42',  height: 0.02,  name: 'Top Bun', chosen: 0},
        ];

        var list = [-0.15, -0.19, -0.24, -0.385, -0.514, -0.424, -0.454, -0.237, -0.286];
        var  y;

        for (let i = 0; i < 9; i++) {
            y = list[i];
            console.log("\n", sandwich[i].name, ": y is", y, '(Should be',list[i] ,  ') height is', sandwich[i].height, "\n");
            scene.getMeshByID(sandwich[i].id).position = new BABYLON.Vector3(-0.2,  y, 0.27);
        };

        // add 2 balls as height markers
        var ball = BABYLON.MeshBuilder.CreateSphere(name, {diameter: 0.01}, scene);
        ball.position = new BABYLON.Vector3(-0.2, 0, 0.27); 
        var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
        myMaterial.diffuseColor =  new BABYLON.Color3.Teal() ;
        ball.material = myMaterial;
        var ball2 = BABYLON.MeshBuilder.CreateSphere(name, {diameter: 0.03}, scene);
        ball2.position = new BABYLON.Vector3(-0.2, 0.5, 0.27); 
        var ball2Material = new BABYLON.StandardMaterial("myMaterial", scene);
        ball2Material.diffuseColor =  new BABYLON.Color3.Purple() ;
        ball2.material = ball2Material;

    });

    return scene;
};
