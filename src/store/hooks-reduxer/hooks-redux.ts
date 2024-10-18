"use client"
import { bindActionCreators } from '@reduxjs/toolkit'
import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import {  TypeRootState } from 'store/store'
import { rootAcnions } from 'store/root-actions'
import {  useQuery } from '@tanstack/react-query'
import { UserService } from 'services/user/user.service'

import { errorCatch } from 'app/api.helper'


//export const userAppSelector = useSelector.withTypes<RootState>;
//export const useAppDispath = useDispatch.withTypes<AppDispath>

// useActionsRedux для получения всех методов из action (user.actions')
export const useActionsRedux = () => {
	const dispatch = useDispatch()
	//useMemo нужен для оптимизации, возврощает результат и меняет его только при изминении зависимости из массива.
	// bindActionCreators передаёт функции из  Redux в хук из react
	// rootAcnions  Все методы из user.actions
	return useMemo(() => bindActionCreators(rootAcnions, dispatch), [dispatch])
}

//Получение данных из хранилища
export const useTupedSelector: TypedUseSelectorHook<TypeRootState> = useSelector

// Хук авторизации
export const useAuth = () => useTupedSelector(state => state.user)

// Profile хук
//const {user} = useAuth()
export async function GetUserProfile() {
	const response = await UserService.userProfile()
	return response
}

export const useProfile = () => {
	const { data: profileData, error } = useQuery({
		queryKey: ['get profile'],
		queryFn:  () => GetUserProfile(),
        //enabled: !!user,
 })


	useEffect(() => {
		if (error) {
			console.log('useProfile - Error', errorCatch(error))
		}
	}, [error])

	//console.log('useProfile Data =', profileData)
	return { profile: profileData  }
}

// Card
// acc - является сокращением от "accumulator" (накопитель) 
export const useCart = () => {
	const items =	useTupedSelector(state => state.cart.items)
	const total = items.reduce(
		(acc,item) => acc + item.prise * item.quantity, 0 
	)
	return {items, total}
}

//3:45
/*  
useCart: Это кастомный хук, который возвращает информацию о товарах в корзине и общей стоимости.

useTypedSelector: Это, вероятно, функция для получения состояния из Redux, которая используется для выборки элементов корзины (state.cart.items).

items: Это массив товаров, который вы получаете из состояния Redux.

reduce: Метод reduce применяется к массиву items для вычисления общей стоимости. Он проходит по каждому элементу массива и накапливает (суммирует) значение.

acc (накопитель): Это значение, которое накапливается при каждом проходе. Начальное значение по умолчанию — 0.
item: Это текущий элемент массива, который обрабатывается в данный момент.
item.price * item.quantity: Это стоимость текущего товара, умноженная на его количество.
return: Хук возвращает объект, содержащий массив items и общую стоимость total.

Пример работы reduce
Если у вас есть массив товаров:

javascript
Копировать код
const items = [
  { price: 10, quantity: 2 },
  { price: 15, quantity: 1 },
  { price: 20, quantity: 3 },
];
Функция reduce будет работать следующим образом:

Начинает с acc = 0.
Для первого элемента: acc = 0 + (10 * 2) = 20.
Для второго элемента: acc = 20 + (15 * 1) = 35.
Для третьего элемента: acc = 35 + (20 * 3) = 95.
В итоге total будет равно 95.

Таким образом, этот код позволяет вам эффективно получать текущие товары в корзине и их общую стоимость.

*/