import { IProduct } from "./product.interface"

export interface ICategory {
	data: any
    id: string
    name: string
    slug: string
    products:IProduct[]
}
export interface ICategoryProduct {
    length : number
    categorys: ICategory
}