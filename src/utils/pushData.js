import { getDatabase, ref, push, set } from "firebase/database";

// Create a new post reference with an auto-generated id
export async function pushData(path, data) {
	const db = getDatabase();
	const postListRef = ref(db, path);
	const newPostRef = await push(postListRef);
	await set(newPostRef, data)
	return newPostRef
}
