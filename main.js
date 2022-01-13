img = "";
status1 = ""; 
objects = [];

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetecter = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "Model is detecting objects";

}

function modelloaded(){
    console.log("MODEL HAS LOADED SUCCESFULLY !!");
    status1 = true;
    objectDetecter.detect(img,gotresults);
}

function gotresults(error,results){
    if(error){
        console.log(error);
    }

    else{
        console.log(results);
        objects = results;
    }
}


function draw(){
    image(img,0,0,640,420);

    if(status1 !=""){
        for (i = 0; i<objects.length; i++){
            document.getElementById("status").innerHTML = "Objects Detected !! ";
            fill("#2832C2");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "  " + percent + " %  ", objects[i].x + 20 , objects[i].y + 30);
            nofill();
            stroke("#4FC978");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }


}