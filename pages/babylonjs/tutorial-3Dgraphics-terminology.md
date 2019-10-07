---
layout: content
title: Notes on Terminology, 3D Graphics
title: What BabylonJS Can Do
image: cupcakes-animals.jpg
---

{This is just a notes dump of info I found about the terminology BabylonJS, Unity, a frame, etc. use, all of which is coming from OpenGL, which as far as I can tell is in turn based on the terminology used in the world of 3D computer graphics.
When I start to put together materials for teaching, I'll need to consolidate this. }

mesh = any 3d Object 
World space = 3d world(?)

Standard material: hides shaders complexity


Shaders are, for ex, how you go from rough polygons to a smooth surface 

A 3D model is essentially a mathematical object, made up of vertices connected together with edges, forming a mesh of polygons and are modified visually via materials and textures. Whew! Let me break it down for you:
A 3D model has two elements: Its Construction and its Appearance.
examining a 3D model of a videogame, will let you know that it is infact, made up of lots of polygons which are kind of “glued together”.
the number of polygons a 3D model has. The higher this number, the higher the quality and higher the system resources needed to draw this on the screen.

Mesh = collection of Polygons that describe the geometrical shape (note: shape only, not the color) of the 3D object.the mesh is pretty much what describes the structure of the 3D object in itself.

A Material is essentially, what defines how to draw the surface (or a face of the polygon) of the 3D model, on the screen.Materials = Properties of (Shader) + 2D Textures

think of texture as some good ol’ wrapping paper for your 3D model.  Imagine a gift you’re buying for someone. Now, you want to wrap it. Would it be easier to draw and make a piece of the wrapping paper individually for each side, or would you just rather get a wrapping paper and wrap the whole gift at once?

Once a 3D model has been created, in a video game, the graphics pipeline is the process of turning that 3D model into what the computer displays.

3D computer graphics creation falls into three basic phases:

3D modeling – the process of forming a computer model of an object's shape
Layout and animation – the placement and movement of objects within a scene
3D rendering – the computer calculations that, based on light placement, surface types, and other qualities, generate the image

A texture is a 2D image pasted onto a material, basically. The material typically contains all the properties of how the model looks, such as the shader, color, opacity, glowyness (is that a word?) and so forth. The shader, generally speaking, makes the model look different. It can make the model pretend like it’s more detailed than it really is, or make it look like it’s on fire, or make it look like water is dripping down it the sides of it, or turn the model into glass, or a mirror, or whatever. There’s  many cool things you can do with shaders. They are typically used to make objects more shiny, though.

"Rendering in Unity is done with Materials, Shaders and Textures.
material is what you apply to geometry to give it a colour and pattern. A texture is a component of a material.
Materials are definitions of how a surface should be rendered, including references to textures used, tiling information, colour tints and more. The available options for a material depend on which shader the material is using.
Shaders are small scripts that contain the mathematical calculations and algorithms for calculating the colour of each pixel rendered, based on the lighting input and the Material configuration.
Textures are bitmap images. A Material may contain references to textures, so that the Material’s shader can use the textures while calculating the surface colour of an object. In addition to basic colour (albedo) of an obejct’s surface, textures can represent many other aspects of a material’s surface such as its reflectivity or roughness.


Shaders are most commonly used to produce lighting and shadow in 3D modeling. The image above illustrates Phong shading, one of the first computer shading models ever developed.

Shaders can also be used for special effects. An example of a digital photograph from a webcam unshaded on the left, and the same image with a special effects shader applied on the right which replaces all light areas of the image with white and the dark areas with a brightly colored texture.
In computer graphics, a shader is a type of computer program that was originally used for shading (the production of appropriate levels of light, darkness, and color within an image) but which now performs a variety of specialized functions in various fields of computer graphics special effects or does video post-processing unrelated to shading, or even functions unrelated to graphics at all.  Shaders are used widely in cinema postprocessing, computer-generated imagery, and video games to produce a very wide range of effects. Beyond just simple lighting models, more complex uses include altering the hue, saturation, brightness or contrast of an image, producing blur, light bloom, volumetric lighting, normal mapping for depth effects, bokeh, cel shading, posterization, bump mapping, distortion, chroma keying (so-called "bluescreen/greenscreen" effects), edge detection and motion detection, psychedelic effects, and many others
Rendering or image synthesis is the automatic process of generating a photorealistic or non-photorealistic image from a 2D or 3D model (or models in what collectively could be called a scene file) by means of computer programs. Also, the results of displaying such a model can be called a render. The term "rendering" may be by analogy with an "artist's rendering" of a scene.

In its simplest definition, a shader is a computer program that usually runs on the GPU to tell each and every pixel how they should look like in the game. Shaders are the secret sauce that make a game look apart from the rest, by dictating and manipulating how the art assets should look like in the game.
Shaders tell the GPU how to render all those art assets into the screen, and saying how should the light behave on the surface of the 3D objects, what colour should they be in, and a whole other details


Rasterization: This stage deals with the finding out the colors of the Pixels, by referencing all the information we have about the model till now.

Good illustrations of 3d graphics:  https://medium.com/@darkdreamday/meet-the-shaders-vertices-polygons-and-meshes-1dde115c4bc6

Physically based rendering (PBR) is an approach in computer graphics that seeks to render graphics in a way that more accurately models the flow of light in the real world. Many PBR pipelines have the accurate simulation of photorealism as their goal. 

