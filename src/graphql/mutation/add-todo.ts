import { getDb } from '../../lib/mongo'
import { RequestResponse, RequestResult, Todo } from '../types'

interface Input {
	text: string
}

export default async ({ text }: Input): Promise<RequestResponse> => {
	const db = await getDb()
	const todo: Todo = {
		text,
		checked: false,
		createdTimestamp: Date.now()
	}
	await db.collection('todo').insertOne(todo)
	return {
		status: RequestResult.SUCCESS
	}
}
