// Paredes Lab1
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,
    wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall21,wall22,wall23,wall24,wall25,wall26,
    wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38;

// Grupo de las paredes (for{collision})
var wallsGroup;
        
// Imagenes VAR
var playerAnm,npc1Anm,meta1Anm,menuImg,gameMenuImg;

// PC,NPC
var player, npc1, meta1;

//Estado inicial juego
var gameState = "serve";

// Elementos
var backScreen;

// JS Codes
var form, game, questions,system,answers;

// Vidas
var lifes = 10;

var trys = 3;

function preload() {
    menuImg = loadImage("MenuImg.jpg");

    meta1Anm = loadImage("img/mt1.png","img/mt2.png","img/mt3.png","img/mt4.png");

    answerImg = loadImage("question1BG.jpg");

    playerAnm = loadAnimation("img/wr1.png","img/wr2.png","img/wr3.png","img/wr4.png","img/wr5.png","img/wr6.png");

    npc1Anm = loadAnimation("img/st1.png","img/st2.png","img/st3.png","img/st4.png","img/st5.png","img/st6.png","img/st7.png","img/st8.png","img/st9.png","img/st10.png",
                           "img/st11.png","img/st12.png","img/st13.png","img/st14.png","img/st15.png","img/st16.png","img/st17.png","img/st18.png","img/st19.png","img/st20.png",
                           "img/st21.png");
}


function setup() {
    createCanvas(700, 500);

    // Sprites 
    player = createSprite(20, 30, 10, 10);
    player.addAnimation("Right Run",playerAnm);
    player.scale = 1.1

    npc1 = createSprite(350 , 200, 50, 50);
    npc1.addAnimation("stand",npc1Anm);
    npc1.scale = 0.5;
    npc1.debug = true;
    npc1.setCollider("rectangle", 0, 0, 100, 200);

    meta1 = createSprite(670,400,50,50);
    meta1.addAnimation("Stand", meta1Anm);
    meta1.scale = 1.2;
    meta1.debug = false;
    meta1.setCollider("rectangle", 0, 0, 320, 60);

    form = new Form();
    game = new Game();
    questions = new Questions();
    system = new System();

    wallsGroup = new Group();
}

function draw() {
    background(answerImg);
    
    if (gameState == "serve") {
        form.display();
        questions.hide();
    }else if (gameState == "play"){
        trys = 3;
        game.display();
        form.hide();
        questions.hide();
        drawSprites();
    }else if (gameState == "question1") {
        questions.display();
        questions.show();
        form.hide();
    }

    console.log("gameState: ", gameState);
    console.log("X: ",player.x);
    console.log("Y: ", player.y);
    

}

function createWalls(sprite,x,y,width,height) {
    sprite = createSprite(x,y,width,height);
    sprite.shapeColor = "red";
    wallsGroup.add(sprite);
}