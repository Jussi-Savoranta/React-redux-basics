import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.result})
                // concat is kind of a push. Push manipulates original array, but concat returns new array where the new value is added to old array 
            }
        case actionTypes.DELETE_RESULT:
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
};

export default reducer;