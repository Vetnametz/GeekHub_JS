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
            console.log('Friend model is involved and friends is created ...');
        }

    });

    // Create Friends Collection
    var FriendsCollection = Backbone.Collection.extend({

        model: Friend,

        initialize: function () {
            //when some property in this object has changed, run this.newComer() function
            
        },

<<<<<<< HEAD
        newComer : function (model) {
            console.log('Welcome ' + model.get('name'));
            friendView.render();
        },

        removeFriend : function (model) {
            console.log('Go away ' + model.get('name'));
            console.log(model.get('name'));
            var needRemove = model.get('name');
            console.log(friends.length);
            friends = _.reject(friends, function(el) {
                return el.name === needRemove;
            });
            console.log(friends.length);
            friendView.render();
        },
=======
        
>>>>>>> FETCH_HEAD

        getByName: function(name){
            return this.filter(function(val) {
                return val.get("name") === name;
            })
        }

    });
    var friandcollection = new FriendsCollection(friends);

    // Create Friends View
    var FriendView = Backbone.View.extend({

        el: '#friends',

        events: {
            "click .remove-this": "removeOneFriend",
            "click li": "addClassMarked"
        },

        initialize: function () {
            console.log('Friend view is involved and all friends is rendered ...');
<<<<<<< HEAD
=======
            
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
>>>>>>> FETCH_HEAD
            this.render();
        },

        render: function () {
<<<<<<< HEAD
            $('#friends li').remove();
            _.each(friandcollection.models, function (item) {
=======
            this.collection.each(function (item) {
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
            friandcollection.remove(friandcollection.getByName(getInputVal));
=======
            this.collection.remove(this.collection.getByName(getInputVal));

>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
            console.log('ControlPanel is involved ... ');
            friandcollection.add([
                { name: "Frenk Palmer", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com" }
            ]);
=======
            this.collection.add({name: "Flying Dutchman", age: 23});
>>>>>>> FETCH_HEAD
        },

        removeAllFriends: function () {
<<<<<<< HEAD
            //friandcollection.remove();
            $(event.currentTarget).siblings('#friends').find('li').find('input.marked').parent().remove();
=======
            this.$('.marked').closest('li').remove();
>>>>>>> FETCH_HEAD
        }

    });
    var controlPanel = new ControlPanel();

});
