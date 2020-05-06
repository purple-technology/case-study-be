export interface Todo {
	id?: string
	text: string
	createdTimestamp: number
	checked: boolean
}

export interface RequestResponse {
	status: RequestResult
	error?: string
}

export enum RequestResult {
	SUCCESS = 'SUCCESS',
	FAIL = 'FAIL'
}
