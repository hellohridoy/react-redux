const redux = require("redux");
const createStore = redux.createStore;
const BUY_CAKE = "BUY_CAKE";
//action
function buyCake() {
  //action and object with type property. action create a function return an action
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
//(previousState,action) => newState

const initialState = {
  numberofCake: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberofCake: state.numberofCake - 1,
      };
  }
};

const store = createStore(reducer);
console.log(store);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
