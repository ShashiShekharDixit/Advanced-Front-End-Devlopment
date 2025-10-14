function checkNumber() {
  let num = document.getElementById("numInput").value;
  let result = document.getElementById("result");

  if (num === "") {
    alert("Please enter a number!");
    return;
  }

  num = Number(num);

  if (num > 0) {
    alert("The number is Positive.");
    result.textContent = "The number is Positive.";
    result.style.color = "green";
  } else if (num < 0) {
    alert("The number is Negative.");
    result.textContent = "The number is Negative.";
    result.style.color = "red";
  } else {
    alert("The number is Zero.");
    result.textContent = "The number is Zero.";
    result.style.color = "blue";
  }
}
