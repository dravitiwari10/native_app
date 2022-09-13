import * as actionType from '../actions/types'

const initialState = {
    loginToken: '',
    userId: '',
    mobileNo: '',
    lat: '',
    lng: '',
    loader: false,
    // isFocused: 0
}

export default (state = initialState, action) => {
    const newState = { ...state }
    const { payload, type } = action
    // console.log('authReducer==>', action)
    switch (type) {
        case actionType['LOGINTOKEN']: return {
            ...newState,
            loginToken: payload
        }
        case actionType['LAT']: return {
            ...newState,
            lat: payload
        }
        case actionType['LNG']: return {
            ...newState,
            lng: payload
        }
        case actionType['USER_ID']: return {
            ...newState,
            userId: payload
        }
        case actionType['MOBILE_NO']: return {
            ...newState,
            mobileNo: payload
        }
        case actionType['LOADER']: return {
            ...newState,
            loader: payload
        }
    }
    return newState
}