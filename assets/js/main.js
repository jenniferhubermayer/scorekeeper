console.log('It works!');

// Variablen

let scoreHome = 0;
let scoreAway = 0;
let countHome = document.querySelector('.points-home');
let countAway = document.querySelector('.points-away');

console.log(scoreHome);
console.log(scoreAway);

countHome.innerHTML = '0' + scoreHome;
countAway.innerHTML = '0' + scoreAway;

// Funktionen Home

function pointsOnTopOneHome(){
    scoreHome += 1;
    console.log('Punktstand Home: ' + scoreHome);
    if(scoreHome <= 10){    
        countHome.innerHTML = '0' + scoreHome;
    };
    if(scoreHome >= 10)
   {
    countHome.innerHTML = scoreHome;
    };
}

function pointsOnTopTwoHome(){
    scoreHome += 2;
    console.log('Punktstand Home: ' + scoreHome);
    if(scoreHome <= 10){    
        countHome.innerHTML = '0' + scoreHome;
    };
    if(scoreHome >= 10)
   {
    countHome.innerHTML = scoreHome;
    };
}

function pointsOnTopThreeHome(){
    scoreHome += 3;
    console.log('Punktstand Home: ' + scoreHome);
    if(scoreHome <= 10){    
        countHome.innerHTML = '0' + scoreHome;
    };
    if(scoreHome >= 10)
   {
    countHome.innerHTML = scoreHome;
    };
}

// Funktionen Away

function pointsOnTopOneAway(){
    scoreAway += 1;
    console.log('Punktstand Away: ' + scoreAway)
    if(scoreAway <= 10){    
        countAway.innerHTML = '0' + scoreAway;
    }
    if(scoreAway >= 10)
   {
    countAway.innerHTML = scoreAway;
    }
}

function pointsOnTopTwoAway(){
    scoreAway += 2;
    if(scoreAway <= 10){    
        countAway.innerHTML = '0' + scoreAway;
    }
    if(scoreAway >= 10)
   {
    countAway.innerHTML = scoreAway;
    }
}

function pointsOnTopThreeAway(){
    scoreAway += 3;
    if(scoreAway <= 10){    
        countAway.innerHTML = '0' + scoreAway;
    }
    if(scoreAway >= 10)
   {
    countAway.innerHTML = scoreAway;
    }
}

// Funktion für den Reset

function resetPoints(){
    scoreAway = 0;
    scoreHome = 0;
    countHome.innerHTML = '0' + 0;
    countAway.innerHTML = '0' + 0;
}

// BONUS

// Hier wird das Modal aufgerufen und geschlossen.

var modal = document.getElementById("myModal");
var btn = document.getElementById("rename");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  } 

// Hier versuche ich den Text in das HTML zu überführen.

/* Hier lasse ich JS über die Deklaration nameHome die Klasse .team-name im html-Dokument identifizieren */

let nameHome = document.querySelector('.team-name-home')
// let nameAway = document.querySelector('.team-name-away')

/* Hier lasse ich JS den Inhalt (.textContent) des gefundenen html-Teils in der Konsole ausgeben, um zu prüfen, ob es funktioniert */

console.log(nameHome.textContent);
// console.log(nameAway.textContent);

/* Hier  */

// nameHome = document.getElementById('team-name-home')

/* Hier lasse ich JS einen Textbaustein in die Deklaration nameHome ausgeben. Die Deklaration greift auf .team-name im html zu */

function saveteamnames(){

}

let renameHome = document.getElementById('change-home-team-name').value

// let renameAway = document.getElementById('change-away-team-name').value

console.log(renameHome);
// console.log(renameAway);

nameHome.innerHTML = renameHome;
// nameAway.innerHTML = renameAway;