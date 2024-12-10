//"user server"
import React from 'react';
import styles from '../registration/page.module.css'
import FormloginAuth from '../(Admin)/(Form)/formloginAuth';
import { UserService } from 'services/user/user.service';


const login =  () => {

  return (
    <div className={styles.container_registration} >
    Логин
    <FormloginAuth variant= {"white"}  props ={"orange"}  />
    </div>
  )
}

export default login