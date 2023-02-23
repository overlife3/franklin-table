import { getDatabase, ref, remove } from "firebase/database";

async function removeData(path) {
	const db = getDatabase();
	await remove(ref(db, path))
}

export default removeData