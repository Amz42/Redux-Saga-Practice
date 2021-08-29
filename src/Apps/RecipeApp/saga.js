import { call, put, fork, takeLatest} from "redux-saga/effects";
import * as Action from './action';
import { getRecipeData } from './api';

// Functionality
function* recipeWorker({payload}) {
    console.log("recipe worker called");
    try{
        const response = yield call(getRecipeData, payload);
        // console.log("API Data received:", response);
        yield put(Action.fetchRecipeSuccess(response.data));
    }catch(error){
        // console.log("API call Error:", error);
        yield put(Action.fetchRecipeError(error));
    }
}

function* recipeWatcher() {
    // console.log("recipe watcher called");
    yield takeLatest(Action.FETCH_RECIPE_API, recipeWorker);
}


// All Watchers combined
const recipeSagas = [fork(recipeWatcher)];

export default recipeSagas;