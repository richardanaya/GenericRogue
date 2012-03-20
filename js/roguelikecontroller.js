var RoguelikeController = function(view,map) {
	this.view = view;
	this.map = map;
	this.view.keyPressed.subscribe(bind(this.onKeyPressed,this));
	this.player = new PlayerEntity();
	map.getTile(0,0).push(this.player);
};

RoguelikeController.prototype.render = function() {
	this.view.render(this.map.renderMap,this.map.width,this.map.height);
};

RoguelikeController.prototype.onKeyPressed = function(keyCode) {
	//keys
    var LEFT = 37;
    var UP = 38;
    var RIGHT = 39;
    var DOWN = 40;

    //controls
	if (keyCode == LEFT) {
		this.player.moveLeft();
	} else if (keyCode == UP) {
		this.player.moveUp();
	} else if (keyCode == RIGHT) {
		this.player.moveRight();
	} else if (keyCode == DOWN) {
		this.player.moveDown();
	}
	this.map.executeCommands();
	this.render();
};

RoguelikeController.prototype.start = function() {
	this.view.addToScreen();
	this.render();
};