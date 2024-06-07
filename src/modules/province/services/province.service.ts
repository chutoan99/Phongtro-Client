import Swal from 'sweetalert2'
import { GraphQLClient } from 'graphql-request'
import { IProvinceResponse } from '../interfaces'

const provinceFilePath = require('../graphql/province.graphql')
const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL_DEV)

export const queryProvinces = async () => {
	try {
		const response: IProvinceResponse = await graphQLClient.request(provinceFilePath)
		if (response.province.err === 0) {
			// Swal.fire("Oop !", response.province.msg, "success");
			return response.province.response
		} else {
			Swal.fire('Oop !', response.province.msg, 'error')
			return
		}
	} catch (error) {
		throw new Error('Failed to fetch Province')
	}
}
