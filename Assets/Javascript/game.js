$(document).ready(function(){
    let wins = 0;
    let losses = 0;
    let playerTotal = 0;
    let crystal1 = Math.floor(Math.random() * 12 + 1);
    console.log(crystal1);
    let crystal2 = Math.floor(Math.random() * 12 + 1);
    let crystal3 = Math.floor(Math.random() * 12 + 1);
    let crystal4 = Math.floor(Math.random() * 12 + 1);

    let randomNumber = Math.floor(Math.random() * 99 + 19);
    console.log("new random number: " + randomNumber);
    $('#wins').html(wins);
    $('#losses').html(losses);
    $('#player-input').html(playerTotal);


    function domReset(){
        randomNumber = Math.floor(Math.random() * 120 + 19);
        console.log("new random number: " + randomNumber);
        crystal1 = Math.floor(Math.random() * 12 + 1);
        crystal2 = Math.floor(Math.random() * 12 + 1);
        crystal3 = Math.floor(Math.random() * 12 + 1);
        crystal4 = Math.floor(Math.random() * 12 + 1);
        playerTotal = 0;
        $('#goal-number').html(randomNumber);
        $('#player-input').html(playerTotal);
    }; 

    domReset();

    function updateWins(){
        wins++;
        $('#wins').html(wins);
        domReset();
    };

    function updateLoss(){
        losses++;
        $('#losses').html(losses);
        domReset();
    };

    $('#red-crystal').on('click', function(){
        playerTotal = playerTotal + crystal1;
        console.log("new user total: " + playerTotal);
        $('#player-input').html(playerTotal);
        if (playerTotal === randomNumber){
            updateWins();
        } else if (playerTotal > randomNumber){
            updateLoss();
        }
    })

    $('#blue-crystal').on('click', function(){
        playerTotal = playerTotal + crystal2;
        console.log(crystal2);
        $('#player-input').html(playerTotal);
        if (playerTotal === randomNumber){
            updateWins();
        }
        else if (playerTotal > randomNumber){
            updateLoss();
        }
    })

    $('#yellow-crystal').on('click', function(){
        playerTotal = playerTotal + crystal3;
        $('#player-input').html(playerTotal);
        if (playerTotal === randomNumber){
            updateWins();
        }
        else if (playerTotal > randomNumber){
            updateLoss();
        }
    })

    $('#green-crystal').on('click', function(){
        playerTotal = playerTotal + crystal4;
        $('#player-input').html(playerTotal);
        if (playerTotal === randomNumber){
            updateWins();
        }
        else if (playerTotal > randomNumber){
            updateLoss();
        }
    });
});
