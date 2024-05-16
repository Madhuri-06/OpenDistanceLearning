import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './rootReduer'

// import { composeWithDevTools } from 'redux-devtools-extension';

const store=configureStore({
    reducer:rootReducer,
})


export default store