import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from "../reducer";

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const logger = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  //console.log("next state", store.getState());
  return result;
};

export default createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));
