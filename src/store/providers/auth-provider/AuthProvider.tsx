// Обёртка над всем приложением которое даёт дополнительный функционал для проверки авторизации 
"use client"
import { FC, PropsWithChildren, useEffect } from "react"
//import { TypeComponentAuthFileds } from "./auth-page.types";
import { useActionsRedux, useAuth } from "store/hooks-reduxer/hooks-redux";
import { usePathname, useRouter } from "next/navigation";
import { getAccessToken } from "services/auth/auth.helper";
import Cookies from 'js-cookie';
import { protectedRouts } from "../protected-routs";


// dynamic -  Ленивая загрузка, позволяет отложить загрузку клиентских компонентов и импортированных библиотек и включать их в клиентский пакет только тогда, когда они необходимы.
//const DynamicCheckRole = dynamic(()=> import('./CheckRolle'), {ssr:false})

const AuthProvider: FC<PropsWithChildren> = ({children}  ) => {
  
  
  const {user} = useAuth();
  const {logout, checkAuth} = useActionsRedux();
  const pathname = usePathname();

  // console.log(' AuthProvider-children =',children)
   //console.log(' AuthProvider-user =',user)
  //  console.log(' AuthProvider-logout =',logout())
  //  console.log(' AuthProvider-checkAuth =',checkAuth())
  //console.log(' AuthProvider-pathname =',pathname)




  useEffect(() => {
    const accesToken = getAccessToken()
    if (!accesToken) {
        throw new Error('accessToken отсутствует')
    } checkAuth()
  },[])

// Для лучшей безопасности лучше работать с серверными  cooki
useEffect(()=>{
    const refreshToken = Cookies.get('refreshToken')
  
    if(!refreshToken && user) logout()
},[pathname]);

const router = useRouter()

/*
 Метод some(), проверяет проходит ли хотя бы один элемент в массиве тест, реализованный предоставленной функцией.Он возвращает true или false. Он не изменяет массив.
 */ 
/*
 Метод startsWith()значений String определяет, начинается ли данная строка с символов указанной строки, возвращая trueили falseв зависимости от ситуации. 
*/
/*
 royte получает  url из  protectedRouts [ '/my-order', '/favorites','/blog' ]
*/
const isProtectedRouts = protectedRouts.some(
  route => pathname.startsWith(route)
)


// Проверка: Если url из  protectedRouts [ '/my-order', '/favorites','/blog' ] нет, то тогда возврошаю  children
if(!isProtectedRouts) return <>{children}</>

if (user && isProtectedRouts) return <> {children} </>

pathname !== '/auth' && router.replace('/auth')
return null

 
}

export default AuthProvider;
// 3:54
// Amazon 2.0 Next  1:19

