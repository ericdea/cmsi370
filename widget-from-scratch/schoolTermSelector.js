$(function() {

    //First button cycles chronologically backwards through the school terms.

    // JD: The selection logic here is correct but can be done with
    //     less code (think data structure).
    $( "#previous" ).button().click(function( event ) {
        // JD: Triple equals (===) is preferred in JavaScript, although
        //     at least in this case it does not have a material effect.
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
    
    //Second button cycles chronologically through the school terms.
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