function onReady() {

    $('#user-input').submit(onSubmit);

    function onSubmit(submit) {
        submit.preventDefault();

        let UserInput = $('#city-type').val().toLowerCase()
        if ((UserInput == 'nyc') || (UserInput == 'new york') || (UserInput == 'new york city')) {
            $('body').css('background-image', 'url("images/Willi.jpg")');
        } 
        else if ((UserInput == 'la') || (UserInput == 'lax') || (UserInput == 'los angeles')) {
            $('body').css('background-image', 'url("images/la.jpg")')
        }
        else if ((UserInput == 'sf') || (UserInput == 'san francisco') || (UserInput == 'bay area')) {
            $('body').css('background-image', 'url("images/sf.jpg")')
        }
        else if ( (UserInput == 'atx') || (UserInput == 'austin') ) {
            $('body').css('background-image', 'url("images/austin.jpg")')
        }
        else if ( (UserInput == 'sydney') || (UserInput == 'syd') ) {
            $('body').css('background-image', 'url("images/sydney.jpg")')
        }
    
        UserInput = ''
    }
}

$("document").ready(onReady);


