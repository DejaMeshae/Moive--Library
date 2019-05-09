var uri = 'api/Movies';

$(document).ready(function () {
            // Send an AJAX request
$.getJSON(uri)
    .done(function (data) {
        console.log('data', data);
        // On success, 'data' contains a list of movies.
        $.each(data, function (key, item) {
            // Add a list item for the product.
            $('<li>' + key + ' ' + item + '</li>', { text: formatItem(item) }).appendTo($('#Movies'));
        });
    });
});

function formatItem(item) {
    return item.Name + ': $';
}

function find() {
    var movieTitle = $('#movieId').val();



    $.getJSON(uri + '/' + id)
        .done(function (data) {
            $('#movie').text(formatItem(data));
        })
        .fail(function (jqXHR, textStatus, err) {
            $('#movie').text('Error: ' + err);
        });
}
