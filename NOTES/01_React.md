### NOTES 

### ⭕Name of a Component's first letter is always in capital letter and the good practices is to make the files name also in that form. Vite library force you to make component in the form of .jsx but parcel and others not. 
But our goal is, if in any file there only js code then we have make it .js and if any html component will return then we have name that file .jsx  and this method only followed when react folder is not created using vite.

### Virtual DOM:

⭕React kya karta hai ki ek virtual DOM banata hai jo html ke DOM se compare kar ke jo bhi chize different rahati hai virtual DOM se sirf unhe apna react change karta hai aur aese hi apna pura React Library kaam karta hai. 

⭕What it is: The Virtual DOM is a lightweight copy of the real DOM (Document Object Model) that React uses to optimize UI updates.

⭕How it works: When you make changes in your React components, instead of updating the real DOM right away (which is slow), React updates the Virtual DOM first. Then, it compares this updated Virtual DOM with the previous version using a process called "diffing."

⭕Why it's useful: After finding the differences (or "diffs"), React efficiently updates only the parts of the real DOM that have actually changed, making the UI more responsive and improving performance.


### Fiber:  [Fiber Documentry](https://github.com/acdlite/react-fiber-architecture) 

### ⭕What it is: Fiber is the reimplementation of React's core algorithm, which helps manage the process of updating the DOM. It was introduced to handle more complex user interfaces smoothly.

⭕How it works: Fiber breaks down the work of updating the DOM into smaller units, allowing React to pause, prioritize, or even abort work when necessary. This means React can keep the UI responsive even during heavy computations.

⭕Why it's useful: Fiber enables React to manage high-priority tasks (like user inputs) without delay, ensuring a smoother user experience even as the app grows in complexity.
In summary, the Virtual DOM helps React update the UI efficiently by minimizing changes to the real DOM, while Fiber ensures these updates are managed in a way that keeps the app responsive, even under heavy load.

### PROPS: It makes component reusable. It is argument of any component's function and we can use any new object or array in any component. 

⭕If someone forget to provide properties in App.jsx so to overcome that situation we provide the default value in component's function argument which is used when no value provided by the component.
For Example: 1. function Card({username = "Sigma", btnText = 'Visit me'})
             2. {btnText || "Visit Me"}: Second method to overcome that situation. 

⭕The props in React are the inputs to a component of React. They can be single-valued or objects having a set of values that will be passed to components of React during creation by using a naming convention that almost looks similar to HTML-tag attributes. We can say that props are the data passed from a parent component into a child component.

### HOOKS: It is a special type of functions which provide a state and "statefunction" i.e., used to update the state. 

1. useState: Syntax: 'const[state, stateFunction] = useState()' ; Here state will change by using stateFunction. 
2. useCallback: 'useCallback(fn, dependencies)': Dependencies is type of array which values are locally stored the dependecies as a cache and used when fn required.
3. useEffect: Everything is same as the useCallback but it is responsible for the calling fn when any dependencies get changed. 
4. useRef: This hook is used to make communication between two things in react components, if we want to do something in any html element then we used this hook. For Eg.: In password generater project we use this hook when we want to select the input text for that we pass the reference to the input field and the we run the fn.

###  CONTEXT API: Behind the scene of this topic is called PROP DRILLING  in which passing of props to child component is directly. 
### The Context API in React helps solve the problem of "prop drilling." Normally, when you need to pass data (props) to a deeply nested component, you have to pass it through every component in between, even if they don't need it. The Context API allows you to share data directly between components without having to pass it manually through each level, making the code cleaner and easier to manage.
1. Passing data deeply into the tree
2. Updating data passed via context
3. Specifying a fallback default value
4. Overriding context for a part of the tree
5. Optimizing re-renders when passing objects and functions 

### REDUX TOOLKIT: It helps manage the global state of your application in a predictable way. For small applications, React's Context API may suffice, but for larger apps with complex state, Redux shines.

### Core Concepts of Redux:
### Store: A single JavaScript object that holds the application state. In argument most of the time it takes object only. 
### Syntax: 
⭕import {configureStore} from '@reduxjs/toolkit'
⭕export const store = configureStore({
    reducer: todoReducer
   })


Actions: Objects that tell the Redux store how to update the state.

Reducers: Functions that specify how the state changes in response to an action. It include property and function. Inside function we have always two thing first is state and second is Actions. 


### Dispatch: Ye Ek Reducer ko use karke store ke andar value me changes karata hai. The function used to send actions to the store.  
SYNTAX: const addTodoHandler = (e) => { 
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

### SUMMARY: 
1. REDUX is core library and React-Redux is a implementation of REDUX and it is wiring of React and Redux which helps React to communicate with Redux core library. 
2. Redux Toolkit is a tool which provide all these behid the work of React-Redux in the form of methods.
3. Starting of Redux Toolkit is from creating a store in general one application have only one store which is called Single Source of Truth.
4. Provide all Reducer to our store. 