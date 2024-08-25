⭕Name of a Component's first letter is always in capital letter and the good practices is to make the files name also in that form. Vite library force you to make component in the form of .jsx but parcel and others not. 
But our goal is, if in any file there only js code then we have make it .js and if any html component will return then we have name that file .jsx  and this method only followed when react folder is not created using vite.

Virtual DOM:

⭕React kya karta hai ki ek virtual DOM banata hai jo html ke DOM se compare kar ke jo bhi chize different rahati hai virtual DOM se sirf unhe apna react change karta hai aur aese hi apna pura React Library kaam karta hai. 

⭕What it is: The Virtual DOM is a lightweight copy of the real DOM (Document Object Model) that React uses to optimize UI updates.

⭕How it works: When you make changes in your React components, instead of updating the real DOM right away (which is slow), React updates the Virtual DOM first. Then, it compares this updated Virtual DOM with the previous version using a process called "diffing."

⭕Why it's useful: After finding the differences (or "diffs"), React efficiently updates only the parts of the real DOM that have actually changed, making the UI more responsive and improving performance.


Fiber:  [Fiber documentry](https://github.com/acdlite/react-fiber-architecture) 

⭕What it is: Fiber is the reimplementation of React's core algorithm, which helps manage the process of updating the DOM. It was introduced to handle more complex user interfaces smoothly.

⭕How it works: Fiber breaks down the work of updating the DOM into smaller units, allowing React to pause, prioritize, or even abort work when necessary. This means React can keep the UI responsive even during heavy computations.

⭕Why it's useful: Fiber enables React to manage high-priority tasks (like user inputs) without delay, ensuring a smoother user experience even as the app grows in complexity.
In summary, the Virtual DOM helps React update the UI efficiently by minimizing changes to the real DOM, while Fiber ensures these updates are managed in a way that keeps the app responsive, even under heavy load.

PROPS: It makes component reusable. It is argument of any component's function and we can use any new object or array in any component. 

⭕If someone forget to provide properties in App.jsx so to overcome that situation we provide the default value in component's function argument which is used when no value provided by the component.
For Example: 1. function Card({username = "Sigma", btnText = 'Visit me'})
             2. {btnText || "Visit Me"}: Second method to overcome that situation. 

⭕The props in React are the inputs to a component of React. They can be single-valued or objects having a set of values that will be passed to components of React during creation by using a naming convention that almost looks similar to HTML-tag attributes. We can say that props are the data passed from a parent component into a child component.






