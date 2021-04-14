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