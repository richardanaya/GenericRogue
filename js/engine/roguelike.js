//important variables
var width = 800;
var height = 600;
var mapWidth = 60;
var mapHeight = 45;
var mapSquareWidth = Math.floor(width / mapWidth);
var mapSquareHeight = Math.floor(height / mapHeight);

//player location
var playerLocationX = Math.floor(mapWidth / 2);
var playerLocationY = Math.floor(mapHeight / 2);

var start = function () {
    //lets make the window perfectly sized
    var widthChrome = window.outerWidth - window.innerWidth;
    var heightChrome = window.outerHeight - window.innerHeight;
    window.resizeTo(width + widthChrome, height + heightChrome);

    //add the canvas
    var canvas = $('<canvas class="screen"></canvas>').get(0);
    canvas.width = width;
    canvas.height = height;
    $(document.body).append(canvas);
    var ctx = canvas.getContext('2d');

    //draw the map first time around
    drawMap(ctx);

    //keys
    var LEFT = 37;
    var UP = 38;
    var RIGHT = 39;
    var DOWN = 40;

    //controls
    $(document).keydown(function (e) {
        if (e.keyCode == LEFT) {
            playerLocationX--;
        }
        else if (e.keyCode == UP) {
            playerLocationY--;
        }
        else if (e.keyCode == RIGHT) {
            playerLocationX++;
        }
        else if (e.keyCode == DOWN) {
            playerLocationY++;
        }
        drawMap(ctx);
    });
};

var cache = {};

var drawSymbol = function (ctx, x, y, color, symbol) {
    var id = 'sym_' + color + '_' + symbol.charCodeAt(0);
    //lets cache these symbols as images so we can draw them faster
    var symCanvas = cache[id];
    if (symCanvas === undefined) {
        symCanvas = $('<canvas></canvas>').get(0);
        symCanvas.width = mapSquareWidth;
        symCanvas.height = mapSquareHeight;
        var charWidth = ctx.measureText(symbol).width;
        var symctx = symCanvas.getContext('2d');
        symctx.textBaseline = 'top';
        symctx.font = '10px arial';
        symctx.strokeStyle = color;
        symctx.strokeText(symbol, 0 + Math.floor((mapSquareWidth - charWidth) / 2), 0);
        cache[id] = symCanvas;
    }
    //offsets for pixel pefectness
    var offsetX = 10;
    var offsetY = 4;
    ctx.drawImage(symCanvas, offsetX + x * mapSquareWidth, offsetY + y * mapSquareHeight);
};


var drawMap = function (ctx) {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);
    for (var x = 0; x < mapWidth; x++) {
        for (var y = 0; y < mapHeight; y++) {
            if (x == playerLocationX && y == playerLocationY) {
                drawSymbol(ctx, x, y, 'white', '@');
            }
            else {
                drawSymbol(ctx, x, y, 'green', '.');
            }
        }
    }
};

$(window).load(function () {
    start();
});