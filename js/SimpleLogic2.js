function SimpleLogic2 (container, options) {
	this.container = container;
	this.options = this.setOptions(options);
	this.nodes = [];
}

SimpleLogic2.prototype.defaultOptions = {
	nodesDraggable: true,
	doNotRun: false,
	tickTime: 1000 / 20
};

SimpleLogic2.prototype.setOptions = function setOptions (options) {
	var option, normalized = {};

	for (option in this.defaultOptions) {
		if (typeof options[option] !== "undefined") {
			normalized[option] = options[option];
		} else {
			normalized[option] = this.defaultOptions[option];
		}
	}

	return normalized;
};

SimpleLogic2.prototype.loop = function loop () {
	this.update();
	this.draw();

	if (this.options.doNotRun) return;
	requestAnimationFrame(this.loop.bind(this))
};

SimpleLogic2.prototype.update = function update () {
	var time = Date.now();

	while (time > this.lastUpdated + this.options.tickTime) {
		this.lastUpdated += this.options.tickTime;
		this.updateNodes(this.lastUpdated);
	}
};

SimpleLogic2.prototype.draw = function draw () {

};

SimpleLogic2.prototype.updateNodes = function updateNodes (updateTime) {
	
};

SimpleLogic2.prototype.addNode = function addNode () {

};