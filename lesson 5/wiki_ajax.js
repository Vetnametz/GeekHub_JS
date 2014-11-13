$(document).ready(function(){
    $('#search-btn').on('click', function () {
        var inputVal = $('#search-str').val();
        $.ajax({
            url: "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + inputVal,
            dataType: "jsonp"
        })
            .done(function( data ) {
                var searchKeyWord = 'Your searching word is: ' + data[1][0];
                $('#search-res').append(searchKeyWord);
                $(data[1]).slice(1).each(function(key1, val1) {
                    var serchResults = '<li>' + val1 + '</li>';
                    $('#search-key').append(serchResults);
                });
            });
    });
});

