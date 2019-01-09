import { GET_ALL_DATA_REQUEST, GET_ALL_DATA_SUCCESS, GET_ALL_DATA_ERROR } from '../actions/actionTypes'

let initialState = {
    isLoading: false,
    data: null
}

export const appReducer =
    function (state = initialState, action) {
        switch (action.type) {
            case GET_ALL_DATA_REQUEST: {
                return {
                    ...state
                }
            }
            case GET_ALL_DATA_SUCCESS: {
                return {
                    ...state,
                    data: action.payload
                }
            }
            case GET_ALL_DATA_ERROR: {
                return {
                    ...state
                }
            }
        }
        return state;
    }