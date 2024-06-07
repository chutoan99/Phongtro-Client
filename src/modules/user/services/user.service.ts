import Swal from 'sweetalert2'
import { GraphQLClient } from 'graphql-request'

import { InputUpdateUser, UserPostResponse } from '../interfaces'

const userIdFilePath = require('../graphql/userId.graphql')
const userPostsFilePath = require('../graphql/user_post.graphql')
const updateUserFilePath = require('../graphql/update_user.graphql')
const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV)

export const queryUserId = async (userid: string) => {
	try {
		const response: UserPostResponse = await graphQLClient.request(userIdFilePath, {
			userId: userid
		})
		if (response.userId && response.userId.err === 0) {
			return response.userId.response
		} else {
			Swal.fire('Oop !', response.userId.msg, 'error')
			return
		}
	} catch (error) {
		throw new Error('Failed to fetch current user')
	}
}

export const queryPostsOfUser = async (userid: string) => {
	try {
		const response: UserPostResponse = await graphQLClient.request(userPostsFilePath, {
			userId: userid
		})
		if (response.userId.err === 0) {
			return response.userId.response
		} else {
			Swal.fire('Oop !', response.userId.msg, 'error')
			return
		}
	} catch (error) {
		throw new Error('Failed to fetch all post of user')
	}
}

export const mutationUpdateUser = async (userId: string, payloadUpdateUser: InputUpdateUser) => {
	try {
		const response: UserPostResponse = await graphQLClient.request(updateUserFilePath, {
			userId: userId,
			input: { ...payloadUpdateUser }
		})
		if (response.userId.err === 0) {
			Swal.fire('Oop !', response.userId.msg, 'success')
			return response.userId.response
		} else {
			Swal.fire('Oop !', response.userId.msg, 'error')
			return
		}
	} catch (error) {
		throw new Error('Failed to fetch update user')
	}
}
