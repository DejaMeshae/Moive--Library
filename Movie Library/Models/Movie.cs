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
        public int id { get; set; }

    }
}