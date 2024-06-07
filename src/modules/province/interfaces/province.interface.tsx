export type IProvinceResponse = {
	province: {
		err: number
		msg: string
		response: IProvince[]
	}
}

export type IProvince = {
	code: string
	createdAt: Date
	id: string
	updatedAt: Date
	value: string
}
