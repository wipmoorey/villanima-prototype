$( document ).ready(function() {

    // Hide all images in the gallery apart from the first element
    $( ".gallery li" ).slice( 1 ).hide();

    var cycleImages = true;

    var cycleImage = ( e ) => {

        $(".gallery li:first")
          .hide()
          .next()
          .fadeIn(500)
          .end()
          .appendTo('.gallery');
    }

    setInterval(() => {
        if(!cycleImages) return;

        cycleImage();

    },  3000);

    $( ".gallery li" ).on( "click swipe", e => {
        cycleImage();
    });

    $( ".gallery" )
        .hover
           (() => cycleImages = false
           ,() => cycleImages = true
           );
});
