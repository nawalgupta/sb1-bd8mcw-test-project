namespace LmsBackend.Models
{
    public class Section
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public int CategoryId { get; set; }
        public Category? Category { get; set; }
        public int LessonId { get; set; }
        public Lesson? Lesson { get; set; }
    }
}