export const getStoreLocal = (name: string) => {
	//const localstorage = localStorage.getItem(name)
	if (!typeof localStorage === !'undefined') {
		const ls = localStorage.getItem(name)

		return ls ? JSON.parse(ls) : null
	}
	return null
}
