import Swal from 'sweetalert2'
import { GraphQLClient } from 'graphql-request'
import { InputNewPost, NewPostResponse } from '../interfaces'

// ACTIONS
const newPostFilePath = require('../graphql/new-post.graphql')

const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV)

//? QUERY
export const queryNewPosts = async (payloadNewPost: InputNewPost) => {
	try {
		const response: NewPostResponse = await graphQLClient.request(newPostFilePath, {
			input: { ...payloadNewPost }
		})
		if (response.newPost.err === 0) {
			return response.newPost.response
		} else {
			Swal.fire('Oop !', response.newPost.msg, 'error')
			return
		}
	} catch (error) {
		throw new Error('Failed to fetch new posts')
	}
}
