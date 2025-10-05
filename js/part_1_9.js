const x = document.getElementById('x');
const y = document.getElementById('y');
const showSolutionBtn = document.getElementById('solve');
const sendResBtn = document.getElementById('send');
const solutionText = document.getElementById('solution');
let check = false;

showSolutionBtn.addEventListener('click', main);

function main() {
    check = false;
    const xRaw = x.value.trim();
    const yRaw = y.value.trim();
    document.getElementById('task').value = 'Определение значения функции Z = 1 / (XY) при произвольных X и Y.';

    if (xRaw === '' && yRaw === '') {
        solutionText.innerText = 'Ошибка. Вы должны заполнить поля';
        return;
    } else if (xRaw === '') {
        solutionText.innerText = 'Ошибка. Вы не ввели X';
        return;
    } else if (yRaw === '') {
        solutionText.innerText = 'Ошибка. Вы не ввели Y';
        return;
    } else {
        const xNum = parseFloat(xRaw);
        const yNum = parseFloat(yRaw);
        if (xNum === 0 || yNum === 0) {
            solutionText.innerText = 'Ошибка. На ноль делить нельзя';
        } else {
            let res = 1 / (xNum * yNum);
            solutionText.innerText = `Результат — ${res}.\nПоздравляем! Алгоритм безопасности пройден.`;
            document.getElementById('res').value = `Результат — ${res}.\nПоздравляем! Алгоритм безопасности пройден.`;
            check = true;
        }
    }
    if (check) {
        sendResBtn.classList.remove('hidden');
    }
}

sendResBtn.addEventListener('click', sendToServer);

function sendToServer() {
    document.getElementById('send-res').submit();
};
