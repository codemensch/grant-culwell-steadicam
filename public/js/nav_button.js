$(document).ready(function(){
    //MainNav

    
    
    //Reels Thumbnail Nav
    $(document).on('click', "#sizzle-btn", function() {
        $("#sizzle").removeClass('hidden-video');
        $("#long").addClass('hidden-video');
        $('.col-md-2').find(".active").removeClass("active");
        $('#sizzle-btn').addClass('active');
    });
    
    $(document).on('click', "#long-btn",function() {
        $("#long").removeClass('hidden-video');
        $("#sizzle").addClass('hidden-video');
        $('.col-md-2').find(".active").removeClass("active");
        $('#long-btn').addClass('active');
    });
    
    
    
    /*Non AJAX Nav
    $("#long, #resume, #about").hide();
    
    
    $("#resume-btn").click(function() {
        $('#reels-btn, #about-btn').removeClass('current-page');
        $('#resume-btn').addClass('current-page');
        $('#sizzle-btn').hide('fade');
        $('#long-btn').hide('fade');
        $('#sizzle').hide('fade');
        $('#long').hide('fade');
        $('#about').hide('fade');
        $('#resume').show('fade');
    });
    
    $("#reels-btn").click(function() {
        $('#resume-btn, #about-btn').removeClass('current-page');
        $('#reels-btn').addClass('current-page');
        $('#sizzle-btn').show('fade');
        $('#long-btn').show('fade');
        $('#sizzle').show('fade');
        $('#long').hide('fade');
        $('#resume').hide('fade');
        $('#about').hide('fade');
    });
    
    $("#about-btn").click(function() {
        $('#resume-btn, #reels-btn').removeClass('current-page');
        $('#about-btn').addClass('current-page');
        $('#sizzle-btn').hide('fade');
        $('#long-btn').hide('fade');
        $('#sizzle').hide('fade');
        $('#long').hide('fade');
        $('#resume').hide('fade');
        $('#about').show('fade');
    });
     */
  
});