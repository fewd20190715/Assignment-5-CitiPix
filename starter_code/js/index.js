$(document).ready(function () {

    $('.container').submit(function (event) {
        event.preventDefault() //prevent default
        var city = $('#city-type').val().toLowerCase()
        updateCity(city)
    })

    //update city image
    function updateCity(city) {
        if (city === "nyc" || city === "new york" || city === "new york city") {
            $('body').css('background-image', 'url(images/nyc.jpg')
        } else if (city === "bay area" || city === "sf" || city === "san francisco") {
            $('body').css('background-image', 'url(images/sf.jpg')
        } else if (city === "los angeles" || city === "la" || city === "lax") {
            $('body').css('background-image', 'url(images/la.jpg')
        } else if (city === "austin" || city === "atx") {
            $('body').css('background-image', 'url(images/austin.jpg')
        } else if (city === "sydney" || city === "syd") {
            $('body').css('background-image', 'url(images/sydney.jpg')
        }

        $('#city-type').val('')

    }

})
