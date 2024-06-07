export type ICategoryResponse = {
	category: {
		err: number
		msg: string
		response: ICategoryModel[]
	}
}

export type ICategoryModel = {
	code: string
	createdAt: Date
	header: string
	id: string
	subHeader: string
	updatedAt: Date
	value: string
	path: string
}
