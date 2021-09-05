import * as Action from './action';

const initialState = {
    loading: false,
    data: [],
    error: ""
};

const recipeReducer = (state = initialState, action) => {
    // console.log("Reducer:", state, action.type);
    switch (action.type) {
        case Action.FETCH_RECIPE_API: return {
            ...state,
            loading: true
        };

        case Action.FETCH_RECIPE_SUCCESS: return {
            ...state,
            loading: false,
            data: action.payload,
            error: ""
        };

        case Action.FETCH_RECIPE_ERROR: return {
            ...state,
            loading: false,
            data: [],
            error: action.payload
        };

        default: return state;
    };
};

export default recipeReducer;