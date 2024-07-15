import React, { useState } from 'react';
import FormAuth  from '../(Admin)/(Form)/formAuth';
import styles from './page.module.css'


const registration = () => {

  return (
    <div className={styles.container_registration} >
      Регистрация
      <FormAuth variant ={"orange"}  props = {"white"}/>
      </div>
   
  )
}

export default registration