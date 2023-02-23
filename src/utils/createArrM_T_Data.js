export function createArrM_T_Data(obj, key) {
	const arr = []

	for (let k in obj) {
		arr.push(obj[k][key])
	}

	return arr
}