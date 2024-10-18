import{Dispatch,SetStateAction,useEffect,useRef,useState} from 'react';

/*
useEffect — хук для управления побочными эффектами (например, подписки на события).
useRef — хук для создания ссылок на DOM-элементы или сохраняемых значений.
*/

/*
Dispatch и SetStateAction — типы из библиотеки react,
 которые используются для определения функций обновления состояния.
*/
type TypeOut = {
    ref: any
    isShow:boolean
    setIsShow: Dispatch<SetStateAction<boolean>>
}

/*
/ Хук  useOutside() позволяет отслеживать клики вне определенного элемента
   и управлять состоянием видимости.
*/
export const useOutside = (initialIsVisible:boolean):
TypeOut =>{
const [isShow,setIsShow] = useState(initialIsVisible)
const ref = useRef<HTMLElement>(null)
/*
    handleClickOutside — функция, которая проверяет,
     был ли клик произведен вне элемента, на который ссылается ref.
*/
const handleClickOutside = (event:any) =>{

 /*
Первая часть `ref.current` проверяет, существует ли элемент, на который ссылается реф.
- Вторая часть `!ref.current.contains(event.target)` проверяет, что клик был !!!  НЕ !!!  внутри этого элемента.
- Если обе условия истинны (то есть элемент существует и клик был вне его), 
 тогда выполняется действие внутри блока `if`, в данном случае `setIsShow(false)`.
 */

    if(ref.current && !ref.current.contains(event.target))
    {

    /*  
      1)ref.current  злемент(div) на который установлен ref
      2) contains` — это метод DOM-элемента, который проверяет, является ли указанный элемент(в данном случае `event.target`) дочерним элементом или самим элементом, на который ссылается `ref.current`.
      3)`event.target` — это элемент, на который кликнул пользователь. Если этот элемент не является дочерним(или самим элементом), то`contains` вернет `false`.
    */
      
      //Если клик был вне элемента, setIsShow(false) скрывает элемент.  
       setIsShow(false) 
    }
}

/*  
useEffect используется для добавления обработчика события click
  на документе при монтировании компонента.
Когда компонент размонтируется, обработчик удаляется,
 чтобы избежать утечек памяти.
*/
useEffect(()=>{
    document.addEventListener('click',handleClickOutside,true)
    return ()=> {
     document.removeEventListener('click',handleClickOutside, true)   
    }
})

return {ref, isShow,setIsShow}

}