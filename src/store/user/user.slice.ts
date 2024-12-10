//import { createSlice } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit/react'
import { IInitialState } from './store-user.interface'
import { register, login, logout, checkAuth } from './user.actions'
import { getStoreLocal } from 'utils/local-storage'
import { getRoleFromStorage } from 'services/auth/auth.helper'

/*
const initialState: IInitialState = {
// user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null,
userStor:getStoreLocal('user'),
isLoading: false
}
*/



const initialState: IInitialState = {
	user: getStoreLocal('userLoc'),
	isLoading: false,
    role: '',
}

const userSlice = createSlice({
	name: 'userSlice',
	initialState: initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false
				state.user = action.payload.userI
				//tate.cart.items = [];
			})
			.addCase(register.rejected, state => {
				;(state.isLoading = false), (state.user = null)
			})
			.addCase(login.pending, state => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, action) => {
				(state.isLoading = false),
				(state.user =  action.payload.userI)
				// console.log('action.payload =',action.payload),
			      //console.log('state.user =',state.user)
			})
			.addCase(login.rejected, state => {
				;(state.isLoading = false), (state.user = null)
			})
			.addCase(logout.fulfilled, state => {
				;(state.isLoading = false), (state.user = null)
			})
			.addCase(checkAuth.fulfilled, (state, action) => {
				state.user = action.payload.userI
				//state.role = action.payload.role
			})
			
	},
})

//export default userSlice.reducer

export const { actions: userActions, reducer: userReducer } = userSlice
export default userReducer

// 3:42
