let output = document.getElementById("output-value");
let result = document.getElementById("output");
let button = document.querySelectorAll("button");

button.forEach((button) => {
  const Input = () => {
    output.innerText += button.value;
  };

  button.addEventListener("click", Input);
});
