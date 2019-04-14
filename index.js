// turn on stop function 
function turnOnStopLight() {
    // change background color of stop light to red
    // changes background color of green and yellow to black
    turnOffLights();
    $("#stopLight").css("background-color","red");
    
}
$("#stopButton").on("click",turnOnStopLight);
// turn on slow function
function turnOnSlowLight() { 
  // change background color of slow light to yellow
  // changes background color of red and green to black
  turnOffLights();
  $("#slowLight").css("background-color","yellow");
    
}
$("#slowButton").on("click",turnOnSlowLight);

// turn on go function
function turnOnGoLight() {
    // change background color of go light to green
    // changes background color of red and yellow to black
    turnOffLights();
    $("#goLight").css("background-color","green");
    
  }
  $("#goButton").on("click",turnOnGoLight);

// set stop light click event

// set slow light click event

// set go light click event

// turnOffLights(light) {

// }

function turnOffLights(){
  $("#goLight").css("background-color","black");
  $("#slowLight").css("background-color","black");
  $("#stopLight").css("background-color","black");
}



// function turnOffLights($(this)){

// }



