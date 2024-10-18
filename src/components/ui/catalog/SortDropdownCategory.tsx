import React, { SetStateAction, Dispatch, FC } from 'react'
import { EnumProductSort } from 'types/product.interface'

type IDataCategory = {
	categoryValue: string
	categoryIndex: number
}
interface ISortCategory {
	// typeCategory: EnumProductSortCategory
	typeCategory: IDataCategory
	categoryName: string[]
	setTypeCategory: Dispatch<SetStateAction<IDataCategory>>
	setClicker: Dispatch<SetStateAction<boolean>>
	setPage:Dispatch<SetStateAction<number>>
	

}

const SortDropdownCategory: FC<ISortCategory> = ({
	typeCategory,
	setTypeCategory,
	setClicker,
	categoryName,
	setPage,
	
}) => {
	const sortType = Object.keys(categoryName)
	const indexValue = sortType.map(key => categoryName[+key])

	function categoryData(data: string) {
		const typeIndexvalue = indexValue.forEach((ell, index) => {
			if (ell === data) {
				setPage(index +1)				
			    setTypeCategory(() => ({
					categoryValue: ell,
					categoryIndex: index + 1,
				}))
				
			}
		})

		return typeIndexvalue
	}

	return (
		<div style={{ textAlign: 'center' }}>
			<h6 style={{ margin: '0' }}>SortDropdownCategory</h6>
			<select
				name=''
				id=''
				value={typeCategory.categoryValue}
				onChange={e => {
					categoryData(e.target.value)
					setClicker(true)
				}}
			>
				{indexValue.map(category => {
					return (
						<option key={category} value={category}>
							{category}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export default SortDropdownCategory
