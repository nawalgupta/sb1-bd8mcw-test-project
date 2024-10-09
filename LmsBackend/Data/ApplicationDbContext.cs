using LmsBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace LmsBackend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Course> Courses { get; set; }
        public DbSet<Unit> Units { get; set; }
        public DbSet<Lesson> Lessons { get; set; }
        public DbSet<Section> Sections { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure relationships
            modelBuilder.Entity<Course>()
                .HasMany(c => c.Units)
                .WithOne(u => u.Course)
                .HasForeignKey(u => u.CourseId);

            modelBuilder.Entity<Unit>()
                .HasMany(u => u.Lessons)
                .WithOne(l => l.Unit)
                .HasForeignKey(l => l.UnitId);

            modelBuilder.Entity<Lesson>()
                .HasMany(l => l.Sections)
                .WithOne(s => s.Lesson)
                .HasForeignKey(s => s.LessonId);

            modelBuilder.Entity<Course>()
                .HasOne(c => c.Category)
                .WithMany()
                .HasForeignKey(c => c.CategoryId);

            modelBuilder.Entity<Lesson>()
                .HasOne(l => l.Category)
                .WithMany()
                .HasForeignKey(l => l.CategoryId);

            modelBuilder.Entity<Section>()
                .HasOne(s => s.Category)
                .WithMany()
                .HasForeignKey(s => s.CategoryId);
        }
    }
}