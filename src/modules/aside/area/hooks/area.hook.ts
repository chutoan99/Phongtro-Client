import { useQuery } from 'react-query'
import { queryAreas } from '../services'

export const useQueryAreas = () => {
	const queryKey = ['Areas']

	const queryFn = async () => {
		const responseData = await queryAreas()
		return responseData
	}

	const queryResult = useQuery(queryKey, queryFn)

	return { ...queryResult }
}
