/*
1 variable = user's input
trim extra spaces either before or after the input value

need a function to 
(1) on submit button click, figure out what keyword is submitted
(2) change the background image to one that matches the keyword
    if a user submits:
    - "New York" or "New York City" or "NYC" --> make the background of the page nyc.jpg
    - "San Francisco" or "SF" or "Bay Area" --> make the background of the page sf.jpg
    - "Los Angeles" or "LA" or "LAX" --> make the background of the page la.jpg
    - "Austin" or "ATX" --> make the background of the page austin.jpg
    - "Sydney" or "SYD" --> make the background of the page sydney.jpg
(3) after each submit button click, reset user input
(4) if value none of the above, alert the user

*/

function onReady() {

    function onSubmit(event) {
        event.preventDefault();
        var city = $('#city-type').val();
        city = city.trimLeft('').trimRight('');

        if (city == 'New York' || city == 'New York City' || city == 'NYC') {
            $('body').css('background-image', 'url("images/nyc.jpg")');
            $('#city-type').val("");
        } else if (city == 'San Francisco' || city == 'SF' || city == 'Bay Area') {
            $('body').css('background-image', 'url("images/sf.jpg")');
            $('#city-type').val("");
        } else if (city == 'Los Angeles' || city == 'LA' || city == 'LAX') {
            $('body').css('background-image', 'url("images/la.jpg")');
            $('#city-type').val("");
        } else if (city == 'Austin' || city == 'ATX') {
            $('body').css('background-image', 'url("images/austin.jpg")');
            $('#city-type').val("");
        } else if (city == 'Sydney' || city == 'SYD') {
            $('body').css('background-image', 'url("images/sydney.jpg")');
            $('#city-type').val("");
        } else {
            alert("You sure you've been to that city?");
        }
    }
    $('#submit-btn').click(onSubmit);
}

$('document').ready(onReady);