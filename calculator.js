const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("results");

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () => {
        const buttonValue = buttonsEl[i].textContent;
        if (buttonValue === "C") {
            clearResult();
        } else if (buttonValue === "=") {
            calculateResult();
        } else if (buttonValue === "Del") {
            deleteLastCharacter();
        } else {
            appendValue(buttonValue);
        }
    });
}

function clearResult() {
    inputFieldEl.value = "";
}

function calculateResult() {
    try {
        inputFieldEl.value = eval(inputFieldEl.value);
    } catch (error) {
        inputFieldEl.value = "Error";
    }
}

function appendValue(buttonValue) {
    inputFieldEl.value += buttonValue;
}

function deleteLastCharacter() {
    const currentValue = inputFieldEl.value;
    inputFieldEl.value = currentValue.substring(0, currentValue.length - 1);
}
