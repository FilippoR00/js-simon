let content = document.querySelector(".box");
let message = document.querySelector(".result");
let timeContent = document.getElementById("time");
let time = 29;
let score = 0;
let array = [];
array.length = 5;
let result = [];
let scoreNum = [];

// funzione random 
function random(min, max) {
    let temp = Math.floor(Math.random() * (max + 1 - min)) + min;
    return temp;
}

// funzione timeOut. Nasconde i numeri allo scadere del tempo e chiede i numeri memorizzati controllando che non siano ripetuti
function timeOut() {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].classList.add("disabled");
    }
    for (let j = 0; j < array.length; j++) {
        result[j] = prompt("inserisici un numero:");
        checkDuplicate(j);
    }
    check(result);
}

// funzione per il tempo rimanente 
function timer() {
    timeContent.innerHTML = time--;
    if (time < 0) {
        clearInterval(clock);
    }
}

// funzione che calcola il punteggio e salva in un nuovo array e stampa i numeri indovinati
function check(result) {
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if (array[i] == result[j]) {
                scoreNum[score] = result[j];
                score++;
            }
        }
    }
    message.innerHTML = `<div>Numeri indovinati = ${score}</div>`;
    for (let k = 0; k < scoreNum.length; k++) {
        message.innerHTML += `
        <span>${scoreNum[k]}</span>`;
    }
}

// funzione che controlla che il numero appena inserito sia diverso da quello precedente
function checkDuplicate(index) {
    for (let i = 0; i < index; i++) {
        while (result[index] == result[i]) {
            alert("Errore: inserire un numero diverso");
            result[index] = prompt("inserisici un numero:");
        }
    }
}

// funzione che controlla che tutti i numeri random dell'array siano diversi 
function checkArray(value) {
    for (let i = 0; i < value.length; i++) {
        for (let j = i + 1; j < value.length; j++) {

            if (value[i] == value[j]) {
                do {
                    value[i] = random(1, 99);
                }
                while (value[i] == value[j]);
                i = 0;
            }
        }
    }
}

// inizializzo l'array 
for (let i = 0; i < array.length; i++) {
    array[i] = random(1, 99);
}

// controllo che i numeri siano tutti diversi fra loro 
checkArray(array);

// inserisco il contenuto nell'HTML 
for (let i = 0; i < array.length; i++) {
    content.innerHTML += `
    <div>${array[i]}</div>`;
}

let numbers = document.querySelectorAll(".box > div");

// faccio in modo che scaduti i 30 secondi i numeri spariscano
setTimeout(timeOut, 30000);

// aggiorna il conto alla rovescia ogni secondo;
let clock = setInterval(timer, 1000);
