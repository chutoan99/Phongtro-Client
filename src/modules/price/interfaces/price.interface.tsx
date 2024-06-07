export type IPriceResponse = {
	price: {
		err: number
		msg: string
		response: IPriceModel[]
	}
}

export type IPriceModel = {
	code: string
	createdAt: Date
	id: string
	order: number
	updatedAt: Date
	value: string
}
