import {configureStore} from "@reduxjs/toolkit"
import { accountReducer } from "./ui/Header"
import {textReducer} from "./ui/Test"

const store = configureStore({
    reducer:{
        account:accountReducer,
        text:textReducer
    }
})


export default store