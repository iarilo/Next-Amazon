import { instance } from "app/api.interceptor";
import { IProduct, IProductData,IGetAllProduct } from "types/product.interface";

const PRODUCT = 'product'

export const ProductService = {

// async createProduct(data: IProductData){
//  return instance<IProduct>({
//     url: `${PRODUCT}/create`,
//     method: 'POST',
//     data: data
//  });   
// },

async createProduct(){
    return instance<IProduct>({
       url: `${PRODUCT}/create`,
       method: 'POST',
    
    });   
   },

async getAllProduct(queryData = {} as IGetAllProduct){
    return instance<IProduct>({
        url: `${PRODUCT}/all`,
        method: 'GET',
        params: queryData
 }); 
},

async getByidProduct(id: string | number) {
   return instance<IProductData>({
    url: `${PRODUCT}/${id}`,
    method: 'GET'
   }); 
},

async updateProduct(id: number | string, data: IProductData){
 return instance<IProduct>({
    url:`${PRODUCT}/${id}`,
    method: 'PUT',
    data: data
 });
},

async getSlugProduct(slug: string){
return instance<IProduct>({
    url: `${PRODUCT}/by-slug/${slug}`,
    method:'GET'
 }); 
},
async getCategorySlug(categoriSlug: string) {
   return instance<IProduct[]>({
    url: `${PRODUCT}/by-category/${categoriSlug}`,
    method: 'GET'
 }); 
},

async getSimilarProduct(id: number | string) {
 return instance<IProduct[]>({
  url: `${PRODUCT}/similar/${id}`,
  method: 'GET'  
 });   
},

async deleteProduct(id: number | string) {
 return instance<IProduct>({
  url: `${PRODUCT}/${id}`,
  method:'DELETE'  
 });    
}


};