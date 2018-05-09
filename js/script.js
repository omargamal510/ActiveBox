/* Slider Button in navbar */
$(document).ready(function(){
    $('button.slide-button').click(function(){
        $(this).toggleClass('transform');
        $('div.slide').slideToggle();
    });
});
/* Slider Button in navbar */


/* Start scroll to top */
var toTop = document.getElementById('to-top');
var html  = document.querySelector('html');

function bttnToTop() {
    html.scrollTo(0, 0);
}

addEventListener('click', bttnToTop);
/* End scroll to top */


