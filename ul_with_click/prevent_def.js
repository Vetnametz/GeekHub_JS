jQuery(function ($) {
    $('.wrapper ul').click(function (event) {
        var target = event.target;
        if ($(target).prop("tagName") === 'INPUT' && $(target).hasClass('marked')) {
            $(target).removeClass('marked');
        } else if ($(target).hasClass('remove-this')){
            $(target).parent().remove();
        } else if ($(target).prop("tagName") === 'INPUT' && !($(target).hasClass('marked'))) {
            $(target).addClass('marked');
        }
        event.stopPropagation();
    });
    $('.wrapper ul li a#remove-all').click(function (event) {
        $('.wrapper ul li input.marked').parent().remove();
    });
});