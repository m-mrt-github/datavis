// test
var positionX;
var positionY;
var positionXFix;
var positionYFix;

var picture = [];

var sweetsNum = 18;

var marginHorizontal = 300;
var marginVertical = 100;
var dHorizantal;
var dVertical;
var screenExtention = 500;

var kCal = [866, 377, 138, 305.5, 303, 1091.1, 329.5, 85.5, 352, 218, 412.5, 408, 178.5, 246, 163, 229, 285, 836];
var price = [790, 150, 120, 150, 290, 674.5, 250, 190, 190, 99, 135, 190, 135, 190, 270, 190, 120, 299];
var division = 20;




function preload() {

    //画像の読み込み
    for (let i = 0; i < sweetsNum; i++) {
        picture[i] = loadImage('sweets' + i + '.png');
    }
}


function setup() {

    positionX = new Array(sweetsNum);
    positionY = new Array(sweetsNum);
    positionXFix = new Array(sweetsNum);
    positionYFix = new Array(sweetsNum);

    dHorizontal = (windowWidth - marginHorizontal * 2) / 2;
    dVertical = (windowHeight + screenExtention - marginVertical * 2) / (sweetsNum / 3 - 1);

    //画像の表示位置を計算
    for (let i = 0; i < sweetsNum; i++) {
        //左から１番目
        if (i % 3 === 0) {
            positionX[i] = marginHorizontal;
            positionY[i] = marginVertical + dVertical * Math.floor(i / 3);
            positionXFix[i] = positionX[i];
            positionYFix[i] = positionY[i];
        }
        //左から２番目
        if (i % 3 === 1) {
            positionX[i] = marginHorizontal + dHorizontal;
            positionY[i] = marginVertical + dVertical * Math.floor(i / 3);
            positionXFix[i] = positionX[i];
            positionYFix[i] = positionY[i];
        }
        //左から３番目
        if (i % 3 === 2) {
            positionX[i] = marginHorizontal + dHorizontal * 2;
            positionY[i] = marginVertical + dVertical * Math.floor(i / 3);
            positionXFix[i] = positionX[i];
            positionYFix[i] = positionY[i];
        }
        console.log(positionX[i]);
        console.log(positionY[i]);
    }


}


function draw() {

    createCanvas(windowWidth, windowHeight + screenExtention);
    background(255);
    imageMode(CENTER);

    for (let i = 0; i < sweetsNum; i++) {
        image(picture[i], positionX[i], positionY[i], picture[i].width / 10, picture[i].height / 10);

        if (keyCode === ENTER) {
            positionX[i] = positionXFix[i] + random(-kCal[i] / division, kCal[i] / division);
            positionY[i] = positionYFix[i] + random(-price[i] / division, price[i] / division);
        } else if (keyCode === SHIFT) {
            positionX[i] = positionXFix[i];
            positionY[i] = positionYFix[i];
        }
    }



}
