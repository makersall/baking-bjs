
var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

var delayCreateScene = function () {

    var scene = new BABYLON.Scene(engine);  
    scene.clearColor = BABYLON.Color3.White();       // Set the scene's background color

    BABYLON.SceneLoader.ImportMesh("", "", "robot-head.glb", scene, function (meshes) {          
        scene.createDefaultCameraOrLight(true, true, true);
        var head = meshes[0];

        scene.getMeshByID("node_id5").scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);

        var sphere = BABYLON.Mesh.CreateSphere('mySphere', 10, 10, scene);
        sphere.position = new BABYLON.Vector3(-10, 0, 0); 

    return scene;
};
