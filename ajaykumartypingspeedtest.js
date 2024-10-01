let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");

let quoteInputEl = document.getElementById("quoteInput");

let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");

spinnerEl.classList.remove("d-none");

let quotes = "";

function gettingRandomQuotes() {
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    }
    fetch(url, options)

        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            quotes = jsonData.content;
            spinnerEl.classList.add("d-none");
            quoteDisplayEl.textContent = quotes;
        })

}

gettingRandomQuotes();
let timerInSeconds;

let counter = 0
timerEl.textContent = counter;

function timerCounter(reset) {
    counter = 0;
    timerEl.textContent = counter;
    timerInSeconds = setInterval(function() {
        counter = counter + 1;
        timerEl.textContent = counter;
    }, 1000);


}


timerCounter();

resetBtnEl.onclick = function() {
    resultEl.textContent = "";
    spinnerEl.classList.remove("d-none");
    quoteDisplayEl.textContent = "";
    gettingRandomQuotes();
    quoteInputEl.value = "";
    clearInterval(timerInSeconds, 1000);
    timerCounter();

};

submitBtnEl.onclick = function() {

    if (quoteInputEl.value === quoteDisplayEl.textContent) {
        resultEl.textContent = "You typed in " + counter + " seconds.";
        clearTimeout(timerInSeconds);
    } else {
        resultEl.textContent = "You typed incorrect sentence";
    }
}