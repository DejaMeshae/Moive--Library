using Movie_Library.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Filters;

namespace Movie_Library.Controllers
{
    public class MovieController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        //private IEnumerable<Movie> movie;

        //Movie[] movie = new Movie[]
        //{
        //    new Movie { Id = 1, title ="Go", genre = "Comedy", directorname = "John" }
        //};


        //GET: Movies
        public IHttpActionResult GetAllMovies()
        {
            Movie movie = new Movie();
            return Ok(movie);
        }

        //POST: Movies
        public IHttpActionResult GetMovie(int id)
        {
            var movie = db.Movie.FirstOrDefault(m => m.Id == id);
            if (movie == null)
            {
                return NotFound();
            }
            return Ok(movie);
        }
    }
}
