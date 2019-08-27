//take a user's input 
//update the background image based on that input
//store input in variable
//define when user clicks submit button
//create conditionals


$('#city-type').change(changeBackground)

function changeBackground() {
  const city = $(this).val(); 
  const body = $('body')
  let currentClass = body.attr('class')
  
  body.removeClass();
  
  if (city === 'NYC' || city === 'New York' || city === 'New York City') {
    $('body').removeClass();
    $('body').addClass("nyc");
}
  else if(city === 'SF' || city === 'San Fransico' || city === 'Bay Area') {
    $('body').removeClass();
    $('body').addClass('sf');
    }
  else if(city =='LA' || city === 'LAX'|| city ==='Los Angeles') {
    $('body').removeClass();
    $('body').addClass('la');
    }
  else if(city ==='ATX'|| city ==='Austin') {
    $('body').removeClass();
    $('body').addClass('atx');
    }
  else if(city==='SYD'||city ==='Sydney') {
    $('body').removeClass();
    $('body').addClass('syd');
    }

}
