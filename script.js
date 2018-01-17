for (let i=0; i<=9; i++) {
    document.querySelector('.number'+i).addEventListener('click', function() { insert(i) });
}

var progress = document.querySelector('.progress');
var result = document.querySelector('.result'); //okno wyniku
var num = 0; //liczby operacyjne

var clear = document.querySelector('.clear').addEventListener('click', clear);
var back = document.querySelector('.back').addEventListener('click', back);
var square = document.querySelector('.square').addEventListener('click', square);
var division = document.querySelector('.division').addEventListener('click', division);
var multiplication = document.querySelector('.multiplication').addEventListener('click', multiplication);
var subtraction = document.querySelector('.subtraction').addEventListener('click', subtraction);
var addition = document.querySelector('.addition').addEventListener('click', addition);
var equals = document.querySelector('.equals').addEventListener('click', work);
var comma = document.querySelector('.comma').addEventListener('click', comma);




function insert(i) {
    progress.value += i;
    num = i;
}

function clear() {
    progress.value = null;
    result.value = 0;
}

function square() {
    if (result.value == 0) {
        num = eval(progress.value);
        parseInt(num, 10);
        result.value = Math.sqrt(num);
    }

    else {
        num = result.value;
        parseInt(num, 10);
        result.value = Math.sqrt(num);
    }
}

function division() {
    progress.value += "/";
}

function multiplication() {
    progress.value += "*";
}

function subtraction() {
    progress.value += "-";
}

function addition() {
    progress.value += "+";
}

function comma() {
    progress.value += ".";
}

function work() {
    result.value = eval(progress.value);
}

function back() {
    progress.value = progress.value.substr(0, progress.value.length -1);
}