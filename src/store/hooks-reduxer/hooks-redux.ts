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
export const useCart = () => {
	const items =	useTupedSelector(state => state.cart.items)
	const total = items.reduce(
		(acc,item) => acc + item.prise * item.quantity, 0 
	)
	return {items, total}
}

//3:45
