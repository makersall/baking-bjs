
// Get set up
var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

var delayCreateScene = function () {
    
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
        var yearTitle = simpleTextBlock('', {x: 0, y: 6, z:0,
            fontSize: "24px", width: "150px", height:  "150px"  }, scene);   

        var computing = [
            {year: '1970', transistors: 2000},
            {year: '1980', transistors: 10000},
            {year: '1990', transistors: 50000}

        ];

        var interval = 30;
        var lastYear = computing.length - 1;
        var finalTime = interval * (lastYear + 1);
        var finalTransistor = computing[lastYear].transistors;
        console.log(finalTime, lastYear, computing[lastYear]);
        var time = 0;
        var scale = 0.1;
        var i = 0;

        function calculateScale(startValue, finalValue, percent) {
            return  (finalValue - startValue);
        }


        scene.beforeRender = () => {
            time = time + 1;
            if (time <= finalTime){
                scale = (computing[i].transistors /  computing[lastYear].transistors) / 2;
                scene.getMeshByID("node_id5").scaling = new BABYLON.Vector3(scale, scale, scale);
                if (time % interval == 0 )  {
                    console.log(time, scale);
                    yearTitle.text = 'Year:' +  computing[i].year;
                    i = i + 1;
                };
            }
            if (time > 600) {
                return scene;
            };
        };
        

        

    });

    return scene;
};

// "Render" the scene so we can see it
var scene = delayCreateScene();
scene.createDefaultCamera()

// scene.debugLayer.show();

engine.runRenderLoop( function(){ scene.render(); } );
window.addEventListener('resize', function(){ engine.resize(); } );     // If the user resizes the browser, update the screen
