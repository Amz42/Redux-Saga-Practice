import {combineReducers} from "redux";
import recipeReducer from './RecipeApp/reducer';

const rootReducer = combineReducers({
    recipe: recipeReducer
});

export default rootReducer;