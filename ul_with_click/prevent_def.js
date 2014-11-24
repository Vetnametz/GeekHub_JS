jQuery(function ($) {
    $('.wrapper ul li input').click(function (e) {
        if ($(this).parent().hasClass('marked')) {
            $(this).parent().removeClass('marked');
        } else {
            $(this).parent().addClass('marked');
        }
    });
    $('.wrapper ul li a.remove-this').click(function (e) {
        $(this).closest('li').remove();
    });
    $('.wrapper ul li a#remove-all').click(function (e) {
        $('.wrapper ul li.marked').remove();
    });
});