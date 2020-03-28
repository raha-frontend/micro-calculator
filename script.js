// поле ввода первого числа
var firstInt = document.querySelector('.first-int');
// поле ввода второго числа
var secondInt = document.querySelector('.second-int');
// выбор операции
var operation = document.querySelector('.operation');
// кнопка-расчет
var calcResult = document.querySelector('.calc-result');
// место для введения резельтата
var result = document.querySelector('.result');

// добавил событие-нажатие на кнопку
calcResult.addEventListener('click', function () {
    var first = Number(firstInt.value);
    var second = Number(secondInt.value);

    //если инпуты не пустые
    if(first && second) {
        // варианты действий калькулятора
        switch (operation.value) {
            case '+':
                result.textContent = first + second;
                break;
            case '-':
                result.textContent = first - second;
                break;
            case '*':
                result.textContent = first * second;
                break;
            case '/':
                if (second === 0) {
                    alert('делить на 0 нельзя');
                } else {
                    result.textContent = first / second;
                }
                break
        }
    } else {
        // если поля пустые
        alert('Заполните поля')
    }
});
