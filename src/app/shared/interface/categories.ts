
export interface Categories {
}
export interface allcategories {
  results: number;
  metadata: Metadata;
  data: Categories[];
}

export interface Categories{
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
}
