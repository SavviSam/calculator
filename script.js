let output = document.getElementById("output-value");
let result = document.getElementById("output");
let button = document.querySelectorAll("button");


button.forEach((button) => {
  button.addEventListener("click", function Input(num) {
    
    output.innerText += button.value;
  });
});
