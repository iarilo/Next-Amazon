// middleware.ts
import { NextResponse, type NextRequest } from 'next/server'
import Cookies from 'js-cookie'
import { protectedRouts } from 'store/providers/protected-routs' 
import { getUserFromStorage } from 'services/auth/auth.helper'



/*
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const accessToken = Cookies.get('accesToken') || ''
  const refreshToken = Cookies.get('refreshToken')
  
  // Проверка, что путь является защищенным маршрутом
  const isProtectedRoute = protectedRouts.some(route =>
    pathname.startsWith(route)
  )

  // Если путь защищен и токен не существует
  if (isProtectedRoute && !accessToken) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Если пользователь не авторизован и пытается попасть на защищенную страницу
  const user = await getUserFromStorage()
  const isRoleValid = user?.roleLoc?.nameRole

  // Если роль пользователя не совпадает с требуемой
  if (isProtectedRoute && !isRoleValid) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Проверка на роль
  if (isProtectedRoute && isRoleValid) {
    const rolePage = `/${user.roleLoc.nameRole}`
    if (pathname !== rolePage) {
      return NextResponse.redirect(new URL(rolePage, request.url))
    }
  }

  // Если все проверки пройдены, возвращаем оригинальный ответ
  return NextResponse.next()
}

export const config = {
  matcher: ['/my-order', '/favorites', '/admin', '/boss', '/auth'], // Можете настроить на свои защищенные маршруты
}

*/







/*
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('accesToken');
  console.log(' middleware - token =', token)
  if (!token) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}

*/