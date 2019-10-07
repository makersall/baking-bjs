
// Get set up
var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

var delayCreateScene = function () {
    
    var scene = new BABYLON.Scene(engine);  
    scene.createDefaultCameraOrLight(true, true, true);
    // scene.createDefaultEnvironment();


    BABYLON.SceneLoader.ImportMesh("", "", "sandwich.glb", scene, function (meshes) {          

        // var list = [-0.15, -0.19, -0.24];

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

       


        // scene.getMeshByID("node_id36").position = new BABYLON.Vector3(-0.2, -0.424, 0.27);
        // scene.getMeshByID("node_id38").position = new BABYLON.Vector3(-0.2, -0.454, 0.27);
        // scene.getMeshByID("node_id40").position = new BABYLON.Vector3(-0.2, -0.514, 0.27);
        // scene.getMeshByID("node_id44").position = new BABYLON.Vector3(-0.2, -0.286, 0.27);
        // scene.getMeshByID("node_id46").position = new BABYLON.Vector3(-0.2, -0.237, 0.27);
        // scene.getMeshByID("node_id48").position = new BABYLON.Vector3(-0.2, -0.385, 0.27);



        var layer, layer_object;
        <!-- layer_objest.visibility = 0.3; -->

        // var initialY = -0.119;
        



        // var i = 0;
        // var y = -0.15
        // console.log("\n", sandwich[i].name, sandwich[i].id, 'is height', y, "\n");
        // scene.getMeshByID(sandwich[i].id).position = new BABYLON.Vector3(-0.2, y, 0.27);

        // i = 1;
        // y = -0.19;
        // console.log("\n", sandwich[i].name, sandwich[i].id, 'is height', y,"\n");
        // scene.getMeshByID(sandwich[i].id).position = new BABYLON.Vector3(-0.2, y, 0.27);


        // i = 2;
        // y = -0.24;
        // console.log("\n", sandwich[i].name, sandwich[i].id, 'is height', y, "\n");
        // scene.getMeshByID(sandwich[i].id).position = new BABYLON.Vector3(-0.2, y, 0.27);

        // i = 9;
        // y = 0.0;
        // console.log("\n", sandwich[i].name, sandwich[i].id, 'is height', y, "\n");
        // scene.getMeshByID(sandwich[i].id).position = new BABYLON.Vector3(-0.2, y, 0.27);


        var sandwichY = -0.15;


        var height = [-0.007, -0.037,  -0.033,  -0.037 ];



        var list = [-0.15, -0.19, -0.24, -0.385, -0.514, -0.424, -0.454, -0.237, -0.286];


        for (let i = 0; i < 9; i++) {
            y = list[i];
            console.log("\n", sandwich[i].name, ": y is", y, '(Should be',list[i] ,  ') height is', 
            scene.getMeshByID(sandwich[i].id).getVerticesData(BABYLON.VertexBuffer.PositionKind),
            
            "\n");
            scene.getMeshByID(sandwich[i].id).position = new BABYLON.Vector3(-0.2,  y, 0.27);
            sandwichY = sandwichY - sandwich[i].height;            
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

// "Render" the scene so we can see it
var scene = delayCreateScene();
scene.createDefaultCamera()

// scene.debugLayer.show();

engine.runRenderLoop( function(){ scene.render(); } );
window.addEventListener('resize', function(){ engine.resize(); } );     // If the user resizes the browser, update the screen
