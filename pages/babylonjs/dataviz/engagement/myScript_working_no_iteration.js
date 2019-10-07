// Get set up
var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

var createScene = function () {

    // Set up a basic scene, including a camera and lighting
    var scene = new BABYLON.Scene(engine);
    scene.createDefaultCameraOrLight(true, true, true);
    scene.cameras[0].radius = 60;                   // Move the camera back so it's easier to see everything in the scene
    scene.clearColor = BABYLON.Color3.White();       // Set the scene's background color


    function getStatuses(numberPeople) {
    // getStatuses: load the status data for all of the sample members
    // NOTE: for now we are just randomly creating it

        var numberStatuses =  3;
        var statusPath = [];
        for (let i = 0; i < numberPeople; i++) {
            statusPath[i] = [Math.floor(Math.random() * numberStatuses), Math.floor(Math.random() * numberStatuses), 
                            Math.floor(Math.random() * numberStatuses), Math.floor(Math.random() * numberStatuses)];
        }
        return statusPath;
    };

        function calculateStatusY(status) {
            return status * statusHeight  +   Math.round(Math.random() * statusSpread)    - 25;
        };
    

    // Set up the label and the ball color we will use for each status
    var statusDisplay = [   {title: 'High',  color: new BABYLON.Color3.Purple()},  {title: 'Medium', color: new BABYLON.Color3.Blue()}, 
                            {title: 'Low', color: new BABYLON.Color3.Teal} ];
    var statusHeight = 20;
    var statusSpread = 6;

    
   // Main action
    var statusPaths = getStatuses(100);
    var firstStatusX = -30;

     for (let i = 0; i < statusPaths.length; i++) {
        var path = statusPaths[i];
        var firstStatus = path[0];
        var statusColor = statusDisplay[firstStatus].color;
        var statusZ = Math.random() * 4 - 2;
        var firstStatusY = calculateStatusY(firstStatus);
        var ball = simpleSphere('Member', firstStatusX, firstStatusY, statusZ, {color: statusColor, diameter: 0.5}, scene);
        
        // var statusZ = 0;

        // Create the animations
        var offset = Math.round(Math.random() * 5);
        var animationX = simpleAnimation("movingball", "position.x", 30, [ {frame: 5, value: firstStatusX + offset}, 
            {frame: 40, value: offset}, {frame: 60, value: 20+offset}, {frame: 90, value: 40+offset}] );
        var animationY = simpleAnimation("movingBallY", "position.y", 30, [
            {frame: 0, value: firstStatusY}, {frame: 30 + offset, value: calculateStatusY(path[1])}, 
            {frame: 60 + offset, value: calculateStatusY(path[2])}, {frame: 90 + offset, value: calculateStatusY(path[3])}  ] ); 
        scene.beginDirectAnimation(ball, [animationX, animationY], 0, 100, true);
    };



    console.log( "\nand we are done");
    
    return scene;
};

var scene = createScene();
simpleRunScene(scene, engine);

// NOTE: set an action at the end:  add an event for the last frame (or second to last frame?) that executes a movewithCollisions
// Or better yet, create a keyframe at the end that executes a movewithCollisions
//
//         var speedCharacter = 8;
// var gravity = 0.15;
// var character = Your mesh;

// character.ellipsoid = new BABYLON.Vector3(0.5, 1.0, 0.5);
// character.ellipsoidOffset = new BABYLON.Vector3(0, 1.0, 0);

// var forwards = new BABYLON.Vector3(parseFloat(Math.sin(character.rotation.y)) / speedCharacter, gravity, parseFloat(Math.cos(character.rotation.y)) / speedCharacter);
// forwards.negate();
// character.moveWithCollisions(forwards);
// // or
// var backwards = new BABYLON.Vector3(parseFloat(Math.sin(character.rotation.y)) / speedCharacter, -gravity, parseFloat(Math.cos(character.rotation.y)) / speedCharacter);
// character.moveWithCollisions(backwards);