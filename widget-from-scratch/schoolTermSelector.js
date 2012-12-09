$(function() {
    $( "#previous" ).button().click(function( event ) {
        $(".school-term-selector").html("<p>Test1</p>");
    });
    $( "#next" ).button().click(function( event ) {
        $(".school-term-selector").html("<p>Test2</p>");
    });
});