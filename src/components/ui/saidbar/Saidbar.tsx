'use client'
import styles from '../page.module.css'
import { CategoryService } from 'services/category/category.service'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { ICategory } from 'types/category.interface'

const Saidbar = () => {
	const { data } = useQuery({
		queryKey: ['saidbar category'],
		queryFn: () => CategoryService.getAll(),
		select: data => data.data,
	})

	return (
		<aside className={styles.container_Saidbar}>
			{data ? (
				data.map((ell: ICategory) => (
					<Link
						key={ell.id}
						href={`/pageCategory/${ell.name}`}
						className={styles.Saidbar_Link}
					>
						{ell.name}
					</Link>
				))
			) : (
				<p>данные категории отсутствуют</p>
			)}
		</aside>
	)
}

export default Saidbar
