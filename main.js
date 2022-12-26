canvas = document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

backgroundImage = "park-a-lot-2_1600x0w.jpeg";
carImage = "Car1.jpg"

carX=50;
carY=170;

carWidth = 65;
carHeight = 35;


function add(){
    console.log("In ADD");
    backgroundImgTag=new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src=backgroundImage;

    carImgTag=new Image();
    carImgTag.onload = uploadCar;
    carImgTag.src=carImage;

}

function uploadBackground(){
    ctx.drawImage(backgroundImgTag,0,0,canvas.width, canvas.height);
}

function uploadCar(){
    console.log("In Upload"+carImgTag +" "+carX+" "+carY+" "+carWidth+" "+carHeight);
    ctx.drawImage(carImgTag,carX,carY,carWidth,carHeight);
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
}

function up(){
    if(carY > 0){
        carY = carY -10;
        console.log("When up arrow is pressed, x = " + carX + " and the y = " + carY);
        uploadBackground();
        uploadCar();
    }
}

function down(){
if(carY<=500){
    carY = carY +10;
    console.log("When down arrow is pressed, x = " +carX + "and the y = " +carY);
    uploadBackground();
    uploadCar();
}
}
function right(){
if(carX > 0 ){
    carX = carX+10;
    console.log("When right arrow is pressed, x = " +carX + "and the y = " +carY);
    uploadBackground();
    uploadCar();

}
}
function left(){
    if(carX <800  ){
        carX = carX-10;
        console.log("When left arrow is pressed, x = " + carX + "and the y =" +carY);
        uploadBackground();
        uploadCar();
    }

}
