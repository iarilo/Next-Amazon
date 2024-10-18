"use client"
import { useQuery } from '@tanstack/react-query';
import { NextPage } from 'next';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { ProductService } from 'services/product/product.service';
import Catalog from '@/ui/catalog/Catalog';




const SearchPage:NextPage = () => {
  // useSearchParams—  позволяет считывать строку запроса текущего URL-адреса .
  const searchParams = useSearchParams()
  // Считываю из URL  query параметр params который передал в Serch.tcx из формы  
  const dataParams = searchParams.get('params')
  
  //  data данные полученные с сервера, после фильтрации по  данным query параметр    
  const {data} = useQuery({
      queryKey:['search product', dataParams],
      // передаю на сервер данные query параметр  
      queryFn: ()=> ProductService.getAllProduct({
        searchTerm: dataParams as string
      }),
      enabled: !!dataParams
      
  })
return (
  <div>
   <Catalog
     catalogProducts = {data?.products || []}
     title={`Поиск по запросу"${dataParams || ''}"`} 
     />
  </div>
)
}
export default SearchPage




// ===================================
/*
const SearchPage:NextPage = () => {
    const router = useRouter()
    const { term } = router.query;

    const {data} = useQuery({
        queryKey:['search product', router.query.term],
        queryFn: ()=> ProductService.getAllProduct({
          searchTerm: term as string  
        }),
        enabled: !!term
        
    })
  return (
    <div>
     <Catalog
       catalogProducts = {data?.products || []}
       title={`Поиск по запросу"${term || ''}"`} 
       />
    </div>
  )
}
export default SearchPage

*/