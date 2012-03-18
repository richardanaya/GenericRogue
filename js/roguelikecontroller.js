var RoguelikeController = function(view,map) {
	this.view = view;
	this.map = map;
	this.view.keyPressed.subscribe(bind(this.onKeyPressed,this));
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
		this.playerLocationX--;
	} else if (keyCode == UP) {
		this.playerLocationY--;
	} else if (keyCode == RIGHT) {
		this.playerLocationX++;
	} else if (keyCode == DOWN) {
		this.playerLocationY++;
	}
	this.render();
};

RoguelikeController.prototype.start = function() {
	this.view.addToScreen();
	this.render();
};