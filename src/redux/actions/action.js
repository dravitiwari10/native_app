import types from "./types"

export const increment = (data)=> {
    console.log('increment fn call',data);
    return {
        type:types.INCREMENT,
        payload:data
    } 
}

export const decrement = (data)=> {
    console.log('decrement fn call',data);
    return {
        type:types.DECREMENT,
        payload:data
    } 
}