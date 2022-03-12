import { createStore } from "redux";
import {rootReducer} from '../Redux/Reducer/index'

export const store=createStore(rootReducer)