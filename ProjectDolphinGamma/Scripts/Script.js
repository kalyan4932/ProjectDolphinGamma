$(document).ready(function () {
    
    $('.pdlph-nav-item').click(function () {

        $('.pdlph-nav-item').removeClass('active');
        $(this).addClass('active');

        id = $(this).attr('data-nav-id');
        $('.pdlph-slide').hide();
        //$('.pdlph-content-container').hide();
        $('[data-slide-id="' + id + '"]').fadeIn();
        //$('.pdlph-content-container').slideDown();
    });

});


$(document).ready(function () {
    $('ul li').click(function (e) {
        parent = $(this);
        ink = parent.find('.ink');
        if(parent.find(".ink").length == 0)
        parent.prepend("<span class='ink'></span>");
        ink.removeClass('animate');
        d = Math.max(parent.outerWidth(), parent.outerHeight());
        ink.css({ width: d+'px', height: d+'px' });

        x = e.pageX - parent.offset().left - ink.width() / 2;
        y = e.pageY - parent.offset().top - ink.height() / 2;

        ink.css({ top: y + 'px', left: x + 'px' }).addClass('animate');
       
    });
});
