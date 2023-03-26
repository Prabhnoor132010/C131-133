img="";
object=[];
status="";

function preload() {
    img= loadImage("one.jpg");
}

function setup() {
    canvas=createCanvas(445,265);
    canvas.position(330,150);

    objectdetect=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Object Dectecting";
}



function modelLoaded() {
    console.log("LOADED");
    status=true;
    objectdetect.detect(img,gotresults);
}




function gotresults(error,results) {
    if (error) {
        console.log(error)
    } else {
       console.log(results);
       object=results 
    }
}

function draw() {
    image(img , 0 , 0 , 445 , 265);

    if (status != "" ) {
        for (i = 0; i < object.length; i++) {
                document.getElementById("status").innerHTML="Status: Object Dectected";

                per= Math.floor (object[i].confidence * 100) ;
                text( object[i].label + " " + per + "%" , object[i].x+15 , object[i].y+15);
                noFill();

                stroke("blue");
                rect(object[i].x , object[i].y , object[i].width , object[i].height);
            
        }
    }
}


