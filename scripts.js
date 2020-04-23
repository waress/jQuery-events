$('.button').click(() => {
    console.log('Yeah, you clicked me');
});

$('#button-2').click( () => { 
    $('.button').text('Change the text');
});

$('#button-3').click( () => { 
    $('button').css('background-color', 'yellow');
});