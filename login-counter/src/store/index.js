import {configureStore} from "@reduxjs/toolkit"

import counterReducer from './counter-slice';
import authReducer from './auth-slice';


const store = configureStore({
    reducer:{ counter: counterReducer, auth: authReducer},
}); 



{/*const counterReducer = (state=initialState,action)=>{
    if(action.type === 'increment'){
        return{
            counter: state.counter +1,
            showCounter:state.showCounter,
        }
    }
    if(action.type === 'decrement'){
        return{
            counter: state.counter -1,
            showCounter:state.showCounter,
        }
    }
    if(action.type === 'increaseBy5'){
        return{
            counter: state.counter +5,
            showCounter:state.showCounter,
        }
    }
    if(action.type === 'toggle'){
        return{
            showCounter: !state.showCounter,
            counter: state.counter
    }
}
    return state;
}
const store = createStore(counterReducer);*/}

export default store;