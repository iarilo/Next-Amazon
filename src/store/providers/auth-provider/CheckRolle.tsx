// Обёртка над всем приложением которое даёт дополнительный функционал для проверки роли
"use client"

// import { FC, PropsWithChildren } from "react"
// import { TypeComponentAuthFileds } from "./auth-page.types";
// import { useAuth } from "store/hooks-reduxer/hooks-redux";
// import { usePathname, useRouter } from "next/navigation";

// const CheckRolle: FC<PropsWithChildren< TypeComponentAuthFileds>> = (
//     {Component: {isOnlyUser}, children}  ) => {

// const {user} = useAuth()

// const pathname = usePathname()

// const router = useRouter()

// if (user && isOnlyUser) return <> {children} </>

// pathname !== '/auth' && router.replace('/auth')
// return null

// };

// export default CheckRolle;

// Amazon 2.0 1:00:00