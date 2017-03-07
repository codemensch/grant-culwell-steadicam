$(document).ready(function(){
    //MainNav
    $(".container").load("reels.html", function(){});
    $("#reels-btn").click(function() {
        $('.nav').find(".active").removeClass("active");
        $('#reels-btn').addClass('active');
        $("#resume").detach();
        $("#about").detach();
        $("#contact").detach();
        $(".container").load("reels.html", function(){});
    });
    
    $("#resume-btn").click(function() {
        $('.nav').find(".active").removeClass("active");
        $('#resume-btn').addClass('active');
        $("#reels").detach();
        $("#about").detach();
        $("#contact").detach();
        $(".container").load("resume.html", function(){});
    });
    
    $("#about-btn").click(function() {
        $('.nav').find(".active").removeClass("active");
        $('#about-btn').addClass('active');
        $("#reels").detach();
        $("#resume").detach();
        $("#contact").detach();
        $(".container").load("about.html", function(){});
    });
    
    $("#contact-btn").click(function() {
        $('.nav').find(".active").removeClass("active");
        $('#contact-btn').addClass('active');
        $("#reels").detach();
        $("#resume").detach();
        $("#about").detach();
        $(".container").load("contact.html", function(){});
    });
    
    //Reels Thumbnail Nav
    $(document).on('click', "#sizzle-btn", function() {
        $("#sizzle").removeClass('hidden-video');
        $("#long").addClass('hidden-video');
    });
    
    $(document).on('click', "#long-btn",function() {
        $("#long").removeClass('hidden-video');
        $("#sizzle").addClass('hidden-video');
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