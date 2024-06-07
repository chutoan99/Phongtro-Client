import { useQuery } from 'react-query'
import { queryPrices } from '../services'

export const useQueryPrices = () => {
	const queryKey = ['Prices']

	const queryFn = async () => {
		const responseData = await queryPrices()
		return responseData
	}

	const queryResult = useQuery(queryKey, queryFn)

	return { ...queryResult }
}
