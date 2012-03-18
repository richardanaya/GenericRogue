var PlayerEntity = function() {
	Entity.call(this, "PLAYER");
};
inherits(PlayerEntity,Entity);

var GrassEntity = function() {
	Entity.call(this, "GRASS");
};
inherits(GrassEntity,Entity);



var SimpleFightMap = function() {
	Map.call(this);
	this.width = 60;
	this.height = 45;
};
inherits(SimpleFightMap,Map);

SimpleFightMap.prototype.generate = function() {
	for (var x = 0; x < this.width; x++) {
		for (var y = 0; y < this.height; y++) {
			this.tiles[y*this.width+x] = new Tile(this,x,y);
			this.tiles[y*this.width+x].push(new GrassEntity());
		}
	}
};