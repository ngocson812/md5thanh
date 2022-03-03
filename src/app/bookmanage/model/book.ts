export class Book{
  id!: number;
  name!: string;
  author!: string;
  description!: string

  constructor(id: number, name: string,author: string, description: string) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.description = description;
  }
}
