import { getDatabase, ref, set } from "firebase/database";

async function sendData(path, data) {
	const db = getDatabase();
	await set(ref(db, path), data)
}

export default sendData
