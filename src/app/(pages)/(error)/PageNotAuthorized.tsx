"use client"
import { useRouter } from "next/navigation"
import { IRole } from "types/role.interface"
import { IProps } from "../(Admin)/(adminRole)/ComponentAdminRole"

const PageNotAuthorized = ( props: IProps) => {
   const route = useRouter()
   const { propsRole} = props
   console.log('propsRole:',propsRole)

   function click (){
   if (propsRole === '/' ) {
    return route.push('/')
   }else{ return route.push(`/${propsRole}`)} 
   }
  return (
    <h3>
        У вас нет доступа к этой странице
        <button
        style={{
         backgroundColor:'blue',
         color:'#ffffff', 
         padding:'5px',
         border:'none',
         borderRadius:'5px'
        }}
        onClick={()=> click()  } 
        >
        выйти  
        </button>
    </h3>
  )
}

export default PageNotAuthorized