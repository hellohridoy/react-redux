const redux = require("redux");
const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
//action for buy cake
function buyCake() {
  //action and object with type property. action create a function return an action
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
//action for buy icecream
function buyIceCream() {
  //action and object with type property. action create a function return an action

  return {
    type: BUY_ICECREAM,
  };
}

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20
// }

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE: return {
//       ...state,
//       numOfCakes: state.numOfCakes - 1
//     }
//     case BUY_ICECREAM: return {
//       ...state,
//       numOfIceCreams: state.numOfIceCreams - 1
//     }
//     default: return state
//   }
// }

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

const mainReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

//  [ Action ] <-> [ Middleware ] <-> [ Dispatcher ]

// Middleware provides a third party extension point between dispatching an action and handing the action off to the reducer

//Examples of middleware include logging, crash reporting, routing, handling asynchronous requests, etc.

//Let's take the case of handling asynchronous requests, like an HTTP call to a server. Middleware is a great spot to do this.

const store = createStore(mainReducer, applyMiddleware(logger));
console.log("Initial State ", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
