import types from './../actions/types'

let initialState = {
    num:0
}

export function counterSlice(state = initialState,action) {
    switch (action.type) {
        case types.INCREMENT:{
           let data = action.payload
           console.log('reducre plus',data);
           return{...state, num: data+1}
        }
        case types.DECREMENT:{
           let data = action.payload
           console.log('reducre minus',data);
           return{...state, num: data-1}
        }
        default:
            return{...state}
    }
}