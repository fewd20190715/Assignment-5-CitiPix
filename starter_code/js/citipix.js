/*
1. Need to make variable city first, so user can input values in it.
2. if user put value NYU then background should change to image of NYU
3.else if user put value SFO then background should change to SFO Image
4.the input box should get clear each time we submit.


*/


$(document).ready(onReadyFunction);
function onReadyFunction() {
  $("form").submit(updateDisplay)
        function updateDisplay(){
            // clear();
            event.preventDefault();
            var city = $('#city-type').val();
            console.log(city);

     if( city ===  "NYU" || city === "New York city" || city === "New York"){
        $('body').css('background-image', 'url(images/nyc.jpg)');}
        else if( city === "SFO" || city === "San Francisco" || city === "Bay Area" ){
            $('body').css('background-image', 'url(images/sf.jpg)');
        } else if( city ===  "LA"|| city === "LAX"|| city === "Los Angeles" ){
            $('body').css('background-image', 'url(images/la.jpg)');  
        } else if( city ===  "Austin"||  city === "ATX" ){
            $('body').css('background-image', 'url(images/austin.jpg)'); 
        } else if( city ===  "Sydney" || city=== "SYD" ){
            $('body').css('background-image', 'url(images/sydney.jpg)');  

        }
         var city = $('#city-type').val('');
    }







}