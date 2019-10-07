

// Get set up
var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine



var Changes = [
    { title: 'January',  volume: 200000, members2: 80000, loss : 5},
    {title: 'February',  volume: 500000, members2: 300000, loss : 20},
    {title: 'March',     volume: 305000, members2: 100000, loss : 2}
];

var SceneDate = 0;


var numPeople = 500;
var peopleAreaHeight = 6;
var peopleAreaWidth = 30;
var People = [];




var createScene = function () {

    function setUpScene () {
        for (let i = 0; i < numPeople; i++) {
            People[i] = simpleSphere('i ' + i, -30 + (Math.random() * peopleAreaWidth), 
                        10 + Math.random() * peopleAreaHeight, 0);
        }
    };
    
    function updateMyScene ()  {
        console.log("Yeah, " + SceneDate + "!"); 
        var info = Changes[SceneDate];
        TimeTitle.text = info.title;
        VolumeText.text = 'Vol: ' + info.volume.toLocaleString();
        dropPeople(info.loss);
        SceneDate += 1;
    };

    function dropPeople(numDropped)  {
        for (let i = 1; i <= numDropped; i++) {
            var dropped = People.pop();
            console.log( People.length)
            // dropped.material.alpha = 0;

            var animationBox = new BABYLON.Animation("movingBox", "position.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, 
                                    BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
            // Animation keys
            var keys = [];
            keys.push({ frame: 5, value: dropped.position.y });
            keys.push({ frame: 20, value: -10 });

            animationBox.setKeys(keys);
            dropped.animations.push(animationBox);

            scene.beginAnimation(dropped, 0, 100, true);
        };
    };
    
    // material.alpha  = 0;

    function   timeScene(time, animationObject) {
        // var event1 = new BABYLON.AnimationEvent(time, function() { console.log("Yeah, " + time + "!"); }, true);
        var event1 = new BABYLON.AnimationEvent(time, updateMyScene, true);
        animationObject.addEvent(event1);
    };


    var scene = simpleEnvironment();
    console.log( 'here we go');

    setUpScene();
    var TimeTitle = simpleTextBlock('', {x: 10, y: 15, z: 0},scene);
    var VolumeText = simpleTextBlock('', {x: 10, y: 10, z: 0}, scene);
    console.log( TimeTitle.text);

    var  trackerY = 24;
    var ball = simpleSphere('ball', -30,  trackerY, 0); 
    ball.material.alpha  = 0;

    var animationball = new BABYLON.Animation("movingball", "position.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
    var keys = [];
    keys.push({ frame: 0, value: -30 });
    keys.push({ frame: 95, value: 40 });
    animationball.setKeys(keys);

    var animationy = new BABYLON.Animation("movingball", "position.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
    var keys = [];
    keys.push({ frame: 0, value:  trackerY });
    keys.push({ frame: 15, value:  trackerY });
    keys.push({ frame: 30, value:  trackerY });
    animationy.setKeys(keys);

    timeScene(0, animationball);
    timeScene(40,  animationball);
    timeScene(80,  animationball);

scene.beginDirectAnimation(ball, [animationball, animationy], 0, 100, true);


    


return scene;
};

var scene = createScene();
simpleRunScene(scene, engine);      // "Render" the scene so we can see it