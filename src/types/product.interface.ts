import { ICategory } from "./category.interface";
import { IReview } from "./reviews.interface";

export interface IProduct {
    id: number        
    createAt: string
    name:string
    slug: string
    descrition:  string
    prise: number
    images: string[]
    reviews: IReview[]
    category: ICategory 
};
export interface IProductDetalis {
  product: IProduct  
}