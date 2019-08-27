//Upon Submit button = 
//function takes city name, and corresponding background image appears.//

//New York" or "New York City" or "NYC" make the background of the page nyc.jpg
//"San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
//"Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
//"Austin" or "ATX" make the background of the page austin.jpg
//"Sydney" or "SYD" make the background of the page sydney.jpg



$('document').ready(onReadyFunction)

function onReadyFunction() {
     /*prevent form submission*/
    function onSubmit(event) {
     event.preventDefault();
     var city = $('#city-type').val();
        
     if (city === 'new york' || city === 'New York City'|| city === 'NYC') {
          $('body').css('background-image', 'url("images/nyc.jpg")');
     }

     else if (city === 'San Fransisico' || city === 'SF'|| city === 'Bay Area') {
          $('body').css('background-image', 'url("images/sf.jpg")');
     }

     else if (city === 'Los Angeles' || city === 'LA'|| city === 'LAX') {
          $('body').css('background-image', 'url("images/la.jpg")');
     }

     else if (city === 'Austin' || city === 'ATX') {
       $('body').css('background-image', 'url("images/austin.jpg")');
     }

     else if (city === 'Sydney' || city === 'SYD') {
          $('body').css('background-image', 'url("images/sydney.jpg")');
     } 

    }


    $('#submit-btn').click(onSubmit);

    
};
