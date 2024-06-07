export interface PostIdResponse {
	postId: {
		err: number
		msg: string
		response: PostIdModel
	}
}

export interface PostIdModel {
	address: string
	areaCode: string
	areaNumber: number
	attributesId: string
	categoryCode: string
	createdAt: Date
	description: string
	id: string
	imagesId: string
	labelCode: string
	overviewId: string
	priceCode: string
	priceNumber: number
	provinceCode: string
	start: string
	title: string
	updatedAt: Date
	userId: string
	attributes: {
		acreage: string
		createdAt: Date
		hashtag: string
		id: string
		price: string
		published: string
		updatedAt: Date
	}
	listImage: {
		createdAt: Date
		id: string
		image: string
		postImg: string
		total: number
		updatedAt: Date
	}
	overviews: {
		area: string
		bonus: string
		code: string
		created: string
		createdAt: Date
		id: string
		expired: string
		target: string
		type: string
		updatedAt: Date
	}
	user: {
		avatar: string
		createdAt: Date
		id: string
		password: string
		name: string
		phone: string
		updatedAt: Date
		zalo: string
	}
}
