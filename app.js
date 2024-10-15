
document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById('input');
    let buttons = document.querySelectorAll('.btn');

    let clear = document.getElementById('clear');
    let equal = document.getElementById('equal');

    let currInput = "";
    // add event listener for buttons

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('btn-value');
            currInput += value;
            input.value = currInput;

        });
    });

    // add listener for clear button
    clear.addEventListener('click', function () {
        currInput = "";
        input.value = currInput;
    });

    // add listener for equal button

    equal.addEventListener('click', function () {
        try {
            currInput = eval(currInput);
            input.value = currInput;
        }
        catch {
            input.value = "Error";
            currInput = "";
        }
    });


});