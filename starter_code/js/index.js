
$(document).ready(function(){


  
    $('#submit-btn').click(updateDisplay);
       
  
    function updateDisplay(){
        event.preventDefault();
        var city = $('#city-type').val();
        console.log(city);
   
        if (city === "New York City" || city === "nyc" || city === "New York"){
        $("body").css("background-image","url('images/nyc.jpg')");
        } else if (city === "austin" || city === "Austin" || city === "ATX"){
        $("body").css("background-image","url('images/austin.jpg')")
        } else if (city === "LA" || city === "Los Angeles" || city === "la"){
        $("body").css("background-image","url('/images/austin.jpg')")
        } else if (city === "sf" || city === "san francisco" || city === "San Francisco"){
            $("body").css("background-image","url('images/sf.jpg')")
        }else if (city === "sydney" || city === "Sydney"){
            $("body").css("background-image","url('images/sydney.jpg')")
        }




        var city = $('#city-type').val('');

    }
  

});
