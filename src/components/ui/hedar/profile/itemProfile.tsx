import {FC} from 'react';
import Image from 'next/image';
import styles from './page.module.css'

interface IItems {
    items: string[]
    id:number
}
const ItemProfile:FC<IItems> = ({items,id}) => {
  return (
    <div>
        <h6>ItemProfile</h6>
        {items.map((ell)=> (
          <Image
          key={id}
          src={ell}
          alt='image'
          width={40}
          height={40}
          />  
        ))}
    </div>
  )
}

export default ItemProfile