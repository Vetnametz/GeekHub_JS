jQuery(function ($) {
    //$('.wrapper ul li input').click(function (e) {
    //    if ($(this).parent().hasClass('marked')) {
    //        $(this).parent().removeClass('marked');
    //    } else {
    //        $(this).parent().addClass('marked');
    //    }
    //});
    //$('.wrapper ul li a.remove-this').click(function (e) {
    //    $(this).closest('li').remove();
    //});
    Element.prototype.hasClass = function (className) {
        return new RegExp(' ' + className + ' ').test(' ' + this.className + ' ');
    };
    Element.prototype.addClass = function (className) {
        if (!this.hasClass(className)) {
            this.className += ' ' + className;
        }
        return this;
    };
    Element.prototype.removeClass = function (className) {
        var newClass = ' ' + this.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(className)) {
            while (newClass.indexOf( ' ' + className + ' ') >= 0) {
                newClass = newClass.replace(' ' + className + ' ', ' ');
            }
            this.className = newClass.replace(/^\s+|\s+$/g, ' ');
        }
        return this;
    };

    $('.wrapper ul').click(function (event) {
        var target = event.target;
        if (target.tagName === 'INPUT' && target.hasClass('marked')) {
            target.removeClass('marked');
        } else if (target.hasClass('remove-this')){
            target.parentNode.remove();
        } else if (target.tagName === 'INPUT' && !(target.hasClass('marked'))) {
            target.addClass('marked');
        }
        event.stopPropagation();
    });
    $('.wrapper ul li a#remove-all').click(function (event) {
        $('.wrapper ul li input.marked').parent().remove();
    });
});