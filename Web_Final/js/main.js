$("#timeline-btn").click(function() {
    $("#timeline-btn").addClass("selected")
    $("#block-btn").removeClass("selected")
    $("#timeline").css('display', 'flex')
    $("#block").hide()
})

$("#block-btn").click(function() {
    $("#timeline-btn").removeClass("selected")
    $("#block-btn").addClass("selected")
    $("#block").css('display', 'flex')
    $("#timeline").hide()
})

$("#pie-btn").click(function() {
    $("#pie-btn").addClass("selected")
    $("#bar-btn").removeClass("selected")
    $("#pie").css('display', 'flex')
    $("#bar").hide()
})

$("#bar-btn").click(function() {
    $("#pie-btn").removeClass("selected")
    $("#bar-btn").addClass("selected")
    $("#bar").css('display', 'flex')
    $("#pie").hide()
})


$("#site-nav li a").click(function() {
    var navLink = $(this);

    $("html,body").animate({
        scrollTop: $(navLink.attr("href")).offset().top
    }, "slow")
})