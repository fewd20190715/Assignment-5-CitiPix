

$( document ).ready(function() {
  console.log( "ready!" );
  
$('#submit-btn').click(updateDisplay);
  
function updateDisplay(){
      event.preventDefault();
      var city = $('#city-type').val();
      console.log(city);
      if (city === "New York City" || city === "nyc" || city === "New York" || city === "new york"){
         $("body").css("background-image","url('https://i.imgur.com/dZMRlum.jpg')");
       } else if (city === "austin" || city === "Austin" || city === "ATX"){
         $("body").css("background-image","url('https://i.imgur.com/hJZUjM8.jpg')")
       } else if (city === "LA" || city === "Los Angeles" || city === "la"){
         $("body").css("background-image","url('https://i.imgur.com/2KXKv5J.jpg')")
       } else if (city === "sf" || city === "san francisco" || city === "San Francisco"){
         $("body").css("background-image","url('https://i.imgur.com/bs9hJpO.jpg')")
       }else if (city === "sydney" || city === "Sydney"){
         $("body").css("background-image","url('https://i.imgur.com/3taG5zU.jpg')")
       }
      var city = $('#city-type').val('');
  }

});