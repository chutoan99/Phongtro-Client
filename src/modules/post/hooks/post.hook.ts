import { useMutation, useQuery } from 'react-query'

import { queryPostsOfUser } from '../../user/services/user.service'
import { InputCreatePost, InputPost, InputUpdatePost } from '../interfaces'
import { mutationCreatePost, mutationDeletePost, mutationUpdatePost, queryPosts, querySearchPosts } from '../services'

//? QUERY
export const useQueryPosts = (payloadPost: InputPost) => {
	const queryKey = ['Posts', payloadPost?.pageNumber, payloadPost?.categoryCode]

	const queryFn = async () => {
		const responseData = await queryPosts(payloadPost)
		return responseData
	}

	const queryResult = useQuery(queryKey, queryFn)

	return { ...queryResult }
}

export const useQuerySearchPosts = (payloadPost: InputPost) => {
	const queryKey = ['Posts', payloadPost?.pageNumber, payloadPost?.categoryCode]
	const queryFn = async () => {
		const responseData = await querySearchPosts(payloadPost)
		return responseData
	}

	const queryResult = useQuery(queryKey, queryFn)

	return { ...queryResult }
}

export const useQueryPostsOfUser = (userid: string) => {
	const queryKey = ['PostsOfUser', userid]

	const queryFn = async () => {
		const responseData = await queryPostsOfUser(userid)
		return responseData
	}

	const queryResult = useQuery(queryKey, queryFn)

	return { ...queryResult }
}
//? MUTATION

export const useMutationCreatePost = () => {
	const mutation = useMutation((payloadCreatePost: InputCreatePost) => mutationCreatePost(payloadCreatePost))
	return (payloadCreatePost: InputCreatePost) => mutation.mutate(payloadCreatePost)
}

export const useMutationDeletePost = (postId: string) => {
	const mutation = useMutation(() => mutationDeletePost(postId))
	return mutation
}

export const useMutationUpdatePost = (postId: string, payloadUpdatePost: InputUpdatePost) => {
	const queryKey = ['Update_post']

	const queryFn = async () => {
		const responseData = await mutationUpdatePost(postId, payloadUpdatePost)
		return responseData
	}

	const queryResult = useQuery(queryKey, queryFn)

	return { ...queryResult }
}
