/*
Take value of input
match input to available options on submit
if (input) is typed in, change background to specified img
*/

//make sure to let DOM load first
$("document").ready(function(){

    //stop the page from refreshing
    $("#submit-btn").click(function (event) {
        event.preventDefault();
    });

    //when clicking submit, run string matching function
    $("#submit-btn").click(cityChange);

    function cityChange() {
        // set city var equal to string input
        var city = $("#city-type").val();

        if (city === 'Austin' || city === 'ATX') {
            $("body").css("background", "url(images/austin.jpg)");
        }
        else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX') {
            $("body").css("background", "url(images/la.jpg)");
        }
        else if (city === 'New York' || city === 'New York City' || city === 'NYC') {
            $("body").css("background", "url(images/nyc.jpg)");
        }
        else if (city === 'San Fransisco' || city === 'SF' || city === 'Bay Area') {
            $("body").css("background", "url(images/sf.jpg)");
        }
        else if (city === 'Sydney' || city === 'SYD') {
            $("body").css("background", "url(images/sydney.jpg)");
        }
    }
});