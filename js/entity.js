var Entity = function(type) {
	this.type = type;
	this.owningTile = null;
};

Entity.prototype.emitCommand = function(command) {
	this.owningTile.map.performCommand(command);
};

Entity.prototype.remove = function() {
	this.owningTile.remove(this);
};