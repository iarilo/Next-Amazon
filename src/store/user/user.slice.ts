
//import { createSlice } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit/react'
import { IInitialState } from './store-user.interface'
import { register, login, logout, checkAuth } from './user.actions'
import { getStoreLocal } from 'utils/local-storage'

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
				
			})
			.addCase(register.rejected, state => {
				state.isLoading = false,
                state.user = null
				
			})
			.addCase(login.pending, state => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, action) => {
				
				state.isLoading = false, 
                state.user = action.payload.userI
			
				
			})
			.addCase(login.rejected, state => {
				state.isLoading = false,
                state.user = null
			
			})
			.addCase(logout.fulfilled, state => {
				state.isLoading = false,
                state.user = null
				
			})
			.addCase(checkAuth.fulfilled, (state, action) => {
				state.user = action.payload.userI
			})
	},
})

export default userSlice.reducer

// 3:42
