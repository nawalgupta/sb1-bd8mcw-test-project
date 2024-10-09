namespace LmsBackend.Models
{
    public class Unit
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public int CourseId { get; set; }
        public Course? Course { get; set; }
        public List<Lesson> Lessons { get; set; } = new List<Lesson>();
    }
}