// Get references to the input fields and button
var massInput = document.getElementById("mass");
var velocityInput = document.getElementById("velocity");
var distanceInput = document.getElementById("distance");
var calculateButton = document.getElementById("calculateBtn");
var resultOutput = document.getElementById("result");

// Add an event listener to the button to calculate punch force
calculateButton.addEventListener("click", function () {
  // Get the values from the inputs as strings
  var mass = massInput.value;
  var velocity = velocityInput.value;
  var distance = distanceInput.value;

  //using next unit topics below  

  // Check if any field is empty or contains a negative value
  if (mass === "" || velocity === "" || distance === "") {
    resultOutput.innerHTML = "Please fill in all the fields!";
  } else if (mass <= 0 || velocity <= 0 || distance <= 0) {
    resultOutput.innerHTML = "Values must be greater than 0!";
  } else {
    // Calculate the punch force using the formula
    var force = (mass * velocity * velocity) / distance;

    // Display the result without rounding (no .toFixed)
    resultOutput.innerHTML = "Punch Force: " + force + " N";
  }
});
