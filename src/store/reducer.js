const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const newState = Object.assign({}, state); // creates new js-object and distributes old state values to it
            newState.counter = state.counter +1;    // updating the newState
            return newState;                        // overwriting only this property to the state
        case 'DECREMENT':
            return {
                ...state, // spread operator does the same exact thing as above, but is shorter way of writing it
                counter: state.counter - 1 // this leaves state.results untouched, it doesn't overwrite that
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter})
                // concat is kind of a push. Push manipulates original array, but concat returns new array where the new value is added to old array 
            }
        case 'DELETE_RESULT':
            // const id = 2;
            // const newArray = [...state.results]; // creating a copy of the array
            // newArray.splice(id, 1); // updating created array
            
            // filter will copy of old array and takes a function as a property which it will execute on every element in that array
            const newArray = state.results.filter(result => result.id !== action.resultElId); // return true if id is not id from action
            return  {
                ...state,
                results: newArray // storing updated newArray to old array
            }
    }
    return state;
    // if(action.type === 'INCREMENT') {
    //     return {
    //         counter: state.counter +1
    //     }
    // }
    // if(action.type === 'DECREMENT') {
    //     return {
    //         counter: state.counter -1
    //     }
    // }
    // if(action.type === 'ADD') {
    //     return {
    //         counter: state.counter + action.value
    //     }
    // }
    // if(action.type === 'SUBTRACT') {
    //     return {
    //         counter: state.counter - action.value
    //     }
    // }
    // return state;
};

export default reducer;