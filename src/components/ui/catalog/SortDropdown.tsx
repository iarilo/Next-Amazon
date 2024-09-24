import React, { Dispatch, SetStateAction, FC } from 'react'
import { EnumProductSort } from 'types/product.interface'

interface ISortDropdown {
	sortType: EnumProductSort
	setSortType: Dispatch<SetStateAction<EnumProductSort>>
}

const SortDropdown: FC<ISortDropdown> = ({ sortType, setSortType }) => {
	const sort = Object.keys(EnumProductSort) as Array<
		keyof typeof EnumProductSort
	>

	return (
		<div style={{ textAlign: 'right' }}>
			<h4 style={{ margin: '0' }}>SortDropdow</h4>
			<select
				name=''
				id=''
				value={sortType}
				onChange={e => {
					setSortType(e.target.value as any)
				}}
			>
				{sort.map(key => {
					return (
						<option key={key} value={EnumProductSort[key]}>
							{EnumProductSort[key]}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export default SortDropdown
