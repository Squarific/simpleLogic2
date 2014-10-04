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
    	doNotRun: false
    }

    var simpleLogic2Instance = new SimpleLogic2(element, options);


How to add your own node
========================

You add your node defenition in the nodes.js file. Decide on a unique name for your node then change the following js:

    simpleLogic2nodes.UNIQUENAME = { //Capitalize the name
        name: "And Port", //A human readable name (optional)
        category: "Logic Ports", //A category, used in the menu
        inputs: 2, //Integer saying how many inputs your node has, defaults to 0
        outputs: [false], //Integer or array indicating the outputs
        init: function (node) {
            // Function that is called when a node is created
            // 
        },
        update: function (node, inputs, updateTime) {
            node.outputs[0] = inputs[0] && inputs[1];
        }
    };

Todo
====

* Add more nodes
* Sharing api