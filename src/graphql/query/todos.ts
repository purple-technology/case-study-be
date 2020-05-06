import { getDb } from '../../lib/mongo'
import { Todo } from '../types'

export default async (): Promise<Todo[]> => {
	const db = await getDb()
	const todos = await db.collection('todo').find().toArray()
	return todos.map((todo) => ({
		...todo,
		id: todo._id
	}))
}
