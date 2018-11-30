let intialState = () => {
    isLoading: false
}

let appActionTypes = {
    isLoading: "appIsLoading"
}

export const appReducer =
    function (state = {}, action) {
        switch (action.type) {
            case appActionTypes.isLoading:
                return {
                    ...state,
                    ...action
                }
        }
        return state;
    }