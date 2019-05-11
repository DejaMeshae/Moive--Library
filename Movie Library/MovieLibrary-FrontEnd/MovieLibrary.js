function movieList() {
    //Call my API to get a list of movies
    $.ajax({
        url: '/api/Movies/',
        type: 'GET',
        dataType: 'json',
        sucess: function (movies) {
            movieListSuccess(movies); /*this function collection of movies returned when I successfully retrieve the data*/
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
}

        //My list of movies
function movieListSuccess(movies) {
    $.each(movies, function (index, movie) { //Iterate over my collection of data
        movieAddRow(movie); //Add a row to my movie table 
    });
}
       //adds a new row to my HTML table
function movieAddRow(movie) {
    if ($("#movieTable tbody").length == 0) { //checks <tbody> tag to see if there is one and if there is not then create one 
        $("#movieTable").append("<tbody></tbody>");
    }
    $("#movieTable tbody").append( //apphend row to <table>
        movieBuildTableRow(movie));
}
        //build new row for editing a row in my table
function movieBuildTableRow(movie) {
    var ret =
        "<tr>" +
        "<td>" + movie.Title + "</td>" +
        "<td>" + movie.Genre + "</td>"
        + "<td>" + movie.Directorname + "</td>" +
        "</tr>";
    return ret;
}

        //if an error happens this is how I want it to display





















//from 7 min youtube video
//<script>
//    var uri = 'api/Movies';

//$(function () {
//    var $movies = $('#movies'); /*cashing my dom (movie object)*/

//    $.ajax({
//        type: 'GET',
//        url: '/api/movies',
//        success: function (movies) {
//            $.each(movies, function(i, movie) { /*goes through each item in my movie array and I can run a function based on that array. pass in the movie at each index (i)*/
//                $movies.append('<li>Title: '+ movie.title +'</li>'); /**/
//            });
//        }
//    });
//});
//</script>

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

