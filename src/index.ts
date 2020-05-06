import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as express from 'express'
import * as morgan from 'morgan'

import graphqlHandler from './graphql'

require('dotenv').config()

const app = express()
app.use(cors())

morgan.token('graphql-query', (req) => {
	const { query, variables, operationName } = req.body
	return `GRAPHQL: \nOperation Name: ${operationName} \nQuery: ${query} \nVariables: ${JSON.stringify(
		variables
	)}`
})
app.use(bodyParser.json())
app.use(morgan(':graphql-query'))

app.use('/graphql', graphqlHandler)

app.use('/', (_req, res) => {
	res.json('Go to /graphql to invoke your queries and mutations!')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
	console.info(`\n\nExpress listen at http://localhost:${port} \n`)
})
