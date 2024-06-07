import Swal from 'sweetalert2'
import { GraphQLClient } from 'graphql-request'
import { IAreaResponse } from '../interfaces'

const areaFilePath = require('../graphql/area.graphql')
const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV)

export const queryAreas = async () => {
	try {
		const response: IAreaResponse = await graphQLClient.request(areaFilePath)
		if (response.area.err === 0) {
			return response.area.response
		} else {
			Swal.fire('Oop !', response.area.msg, 'error')
			return
		}
	} catch (error) {
		throw new Error('Failed to fetch area')
	}
}
