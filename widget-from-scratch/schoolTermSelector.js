$(function() {
    $( "input[type=submit], #previous" ).button().click(function( event ) {
        event.preventDefault();
    });
    $( "input[type=submit], #next" ).button().click(function( event ) {
        event.preventDefault();
    });
});