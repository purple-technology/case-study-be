import { getDb } from '../../lib/mongo'
import { RequestResponse, RequestResult } from '../types'

export default async (): Promise<RequestResponse> => {
	const db = await getDb()
	await db.collection('todo').deleteMany({ checked: true })
	return {
		status: RequestResult.SUCCESS
	}
}
