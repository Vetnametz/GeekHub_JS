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
            
        },

        

        getByName: function(name){
            return this.filter(function(val) {
                return val.get("name") === name;
            })
        }

    });

    var FriendView = Backbone.View.extend({

        el: '#friends',

        //we listen for clicks on items
        events: {
            "click .remove-this": "removeOneFriend",
            "click li": "addClassMarked"
        },

        initialize: function () {
            console.log('Friend view is involved and all friends is rendered ...');
            
            this.collection.on('add', this.newComer);
            this.collection.on('remove', this.removeFriend);
        },
        
        newComer : function (model) {
            this.render();
        },

        removeFriend : function (model) {
            var needRemove = model.get('name');
            friends = _.reject(friends, function(el) {
                return el.name === needRemove;
            });
            this.render();
        },

        render: function () {
            this.collection.each(function (item) {
                var html = "<li><label></label><input value='" + item.get('name') + "' type='text'/><span>email: " + item.get('email') + "</span><a class='remove-this' href='#'>Удалить</a></li>";
                this.$el.append(html);
            });
        },

        addClassMarked: function () {
            $(event.target).addClass('marked');
        },

        removeOneFriend: function(event){
            //TODO refact this
            //remove friend from collection
            var getInputVal = $(event.currentTarget).parent().find('input').val();
            this.collection.remove(this.collection.getByName(getInputVal));

            return false;
        }
        
    });
    var friendView = new FriendView();

    var ControlPanel = Backbone.View.extend({

        el: '#control',

        events: {
            "click #remove-all": "removeAllFriends",
            "click #add-new": "addFriend"
        },

        addFriend: function () {
            this.collection.add({name: "Flying Dutchman", age: 23});
        },

        removeAllFriends: function () {
            this.$('.marked').closest('li').remove();
        }

    });
    var controlPanel = new ControlPanel();

});
