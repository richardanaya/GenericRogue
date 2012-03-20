var visualizations = {
	"GRASS": {
		color: "green", symbol: "."

	},
	"PLAYER": {
			color: "white", symbol: "@"

		},
	"KOBALD": {
			color: "red", symbol: "k"

		}
};

var RoguelikeView = function() {
	//important variables
	this.width = 800;
	this.height = 600;
	//player location
	this.mapWidth = 0;
	this.mapHeight = 0;
	this.mapSquareWidth = 0;
	this.mapSquareHeight = 0;
	this.cache = {};
	this.keyPressed = new Publisher();
	$(document).keydown(bind(this.onKeyPressed, this))
};

RoguelikeView.prototype.onKeyPressed = function(e) {
	this.keyPressed.publish(e.keyCode)
};

RoguelikeView.prototype.addToScreen = function() {
	//lets make the window perfectly sized
	/*var widthChrome = window.outerWidth - window.innerWidth;
	 var heightChrome = window.outerHeight - window.innerHeight;
	 window.resizeTo(width + widthChrome, height + heightChrome);*/

	//add the canvas
	this.canvas = $('<canvas class="screen"></canvas>').get(0);
	this.canvas.width = this.width;
	this.canvas.height = this.height;
	$(document.body).append(this.canvas);
	this.ctx = this.canvas.getContext('2d');
};


RoguelikeView.prototype.drawSymbol = function(x, y, color, symbol) {
	var id = 'sym_' + color + '_' + symbol.charCodeAt(0);
	//lets cache these symbols as images so we can draw them faster
	var symCanvas = this.cache[id];
	if (symCanvas === undefined) {
		symCanvas = $('<canvas></canvas>').get(0);
		symCanvas.width = this.mapSquareWidth;
		symCanvas.height = this.mapSquareHeight;
		var charWidth = this.ctx.measureText(symbol).width;
		var symctx = symCanvas.getContext('2d');
		symctx.textBaseline = 'top';
		symctx.font = '10px arial';
		symctx.strokeStyle = color;
		symctx.strokeText(symbol, 0 + Math.floor((this.mapSquareWidth - charWidth) / 2), 0);
		this.cache[id] = symCanvas;
	}
	//offsets for pixel pefectness
	var offsetX = 10;
	var offsetY = 4;
	this.ctx.drawImage(symCanvas, offsetX + x * this.mapSquareWidth, offsetY + y * this.mapSquareHeight);
};


RoguelikeView.prototype.render = function(map, width, height) {

	//we keep a cache of symbol images to prevent having to render fonts
	//but if the width or height changes, we need to reset it
	if (width != this.mapWidth || height != this.mapHeight) {
		this.cache = [];
		this.mapWidth = width;
		this.mapHeight = height;
		this.mapSquareWidth = Math.floor(this.width / this.mapWidth);
		this.mapSquareHeight = Math.floor(this.height / this.mapHeight);
	}

	this.ctx.fillStyle = 'black';
	this.ctx.fillRect(0, 0, this.width, this.height);
	for (var x = 0; x < this.mapWidth; x++) {
		for (var y = 0; y < this.mapHeight; y++) {
			var type = map[y * width + x];
			if (type != "EMPTY") {
				var visualization = visualizations[type];
				this.drawSymbol(x, y, visualization.color, visualization.symbol);
			}
		}
	}
};