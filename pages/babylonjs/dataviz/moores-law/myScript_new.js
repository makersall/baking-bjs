console.log("Here we go");

// Get set up
var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

var createScene = function () {
    
    var scene = new BABYLON.Scene(engine);  
        // Set up a basic scene, including a camera and lighting
        var scene = new BABYLON.Scene(engine);
        scene.createDefaultCameraOrLight(true, true, true);
        scene.cameras[0].radius = 20;                   // Move the camera back so it's easier to see everything in the scene
        scene.clearColor = BABYLON.Color3.White();       // Set the scene's background color

        // BABYLON.SceneLoader.ImportMesh("", "", "sandwich.glb", scene, function (meshes) {     
        BABYLON.SceneLoader.ImportMesh("", "", "robot-head.glb", scene, function (meshes) {          

        var robot =  scene.getMeshByID("node_id5");
        // var  scale = (computing[0].transistors /  computing[lastYear].transistors) / 2;
        robot.scaling =   new BABYLON.Vector3(0.1, 0.1, 0.1);
        // scene.getMeshByID("node_id5").scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
        var titleLabel = simpleTextBlock("Why Moore's Law Matters", {x: 0, y: 7, z:0,
            fontSize: "12px", width: "150px", height:  "150px"  }, scene);   
        var yearLabel = simpleTextBlock('Test', {x: 0, y: 4, z:0,
            fontSize: "24px", width: "150px", height:  "150px"  }, scene);   
        var frequencyLabel = simpleTextBlock('Frequency', {x: 0, y: 5, z:0,
            fontSize: "24px", width: "150px", height:  "150px"  }, scene);   

        var computing = [
            {year: 1970, transistors:    2000},
            {year: 1980, transistors:   10000},
            {year: 1990, transistors:   50000},
            {year: 1995, transistors:  200000},
            {year: 2000, transistors:  600000},
            {year: 2005, transistors: 1000000}
        ];

        var lastYear = computing.length - 1;
        var maxTransistors = computing[lastYear].transistors;
        console.log(finalTime, lastYear, computing[lastYear]);

        var scale = 0.1;
        var i = 0;


        scale = 0.1;
        // scale = (computing[i].transistors /  computing[lastYear].transistors) / 2;
        scene.getMeshByID("node_id5").scaling = new BABYLON.Vector3(scale, scale, scale);
        console.log(time, scale);
        // yearLabel.text = computing[i].year.toLocaleString();
        yearLabel.text = '2019';
        i = i + 1;


//         scene.beginDirectAnimation(box, [yRot], 0, 2 * frameRate, false, 1, nextAnimation);

// var nextAnimation = function() {
//     scene.beginDirectAnimation(box, [xSlide], 0, 2 * frameRate, true);
// }


// BABYLON.Animation.ANIMATIONTYPE_VECTOR3

// var xSlide = new BABYLON.Animation("xSlide", "position.x", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

// var yRot = new BABYLON.Animation("yRot", "rotation.y", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

// var nextAnimation = function() {
//     scene.beginDirectAnimation(box, [xSlide], 0, 2 * frameRate, true);

// }

// scene.beginDirectAnimation(box, [yRot], 0, 2 * frameRate, false, 1, nextAnimation);


// ou can start an animation with enableBlending = true to enable blending mode. This blended animation will interpolate FROM the current object's state.



        

        

    });

    return scene;
};

// "Render" the scene so we can see it
var scene = createScene();
scene.createDefaultCamera()

// scene.debugLayer.show();

engine.runRenderLoop( function(){ scene.render(); } );
window.addEventListener('resize', function(){ engine.resize(); } );     // If the user resizes the browser, update the screen
