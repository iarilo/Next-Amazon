import { ICategory } from "./category.interface";
import { IReview } from "./reviews.interface";

export interface IProduct {
	//
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

export interface IProductData {
  name: string,
  descrition?: string,
  prise: number,
  images: string[],
	categoryId: number 
}

export enum EnumProductSort{
  HIGH_PRICE = "high-price",  
  LOW_PRICE  = "low-price",  
  NEWEST  = "newest",        
  OLDEST = "oldest",
 
}


export enum EnumProductSortCategory{
  FOOTWEAR ='footwear',
  TOUS ='toys',
  CLOTHES ='clothes',
  SPORT = 'sport'   
}

export interface IGetAllProduct {
  sort?: EnumProductSort,
  searchTerm?: string,
  page?: number | string,
  perPage?: number | string  
  productSort?:ICategory[]
  categorySort?:string[]
  //typeCategory?:EnumProductSortCategory
  typeCategory?:string
}
export type TypeProducts = {
  //map(arg0: (ell: IProduct) => import("react").JSX.Element): import("react").ReactNode;
  products: IProduct[]
}
export type TypePaginationProducts = {
  length : number
  products: IProduct[]
  productSort?:IProduct[]
  categories:ICategory[]
}
