var Map = function() {
	this.tiles = [];
	this.width = 0;
	this.height = 0;
};

Map.prototype.generate = function() {

};

Map.prototype.getTile = function(x, y) {
	return this.tiles[y * this.width + x];
};