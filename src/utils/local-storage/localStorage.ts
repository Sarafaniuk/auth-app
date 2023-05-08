export const getStoreLocal = (name: string) => {
	if (typeof localStorage !== 'undefined') {
		const ls = localStorage.getItem(name)
		return ls ? ls : null
	}
	return null
}
