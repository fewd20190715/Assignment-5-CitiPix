/*
Psuedocode
change the background color on the following submition
If a user submits:

"New York" or "New York City" or "NYC" make the background of the page nyc.jpg
"San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
"Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
"Austin" or "ATX" make the background of the page austin.jpg
"Sydney" or "SYD" make the background of the page sydney.jpg


*/

//wait to run until it is ready
 $(document).ready(function(){


//when we click update it runs the add city function 
 $('form').submit(addCity);
     
 function addCity(event) {
   event.preventDefault();
     
 //create a variable to store the city-value that is submited   
var city = $('#city-type').val();
     
//remove first background and change background to other background when addclass is submitted 
   if (city === 'New York' || city === 'NYC' || city === 'New York City' || city === 'new york' || city === 'nyc' || city === 'new york city') {
      $('body').removeClass('first-image').addClass('nyc');
    } else if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area' || city === 'san francisco' || city === 'sf' || city === 'bay area') {
      $('body').removeClass('first-image').addClass('sf');
    } else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX' || city === 'los angeles' || city === 'la' || city === 'lax') {
      $('body').removeClass('first-image').addClass('la');
    } else if (city === 'Austin' || city === 'ATX' || city === 'austin' || city === 'atx') {
       $('body').removeClass('first-image').addClass('austin');
    } else if (city === 'Sydney' || city === 'SYD' || city === 'sydney' || city === 'syd') {
       $('body').removeClass('first-image').addClass('sydney');
              
    }
     
    }
     
       });    