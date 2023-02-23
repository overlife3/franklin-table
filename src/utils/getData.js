import { getDatabase, ref, child, get } from "firebase/database";

export async function getData(str) { // дать нормальное название
	let res
	const dbRef = ref(getDatabase());
	await	get(child(dbRef, str)).then((snapshot) => {
		if (snapshot.exists()) {
			res = snapshot.val()
		} else {
			throw new Error("Нет данных");
		}
	}).catch((error) => {
		throw new Error(error);
	});
	return res
}



