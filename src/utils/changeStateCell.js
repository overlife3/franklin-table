export function changeStateCell(arr, id) {
	return arr.map(item => {
		return item.map(item => {
			if (item.id === id) {
				item.completed = !item.completed
			} 
			return item
		})
	})
}