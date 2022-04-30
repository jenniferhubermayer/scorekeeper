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

let nameHome ='HansPeter'

let renameHome = document.getElementById('change-home-team-name');

console.log(nameHome);

nameHome.innerHTML = nameHome

function renameTeams(){
    nameHome = nameHome;
    console.log('Hier ist der Name aus der Box' + nameHome);
    renameHome.innerHTML = nameHome;
}

renameTeams();