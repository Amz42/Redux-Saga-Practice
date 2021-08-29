import { all } from "redux-saga/effects";

import recipeSagas from "./RecipeApp/saga";

export default function* rootSaga() {
    yield all([
        ...recipeSagas
    ]);
};