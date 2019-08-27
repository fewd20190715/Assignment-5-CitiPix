//Get a users input 
// Save it to a variable 
// if userval==="NYC" or "New York City" then change picture to NYC
// else if Same for San Francisco, LA, Austin and syn. 

let userValue = 0;

$("form").submit(getUserInput)

function getUserInput(event){
    event.preventDefault();
    userValue= $("#city-type").val()
    console.log(getUserInput);

    if (userValue === "NYC" || userValue === "New York City" || userValue === "New York"){
    $("body").css("background-image", "url(images/nyc.jpg)")  }
    else if (userValue ==="austin" || userValue === "Austin"|| userValue === "ATX"){
    $("body").css("background-image", "url(images/austin.jpg)")  }
    else if (userValue ==="LA" || userValue === "Los Angeles"){
    $("body").css("background-image", "url(images/la.jpg)")  }
    else if (userValue ==="sydney" || userValue === "Sydney"){
    $("body").css("background-image", "url(images/sydney.jpg)")  }
    else if (userValue ==="sf" || userValue === "San Francisco" || userValue === "San Fran" || userValue === "SF"){
        $("body").css("background-image", "url(images/sydney.jpg)")  }
    





}