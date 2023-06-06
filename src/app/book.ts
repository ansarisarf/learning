export class Book {
    id: number;
    name: string;
    price: number;
    description: string;
  
    constructor() {
      this.id = 0;
      this.name = '';
      this.price = 0; // Assign a value in the constructor
      this.description = '';
    }
  }
  