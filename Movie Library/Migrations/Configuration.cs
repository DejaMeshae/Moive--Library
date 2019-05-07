namespace Movie_Library.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Movie_Library.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<Movie_Library.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Movie_Library.Models.ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data.

            context.Movie.AddOrUpdate(
                new Models.Movie { title = "The Departed", genre = "Drama", directorname = "Martin Scorsese" },
                new Models.Movie { title = "The Dark Knight", genre = "Drama", directorname = "Christopher Nolan" },
                new Models.Movie { title = "Inception", genre = "Drama", directorname = "Christopher Nolan" },
                new Models.Movie { title = "Pineapple Express", genre = "Comedy", directorname = "David Gordon Green" },
                new Models.Movie { title = "Die Hard", genre = "Action", directorname = "John McTiernan" }
            );

        }
    }
}
