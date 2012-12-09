$(function() {
    $( "#previous" ).button().click(function( event ) {
        $(".school-term-selector").append("<p>Test1</p>");
    });
    $( "#next" ).button().click(function( event ) {
        $(".school-term-selector").append("<p>Test2</p>");
    });
});