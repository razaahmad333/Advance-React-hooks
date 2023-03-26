# UseRef

- I can use this to declare a variable in a functional component that persist between two renders, because If I will create a simple variable like

```js
let hii = "something";

//on something change hii to -->
hii = "something else";
```

this will be re-assigned everytime
but with

```js
const hii = useRef("something");

hii.current = 'something else"
```

the value will persist

- It is a nice way to do document.query by ref={inputRef}

- I can also use createRef and forwardRef and useImperativeHandle to create, pass and access the exposed data of child component.
