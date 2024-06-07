export interface IAreaResponse {
	area: {
		err: number
		msg: string
		response: IArea[]
	}
}

export type IArea = {
	id: string
	createdAt: Date
	order: number
	updatedAt: Date
	value: string
	code: string
}
