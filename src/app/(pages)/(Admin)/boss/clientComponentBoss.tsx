"use client"
import { useActionsRedux } from "store/hooks-reduxer/hooks-redux";
import { useRouter } from "next/navigation"; 

const ClientComponentBoss = () => {
    
    const {logout} = useActionsRedux()
    const router = useRouter()
  return (
    <div>
       
        <h3 style={{color:'red'}}> clientComponentBoss</h3>
        <button
        style={{
            color:'blue',
            backgroundColor:'#ffffff',
            border:'nobe',
            borderRadius:'5px',
            padding:'5px'

            }} 
        onClick={ ()=> {
          logout() 
          router.push('/')    
        }  
     }
         >
         выход
        </button>
    </div>
  )
}

export default ClientComponentBoss