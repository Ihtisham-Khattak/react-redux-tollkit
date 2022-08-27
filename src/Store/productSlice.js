const {createSlice} = require("@reduxjs/toolkit")



const STATUS = Object.freeze({

    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUS,

    },

    //Pure Function not effect values outside from the fucntions
    reducers: {
        //Pass two parameters State and Actions
        add(state, action) {

            //Reduc Core 
            // return [...state, action.payload]
            state.push(action.payload)
        },

        remove(state, action){

            return state.filter((item)=> item.id !== action.payload)
        }

    }
})

export const {add, remove} = productSlice.actions
//Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers. {configureStore's reducer object needs reducers, but you're passing it a slice. (The slice contains a reducer, but the slice itself is not a reducer.) Pass reducer instead of reducers
export default productSlice.reducer    