import {createStore } from 'redux'
import { counterSlice } from '../reducers/reducer'

const store = createStore(counterSlice)

export default store