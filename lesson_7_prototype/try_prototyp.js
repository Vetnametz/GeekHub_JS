
Number.prototype.sum = function(num) {
    return this + num;
};

$.fn.hasAttr = function(attrName){
    var names =[];
    for (var i = 0; i < this[0].attributes.length; i++) {
        names.push(this[0].attributes[i].name);
    }

    var result = (names.indexOf(attrName) > -1) ? true : false;

    return result;
};