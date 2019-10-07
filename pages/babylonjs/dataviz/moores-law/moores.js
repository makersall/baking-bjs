
var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

var delayCreateScene = function () {
    
    var scene = new BABYLON.Scene(engine);  
    scene.clearColor = BABYLON.Color3.White();       // Set the scene's background color


    //NOTE:
    //Name of the animation I want: idle. Can also try flight_path_1, _2, etc.

    BABYLON.SceneLoader.ImportMesh("", "", "robot-head.glb", scene, function (meshes) {          
        scene.createDefaultCameraOrLight(true, true, true);
        var head = meshes[0];

        scene.getMeshByID("node_id5").scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);

        var sphere = BABYLON.Mesh.CreateSphere('mySphere', 10, 10, scene);
        sphere.position = new BABYLON.Vector3(-10, 0, 0); 
        // var year = simpleTextBlock('2015', {x: -30, y: 10, z:0}, scene);    

        // console.log(year);
        // year.text = '1999';

        // // Rotate the plane so we see its side
        // airplane.rotationQuaternion = new BABYLON.Quaternion(0, 0.7575649843840495, 0, -0.6527597524627226);
        // airplane.position.y  = -0.1;
        // var animation = scene.animationGroups[0];   // Grab the first animation, which is for flying straight
        // console.log();
        // scene.animationGroups[0].speedRatio = 0;




        var interval = 100;
        var time = 0;

        // scene.beforeRender = () => {
        //     time = time + 1;

        //     if (time > 600) {
        //         return scene;
        //     };
        //     if (time % interval == 0 )  {
        //         console.log(time);
        //         animation.speedRatio = Math.random();
        //     };
        //     // airplane.position.y  = airplane.position.y + (0.01 - (Math.random() * 0.02));

        //     // airplane.rotation.y += 0.01;
        //     // console.log( airplane.position.y);
        // };
        
    });

    return scene;
};

// "Render" the scene so we can see it
var scene = delayCreateScene();
scene.createDefaultCamera()

scene.debugLayer.show();

engine.runRenderLoop( function(){ scene.render(); } );
window.addEventListener('resize', function(){ engine.resize(); } );     // If the user resizes the browser, update the screen
