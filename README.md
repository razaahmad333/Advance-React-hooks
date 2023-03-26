# My comments on createContext and useContext

- It saved me from props drilling
- I can also use context outside of provider, and at that time I only be accessing the default value passed into createContent

- creating and using context is all about creating a global variable, but the word global here is limited a bit, withing the hood we create a variable using useState

- above variable can be a function too, I can create a ThemeContext to provide variable theme and I can also create a ThemeUpdateContext to provide a function to update that variable
