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