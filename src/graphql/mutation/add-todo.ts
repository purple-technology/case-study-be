import { getDb } from '../../lib/mongo'
import { RequestResponse, RequestResult, Todo } from '../types'

interface Input {
	text: string,
	priority: string
}



export default async ({text, priority}:Input ): Promise<RequestResponse> => {

	const now = Date.now()
	const db = await getDb()
	const todo: Todo = {
		text,
		checked: false,
		createdTimestamp: now,
		priority:priority
	}
	await db.collection('todo').insertOne(todo)
	return {
		status: RequestResult.SUCCESS
	}
}
