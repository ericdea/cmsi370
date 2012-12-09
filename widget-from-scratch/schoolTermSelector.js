$(function() {
    $( "#previous" ).button().click(function( event ) {
        if ( $(".school-term-selector").html() == "<p>Spring</p>" ) {
        
            $(".school-term-selector").html("<p>Winter</p>");
        }
        else if ($(".school-term-selector").html() == "<p>Winter</p>") {
        
            $(".school-term-selector").html("<p>Fall</p>");
        }
        else if ($(".school-term-selector").html() == "<p>Fall</p>") {
        
            $(".school-term-selector").html("<p>Summer</p>");
        }
        else if ($(".school-term-selector").html() == "<p>Summer</p>") {
        
            $(".school-term-selector").html("<p>Spring</p>");
        }
    });
    $( "#next" ).button().click(function( event ) {
        if ( $(".school-term-selector").html() == "<p>Summer</p>" ) {
        
            $(".school-term-selector").html("<p>Fall</p>");
        }
        else if ($(".school-term-selector").html() == "<p>Fall</p>") {
        
            $(".school-term-selector").html("<p>Winter</p>");
        }
        else if ($(".school-term-selector").html() == "<p>Winter</p>") {
        
            $(".school-term-selector").html("<p>Spring</p>");
        }
        else if ($(".school-term-selector").html() == "<p>Spring</p>") {
        
            $(".school-term-selector").html("<p>Summer</p>");
        }
    });
});