//jQuery(function ($) {
//
//    $('ul#friends').click(function (event) {
//        var target = event.target,
//            $target = $(target),
//            marked = !($target.hasClass('marked'));
//
//        $target.toggleClass('marked', marked);
//
//        if ($target.hasClass('remove-this')) {
//            $target.closest('li').remove();
//        }
//        event.stopPropagation();
//    });
//
//    $('.wrapper ul#control li a#remove-all').click(function (event) {
//        $('.wrapper ul#friends li input.marked').parent().remove();
//    });
//
//    $('.wrapper ul#control li a#add-new').click(function (event) {
//        var addNew = '<li><label></label><input value="" type="text"/><a class="remove-this" href="#">Удалить</a></li>';
//        $('#friends').append(addNew);
//    });
//
//});

jQuery(function ($) {
    // Create Friend Model
    var Friend = Backbone.Model.extend({

        initialize: function () {
            console.log('Friend model is involved and one friend is created ...');
        },

        defaults: {
            name: 'New friend',
            age: ''
        }

    });
    var someFriend = new Friend({name:'Сергей Бедный', age:'34', email: 'ololo@tra'});
    console.log(someFriend);

    var FriendView = Backbone.View.extend({

        initialize: function () {
            console.log('Friend view is involved and one friend is rendered ...');
            this.render();
        },

        render: function () {
            var html = "<li><label></label><input value='" + someFriend.get('name') + "' type='text'/><span>возраст " + someFriend.get('age') + "</span><a class='remove-this' href=''>Удалить</a></li>";
            console.log();
            $('#friends').append(html);
        }
    });
    var friendView = new FriendView();


});
