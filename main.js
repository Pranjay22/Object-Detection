objectDetector = ""

img = "";
objects =  [];
status = "";

function preload () {
    img = loadImage('https://lh3.googleusercontent.com/proxy/jDBtOB13jo3i3w0aDx7U76PsbUDmKMUMv7H8yOEHg4lmTLf-5qHlux9MVzgM5J7Yv2N1UO2aaQzYuL17jsLe7kiGo7aylZU')
}

function setup () {
    createCanvas = (640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossed' , modelLoaded)
    document.getElementById("Status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded () {
    console.log("Model Loaded");
    status = "true";
    objectDetector.Detect(img , gotResult);
}

function gotResult () {
    if (error){
    console.log(error);
}

console.log(results);
objects = results;
}

function draw() {
    image(img, 0, 0, 640, 420);
  
        if(status != "")
        {
          for (var i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
      
            fill(255, 0, 0);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(255, 0, 0);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
          }
        }
  }
  