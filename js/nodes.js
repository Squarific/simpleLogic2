var simpleLogic2Nodes = (function () {

	// These functions can be used to draw nodes more easily
	// and help give them a uniform style
	var helpers = {
		createPortCanvas: function createPortCanvas (text) {

		}
	};

	var nodes = {};
	// Put node defenitions under this line
	// See the readme.md file for info about how they need to look

	nodes.AND = {
		name: "And Port",
		category: "Logic Ports",
		inputs: 2,
		outputs: [false],
		init: function (node) {
			//Todo: create node.image
		},
		update: function (node, inputs, updateTime) {
			node.outputs[0] = inputs[0] && inputs[1];
		}
	};

	return nodes;
})();