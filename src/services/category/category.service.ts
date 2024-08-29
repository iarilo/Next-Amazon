import axios from 'axios'
import Cookies from 'js-cookie'
import { getContentType } from 'app/api.helper'
import { instance } from 'app/api.interceptor'
import { ICategory, ICategoryProduct } from 'types/category.interface'

const CATEGORY = 'category'

export const CategoryService = {
	async getAll() {
		return instance<ICategory[]>({
			url: CATEGORY,
			method: 'GET',
		})
	},

	async getById(id: string | number) {
		return instance<ICategory>({
			url: `${CATEGORY}/${id}`,
			method: 'GET',
		})
	},

	async getBySlug(slug: string) {
		return instance<ICategory>({
			url: `${CATEGORY}/by-slug/${slug}`,
			method: 'CET',
		})
	},

	async create() {
		return instance<ICategory>({
			url: `${CATEGORY}/create`,
			method: 'POST',
		})
	},

	async update(id: string | number, name: string) {
		return instance<ICategory>({
			url: `${CATEGORY}/${id}`,
			method: 'PUT',
			data: { name },
		})
	},

	async delete(id: string | number) {
		return instance<ICategory>({
			url: `${CATEGORY}/${id}`,
			method: 'DELETE',
		})
	},
}
