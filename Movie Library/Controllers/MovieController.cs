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




        //GET: Movies
        public IHttpActionResult GetAllMovies()
        {
            var listOfMovies = db.Movie.ToList();
            return Ok(listOfMovies);
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
