var Tile = function(map, x, y) {
	this.map = map;
	this.entities = [];
	this.x = x;
	this.y = y;
};

Tile.prototype.push = function(e) {
	e.owningTile = this;
	this.entities.push(e);
	this.map.update(this);
};

Tile.prototype.pop = function() {
	var e = this.entities.pop();
	e.owningTile = null;
	this.map.update(this);
	return e;
};

Tile.prototype.get = function(i) {
	return this.entities[i];
};

Tile.prototype.first = function() {
	return this.entities[0];
};

Tile.prototype.last = function() {
	return this.entities[this.entities.length - 1];
};

Tile.prototype.count = function() {
	return this.entities.length;
};