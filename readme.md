SimpleLogic 2
=============

Demo: http://www.squarific.com/simplelogic2

SimpleLogic2 options
========================

	// Element is the div you want to put the simulation in
	// Should have a non static positioning
	element = document.getElementById("target");

	// The options object defaults to this:
    options = {
    	nodesDraggable: true,
    	doNotRun: false,
    	tickTime: 20 //
    }

    var simpleLogic2Instance = new SimpleLogic2(element, options);

If you want to manually run the simulation you can call simpleLogic2instance.update() or simpleLogic2instance.updateNodes(Date.now()). The first one updates to the current time with multiple ticks while the second function only runs one tick.

Don't forget that if you do the simulation manually you need to call the simpleLogic2instance.draw() method yourself.

How to add your own node
========================

You add your node defenition in the nodes.js file. Decide on a unique name for your node then change the following js:

    nodes.UNIQUENAME = { //Capitalize the name
        name: "And Port", //A human readable name (optional)
        category: "Logic Ports", //A category, used in the menu
        inputs: 2, //Integer saying how many inputs your node has, defaults to 0
        outputs: [false], //Integer or array indicating the outputs
        init: function (node) {
            // Function that is called when a node is created
            // This function should generate a canvas and add it
            // To node.image
        },
        update: function (node, inputs, updateTime) {
            node.outputs[0] = inputs[0] && inputs[1];
        }
    };

If the outputs property is a number it represents the amount of outputs and the default outputs on initialization are false. If it is an array then the amount of outputs is the length of the array and the default values on initialization will be set to whatever is in the array.

There are a few helper functions that help you draw the nodes to make them look more uniform. They are within the helper object.

Helper functions
================

    helper.createPortCanvas(width, height)

This function returns a canvas object with the given width and height with a background and border in the style of most nodes. You shouldn't draw closer than a 10 pixel padding from the border.

Todo
====

* Add more nodes
* Sharing api