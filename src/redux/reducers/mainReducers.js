import { consoleLog } from '../../utility/commonResource'
import * as actionType from '../actions/types'

const initialState = {
    address: '',
}

export default (state = initialState, action) => {
    // consoleLog('PROPSSSSSSSSSSS==>', action)
    const newState = { ...state }
    const { payload, type } = action
    // console.log('mainReducer==>', action)
    switch (type) {
        case actionType['LOCATION']: return {
            ...newState,
            address: payload
        }
        case actionType['CART_COUNT']: return {
            ...newState,
            cart_count: payload
        }
        default:
            return newState;
    }
    // return newState
}