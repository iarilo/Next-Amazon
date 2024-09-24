"use client"
import { useQuery } from '@tanstack/react-query';
import { NextPage } from 'next';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { ProductService } from 'services/product/product.service';
import Catalog from '@/ui/catalog/Catalog';




const SearchPage:NextPage = () => {
  const searchParams = useSearchParams()
  const dataParams = searchParams.get('params')
  

  const {data} = useQuery({
      queryKey:['search product', dataParams],
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