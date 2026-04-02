const buttons = document.querySelector("#buttons");
const display = document.querySelector("#display");

let current = "";
let previous = "";
let operator = "";
let shouldClear = false;

buttons.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;

    const value = e.target.textContent;

    if (!isNaN(value)) {
        if (shouldClear) {
            current = "";
            shouldClear = false;
        }

        current += value;
        display.textContent = current;
    }

    else if (["+", "-", "*", "/"].includes(value)) {
        if (current === "") return;

        operator = value;
        previous = current;
        current = "";
    }

    else if (value === "=") {
        if (current === "" || previous === "") return;

        const num1 = Number(previous);
        const num2 = Number(current);
        let result;

        if (operator === "+") result = num1 + num2;
        else if (operator === "-") result = num1 - num2;
        else if (operator === "*") result = num1 * num2;
        else if (operator === "/") {
            if (num2 === 0) {
                display.textContent = "Error";
                return;
            }
            result = num1 / num2;
        }

        display.textContent = result;

        current = result.toString();
        previous = "";
        operator = "";
        shouldClear = true;
    }
});

display.textContent = "";