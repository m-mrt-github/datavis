var bgm;
var bgmSwitch = 0;

// test
var positionX;
var positionY;
var positionXFix;
var positionYFix;

var title = 'MUJI SWEETS & SNACKS';
var explanation1 = 'This page visualizes data on price, content and ingredients of MUJI sweets and snacks.';
var explanation2 = 'You can see an each icon below shaking differently based on a type of factor you choose in the selectboxies';

var picture = [];

var sweetsNum = 18;

var marginHorizontal = 300;
var topMarginVertical = 400;
var bottomMarginVertical = 100;
var dHorizantal;
var dVertical;
var screenExtention = 800;

var selectBox1;
var selectBox2;
var selPositionY = 270;
var selWidth = 300;
var selHeight = 20;
var selDistance = 25;
var selMargin;

var kCal = [866, 377, 138, 305.5, 303, 1091.1, 329.5, 85.5, 352, 218, 412.5, 408, 178.5, 246, 163, 229, 285, 836];
var content = [180.5, 85, 30, 66.5, 55, 312.5, 60, 29, 64, 50, 109.5, 80, 48, 55, 35, 40, 50, 204];
var price = [790, 150, 120, 150, 290, 674.5, 250, 190, 190, 99, 135, 190, 135, 190, 270, 190, 120, 299];
var protein = [11.75, 6, 3.1, 4.55, 3.7, 2.86, 7.95, 5.9, 6, 1.6, 6.8, 5.9, 1.8, 4.4, 2, 2.8, 3, 14.4];
var fat = [34.45, 21.8, 9.5, 15, 19.2, 0, 21.75, 1, 18.9, 4.4, 4, 21, 0, 5.3, 5.8, 11.4,15.5, 41.4];
var carbs = [120.65, 38.4, 11.6, 32.65, 31.2, 268.75, 20.85, 7.5, 39.4, 40.2, 71.6, 46.8, 43.65, 45.4, 25.1, 27.2, 33.6, 126];
var salt = [0.45, 0.3, 0.2, 0.4, 0.07, 1.26, 0.12, 1.25, 0.2, 0.3, 0.295, 0.5, 0.02, 1.2, 0.3, 0.05, 0.8, 1.08];
var division = 20;
var category = ['季節のお菓子', 'バウム', '糖質10g以下のお菓子','ケーキ・ドーナツ・スコーン・パイ','チョコレート','ドライフルーツ','ナッツ・野菜チップ','おつまみ','世界のお菓子','ぽち菓子','駄菓子','クッキー・ビスケット','マシュマロ・飴','せんべい', '小麦・卵・乳不使用のお菓子','素材を生かしたお菓子','素材を生かしたスナック','大袋菓子'];




function preload() {

    //画像の読み込み
    for (let i = 0; i < sweetsNum; i++) {
        picture[i] = loadImage('sweets' + i + '.png');
    }
    bgm = loadSound('MUJI.mp3');

}


function setup() {
    
    getAudioContext().suspend();
    bgm.loop();

    positionX = new Array(sweetsNum);
    positionY = new Array(sweetsNum);
    positionXFix = new Array(sweetsNum);
    positionYFix = new Array(sweetsNum);

    dHorizontal = (windowWidth - marginHorizontal * 2) / 2;
    dVertical = (windowHeight + screenExtention - (topMarginVertical + bottomMarginVertical) ) / (sweetsNum / 3 - 1);

    selMargin = (windowWidth - selWidth*2 - selDistance) / 2;
    selectBox1 = createSelect();
    selectBox2 = createSelect();
    selectBox1.style('width', selWidth + 'px');
    selectBox1.style('height', selHeight + 'px');
    selectBox2.style('width', selWidth + 'px');
    selectBox2.style('height', selHeight + 'px');
    selectBox1.position(selMargin, selPositionY);
    selectBox2.position(selMargin + selWidth + selDistance, selPositionY);
    selectBox1.option('Not selected');
    selectBox1.option('Price');
    selectBox1.option('Content');
    selectBox1.option('Calory');
    selectBox1.option('Protein');
    selectBox1.option('Fat');
    selectBox1.option('Carbs');
    selectBox1.option('Salt');
    selectBox1.option('Secret❤️');
    selectBox2.option('Not selected');
    selectBox2.option('Price');
    selectBox2.option('Content');
    selectBox2.option('Calory');
    selectBox2.option('Protein');
    selectBox2.option('Fat');
    selectBox2.option('Carbs');
    selectBox2.option('Salt');
   





    //画像の表示位置を計算
    for (let i = 0; i < sweetsNum; i++) {
        //左から１番目
        if (i % 3 === 0) {
            positionX[i] = marginHorizontal;
            positionY[i] = topMarginVertical + dVertical * Math.floor(i / 3);
            positionXFix[i] = positionX[i];
            positionYFix[i] = positionY[i];
        }
        //左から２番目
        if (i % 3 === 1) {
            positionX[i] = marginHorizontal + dHorizontal;
            positionY[i] = topMarginVertical + dVertical * Math.floor(i / 3);
            positionXFix[i] = positionX[i];
            positionYFix[i] = positionY[i];
        }
        //左から３番目
        if (i % 3 === 2) {
            positionX[i] = marginHorizontal + dHorizontal * 2;
            positionY[i] = topMarginVertical + dVertical * Math.floor(i / 3);
            positionXFix[i] = positionX[i];
            positionYFix[i] = positionY[i];
        }
        console.log(positionX[i]);
        console.log(positionY[i]);
    }
}


function draw() {

    createCanvas(windowWidth, windowHeight + screenExtention+200);
    background(255);
    imageMode(CENTER);
    textAlign(CENTER);

    push();
    textFont('Helvetica');
    textStyle(BOLD);
    textSize(80);
    text(title, windowWidth/2, 120);
    pop();

    push();
    textFont('Sawarabi Gothic');
    textSize(12);
    text(explanation1, windowWidth/2, 160);
    text(explanation2, windowWidth/2, 180);
    pop();

    for (let i = 0; i < sweetsNum; i++) {
        image(picture[i], positionX[i], positionY[i], picture[i].width / 10, picture[i].height / 10);
        text(category[i],positionXFix[i]-8, positionYFix[i]+90,20,200);

        //X座標の揺れ(selectbox1)
        if (selectBox1.value() === 'Not selected') {
            positionX[i] = positionXFix[i] + random(0, 0);
        } else if (selectBox1.value() === 'Price') {
            positionX[i] = positionXFix[i] + random(-price[i] / division, price[i] / division);
        } else if (selectBox1.value() === 'Content') {
            positionX[i] = positionXFix[i] + random(-content[i] / division, content[i] / division);
        } else if (selectBox1.value() === 'Calory') {
            positionX[i] = positionXFix[i] + random(-kCal[i] / division, kCal[i] / division);
        } else if (selectBox1.value() === 'Protein') {
            positionX[i] = positionXFix[i] + random(-protein[i], protein[i]);
        } else if (selectBox1.value() === 'Fat') {
            positionX[i] = positionXFix[i] + random(-fat[i], fat[i]);
        } else if (selectBox1.value() === 'Carbs') {
            positionX[i] = positionXFix[i] + random(-carbs[i]/ division, carbs[i]/ division);
        } else if (selectBox1.value() === 'Salt') {
            positionX[i] = positionXFix[i] + random(-salt[i], salt[i]);
        } else if (selectBox1.value() === 'Secret❤️') {
            positionX[i] = positionXFix[i] + random(0,0);
            if (bgmSwitch === 0){
               userStartAudio();
            bgm.loop();
            bgmSwitch = 1;
            }
        }


        //Y座標の揺れ(selectbox2)
        if (selectBox2.value() === 'Not selected') {
            positionY[i] = positionYFix[i] + random(0, 0);
        } else if (selectBox2.value() === 'Price') {
            positionY[i] = positionYFix[i] + random(-price[i] / division, price[i] / division);
        } else if (selectBox2.value() === 'Content') {
            positionY[i] = positionYFix[i] + random(-content[i] / division, content[i] / division);
        } else if (selectBox2.value() === 'Calory') {
            positionY[i] = positionYFix[i] + random(-kCal[i] / division, kCal[i] / division);
        } else if (selectBox2.value() === 'Protein') {
            positionY[i] = positionYFix[i] + random(-protein[i], protein[i]);
        } else if (selectBox2.value() === 'Fat') {
            positionY[i] = positionYFix[i] + random(-fat[i], fat[i]);
        } else if (selectBox2.value() === 'Carbs') {
            positionY[i] = positionYFix[i] + random(-carbs[i]/ division, carbs[i]/ division);
        } else if (selectBox2.value() === 'Salt') {
            positionY[i] = positionYFix[i] + random(-salt[i], salt[i]);
        }

    }



}



/*
if (keyCode === ENTER) {
            positionX[i] = positionXFix[i] + random(-kCal[i] / division, kCal[i] / division);
            positionY[i] = positionYFix[i] + random(-price[i] / division, price[i] / division);
        } else if (keyCode === SHIFT) {
            positionX[i] = positionXFix[i];
            positionY[i] = positionYFix[i];
        }
*/
