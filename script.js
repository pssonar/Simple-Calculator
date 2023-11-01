function addNumbers() {
  // Get the input values
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  // Check if the input values are valid numbers
  if (!isNaN(num1) && !isNaN(num2)) {
      var sum = num1 + num2;
      document.getElementById("result").textContent = sum;
  } else {
      alert("Please enter valid numbers.");
  }
}
function subNumbers() {
  // Get the input values
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  // Check if the input values are valid numbers
  if (!isNaN(num1) && !isNaN(num2)) {
      var sum = num1 - num2;
      document.getElementById("result").textContent = sum;
  } else {
      alert("Please enter valid numbers.");
  }
}
function mulNumbers() {
  // Get the input values
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  // Check if the input values are valid numbers
  if (!isNaN(num1) && !isNaN(num2)) {
      var sum = num1 * num2;
      document.getElementById("result").textContent = sum;
  } else {
      alert("Please enter valid numbers.");
  }
}
function divNumbers() {
  // Get the input values
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  // Check if the input values are valid numbers
  if (!isNaN(num1) && !isNaN(num2)) {
      var sum = num1 / num2;
      document.getElementById("result").textContent = sum;
  } else {
      alert("Please enter valid numbers.");
  }
}