const numberButton = document.querySelectorAll("[data-number]");
const operationButton = document.querySelectorAll("[data-operation]");
const output = document.querySelector("[data-output]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const toggleButton = document.querySelector("[data-toggle]");
const deleteButton = document.querySelector("[data-delete]");

numberButton.forEach((button) => {
  //calculator updates display for numbers based on button clicks and keyboard events
  const numberClick = () => output.append(button.textContent);

  const numberKeyDown = (e) => {
    switch (true) {
      case e.key === button.textContent:
        button.classList.add("transform");
        output.append(button.textContent);
        break;
    }
  };

  button.addEventListener("click", numberClick);
  window.addEventListener("keydown", numberKeyDown);

  //remove animation from number buttons
  window.addEventListener("keyup", () => button.classList.remove("transform"));
});

//reset the calculator display to zero on user button click and keyboard event
const clearClick = () => (output.textContent = "");

const clearKeyDown = (e) => {
  switch (true) {
    case e.key === "Escape" || e.key === "Clear":
      clearButton.classList.add("transform");
      output.textContent = "";
      break;
  }
};

clearButton.addEventListener("click", clearClick);
window.addEventListener("keydown", clearKeyDown);

//remove animation on clear button
window.addEventListener("keyup", () =>
  clearButton.classList.remove("transform")
);
