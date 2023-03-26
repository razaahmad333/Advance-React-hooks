# UseTransition hook
- I can say it threads out codes or keeps some code in waiting list, which we want

## definition
- by default all the setStates are high priority,
```js
setName("Ahmad")
someExpensiveFunction();
setAge(20);
```
- in above case, the re-render will only take place once both states have been set
- but we can notice here, `age` will take time to set so we would not be able to see the change in `name`

```js
const [isPending, startTransition] = useTransition();
setName("Ahmad")
startTransition(()=>{
const ageInc =  someExpensiveFunction();
setAge(age => age + ageInc);
})
```
- Here using startTransition, I have declared that block of code as low priority, which means all others states will be re-rendered immediately, and `age` will 
  be rendered once the interpretter will get time
