class Calculator {
  constructor(currentOperandText, previousOperandText) {
    this.currentOperandText = currentOperandText;
    this.previousOperandText = previousOperandText;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;

    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  compute() {
    let computation;
    const current = parseFloat(this.currentOperand);
    const prev = parseFloat(this.previousOperand);
    if (isNaN(current) || isNaN(prev)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;

      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;

    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en-US", {
        maximumFractionDigits: 0,
      });
    }

    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentOperandText.textContent = this.getDisplayNumber(
      this.currentOperand
    );
    this.previousOperandText.textContent = this.previousOperand;
    if (this.operation != null) {
      this.previousOperandText.textContent = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    }
  }
}

const numberButton = document.querySelectorAll("[data-number]");
const operationButton = document.querySelectorAll("[data-operation]");
const currentOperandText = document.querySelector("[data-current-operand]");
const previousOperandText = document.querySelector("[data-previous-operand]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const toggleButton = document.querySelector("[data-toggle]");
const deleteButton = document.querySelector("[data-delete]");

const calculator = new Calculator(currentOperandText, previousOperandText);

numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.textContent);
    calculator.updateDisplay();
  });
});

clearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

operationButton.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.textContent);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});
deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
