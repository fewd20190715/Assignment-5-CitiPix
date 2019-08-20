/*
Take value of input
match input to available options on submit
if (input) is typed in, change background to specified img
*/

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
        $("body").attr("background", "url(../images/austin.jpg)");
    }
    else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX') {
        $("body").attr("background", "url(../images/la.jpg)");
    }
    else if (city === 'New York' || city === 'New York City' || city === 'NYC') {
        $("body").attr("background", "url(../images/nyc.jpg)");
    }
    else if (city === 'San Fransisco' || city === 'SF' || city === 'Bay Area') {
        $("body").attr("background", "url(../images/sf.jpg)");
    }
    else if (city === 'Sydney' || city === 'SYD') {
        $("body").attr("background", "url(../images/sydney.jpg)");
    }
}