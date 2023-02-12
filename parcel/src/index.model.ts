interface Global {
  id: number;
  creationAt: Date;
  updatedAt: Date;
}

interface Category extends Global {
  name: string;
  image: string;
}

export interface Products extends Global {
  title: string;
  price: number;
  description: string;
  images: string[];
  category: Category;
}