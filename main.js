const nodeList = document.querySelectorAll("[data-number]");
const previous = document.getElementById("prev");
const current = document.getElementById("curr");
const operation = document.querySelectorAll("[data-operation]");
const AllClear = document.querySelector("[data-allClear]");
const clear = document.querySelector("[data-clear]");
const equal = document.querySelector("[data-equal]");
const decimal = document.querySelector("[data-decimall]");

let num1 = "";
let num2 = "";

AllClear.addEventListener("click", () => {
  current.innerText = "";
  previous.innerText = "";
  equal.addEventListener("click", equate);
});

clear.addEventListener("click", () => {
  current.innerText = current.innerText.slice(0, -1);
});

nodeList.forEach((node) => {
  node.addEventListener("click", () => {
    if (current.innerText !== "") {
      current.innerText += node.innerText;
    } else {
      current.innerText = node.innerText;
    }
  });
});

operation.forEach((operator) => {
  operator.addEventListener("click", () => {
    let opp = ["+", "-", "/", "*"];
    if (
      current.innerText[current.innerText.length - 1] === operator.innerText ||
      current.innerText === ""
    ) {
      return;
    } else {
      num1 = current.innerText;
      current.innerText += operator.innerText;
      previous.innerText = current.innerText;
      current.innerText = "";
    }
  });
});

decimal.addEventListener("click", () => {
  if (current.innerText.includes(".")) {
    return;
  } else {
    current.innerText += ".";
  }
});

equal.addEventListener("click", equate);

function equate() {
  let opp = ["+", "-", "/", "*"];
  opp.forEach((opper) => {
    if (previous.innerText !== "" && previous.innerText.includes(opper)) {
      num2 = current.innerText;
      previous.innerText = previous.innerText + current.innerText;

      switch (opper) {
        case "+":
          current.innerText = parseFloat(num1, 10) + parseFloat(num2, 10);
          break;
        case "-":
          current.innerText = parseFloat(num1, 10) - parseFloat(num2, 10);
          break;
        case "/":
          current.innerText = parseFloat(num1, 10) / parseFloat(num2, 10);
          break;
        case "*":
          current.innerText = parseFloat(num1, 10) * parseFloat(num2, 10);
          break;
        default:
          return;
      }
    }
  });
  equal.removeEventListener("click", equate);
}
