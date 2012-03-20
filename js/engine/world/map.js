var Map = function() {
	this.tiles = [];
	this.width = 0;
	this.height = 0;
	this.renderMap = [];
	this.commands = [];
};

Map.prototype.generate = function() {

};

Map.prototype.getTile = function(x, y) {
	return this.tiles[y * this.width + x];
};

Map.prototype.update = function(tile) {
	this.renderMap[tile.y * this.width + tile.x] = tile.last().type;
};

Map.prototype.performCommand = function(command) {
	this.commands.push(command);
};

Map.prototype.executeCommands = function() {
	while(this.commands.length > 0 ){
		var command = this.commands.splice(0,1)[0];
		command.execute(this);
	}
};
