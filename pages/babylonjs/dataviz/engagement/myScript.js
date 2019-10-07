// Get set up
var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

var createScene = function () {

    // Set up a basic scene, including a camera and lighting
    var scene = new BABYLON.Scene(engine);
    scene.createDefaultCameraOrLight(true, true, true);
    scene.cameras[0].radius = 60;                   // Move the camera back so it's easier to see everything in the scene
    scene.clearColor = BABYLON.Color3.White();       // Set the scene's background color


    function odds(low, middle) {
        roll = Math.round(Math.random() * 100);
        if (roll <= low) {
            return 1;
        } else if (roll <= middle) {
            return 2;
        } else {
            return 3;
        };
    };

    function getStatuses(numberPeople) {
    // getStatuses: load the status data for all of the sample members
    // NOTE: for now we are just randomly creating it

    // NOTE: Convert to Python, put data in csv text file, read from text file

        var paths = [];

        for (let i = 0; i < numberPeople; i++) {
            path = [];
            path[0] = odds(30,80);
            for (let i = 0; i < 3; i++) {
                if (path[i-1] == 3) {
                    path[i] = odds(10, 20);
                } else if (path[i-1] == 2) {
                    path[i] = odds(40,90)
                } else {
                    path[i] = odds(70,95)
                }
                paths.push(path);
            }
       }
        return paths;
    };

        function calculateStatusY(status) {
            return status * statusHeight  +   Math.round(Math.random() * statusSpread)    - 35;
        };
    

    // Set up the label and the ball color we will use for each status
    var statusDisplay = [   {title: 'Low',      color: new BABYLON.Color3.Yellow},
                            {title: 'Medium',   color: new BABYLON.Color3.Red()}, 
                            {title: 'High',     color: new BABYLON.Color3.Purple()}  
                        ];
    var statusHeight = 15;
    var statusSpread = 6;

    
   // Main action
    var statusPaths = getStatuses(200);
    var firstStatusX = -30;

    // Create the labels
    var yearY = (3 * statusHeight) + statusSpread - 30;
    simpleTextBlock('2015', {x: -30, y: yearY, z:0}, scene);
    simpleTextBlock('2016', {x:   0, y: yearY, z:0}, scene);
    simpleTextBlock('2017', {x:  20, y: yearY, z:0}, scene);
    simpleTextBlock('2018', {x:  40, y: yearY, z:0}, scene);

    var balls = [];
     for (let i = 0; i < statusPaths.length; i++) {
        var path = statusPaths[i];
        var firstStatus = path[0];
        var statusColor = statusDisplay[firstStatus-1].color;   // We subtract 1 because status is 1-3, but arrays, like statusDiplay, start at 0
        var statusZ = Math.random() * 4 - 2;
        var firstStatusY = calculateStatusY(firstStatus);
        balls[i] = simpleSphere('Member', firstStatusX, firstStatusY, statusZ, {color: statusColor, diameter: 0.5}, scene);
        
        // var statusZ = 0;

        // Create the animations
        var offset = Math.round(Math.random() * 10);
        var animationX = simpleAnimation("movingball", "position.x", 30, [ 
            {frame: 1+offset, value: firstStatusX},     {frame: 80, value: offset}, 
            {frame: 120, value: 20+offset},              {frame: 180, value: 40}] );

        var animationY = simpleAnimation("movingBallY", "position.y", 30, [
            {frame: 0, value: firstStatusY},                            {frame: 60 + offset, value: calculateStatusY(path[1])}, 
            {frame: 120 + offset, value: calculateStatusY(path[2])},     {frame: 180 + offset, value: calculateStatusY(path[3])}  ] ); 

        scene.beginDirectAnimation(balls[i], [animationX, animationY], 0, 200, true);
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




// var offset = Math.round(Math.random() * 10);
// var animationX = simpleAnimation("movingball", "position.x", 30, [ 
//     {frame: 1+offset, value: firstStatusX},     {frame: 40, value: offset}, 
//     {frame: 60, value: 20+offset},              {frame: 90, value: 40}] );

// var animationY = simpleAnimation("movingBallY", "position.y", 30, [
//     {frame: 0, value: firstStatusY},                            {frame: 30 + offset, value: calculateStatusY(path[1])}, 
//     {frame: 60 + offset, value: calculateStatusY(path[2])},     {frame: 90 + offset, value: calculateStatusY(path[3])}  ] ); 

// scene.beginDirectAnimation(balls[i], [animationX, animationY], 0, 200, true);