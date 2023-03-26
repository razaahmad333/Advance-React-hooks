# useDeferredValue hook
- there is a concept of debounce and throttle
### Difference between debounce and throttle
So, continuous user actions can significantly delay the callback function's execution if we use debounce. On the other hand, throttle uses the time delay to execute the callback function at regular intervals until the event trigger is active.

- I can use the above hook to set debounce type of thing for any variable
```js
 const deferredInput = useDeferredValue(input);
 const result = useMemo(()=>{
  return someExpensiveCalculation(deferredValue);
 }, [deferredInput])
```
- Here imagine input is any search term entered by user, so It would be better to not calculate, if use is pressing the key, let him/her enter the full keyword,
  then we will calculate ( 100ms )
