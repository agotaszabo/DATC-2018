// //this will be the "Server" config
// // showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce'
import _ from 'lodash'

const BASE_URL = 'http://34.73.166.92'

export const api = create({ 
     baseURL: BASE_URL
})

export const Endpoints ={
    getAllData: BASE_URL+'/v1/parking-lot'
}

export const callApi = async (endpoint, params, method = "get", config = {}) => {
    try {
        const { ok, problem, data, status, headers } = await api[`${method}`](endpoint, params, config)
        if (ok) {
            const payload = _.get(data, 'payload')
            return { payload }
        }

        const error = _.get(data, 'error')
        if (error && error.validationErrors) {
            let errorMessage = ""
            Object.keys(error.validationErrors).forEach(key => {
                errorMessage = `${errorMessage}\n${error.validationErrors[key].join('\n')}`
            })

            throw new Error(errorMessage)
        } else if (error) {
            return { error }
        }

        throw new Error("not good")

    } catch (err) {
        const errorMessage = _.get(err, 'message', "not good")
        return { error: { message: errorMessage } }
    }
}