// variables
let display = document.querySelector(".calculator-screen");
let buttons = Array.from(document.querySelectorAll(".number"));
let operators = Array.from(document.querySelectorAll(".operator"));
let equal = document.querySelector('.equal');
let clear = document.querySelector(".clear");
let decimal = document.querySelector(".decimal");
let percent = document.querySelector('.percentage');
let prevNumb = '';
let calculation = '';
let currentNumb = '0';

// Get buttons value into display
buttons.forEach((el) => {
    el.addEventListener("click", (e) => {
        if (currentNumb == "0") {
            currentNumb = e.target.value
        } else {
            currentNumb += e.target.value
        }
        return display.value = currentNumb

    })
})

// Get operator function
operators.forEach((el) => {
    el.addEventListener("click", (e) => {
        if (calculation == '') {
            prevNumb = currentNumb
        }
        calculation = e.target.value
        currentNumb = '0'
    })
})

// Get equal function
const calculate = () => {
    let result = '';
    switch (calculation) {
        case "+":
            result += parseFloat(prevNumb) + parseFloat(currentNumb)
            break;
        case "-":
            result += parseFloat(prevNumb) - parseFloat(currentNumb)
            break;
        case "*":
            result += parseFloat(prevNumb) * parseFloat(currentNumb)
            break;
        case "/":
            result += parseFloat(prevNumb) / parseFloat(currentNumb)
            break;
        default:
            break;
    }

    return display.value = result
    calculation = '';
}

equal.addEventListener('click', (e) => {
    calculate()
})

// clear
clear.addEventListener('click', (e) => {
    prevNumb = ''
    calculation = ''
    currentNumb = '0'
    display.value = currentNumb
})

// decimal
decimal.addEventListener("click", (e) => {
    if (currentNumb.includes(".")) {
        return
    }
    currentNumb += e.target.value
    display.value = currentNumb
})

// Percent
percent.addEventListener('click', (e) => {
    if (currentNumb.includes('%')) {
        return
    }
    currentNumb += e.target.value
    display.value = currentNumb
})
