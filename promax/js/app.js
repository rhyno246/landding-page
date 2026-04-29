var action="click";
var speed="500";
$(document).ready(function () {
    $('.button-mobile-default').click(function () {
        $('.header-menu').addClass('active');
        $('.button-mobile-close').addClass('active');
    })
    $('.button-mobile-close').click(function () {
        $('.header-menu').removeClass('active');
        $('.button-mobile-close').removeClass('active');
    });
    $('.list-question li.question').on(action, function() {
        $(this).next()
            .slideToggle(speed)
                .siblings('li.answer')
                    .slideUp();
    });
})
