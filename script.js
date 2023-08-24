const numberButton = document.querySelectorAll("[data-number]");
const buttonStyle = document.querySelectorAll("button");
const operationButton = document.querySelectorAll("[data-operation]");
const output = document.querySelector("[data-output]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const toggleButton = document.querySelector("[data-toggle]");
const deleteButton = document.querySelector("[data-delete]");

//output displays value when user clicks on number buttons
numberButton.forEach((button) => {
  const buttonClick = () => {
    output.append(button.textContent);
  };

  //user keyboard events display on calculator
  const keyBoard = (e) => {
    switch (e.key) {
      case "1":
        console.log("hi");
        break;
    }
  };

  button.addEventListener("click", buttonClick);
  window.addEventListener("keydown", (e) => {
    switch (true) {
      case e.key === button.textContent:
        output.append(button.textContent);
        break;
    }
  });
});

//reset the calculator display to zero
clearButton.addEventListener("click", () => {
  output.textContent = "";
});
