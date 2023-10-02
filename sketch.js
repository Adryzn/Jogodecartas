function setup() {
    createCanvas(700,690 );
    background("black");
  }
  
  function draw() {
    stroke ("red");
  fill("black");
    
    //console.log(mouseispressed);
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 39, 21);
    }
  }
  
  
  