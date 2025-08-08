let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else if (e.target.innerHTML == "?") {
      string = "Le bhai ho gayi Javascript 🙂‍↔️";

      input.value = string;
      input.style.fontSize = "20px";
      // setTimeout(() => {
      //   input.value = "";
      //   input.style.fontSize = "";
      // }, 5000);
    } else {
      string += e.target.innerHTML;
      input.value = string;
      input.style.fontSize = "";
      // input.value = "";
    }
  });
});
