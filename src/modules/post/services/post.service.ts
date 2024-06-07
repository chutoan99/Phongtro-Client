import Swal from 'sweetalert2'
import { GraphQLClient } from 'graphql-request'
import {
	CreatePostResponse,
	DeletePostResponse,
	InputCreatePost,
	InputPost,
	InputUpdatePost,
	PostResponse
} from '../interfaces'

// ACTIONS
const postFilePath = require('../graphql/post.graphql')
const createPostFilePath = require('../graphql/create_post.graphql')
const updatePostFilePath = require('../graphql/update_post.graphql')
const deletePostFilePath = require('../graphql/delete_post.graphql')

const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV)

//? QUERY

export const queryPosts = async (payloadPost: InputPost) => {
	try {
		const response: PostResponse = await graphQLClient.request(postFilePath, {
			input: { ...payloadPost }
		})
		if (response.post.err === 0) {
			return response.post
		} else {
			Swal.fire('Oop !', response.post.msg, 'error')
			return
		}
	} catch (error) {
		throw new Error('Failed to fetch  posts')
	}
}

export const querySearchPosts = async (payloadPost: InputPost) => {
	try {
		const response: PostResponse = await graphQLClient.request(postFilePath, {
			input: { ...payloadPost }
		})
		if (response.post.err === 0) {
			return response.post
		} else {
			Swal.fire('Oop !', response.post.msg, 'error')
			return
		}
	} catch (error) {
		throw new Error('Failed to fetch  posts')
	}
}

//? MUTATION

export const mutationCreatePost = async (payloadCreatePost: InputCreatePost) => {
	try {
		const response: CreatePostResponse = await graphQLClient.request(createPostFilePath, {
			input: { ...payloadCreatePost }
		})
		if (response.createPost.err === 0) {
			Swal.fire('Oop !', response.createPost.msg, 'success')
		} else {
			Swal.fire('Oop !', response.createPost.msg, 'error')
		}
	} catch (error) {
		throw new Error('Failed to fetch create post')
	}
}

export const mutationUpdatePost = async (postId: string, payloadUpdatePost: InputUpdatePost) => {
	try {
		const response: PostResponse = await graphQLClient.request(updatePostFilePath, {
			postId: postId,
			input: { ...payloadUpdatePost }
		})
		if (response.post.err === 0) {
			Swal.fire('Oop !', response.post.msg, 'success')
			return response.post.response
		} else {
			Swal.fire('Oop !', response.post.msg, 'error')
			return
		}
	} catch (error) {
		throw new Error('Failed to fetch update post')
	}
}

export const mutationDeletePost = async (postId: any) => {
	try {
		const response: DeletePostResponse = await graphQLClient.request(deletePostFilePath, {
			postId: postId
		})
		if (response.deletePost.err === 0) {
			Swal.fire('Oop !', response.deletePost.msg, 'success')
		} else {
			Swal.fire('Oop !', response.deletePost.msg, 'error')
			return
		}
	} catch (error) {
		throw new Error('Failed to fetch delete post')
	}
}
