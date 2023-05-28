// Function to update the clock
function updateClock() {
    // Get the current time
    var currentTime = new Date();
  
    // Extract hours, minutes, and seconds
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    // Add leading zeros if necessary
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    // Format the time as a string
    var formattedTime = hours + ":" + minutes + ":" + seconds;
  
    // Display the formatted time in the clock div
    document.getElementById("clock").innerHTML = formattedTime;
  }
  
  // Call the updateClock function once to initialize the clock
  updateClock();
  
  // Update the clock every second using the setInterval() method
  setInterval(updateClock, 1000);
  