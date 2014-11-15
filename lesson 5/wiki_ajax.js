jQuery(function($){
    $('#search-btn').click(function () {
        var inputVal = $('#search-str').val();
        $.ajax({
            url: "http://en.wikipedia.org/w/api.php",
            data: {
                action: 'opensearch',
                search: inputVal
            },
            dataType: "jsonp"
        })
            .done(function (data) {
                var searchKeyWord = 'Your searching word is: ' + data[1][0];
                $('#search-res').append(searchKeyWord);
                var serchResults = data[1].slice(1).map(function (val) {
                    return '<li>' + val + '</li>';
                });
                $('#search-key').append(serchResults);
            });
    });
});

