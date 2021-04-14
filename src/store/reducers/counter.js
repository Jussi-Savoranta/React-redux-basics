import * as actionTypes from '../actions';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state); // creates new js-object and distributes old state values to it
            newState.counter = state.counter +1;    // updating the newState
            return newState;                        // overwriting only this property to the state
        case actionTypes.DECREMENT:
            return {
                ...state, // spread operator does the same exact thing as above, but is shorter way of writing it
                counter: state.counter - 1 // this leaves state.results untouched, it doesn't overwrite that
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
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