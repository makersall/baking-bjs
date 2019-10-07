
// Get set up
var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

var goals = [
        { name: 'Communicate', score: 3},
        { name: 'Sustain', score: 1},
        { name: 'Grow', score: 3},
        { name: 'Transform', score: 2}
    ];


var createScene = function () {
    // Set up a basic scene, including a camera and lighting
    var scene = new BABYLON.Scene(engine);
    scene.createDefaultCameraOrLight(true, true, true);
    scene.cameras[0].radius = 60;                   // Move the camera back so it's easier to see everything in the scene
    // scene.clearColor = BABYLON.Color3.Teal();       // Set the scene's background color

    var dome = new BABYLON.PhotoDome(
        "testdome",
        "../../assets/TropicalSunnyDay_pz.jpg",
        // "../assets/GatonaParkWalkway1_Panorama_4Kx2K.jpg",
        // "../../assets/plenar-hall-ortner-marcus2.jpg",
        // "../../assets/bjs-360photo.jpg",
        {
            resolution: 32,
            size: 1000
        },
        scene
    );


    var goal, sphere, goalMaterial;
    var goodScoreColor =  new BABYLON.Color3.Purple();
    var badScoreColor = new BABYLON.Color3.Red();

    // Loop through the goals, creating a sphere for each goal
    for (goal = 0; goal < goals.length; goal++) {
        sphere = BABYLON.MeshBuilder.CreateSphere('Goal ' + goal,  {diameter: 10}, scene);
        sphere.position = new BABYLON.Vector3(-20 + (goal* 16), 0, 0); 

        // If any goal has a score > 1, give it's sphere the good score color; otherwise give it the bad score color
        var goalMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
        if (goals[goal].score >1) {
            goalMaterial.diffuseColor = goodScoreColor;
        } else {
            goalMaterial.diffuseColor =  badScoreColor;
        };
        sphere.material = goalMaterial;

        simpleTextBlock(goals[goal].name, {x: -20 + (goal* 16), y: 9, z: 0},scene);

    };



    var sphere2 = BABYLON.MeshBuilder.CreateSphere('Goal test',  {diameter: 10}, scene);    

    var gradientMaterial = new BABYLON.GradientMaterial("grad", scene);
    // gradientMaterial.topColor = BABYLON.Color3.Teal(); // Set the gradient top color
    // gradientMaterial.bottomColor = BABYLON.Color3.White(); // Set the gradient bottom color
    gradientMaterial.topColor = new BABYLON.Color3(0, 0, 1);
    gradientMaterial.bottomColor = new BABYLON.Color3(0, 0, 0);
    gradientMaterial.offset = 0.5;
    gradientMaterial.smoothness = 3;
    
    sphere2.material = gradientMaterial;

    return scene;
};

// "Render" the scene so we can see it
var scene = createScene();
engine.runRenderLoop( function(){ scene.render(); } );
window.addEventListener('resize', function(){ engine.resize(); } );     // If the user resizes the browser, update the screen