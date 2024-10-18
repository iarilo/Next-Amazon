import { instance} from 'app/api.interceptor'
import { ICategory} from 'types/category.interface'
//import { authDinamic } from 'app/api.interceptor'
import { AxiosInstance } from 'axios'

interface Slug{
	slug?: string | undefined	
}
interface Params{
	params:Slug	
}


const CATEGORY = '/category'
export const CategoryService = {
	async getAll() {
	
		return instance<ICategory[]>({
			url: CATEGORY,
			method: 'GET',
		})
	},

	async getById(id: string | number) {
		return instance<ICategory[]>({
			url: `category/by-slug/`,
			method: 'GET',
		})
	},


	// -------------  вариант с Layout --------------
	async getBySlug (params: Slug) {
		const {slug} = params
		return instance<ICategory>({
			url: `${CATEGORY}/by-slug/${slug}`,
			method: 'GET',
		})
	},
	
	
 /*
	async getBySlug (params: Slug) {
		const {slug} = params
		return instanceDinamCookie <ICategory>({
			url: `${CATEGORY}/by-slug/${slug}`,
			method: 'GET',
		})
	},
	*/

// async getBySlug (params: Slug, axiosInstance: AxiosInstance):Promise<ICategory>  {
//  const {slug} = params
//   try {
//     const response = await axiosInstance.get<ICategory>(`${CATEGORY}/by-slug/${slug}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     throw error;
//   }
// },


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
