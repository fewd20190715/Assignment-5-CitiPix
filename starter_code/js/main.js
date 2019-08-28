/* ### Technical Requirements
- Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded (DONE)
- Use $.on(submit) or ```$.click``` to figure out when the user clicks the "submit" button (DONE)
- Prevent a form submission using the ```event.preventDefault()``` function (DONE)
- Call ```$.val()``` on inputs to get the string value of your user's input (Done)
- Store user input in ```var city``` (done)
- Create ```if / else if / else``` conditionals to control the flow of your application  (using switch statement instead)
- Write at least six different lines of pseudocode and display them inline as JavaScript comments
- Get the first element from an attribute name using ```$.attr()```(don't need I am using a container with an id of background)
- Use the ```||``` operator in your conditionals to allow for multiple string values to execute ```if/else if``` statement code ( i am using switch statements with multiple cases)
- If a user submits:
  - "New York" or "New York City" or "NYC" make the background of the page nyc.jpg (DONE)
  - "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg (DONE)
  - "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg (DONE)
  - "Austin" or "ATX" make the background of the page austin.jpg (DONE)
  - "Sydney" or "SYD" make the background of the page sydney.jpg (DONE) */

// loads the document and make sure commands are not executed until load
$( document ).ready(function() {
    console.log( "document loaded" );

//calls the submit button and prevents form submission
  $("#submit-btn").click(function () {
    event.preventDefault()
    console.log('submit button clicked');
//gets the value from #city-type id from HTML form and saves the variable as var city
    var city = $('#city-type').val().toLowerCase();
//multiple cases for city value begins

// NEW YORK BEGINS
    switch (city) {
      case ('new york'):
      case ('ny'):
      case ('nyc'):
        console.log("NY")
        $("#background").css('background-image','url("images/nyc.jpg")');
        break;
// NEW YORK ENDS

//SAN FRAN BEGINS
      case ('san francisco'):
      case ('sf'):
      case ('bay area'):
        console.log("SF")
        $("#background").css('background-image','url("images/sf.jpg")');
        break;
// SAN FRAN ENDS

// LA BEGINS
      case ('los angeles'):
      case ('la'):
      case ('lax'):
        console.log("LA")
        $("#background").css('background-image','url("images/la.jpg")');
        break;
// LA ENDS

// AUSTIN BEGINS
      case ('atx'):
      case ('austin'):
        console.log("ATX")
        $("#background").css('background-image','url("images/austin.jpg")');
        break;
// AUSTIN ENDS

//SYDNEY BEGINS
      case ('syd'):
      case ('sydney'):
        console.log("SYD")
        $("#background").css('background-image','url("images/sydney.jpg")');
        break;

//DEFAULT JUST IN CASE, PROBABLY NOT NEEDED BUT IT'S COO
      default:
        console.log("invalid city")
        $("#background").css('background-image','url("images/citipix_skyline.jpg")');
    }
  $('#city-type').val('')
  });
});
