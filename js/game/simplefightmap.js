var PlayerEntity = function() {
	Entity.call(this, "PLAYER");
};
inherits(PlayerEntity,Entity);

PlayerEntity.prototype.moveLeft = function() {
	this.emitCommand(new MoveCommand(this,-1,0))
};

PlayerEntity.prototype.moveUp = function() {
	this.emitCommand(new MoveCommand(this,0,-1));
};

PlayerEntity.prototype.moveRight = function() {
	this.emitCommand(new MoveCommand(this,1,0));
};

PlayerEntity.prototype.moveDown = function() {
	this.emitCommand(new MoveCommand(this,0,1));
};

var KobaldEntity = function() {
	Entity.call(this, "KOBALD");
};
inherits(KobaldEntity,Entity);

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
	for(var i = 0 ; i < 5; i++ ){
		this.tiles[(Math.floor(Math.random()*this.height))*this.width+(Math.floor(Math.random()*this.width))].push(new KobaldEntity());
	}
};