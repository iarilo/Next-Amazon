'use client'
import styles from '../page.module.css'
import { CategoryService } from 'services/category/category.service'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import Icon from 'app/image/free-icon-pointing-down-10186903.png'
import Image from 'next/image'
// usePathname аналог import { useRouter } from 'next/router'
import { usePathname, useSearchParams } from 'next/navigation'


const Saidbar = () => {
	const { data,isLoading } = useQuery({
		queryKey: ['saidbar category'],
		queryFn: () => CategoryService.getAll(),
		select: data => data.data,
	})


                  // Проверка на текущую категорию
	//const {asPath} = useRouter()
	// usePathname аналог import { useRouter } from 'next/router'
	const pathname = usePathname();
    const searchParams = useSearchParams();

	return (
		<aside className={styles.container_Saidbar} >
         
			{isLoading? <h4>загрузка</h4> : data?
			(<div className={styles.container_Saidbar_content} > 
			<span   className={styles.container_Saidbar_Icon} >
				Categories: 
				<Image src={Icon} alt='иконка' width={20} height={20} /> 
			</span>

			<ul className={styles.container_Saidbar_ul}  >
              {data?.map((ell)=> (
				<li key={ell.id} >
					<Link 
					    href={`/pageCategory/${ell.slug}`}
						className={ styles.Saidbar_Link}
					>
					{ell.name}
					</Link>
				</li>
			  ))}
			</ul>

			</div>): <span>категории отсутствуют</span>
			}
		 

		

			{/* {data ? (
				data.map((ell: ICategory) => (
					<Link
						key={ell.id}
						href={`/pageCategory/${ell.slug}`}
						className={styles.Saidbar_Link}
					>
						{ell.name}
					</Link>
				))
			) : (
				<p>данные категории отсутствуют</p>
			)} */}
		</aside>
	)
}

export default Saidbar
