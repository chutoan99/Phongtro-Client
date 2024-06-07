export interface InputPost {
	pageSize: number
	pageNumber: number
	orderBy: string
	direction: string
	title: string
	start: string
	address: string
	categoryCode: string
	provinceCode: string
	areaNumber: []
	priceNumber: []
}

export interface InputCreatePost {
	areaNumber: number
	priceNumber: number
	priceCode: string
	areaCode: string
	categoryCode: string
	title: string
	images: string[]
	address: string
	target: string
	type: string
	province: string
	description: string
	label: string
	userid: string
	start: 5
}

export interface InputUpdatePost {}

export interface PostResponse {
	post: {
		total: number
		pageNumber: number
		pageSize: number
		totalPage: number
		err: number
		msg: string
		response: PostModel[]
	}
}

export interface DeletePostResponse {
	deletePost: {
		err: number
		msg: string
	}
}

export interface CreatePostResponse {
	createPost: {
		err: number
		msg: string
	}
}

export interface PostModel {
	address: string
	areaCode: string
	areaNumber: number
	attributes: {
		acreage: string
		createdAt: Date
		hashtag: string
		id: string
		price: string
		published: string
		updatedAt: Date
	}
	attributesId: string
	categoryCode: string
	createdAt: Date
	description: string
	id: string
	imagesId: string
	labelCode: string
	listImage: {
		createdAt: Date
		id: string
		image: string
		updatedAt: Date
		postImg: string
		total: string
	}
	overviewId: string
	overviews: {
		createdAt: Date
		area: string
		bonus: string
		created: string
		code: string
		expired: string
		id: string
		target: string
		type: string
		updatedAt: Date
	}
	priceCode: string
	priceNumber: number
	provinceCode: string
	start: string
	title: string
	updatedAt: Date
	userId: string
	user: {
		createdAt: Date
		id: string
		name: string
		password: string
		phone: string
		zalo: string
		updatedAt: Date
		avatar: string
	}
}
