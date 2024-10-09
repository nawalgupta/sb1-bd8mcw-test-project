export interface Category {
  id: number;
  name: string;
}

export interface Section {
  id?: number;
  title: string;
  content: string;
  categoryId: number;
}

export interface Lesson {
  id?: number;
  title: string;
  sections: Section[];
  categoryId: number;
}

export interface Unit {
  id?: number;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id?: number;
  title: string;
  description: string;
  price: number;
  categoryId: number;
  units: Unit[];
}