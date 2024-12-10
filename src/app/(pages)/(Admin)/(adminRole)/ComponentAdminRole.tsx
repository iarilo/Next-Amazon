import ComponentBoss from "./ComponentBoss";
import ComponentAdmin from "./ComponentAdmin"
import ComponentManager from "./ComponentManager";
import { IRole } from "types/role.interface";

 export interface IProps{
  propsRole:IRole | string
}

const ComponentAdminRole = (props:IProps) => {

  console.log('props.propsRole = ',props.propsRole)
 

  if ( props.propsRole === 'boss') {
    { return(<ComponentBoss/> )   }
  }
  else if ( props.propsRole === 'admin'){
    return(<ComponentAdmin/> ) 
  }
  else if ( props.propsRole === 'manager'){
    return(<ComponentManager/> ) 
  }
  else {
    <span style={{color:'blue'}}>такая роль отсутствует</span> 
  }
   
}

export default ComponentAdminRole