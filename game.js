var random_result;
var lost = 0;
var win = 0;
var previous = 0;


//----------------------------------------------

var resetGame = function () {

    $(".crystals").empty();         //this empties the crystal

    var images = [
        "image1.png", 
        "image2.png", 
        "image3.png", 
        "image4.jpg"
    ];

    random_result = Math.floor(Math.random() * 120) + 19;       //generate a new number to be guessed    

    $("#result").html('GOALS TO SCORE: ' + random_result);       //this adds to the DOM

    for (var i=0; i<4; i++){        //this loops 4 times 
        
        var random = Math.floor(Math.random() * 11) + 1;    //and every time IT LOOPS it creates a new number for each box 
        

        var crystal= $("<div>");        //creates a div with a different number
            crystal.attr({
                "class": 'crystal',
                "data-random": random                
            });             
            crystal.css({
                "background-image": "url('"+ (images[i]) +"')",
                "background-size": "cover"
            });

        $(".crystals").append(crystal);     //this is the crystal where we send everything back
        
    }
    $("#previous").html("TOTAL GOALS SCORED: " + previous);
    
}

resetGame();


//------------------------------------------------


// EVENT DELEGATION
$(document).on("click", ".crystal", function () {

    var num = parseInt($(this).attr("data-random"));

    previous += num;

    $("#previous").html(previous);

    console.log(previous);

    if(previous > random_result){
            lost++;

            $("#lost").html("Matches Lost :" + lost);

            previous = 0;
            
            resetGame();
    }
    else if(previous===random_result){
            win++;

            $("#win").html("Matches Won :" + win)

            previous = 0; 

            resetGame();
    }
     
});

//------------------------------------------------








 
// A game with 4 crystals and a random result
// every crystal needs to be assigned a random number between 1 - 12
// A new random number should be assigned to the 4 crystals every time I win or lose
// when clicking on any crystal, the numbers should be adding up until it equals the score
// If its more than the random result, we decrement a lost counter
// If its equal, then we increment a win counter