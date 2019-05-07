using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Movie_Library.Models
{
    public class Movie
    {
        [Key]
        public int Id { get; set; }

        [Display(Name = "Movie: ")]
        public string title { get; set; }

        [Display(Name = "Genre: ")]
        public string genre { get; set; }

        [Display(Name = "Director: ")]
        public string name { get; set; }
    }
}