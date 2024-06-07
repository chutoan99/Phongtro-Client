import Swal from 'sweetalert2'
import { GraphQLClient } from 'graphql-request'
import { PostIdResponse } from '../interfaces'

const postIdFilePath = require('../graphql/postId.graphql')
const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV)

export const queryPostId = async (postId: string) => {
	try {
		console.log(postId, 'postId')
		const response: PostIdResponse = await graphQLClient.request(postIdFilePath, {
			postId: postId
		})

		if (response.postId.err === 0) {
			return response.postId.response
		} else {
			Swal.fire('Oop !', response.postId.msg, 'error')
			return
		}
	} catch (error) {
		throw new Error('Failed to fetch postid')
	}
}
