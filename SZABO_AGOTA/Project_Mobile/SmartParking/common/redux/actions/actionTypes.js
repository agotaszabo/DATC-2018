import { callApi, EndPoints } from '../api';

export const GET_ALL_DATA_REQUEST = 'GET_ALL_DATA_REQUEST';
export const GET_ALL_DATA_ERROR = 'GET_ALL_DATA_ERROR';
export const GET_ALL_DATA_SUCCESS = 'GET_ALL_DATA_SUCCESS';

export const getAllData = () => {
    dispatchEvent({type: GET_ALL_DATA_REQUEST})

    const { payload } = await callApi(EndPoints.getAllData)

    dispatchEvent({type: GET_ALL_DATA_SUCCESS, payload})

}