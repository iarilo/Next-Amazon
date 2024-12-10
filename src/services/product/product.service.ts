
import {  axiosClassic, instance} from "app/api.interceptor";
import { IProduct, IProductData,IGetAllProduct, TypeProducts, TypePaginationProducts } from "types/product.interface";

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
   // queryData: данные которые получаю из CatalogPagination 
  //console.log('getAllProduct-queryData= ',queryData)
  // data:  данные только тех продуктов  которые находятся на странице, которые axios  получает с сервера из URL product/all

  const {data} = await instance<TypePaginationProducts>({
   url: `${PRODUCT}/all/?searchTerm = ${queryData.searchTerm}`,
   method: 'GET',
   params: queryData
}); 
//console.log('getAllProduct-data= ',data)
return data
},

async getByidProduct(id: string | number) {
   return instance<IProduct>({
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
return axiosClassic<IProduct>({
    url: `${PRODUCT}/by-slug/${slug}`,
    method:'GET'
 }); 
},

// ---------- laiout ------------

async getByCategory(categoriSlug: string) {
   
   return instance<IProduct[]>({
    url: `${PRODUCT}/by-category/${categoriSlug}`,
    method: 'GET'
 }); 
},

/* 
async getByCategory(categoriSlug: string) {
   
   return instanceDinamCookie<IProduct[]>({
    url: `${PRODUCT}/by-category/${categoriSlug}`,
    method: 'GET'
 }); 
},
*/
async getSimilarProduct(id: number | string) {
 return axiosClassic<IProduct[]>({
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