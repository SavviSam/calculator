const numberButton = document.querySelectorAll("[data-number]");
const operationButton = document.querySelectorAll("[data-operation]");
const output = document.querySelector("[data-output]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const toggleButton = document.querySelector("[data-toggle]");
const deleteButton = document.querySelector("[data-delete]");

//Number button functions
numberButton.forEach((button) => {
  //number button click event
  const numberClick = () => output.append(button.textContent);

  //number button keyboard event
  const numberKey = (e) => {
    switch (e.key) {
      case button.textContent:
        button.classList.add("transform");
        output.append(button.textContent);
        break;
    }
  };

  button.addEventListener("click", numberClick);
  window.addEventListener("keydown", numberKey);

  //remove animation from number buttons
  window.addEventListener("keyup", () => button.classList.remove("transform"));
});

//Clear functions
//clear button event
const clearClick = () => (output.textContent = "");

//clear display keyboard event
const clearKey = (e) => {
  switch (true) {
    case e.key === "Escape" || e.key === "Clear":
      clearButton.classList.add("transform");
      output.textContent = "";
      break;
  }
};

clearButton.addEventListener("click", clearClick);
window.addEventListener("keydown", clearKey);
//remove animation on clear button
window.addEventListener("keyup", () =>
  clearButton.classList.remove("transform")
);

//Operation functions
