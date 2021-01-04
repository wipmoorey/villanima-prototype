$( document ).ready(function() {

    // Hide all images in the gallery apart from the first element
    $( ".gallery li" ).slice( 1 ).hide();

    var cycleImages = true;
    var start_x = 0;

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

    },  1500);

    $( ".gallery li" ).on( "click", e => {
        cycleImages = false;
        cycleImage();
    });

    $( ".gallery li" ).on( "touchstart", e => {
        start_x = e.originalEvent.touches[0].clientX;
    });

    $( ".gallery li" ).on( "touchend", e => {
        if( e.originalEvent.changedTouches[0].clientX < start_x)
        {
            cycleImages = false;
            cycleImage();
            console.log( "image swiped" );
        }
    });


    $( ".gallery" )
        .hover
           (() => cycleImages = false
           ,() => cycleImages = true
           );
});
