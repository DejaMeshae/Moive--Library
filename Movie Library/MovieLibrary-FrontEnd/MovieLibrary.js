
<script>
    var uri = 'api/Movies';

$(function () {
    var $movies = $('#movies'); /*cashing my dom (movie object)*/

    $.ajax({
        type: 'GET',
        url: '/api/movies',
        success: function (movies) {
            $.each(movies, function(i, movie) { /*goes through each item in my movie array and I can run a function based on that array. pass in the movie at each index (i)*/
                $movies.append('<li>Title: '+ movie.title +'</li>'); /**/
            });
        }
    });
});
</script>

//$(document).ready(function () {
//            // Send an AJAX request
//$.getJSON(uri)
//    .done(function (data) {
//        console.log('data', data);
//        // On success, 'data' contains a list of movies.
//        $.each(data, function (key, item) {
//            // Add a list item for the product.
//            $('ul').find("span").css({ "color": "red", "border": "2xp solid red" }); /*+ key + ' ' + item + '</li>', { text: formatItem(item) }).appendTo($('#Movies'));*/
//        });
//    });

//});

//function formatItem(item) {
//    return item.Name + ': $';
//}

//function find() {
//    var movieTitle = $('#movieId').val();



    //$.getJSON(uri + '/' + id)
    //    .done(function (data) {
    //        $('#movie').text(formatItem(data));
    //    })
    //    .fail(function (jqXHR, textStatus, err) {
    //        $('#movie').text('Error: ' + err);
    //    });
    //}

