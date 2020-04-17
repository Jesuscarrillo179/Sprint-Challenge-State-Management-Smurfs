1. What problem does the context API help solve?
you dont have to drill in prop.


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions dispatch functions in the reducer, the reducer contains state and manipulates it, store is what holds state in redux. the store holds all state for the whole app in a single spot called the store.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
use application state for big apps, and component state for small ones.
application state takes a lot more code to setup, while component state doesn't.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
it allows us to make async calls by giving it a middleware, it returns our action creators as functions rather than actions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
 i like redux because it simple to setup.