import React, { Dispatch, SetStateAction, FC } from 'react'
import {
	EnumProductSort,
	EnumProductSortCategory,
} from 'types/product.interface'


interface ISortDropdown {
	sortType: EnumProductSort
	setSortType: Dispatch<SetStateAction<EnumProductSort>>

}

const SortDropdown: FC<ISortDropdown> = ({sortType,setSortType}) => {
	/*
     https://blog.bitsrc.io/how-to-use-keyof-typeof-in-typescript-de453fa04fef
	TypeScript typeof возвращает тип переменной или свойства.
	 Если вы используете его с объектом, он генерирует тип, 
	 который имеет те же поля и типы, что и объект.
	....................................
	Оператор keyofберет тип объекта и создает строковое или 
	           числовое литеральное объединение его ключа.
  */

	{
		/* keyof typeof EnumProductSort дает вам тип,
         представляющий все ключи перечисления 
        (в данном случае, "HIGH_PRICE" | "LOW_PRICE" | "NEWEST" | "OLDEST").
    Object.keys(EnumProductSort) возвращает массив строк, 
          поэтому мы используем as EnumProductSortKeys[], 
          чтобы указать, что это массив ключей перечисления. */
	}

	//Sort = (4) ['HIGH_PRICE', 'LOW_PRICE', 'NEWEST', 'OLDEST']

	// Получаю ключи из enum и присваиваю им массив с типами и ключами,для того что бы можно было их      Типизировать и динамически подставлять в option
	const sort = Object.keys(EnumProductSort) as Array<
		keyof typeof EnumProductSort
	>

/*
	function categoryValue(e: { target: { value: string } }) {
		category.map(ell => {
			const valueEll = EnumProductSortCategory[ell]
			const target = e.target.value

			if (valueEll === target) {
				console.log('ategoryValue=', 'ess')
				setCategorySort(target)
			} else if (valueEll != target) {
				console.log('ategoryValue=', 'now')
				setSortType(e.target.value as any)
			} else {
				console.log('ategoryValue=', 'error')
			}
		})
	}

	*/
	//console.log('Category =',category)
	return (
		<div style={{ textAlign: 'left' }}>
			<h6 style={{ margin: '0' }}>SortDropdow</h6>
			<select
				name=''
				id=''
				 value={sortType}
				onChange={e => {
					
					setSortType(e.target.value as EnumProductSort)
					
				}}
			>
				{sort.map(key => {
					return (
						<option key={key} value={EnumProductSort[key]}>
							{EnumProductSort[key]}
						</option>
					)
				})}

				{/* {category.map(ell => {
					return (
						<option key={ell} id={ell} value={EnumProductSortCategory[ell]}>
							{EnumProductSortCategory[ell]}
						</option>
					)
				})} */}
			</select>
		</div>
	)
}

export default SortDropdown
