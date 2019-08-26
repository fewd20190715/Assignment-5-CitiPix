//user input -----------> background-image
//input in <input type="text" id="city-type" placeholder="Enter a city name...">
//submit on <input type="submit" value="Update" id="submit-btn">
//background image change <div class="container">

// type of user-input -------> corresponding type background image 
//between user inputs / background changes -----> no refresh ------ > event-prevent 

//Conditions
// if "New York" || "New York City" || "NYC" -------->  nyc.jpg
// if "San Francisco" || "SF" || "Bay Area" --------------> sf.jpg
//  if "Los Angeles" || "LA" || "LAX" -------------------> la.jpg
//   if "Austin" || "ATX" ------------------------> austin.jpg
//   if "Sydney" || "SYD" ------------------------> sydney.jpg


function onReady(){

   $('#submit-btn').click(onSubmit);

   function onSubmit(event) {
         event.preventDefault();
   }
   $('#submit-btn').click(changeBackground);

      function changeBackground() {

         let city = $('#city-type').val().toLowerCase().trim();

         if ( city === 'new york' || city === 'new york city' || city === 'nyc') {
            $('body').css({"background-image": "url(../images/nyc.jpg)", "background-size": "cover"});
            $('#city-type').val('');
         }
         else if ( city === 'san francisco' || city === 'sf' || city === 'bay area') {
            $('body').css({"background-image": "url(../images/sf.jpg)", "background-size": "cover"});
            $('#city-type').val('');
         }
      else if (city === 'los angeles' || city ==='la' || city ==='lax') {
            $('body').css({"background-image": "url(../images/la.jpg)", "background-size": "cover"});
            $('#city-type').val('');
         }
         else if (city === 'austin' || city ==='atx') {
            $('body').css({"background-image": "url(../images/austin.jpg)", "background-size": "cover"});
            $('#city-type').val('');
         }
         else if (city === 'sydney') {
            $('body').css({"background-image": "url(../images/sydney.jpg)", "background-size": "cover"});
            $('#city-type').val('');
         }
         else {
            alert('we\'re not there yet !');
            $('body').css({"background-image": "url(../images/citipix_skyline.jpg)", "background-size": "cover"});
            $('#city-type').val('');
         }
      } 
         console.log($("input").attr("type"));  
}

$('document').ready(onReady);



