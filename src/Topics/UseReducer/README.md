# Use Reducer hook
- takes two params and returns an array with two entries
```js
const [state, dispatch] = useReducer( reducer, initialState );
```
- state and initialState can a primitive type or an object
- reducer is a function which recieves  two arguments -> state and action
```js
function reducer(state, action){
  return updatedState;
}
```
- Here `state` is previous state and the argument `action` is same as the argument in `dispatch`, when dispatch is called

