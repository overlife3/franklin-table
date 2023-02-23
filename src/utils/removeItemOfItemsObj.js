export function removeItemOfItemsObj(index, idArr, itemsObj) {
	const obj = itemsObj
	const id = idArr[index]
	delete obj[id]
	return obj
}