// Обёртка над всем приложением которое даёт дополнительный функционал для проверки авторизации
'use client'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import {useActionsRedux,useAuth,} from 'store/hooks-reduxer/hooks-redux'
import {usePathname, useRouter } from 'next/navigation'
import {getAccessToken } from 'services/auth/auth.helper'
import Cookies from 'js-cookie'
import {protectedRouts } from '../protected-routs'
import { getUserFromStorage } from 'services/auth/auth.helper'
import { IRole } from 'types/role.interface'
import PageNotAuthorized from 'app/(pages)/(error)/PageNotAuthorized'
// import { UserService } from 'services/user/user.service'
// import { useQuery } from '@tanstack/react-query'
// import FormloginAuth from 'app/(pages)/(Admin)/(Form)/formloginAuth'
// import ComponentAdminRole from 'app/(pages)/(Admin)/(adminRole)/ComponentAdminRole'

// dynamic -  Ленивая загрузка, позволяет отложить загрузку клиентских компонентов и импортированных библиотек и включать их в клиентский пакет только тогда, когда они необходимы.
//const DynamicCheckRole = dynamic(()=> import('./CheckRolle'), {ssr:false})

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const { user } = useAuth()
	const { logout, checkAuth } = useActionsRedux()
	const [isLoading, setIsLoading] = useState(false)
	const [isRole, setIsRole] = useState<IRole | string>('')

	/* pathname: путь до страницы, на котором находится пользователь
	    ( "/" ,"/login", "/register", ) и тд.
	 */
	const pathname = usePathname()
	const router = useRouter()

	// Проверка подлинности при монтировании, запускается один раз при монтировании компонента.
	useEffect(() => {
		const accesToken = getAccessToken()
		if (!accesToken) {
			throw new Error('accessToken отсутствует')
		}
		checkAuth()
		router.push('/')
	}, [])

	/*
	Проверка токена обновления при изменении маршрута,
	    запускается всякий раз, когда pathname изменяется (текущий маршрут)
	Если нет refreshTokenи a user вошел в систему 
	    ( if (!refreshToken && user)), logout()вызывается функция. 
	Для лучшей безопасности лучше работать с серверными  cooki
	  */
	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (!refreshToken && user) logout()
	}, [pathname])

	/*
 Метод some(), проверяет проходит ли хотя бы один элемент в массиве тест, реализованный предоставленной функцией.Он возвращает true или false. Он не изменяет массив.
 
 Метод startsWith()значений String определяет, начинается ли данная строка с символов указанной строки, возвращая true или falseв зависимости от ситуации. 
                           Пример
const name = 'Samantha Ming';

name.startsWith('S'); // true
name.startsWith('M'); // false

 royte получает  url из  protectedRouts [ '/my-order', '/favorites','/blog' ]
*/

	const isProtectedRouts = protectedRouts.some(route =>
		pathname.startsWith(route),
	)
	//console.log('isProtectedRouts =', isProtectedRouts)

	useEffect(() => {
		const getRole = async () => {
			const role: IRole = await getUserFromStorage()
			if (role.roleLoc === undefined) {
				setIsRole('')
			} else {
				setIsRole(role.roleLoc.nameRole)
				setIsLoading(false)
			}
		}
		getRole()
	}, [user])

/* 
                      Как это работает:
ell.startsWith('/') — проверяет, начинается ли строка ell с символа /.
ell.substring(1) — удаляет первый символ / из строки.
Сравнивается оставшаяся часть строки с nameRole.
  */
/*
	const checRole = isRole
		? protectedRouts.some(ell => {
				return ell.startsWith('/') && ell.substring(1) === isRole
		  })
		: false
	*/
	const checRole = isRole
    ? protectedRouts.some((route) => route.startsWith(`/${isRole}`))
    : false;

	 //console.log(' isRoleAllowed =', isRoleAllowed)


//   if (checRole) {
// 	useEffect(()=>{
// 		if (user && !isProtectedRouts && checRole) {
// 			router.push(`/${isRole}`)
// 		}
// 	},[checRole])
//   }

//  ..............useeffect ......................

useEffect(()=>{
	if (user && checRole && !isProtectedRouts 
	 || user && checRole &&  isProtectedRouts 
	) {
		console.log('useEffect user 1: ',user)
     console.log('useEffect isProtectedRouts 1:',isProtectedRouts)
     console.log('useEffect checRole 1:',checRole)
		router.push(`/${isRole}`)
	}
},[checRole])



useEffect(()=>{
	if ( 
		user && !checRole && isProtectedRouts 
		|| !user && !checRole && isProtectedRouts 
	) {
		console.log('useEffect user 2: ',user)
     console.log('useEffect isProtectedRouts 2:',isProtectedRouts)
     console.log('useEffect checRole 2:',checRole)
		router.push(`/error`)
	}
},[isProtectedRouts ])



if (isLoading) { return <><div>загрузка</div></>}
// .....................  Children  ......................

	 if(
		!user && !checRole && !isProtectedRouts
		|| user && !checRole && !isProtectedRouts
	) {
     console.log('!user 1: ',user)
     console.log('!isProtectedRouts 1:',isProtectedRouts)
     console.log('!checRole 1:',checRole)

    return <>{children}</> 
	 }
	  else if(!user &&  isProtectedRouts && !checRole) {
		console.log('user 2: ',user)
		console.log('user isProtectedRouts 2:',isProtectedRouts)
		console.log('user checRole 2:',checRole)
		
		return <>{children}</> 
	 }
	  else if( 
		user && checRole && !isProtectedRouts 
	 || user && checRole && isProtectedRouts 
	
	){
		console.log('user 3 : ',user)
		console.log('isProtectedRouts 3 :',isProtectedRouts)
		console.log('checRole 3 :',checRole)
		console.log('isRole 3 :',isRole)
		return <>{children}</> 
	 }
	 else if( 
		 user && !checRole && isProtectedRouts 
		//|| user && isProtectedRouts && !checRole 
		 //|| user && isProtectedRouts &&  checRole
	 ){
		console.log('user 4 : ',user)
		console.log('isProtectedRouts 4 :',isProtectedRouts)
		console.log('checRole 4:',checRole)
		console.log('isRole4  :',isRole)

		// return <>{
		// 	isRole
		// 	? <PageNotAuthorized  propsRole = {isRole}/> 
		// 	: <PageNotAuthorized  propsRole = {'/'}/> 
		// 	 }</> 
		//return <><div>Now</div></>
		return <>{children}</>  
	 }
	 else{
		console.log('else user: ',user)
		console.log('else isProtectedRouts:',isProtectedRouts)
		console.log('else checRole:',checRole)
	 }
	
	return null
}

export default AuthProvider

// 3:54
// Amazon 2.0 Next  1:19
 //================================================
/* 

useEffect(() => {
		if (!user && isProtectedRouts) {
			router.push('/')
		}
	}, [user,isProtectedRouts])

	//  ..........................................

	useEffect(() => {
		if (user && !isProtectedRouts && checRole) {
			router.push(`/${isRole}`)
		}
		else if( user && isProtectedRouts && checRole){
			router.push(`/${isRole}`)
		}
		
	}, [checRole])

	// useEffect(() => {
	// 	if (!user && !isProtectedRouts && !checRole) {
	// 		router.push('/')
	// 	}else if(user && isProtectedRouts && !checRole){
	// 		router.back()
	// 	}
	// }, [user,isProtectedRouts,checRole])

	//  ..........................................

	//  Проверка: Если url из  protectedRouts 
	//    [ '/my-order', '/favorites','/blog' ] нет, то тогда возврошаю  children

	//    pathname !== '/login'  это страница на которую надо направить 
	//    router.replace('/login')  это путь на эту страницу 
	

	if (!isProtectedRouts ||(user && checRole)){
		return <>{children}</>;
	  }
*/


// =================================================

/*

	// Проверка: Если url из  protectedRouts 
	// [ '/my-order', '/favorites','/blog' ] нет, то тогда возврошаю  children


	


 	   useEffect(() => {
		if (!isProtectedRouts) return; // Не перенаправляем если страница не защищена
	
		if (user && isProtectedRouts) {
		  const userRole = profile?.data?.role?.name
	
		  if (userRole !== null) {
			if (userRole === userRole && pathname !== `/${userRole}`) {
			  router.replace(`/${userRole}`)
			  return; // Останавливаем дальнейшее выполнение
			}
		  }
		} else {
		  if (isMounted === true) {
			pathname !== '/' && router.replace('/')
		  } else {
			pathname !== '/login' && router.replace('/login')
		  }
		}
	  }, [user, profile, pathname, isProtectedRouts, isMounted, router])
	
	return (
		<>
		  {children}
		</>
	  )
*/

//----------------------------------------
// if (isLoading) {
// 	return <div>Loading...</div> // Здесь можно добавить индикатор загрузки
//   }

// -----------------------------------
// if (isMounted === true) {
// 	pathname !== '/' && router.replace('/')
// } else {
// 	pathname !== '/login' && router.replace('/login')
// }
