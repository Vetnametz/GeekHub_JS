jQuery(function ($) {

    $('ul#friends').click(function (event) {
        var target = event.target,
            $target = $(target),
            marked = !($target.hasClass('marked'));

        $target.toggleClass('marked', marked);

        if ($target.hasClass('remove-this')) {
            $target.closest('li').remove();
        }
        event.stopPropagation();
    });

    $('.wrapper ul#control li a#remove-all').click(function (event) {
        $('.wrapper ul#friends li input.marked').parent().remove();
    });

    $('.wrapper ul#control li a#add-new').click(function (event) {
        var addNew = '<li><label></label><input value="" type="text"/><a class="remove-this" href="#">Удалить</a></li>';
        $('#friends').append(addNew);
    });

});