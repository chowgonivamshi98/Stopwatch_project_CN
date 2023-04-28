//onload events occurs when the page loads
window.onload = function() {
//declare a variable
  var milliseconds = 00;
  var seconds = 00;
  var minutes = 00;
  
//returns an Element object representing the element whose id property matches
  var appendMilliseconds = document.getElementById("milliseconds");
  var appendSeconds = document.getElementById("seconds");
  var appendMinutes = document.getElementById("minutes"); 
  var buttonStart = this.document.getElementById("button-start");
  var buttonStop = this.document.getElementById("button-stop");
  var buttonReset = this.document.getElementById("button-reset");

  var Interval;

  // Function for starting timer

  function startTimer() {
      milliseconds++;

      // Milliseconds Counter

      if (milliseconds < 9) {
          appendMilliseconds.innerHTML = "0" + milliseconds;
          //innerHtml is a property of html DOM (we used to update the min,sec,millisec)

      }
      if (milliseconds > 9) {
          appendMilliseconds.innerHTML = milliseconds;
      }
      if (milliseconds > 99) {
          seconds++;
          appendSeconds.innerHTML = "0" + seconds;
          milliseconds = 0;
          appendMilliseconds.innerHTML = "0" + milliseconds;
      }
      if (seconds > 9) {
          appendSeconds.innerHTML = seconds;
      }
      //Seconds Counter
      if (seconds > 59) {
          minutes++;
          appendMinutes.innerHTML = "0" + minutes;
          seconds = 0;
          appendSeconds.innerHTML = "0" + seconds;
      }
      //Minutes Counter
      if (minutes > 9) {
          appendMinutes.innerHTML = minutes;
      }
  }
  
  // Button to start timer
  buttonStart.onclick = function() {
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);//it  run again and again in the given time interval
  }

  // Button to stop timer
  buttonStop.onclick = function() { 
      clearInterval(Interval); //it stops the  running time time interval

  }

  // Button to reset timer
  buttonReset.onclick = function() {
      clearInterval(Interval);
      milliseconds = "00";
      seconds = "00";
      minutes = "00";
      appendMilliseconds.innerHTML = milliseconds;
      appendSeconds.innerHTML = seconds;
      appendMinutes.innerHTML = minutes;

  }


}
