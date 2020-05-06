import { Db, MongoClient } from 'mongodb'

let db: Db | null = null

export async function getDb() {
	if (db) {
		return db
	}
	if (!process.env.MOGNO_URI || !process.env.MOGNO_DB) {
		throw new Error('Missing env variable "MOGNO_URI" or "MOGNO_DB"')
	}
	const client = await MongoClient.connect(process.env.MOGNO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	db = client.db(process.env.MOGNO_DB)
	return db
}
