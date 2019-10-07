
function strawberry(text, scene) {

    console.log( 'Starting simple text block: ' +  text);
};


function simpleEnvironment () {
    // Set up a basic scene, including a camera and lighting
    var scene = new BABYLON.Scene(engine);
    scene.createDefaultCameraOrLight(true, true, true);
    scene.cameras[0].radius = 60;                   // Move the camera back so it's easier to see everything in the scene
    scene.clearColor = BABYLON.Color3.White();       // Set the scene's background color
    return scene;
};

function simpleRunScene(scene, engine) {
    engine.runRenderLoop( function(){ scene.render(); } );
    window.addEventListener('resize', function(){ engine.resize(); } );     // If the user resizes the browser, update the screen
};

function simpleSphere (name, x, y, z, options, scene) {
// simpleSphere: helper function to hide the details of creating a sphere and the material that covers it
    var diameter =  (options.diameter === undefined) ?      1                               : options.diameter;
    var color =     (options.color === undefined) ?         new BABYLON.Color3.Black()      : options.color;
    var ball = BABYLON.MeshBuilder.CreateSphere(name, {diameter: diameter}, scene);
    ball.position = new BABYLON.Vector3(x, y, z); 
    var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
    myMaterial.diffuseColor =  color;
    ball.material = myMaterial;
    return ball;
};



/**  simpleTextBlock: create a simple text label
Required:  text; the options for x, y, z; the scene
NOTE: I called it simpleTextBlock instead of, for ex, simpleLabel, as a little foreshadowing:
that way, if they see examples on the BabylonJS playground that use TextBlock, they'll have some clue as to what's going on 
*/
function simpleTextBlock(text, options, scene) {

    // Create the ground/plane and give it a dynamic texture, to which the TextBlock will be attached 
    var ground =  BABYLON.MeshBuilder.CreateGround("ground", {height: 26, width: 26, subdivisions: 2}, scene);     
    ground.position = new BABYLON.Vector3(options.x, options.y, options.z);
    var rotation = (options.rotation === undefined) ? {x: 4.6, y: 0, z: 0}  : options.rotation;
    ground.rotation = new BABYLON.Vector3(rotation.x, rotation.y, rotation.z);
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(ground, 1024, 1024);    

    var guiText = new BABYLON.GUI.TextBlock("label" + text);
    guiText.text = text;
    guiText.color =     (options.color === undefined) ?     "black"     : options.color;
    guiText.fontSize =  (options.fontSize === undefined) ?  "72px"      : options.fontSize;
    guiText.width =     (options.width === undefined) ?     "950px"     : options.width;
    guiText.height =    (options.height === undefined) ?    "350px"     : options.height;
    // guiText.textWrapping= true;
    // guiText.lineSpacing = percentage;
    advancedTexture.addControl(guiText);

    return guiText;
};


function simpleAnimation (name, methodToAnimate, numberFrames, timeline)  {
    var animation = new BABYLON.Animation(name, methodToAnimate, numberFrames, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
    var keys = [];
    for (let i = 0; i < timeline.length; i++) {
        keys.push(timeline[i]);
    };
    animation.setKeys(keys);
    return animation;
};
