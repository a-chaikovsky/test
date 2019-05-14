$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 800) {
            $('#up').show()
        } else {
            $('#up').hide()
        }
    });


    $("#menu, #up").on("click", "a", function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 700);
    });

    // $('#group input:checkbox').click(function () {
    //     if ($(this).prop('checked')) {
    //         $('#group input:checkbox').not(this).prop('checked', false);
    //
    //     }
    // });

    $("input#publicTel").change(function () {
        if ($(this).prop('checked')) {
            $('#hideTel').fadeIn().show();

        } else {
            $('#hideTel').fadeOut(300);
        }
    });

    $("input#publicFb").change(function () {
        if ($(this).prop('checked')) {
            $('#hideFb').fadeIn().show();
        } else {
            $('#hideFb').fadeOut(300);
        }
    });

    $('#burg').on('click', function () {
        $('.header__nav').slideToggle(700);
    });

});