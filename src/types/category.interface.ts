import { IProduct } from "./product.interface"

export interface ICategory {
    id: number
    name: string
    slug: string
    products:IProduct
}
export interface ICategoryProduct {
    length : number
    categorys: ICategory
}