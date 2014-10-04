var simpleLogic2nodes = {};
var sl2NodeHelpers = {};

sl2NodeHelpers.createPortCanvas = function createPortCanvas (text) {

}

simpleLogic2nodes.AND = {
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