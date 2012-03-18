var Map = function() {
	this.tiles = [];
	this.width = 0;
	this.height = 0;
	this.renderMap = [];
};

Map.prototype.generate = function() {

};

Map.prototype.getTile = function(x, y) {
	return this.tiles[y * this.width + x];
};

Map.prototype.update = function(tile) {
	this.renderMap[tile.y * this.width + tile.x] = tile.last().type;
};