
$(document).ready(function() {


    $('.container').submit(function(event) {
        event.preventDefault()
    //define variable to reference what city the user inputs
    // used .toLowerCase so all input is case insensitive
        var city = $('#city-type').val().toLowerCase()
    //run changeBackground function on each city the user inputs
        changeBackground(city)
    })

//define function to change background image based on what city the user types
    function changeBackground(city) {
    //if input is nyc or new york or new york city, change the background image to nyc.jpg
        if (city === "nyc" || city === "new york" || city === "new york city") {
            $('body').css('background-image', 'url(images/nyc.jpg')
    // if input is bay area or sf, change background image to sf.jpg
        } else if (city === "bay area" || city === "sf" || city === "san francisco") {
            $('body').css('background-image', 'url(images/sf.jpg') 
    // if input is la or los angeles, change background image to la.jpg
        } else if (city === "los angeles" || city === "la" || city ==="lax") {  
            $('body').css('background-image', 'url(images/la.jpg')
    // if input is austin or atx, change background image to austin.jpg
        } else if (city === "austin" || city === "atx") { 
            $('body').css('background-image', 'url(images/austin.jpg')
    // if input is sydney or syd, change background image to sydney.jpg
        } else if (city === "sydney" || city === "syd") {
            $('body').css('background-image', 'url(images/sydney.jpg') }
    // clear the input after it is submitted
        $('#city-type').val('')
        
    }

})



