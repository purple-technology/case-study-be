import { ObjectID } from 'mongodb'

import { getDb } from '../../lib/mongo'
import { RequestResponse, RequestResult } from '../types'

interface Input {
	id: string
}

export default async ({ id }: Input): Promise<RequestResponse> => {
	const db = await getDb()
	db.collection('todo').deleteOne({ _id: new ObjectID(id) })

	return {
		status: RequestResult.SUCCESS
	}
}
