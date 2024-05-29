import { configureStore } from '@reduxjs/toolkit'
import fightReducer from '../reducers/fightReducer'

export const store = configureStore({
    reducer: {
        fight: fightReducer

    },
})