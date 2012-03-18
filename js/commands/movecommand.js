var MoveCommand = function(entity,xOffset,yOffset) {
	this.entity = entity;
	this.xOffset = xOffset;
	this.yOffset = yOffset;
};

MoveCommand.prototype.execute = function(map) {
	var newX = this.entity.owningTile.x+this.xOffset;
	var newY = this.entity.owningTile.y+this.yOffset;
	if(newX >= 0 && newY >= 0 && newX < map.width && newY < map.height) {
		//check if there are any entities at new location that would
		//prevent movement and spawn off new commands
		this.entity.remove();
		map.getTile(newX,newY).push(this.entity);
	}
};