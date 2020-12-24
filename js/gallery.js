$( document ).ready(function() {

    // Hide all images in the gallery apart from the first element
    $( ".gallery li" ).slice( 1 ).hide();

    var cycleImages = true;

    setInterval(() => {
        if(!cycleImages) return;

        $(".gallery li:first")
          .hide()
          .next()
          .fadeIn(500)
          .end()
          .appendTo('.gallery');
    },  3000);

    $( ".gallery" )
        .hover
           (() => cycleImages = false
           ,() => cycleImages = true
           );
});
