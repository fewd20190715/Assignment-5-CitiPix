// Technical Requirements
// Call $.val() on inputs to get the string value of your user's input

// Store user input in var city

// Use $.on(submit) or $.click to figure out when the user clicks the "submit" button

// Create if / else if / else conditionals to control the flow of your application

// Write at least six different lines of pseudocode and display them inline as JavaScript comments

// Prevent a form submission using the event.preventDefault() function

// Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded

// Get the first element from an attribute name using $.attr()

// Use the || operator in your conditionals to allow for multiple string values to execute if/else if statement code

// If a user submits:

// "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
// "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
// "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
// "Austin" or "ATX" make the background of the page austin.jpg
// "Sydney" or "SYD" make the background of the page sydney.jpg

//I need to have the keywords "New York, New York City, and NYC" associated with the "nyc image" so that when i type in the keywords into the search box and click update the nyc image will be set as the background image.
// ^ Same with San Francisco
// ^ Same with Los Angeles
// ^ Same with Austin
// ^ Same with Sydney

function onReady() {

    function onClickUpdate(event) {
        event.preventDefault();
        const cityName = $('#city-type').val();
        
        if (!cityName){
        return;
        }

        if (cityName == 'New York' || cityName == 'New York City' || cityName == 'NYC') {
            $('body').css('background-image', 'url(images/nyc.jpg)');
        } else if (cityName == 'San Francisco' || cityName == 'SF' || cityName == 'Bay Area') {
           $('body').css('background-image', 'url(images/sf.jpg)');
        } else if (cityName == 'Los Angeles' || cityName == 'LA' || cityName == 'LAX') {
            $('body').css('background-image', 'url(images/la.jpg)');
        } else if (cityName == 'Austin' || cityName == 'ATX') {
            $('body').css('background-image', 'url(images/austin.jpg)');
        } else if (cityName == 'Sydney' || cityName == 'SYD') { 
            $('body').css('background-image', 'url(images/sydney.jpg)');
        }
    
    }
    $('.container').submit(onClickUpdate);
    
}
$('document').ready(onReady);
