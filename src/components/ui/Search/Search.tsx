'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import styles from '../page.module.css'

interface DataForm {
	params: string
}

const Search = () => {
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm<DataForm>()

  const submit: SubmitHandler<DataForm> = async data => {
		const { params } = data
		const queryParams =  new URLSearchParams({ params:params }).toString()
	   router.push(`/searchQueryPage?${queryParams}`)
	 reset()
	}

	return (
		<div className={styles.container_Search_form}>
			<form
				className={styles.content_Search_form}
				onSubmit={handleSubmit(submit)}
			>
				<input
					type='text'  	placeholder='Searh...'
					{...register('params', {
						required: { value: false, message: 'Заполните поле', },
					})}
				/>
				<p>{errors.params?.message}</p>
				<button type='submit'>отправить</button>
			</form>
		</div>
	)
}

export default Search
