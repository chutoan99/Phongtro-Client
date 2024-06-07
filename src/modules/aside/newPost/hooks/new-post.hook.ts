import { useMutation, useQuery } from 'react-query'

import { queryNewPosts } from '../services'
import { InputNewPost } from '../interfaces'

export const useQueryNewPosts = (payloadNewPost: InputNewPost) => {
	const queryKey = ['NewPosts']

	const queryFn = async () => {
		const responseData = await queryNewPosts(payloadNewPost)
		return responseData
	}

	const queryResult = useQuery(queryKey, queryFn)

	return { ...queryResult }
}
