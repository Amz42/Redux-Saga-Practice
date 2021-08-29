export const FETCH_RECIPE_API = "FETCH_RECIPE_API";
export const FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS";
export const FETCH_RECIPE_ERROR = "FETCH_RECIPE_ERROR";

export const fetchRecipeApi = (query) => {
    return {
        type: FETCH_RECIPE_API,
        payload: query
    }
}

export const fetchRecipeSuccess = (data) => {
    return {
        type: FETCH_RECIPE_SUCCESS,
        payload: data
    }
};

export const fetchRecipeError = (error) => {
    return {
        type: FETCH_RECIPE_ERROR,
        payload: error
    }
};