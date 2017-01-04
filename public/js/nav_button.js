$(document).ready(function(){
    $(".reel_btn, .resume").hide();
    $(".resume_btn").click(function() {
        $(".resume_btn, .reel, .reel_btn, .resume").toggle(300);
    });
    $(".reel_btn").click(function() {
        $(".resume_btn, .reel, .reel_btn, .resume").toggle(300);
    });
});




/*var main = function() {
    $('.resume_btn').click(function() {
        $('.resume_btn').addClass('hidden');
        $('.reel_btn').removeClass('hidden');
        $('.reel').addClass('hidden');
        $('.resume').removeClass('hidden');
    });
    $('.reel_btn').click(function() {
        $('.resume_btn').removeClass('hidden');
        $('.reel_btn').addClass('hidden');
        $('.reel').removeClass('hidden');
        $('.resume').addClass('hidden');
    });
}

$(document).ready(main);*/