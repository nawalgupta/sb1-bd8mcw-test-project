namespace LmsBackend.Models
{
    public class Lesson
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public int CategoryId { get; set; }
        public Category? Category { get; set; }
        public int UnitId { get; set; }
        public Unit? Unit { get; set; }
        public List<Section> Sections { get; set; } = new List<Section>();
    }
}