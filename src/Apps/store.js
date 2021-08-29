import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleWare = createSagaMiddleware();
let middleware = [sagaMiddleWare];

if(process.env.NODE_ENV === `development`){
    middleware = [
        ...middleware,
        logger
    ];
}

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleWare.run(rootSaga);

export default store;