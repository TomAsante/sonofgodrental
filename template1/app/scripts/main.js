jQuery(function($){
    var date = new Date().getFullYear();

    $('.navbar-bottom span.year').html(date);

    $('.social-icons a').hover(() => {
        $('g').css('fill', '#EF7344');
    }, () => {
        $('g').css('fill', '#000000');
    });

    $('#Glide').glide({
        type: 'carousel'
    });

    $('#typed').typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 0,
        backDelay: 1900,
        loop: true,
    });

//   appear({
//     init: function init(){
//         // console.log('dom is ready');
//     },
//     elements: function elements(){
//         // work with all elements with the class "track"
//         return document.getElementsByClassName('track');
//     },
//     appear: function appear(el){
//         console.log('visible', el);
//         setTimeout(function() {
//             el.className += ' animated fadeIn';
//         }, 200);   
//     },
//     disappear: function disappear(el){
//         // console.log('no longer visible', el);
//         // $('.track').addClass('animated fadeOut');
//     },
//     bounds: 0,
//     reappear: true
//  });

 jQuery('#gallery').unitegallery({
     gallery_theme: 'tiles'
 });

var $form = $("form"),
  $successMsg = $(".alert");

  $form.parsley();
//   .on("form:submit", function(){
//   $successMsg.show();
//   return false; // avoid submitting
//});
//  menu items hover effect
    // $('.nav li a').hover(
    //     function() {
    //         $(this).addClass('hvr-reveal')
    //     }, function() {
    //         $(this).removeClass('hvr-reveal')
    //     }
    // );
});











// //  <script src="/bower_components/jquery/dist/jquery.js"></script>
//     <script src="/bower_components/modernizr/modernizr.js"></script>
//     <script src="/bower_components/bootstrap-sass/assets/javascript/bootstrap.js"></script>
//     <script src="/bower_components/propeller/js/propeller.min.js"></script>
//     <script src="/bower_components/glidejs/dist/glide.js"></script>
//     // <script src="/bower_components/typedjs/dist/typed.min.js"></script>