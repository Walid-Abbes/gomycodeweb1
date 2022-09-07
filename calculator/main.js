class Calculator {
  constructor(previousTextElement, currentTextElement) {
    this.previousTextElement = previousTextElement;
    this.currentTextElement = currentTextElement;
    this.ac();
  }

  ac() {
    this.current = "";
    this.previous = "";
    this.operation = undefined;
  }

  del() {
    this.current = this.current.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.current.includes(".")) return;
    this.current = this.current.toString() + number.toString();
  }
  ///////
  appendOperation(operation) {
    if (this.current === "") return;
    if (this.previous !== "") {
      this.calculate();
    }
    this.operation = operation;
    this.previous = this.current;
    this.current = "";
  }
  ////////
  calculate() {
    let calculation;
    const prev = parseFloat(this.previous);
    const curr = parseFloat(this.current);

    if (isNaN(curr) && isNaN(prev)) return;
    switch (this.operation) {
      case "+":
        calculation = prev + curr;
        break;
      case "-":
        calculation = prev - curr;
        break;
      case "/":
        calculation = prev / curr;
        break;
      case "*":
        calculation = prev * curr;
        break;

      default:
        return;
    }
    if ((calculation = 0 / 0)) {
      window.location.replace("boom.html");
    }
    this.current = calculation;
    this.operation = undefined;
    this.previous = "";
  }
  ////////
  display(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  update() {
    this.currentTextElement.innerText = this.display(this.current);
    if (this.operation != null) {
      this.previousTextElement.innerText = `${this.display(this.previous)} ${
        this.operation
      }`;
    } else {
      this.previousTextElement.innerText = "";
    }
  }
}
///////
const numbers = document.querySelectorAll("[data-number]");
const operations = document.querySelectorAll("[data-operation]");
const equal = document.querySelector("[data-equal]");
const del = document.querySelector("[data-del]");
const ac = document.querySelector("[data-ac]");
const currentTextElement = document.querySelector("[data-current]");
const previousTextElement = document.querySelector("[data-previous]");
//
const calculator = new Calculator(previousTextElement, currentTextElement);
//
numbers.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.update();
  });
});
//good
operations.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendOperation(button.innerText);
    calculator.update();
  });
});
// good
equal.addEventListener("click", (button) => {
  calculator.calculate();
  calculator.update();
});

ac.addEventListener("click", (button) => {
  calculator.ac();
  calculator.update();
});

del.addEventListener("click", (button) => {
  calculator.del();
  calculator.update();
});
