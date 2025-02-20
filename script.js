
let nama = 'Ali';
const umur = 17;
console.log(nama, umur);

function appendValue(value) {
    document.getElementById('screen').value += value;
}

function clearScreen() {
    document.getElementById('screen').value = '';
}

function calculateResult() {
    try {
        document.getElementById('screen').value = eval(document.getElementById('screen').value);
    } catch (e) {
        alert('Kesalahan input!');
        clearScreen();
    }
}

