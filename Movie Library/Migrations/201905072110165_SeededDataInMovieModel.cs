namespace Movie_Library.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SeededDataInMovieModel : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Movies", "directorname", c => c.String());
            DropColumn("dbo.Movies", "name");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Movies", "name", c => c.String());
            DropColumn("dbo.Movies", "directorname");
        }
    }
}
