console.log('It works!')

// Variablen

let scoreHome = 0;
let scoreAway = 0;
let countHome = document.querySelector('.points-home')
let countAway = document.querySelector('.points-away')

console.log(scoreHome);
console.log(scoreAway);

// Funktionen Home

function pointsOnTopOneHome(){
    scoreHome = scoreHome + 1;
    console.log('Punktstand Home: ' + scoreHome)
    if(scoreHome <= 10){    
        countHome.innerHTML = '0' + scoreHome;
    }
    if(scoreHome >= 10)
   {
    countHome.innerHTML = scoreHome;
    }
}

function pointsOnTopTwoHome(){
    scoreHome = scoreHome + 2;
    if(scoreHome <= 10){    
        countHome.innerHTML = '0' + scoreHome;
    }
    if(scoreHome >= 10)
   {
    countHome.innerHTML = scoreHome;
    }
}

function pointsOnTopThreeHome(){
    scoreHome = scoreHome + 3;
    if(scoreHome <= 10){    
        countHome.innerHTML = '0' + scoreHome;
    }
    if(scoreHome >= 10)
   {
    countHome.innerHTML = scoreHome;
    }
}

pointsOnTopOneHome();

// Funktionen Away

function pointsOnTopOneAway(){
    scoreAway = scoreAway + 1;
    if(scoreAway <= 10){    
        countAway.innerHTML = '0' + scoreAway;
    }
    if(scoreAway >= 10)
   {
    countAway.innerHTML = scoreAway;
    }
}

function pointsOnTopTwoAway(){
    scoreAway = scoreAway + 2;
    if(scoreAway <= 10){    
        countAway.innerHTML = '0' + scoreAway;
    }
    if(scoreAway >= 10)
   {
    countAway.innerHTML = scoreAway;
    }
}

function pointsOnTopThreeAway(){
    scoreAway = scoreAway + 3;
    if(scoreAway <= 10){    
        countAway.innerHTML = '0' + scoreAway;
    }
    if(scoreAway >= 10)
   {
    countAway.innerHTML = scoreAway;
    }
}

pointsOnTopOneAway();

// Ausgabe 

countHome.innerHTML = '00'
countAway.innerHTML = '00'
