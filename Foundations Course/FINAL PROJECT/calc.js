const layout = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['C', '0', '=', '+']
];

const container = document.querySelector("#container");
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        let butt = document.createElement("button");
        butt.classList.add("butts");
        butt.textContent = layout[i][j];
        container.appendChild(butt);
    }
}

const buttons = document.querySelectorAll(".butts");
const screen = document.getElementById("screen");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (screen.textContent == "Error!")
            screen.textContent = '';
        
        switch (button.textContent) {
            case 'C':
                screen.textContent = '';
                break;

            case '=':
                calculate();
                break;

            default:
                screen.textContent += button.textContent;
                break;
        }

    });
});

function calculate() {
    let flag_zero = false;

    let input = screen.textContent;
    console.log(input);

    // Extract numbers and operators separately
    let numbers = input.split(/[\+\-\*\/]/).map(Number);
    let operators = input.split(/\d+/).filter(op => op);

    // map(Number):
    // This converts each string number into an actual JavaScript number.
    // The map(Number) function applies Number() to every element in the array.

    // The regular expression /\d+/ matches one or more digits (0-9).
    // split(/\d+/) removes numbers and keeps only the operators.

    // input.split(/\d+/);
    // Output: ["", "+", "-", "*", "/", ""]
    // .filter(op => op):
    // Removes empty strings from the array.


    console.log(numbers);   // Output: [12, 34, 5, 6, 2]
    console.log(operators); // Output: ["+", "-", "*", "/"]

    let ans = numbers.slice(1).reduce((acc, number, index) => {
        switch (operators[index]) {
            case ('/'):
                if (number === 0){
                    flag_zero = true;
                    break;
                }
                return acc/number;
            case '*':
                return acc*number;
            case '-':
                return acc-number;
            case '+':
                return acc+number;
            default:
                return acc;
        }
    }, numbers[0]);

    if (flag_zero){
        screen.textContent = "Error!";
        return;
    }

    screen.textContent = ans;

}