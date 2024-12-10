// Обёртка над всем приложением которое даёт дополнительный функционал для проверки роли
'use client'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
//import { TypeComponentAuthFileds } from "./auth-page.types";
import { GetUserProfile, useAuth, useProfile } from 'store/hooks-reduxer/hooks-redux'
import { usePathname, useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
//import { protectedRouts } from "../protected-routs";

export type UserRole = 'boss' | 'admin' | 'moderator'

type TypeComponentAuthFileds = {
	allowedRoles: UserRole // Передаем массив допустимых ролей
}

export const CheckRolle: FC<PropsWithChildren<TypeComponentAuthFileds>> = ({
	allowedRoles,
	children,
}) => {
	const { user } = useAuth()
  const {profile,isLoading} = useProfile()
	const [isMounted, setIsMounted] = useState(false)
  const [role, setRole] = useState<string | null>(null) // Местное состояние для хранения роли
	const pathname = usePathname()
	const router = useRouter()

	// Когда профиль загрузился, обновляем состояние роли

/*
  useEffect(() => {
    if (!isLoading && profile) {
      const { role } = profile?.data
      if (role === null) {
        setIsMounted(false)
        router.push('/login') // Редирект на главную страницу без перезагрузки
      } else {
        setRole(role.name)
        if (allowedRoles.includes(role.name)) {
          setIsMounted(true) // Пользователь имеет правильную роль
          router.push(`/${role.name}`) 
        } else {
          setIsMounted(false)
          router.push('/login') // Редирект на главную страницу, если роль не подходит
        }
      }
    }
  }, [ profile,allowedRoles])

*/

	// if (isLoading) {
	//     return <div>Loading...</div>;
	//   }

	// Проверяем, есть ли пользователь и совпадает ли его роль с разрешенными
	// Если роль не подходит, редиректим на главную или на страницу входа


	// useEffect(() => {
	// 	if (!user || !isMounted)  {
	// 		if (pathname !== '/login' ) {
	// 			router.push('/login')
	// 		}
	// 	}
	// }, [user,isMounted])



	// if (!user || !role || !allowedRoles.includes(role)) {
	// 	return null
	// }
	return <>{children}</> 

	// if (user && isNameRole && allowedRoles.some(role => isNameRole.includes(role))) {
	//   return <>{children}</>; // Если роль пользователя подходит, показываем контент
	// }

	//return null
}

export default CheckRolle

//-----------------------------------
/*
export const CheckRolle: FC<PropsWithChildren< TypeComponentAuthFileds>> = (
    {Component: {isOnlyUser}, children}  ) => {

        const {user} = useAuth()
        const pathname = usePathname()
        const router = useRouter()

  console.log('User =',user)      
  

        // const { data: profile, isLoading } = useQuery({
        //     queryKey: ['role'],
        //     queryFn: () => GetUserProfile(),
        //     enabled: !!user, // Выбирать только тогда, когда пользователь существует
        // })
        // const [isMounted, setIsMounted] = useState(false)


if (user) return <> {children} </>
// if (user && isOnlyUser) return <> {children} </>

pathname !== '/' && router.replace('/')
return null

};

export default CheckRolle;
*/
// Amazon 2.0 1:00:00
