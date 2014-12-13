jQuery(function ($) {

    var friends = [
        { name: "Денис Абрамович", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com" },
        { name: "Алина Ковальская", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com" },
        { name: "Марина Анекеева", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com" },
        { name: "Альберт Крузенштерн", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com" },
        { name: "Полина Бобридзе", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com" },
        { name: "Анна Карман", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com" },
        { name: "Владимир Гиревич", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com" },
        { name: "Антуан Тюльпан", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com" }
    ];

    // Create Friend Model
    var Friend = Backbone.Model.extend({

        initialize: function () {
            console.log('Friend model is involved and one friend is created ...');
        }

    });

    var FriendsCollection = Backbone.Collection.extend({

        model: Friend,

        initialize: function () {
            //when some property in this object has changed, run this.newComer() function
            this.on('add',this.newComer,this);
            this.on('remove',this.removeFriend,this);
        },

        newComer : function (model) {
            alert('welcome ' + model.get('name'));
            friendView.render();
        },

        removeFriend : function (model) {
            alert('Go away ' + model.get('name'));
            console.log(model.get('name'));
            var needRemove = model.get('name');
            console.log(friends.length);
            friends = _.reject(friends, function(el) {
                return el.name === needRemove;
            });
            console.log(friends.length);
            friendView.render();
        },

        getByName: function(name){
            return this.filter(function(val) {
                return val.get("name") === name;
            })
        }

    });

    var FriendView = Backbone.View.extend({

        el: $('#friends'),

        //we listen for clicks on items
        events: {
            "click .remove-this": "removeOneFriend",
            "click li": "addClassMarked"
        },

        initialize: function () {
            console.log('Friend view is involved and all friends is rendered ...');
            this.collection = new FriendsCollection(friends);
        },

        render: function () {
            //if you put this code inside a view, the view will now listening to its model change event
            this.listenTo(this.collection, 'change', alert('Collection FriendsCollection changed ...'));
            _.each(this.collection.models, function (item) {
                var html = "<li><label></label><input value='" + item.get('name') + "' type='text'/><span>email: " + item.get('email') + "</span><a class='remove-this' href='#'>Удалить</a></li>";
                $('#friends').append(html);
            }, this);
        },

        addClassMarked: function () {
            $(event.target).addClass('marked');
        },

        removeOneFriend: function(event){
            //TODO refact this
            //remove friend from collection
            var getInputVal = $(event.currentTarget).parent().find('input').val();
            this.collection.remove(this.collection.getByName(getInputVal));
            //remove friend from DOM
            //$(event.currentTarget).parent().remove();
            return false;
        }
        
    });
    var friendView = new FriendView();

    var ControlPanel = Backbone.View.extend({

        el: $('#control'),

        events: {
            "click #remove-all": "removeAllFriends",
            "click #add-new": "addFriend"
        },

        initialize: function () {
            this.collection = friendView.collection;
        },

        addFriend: function () {
            friendView.collection.add([
                {name: "Flying Dutchman", age: '23'},
                {name: "Black Pearl", age: '31'}
            ]);
        },

        //TODO make something with this SHIT
        /*Need to remove all friends that was marked
        BUT HOW get here access collection from view FriendView*/
        removeAllFriends: function () {
            $(event.currentTarget).siblings('#friends').find('li').find('input.marked').parent().remove();
        }

    });
    var controlPanel = new ControlPanel();

});
