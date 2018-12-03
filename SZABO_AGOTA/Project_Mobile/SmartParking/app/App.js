//ap.js
//@flow

import React, {Component} from "react";
import { AppRegistry} from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { RootReducer } from "../common/redux/reducers/RootReducer";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import AppContainer, { Tab } from "../app/container/AppContainer";

//for logging events made in redux
const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
});

function configureStore(initialState) {
  /* An ehancer is a way of composing a bunch of middleware functions
  that run in each transformation of state of your application. */
  const enhancer = compose(applyMiddleware(thunkMiddleware,loggerMiddleware));
  return createStore(RootReducer, initialState, enhancer);
}

export default class App extends Component {
  store: typeof createStore;

  componentDidMount() {
    // do anything while splash screen keeps, use await to wait for an async task.
    //persistStore(this.store, { storage: AsyncStorage });
  }
  constructor(props) {
    super(props);
    this.store = configureStore({});
  }

  render() {
    return (
      <Tab />
    );
  }
}

AppRegistry.registerComponent("SmartParking", () => App)