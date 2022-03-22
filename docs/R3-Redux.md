# Project & Portfolio

- **Notes - "Implementing Redux**
- **Horace Bramwell**
- **03/22/2022**

<br>

## State Management

This document contains general notes related to State Management...

<br>

## Data and Components

- Components in the example ShipIt app (reactjs) contain props... this gives us a clue on the data and what each individual component expects.
- Understanding what data a component needs makes it a bit easier to pull together the elements of Redux. When analyzing the ShipIt example front end, it's helpful to also understand [React PropTypes](https://www.andreasreiterer.at/react-proptypes/) (Nice Article Explaining Use of PropTypes)
- Review of defaultProps and PropTypes defined in components seen throughout the example ShipIt app, gives us an idea as to what props these individual components will need.
- When using Container.js files, mapToDispatch and mapToProps helps us pull out of state a slice of store data needed for a component.

<br>

## Set up Redux

To use Redux and Redux-Thunk, we would want to install those packages in a React project, and then... verify this shows up in our package.json file as a dependency.

`npm install redux-thunk`  
`npm install redux react-redux`

<br>

## Set up the Store

An example place to setup and organize redux files is to first use a "src" folder in the React project...

**Example:** Using a src folder to scaffold and organize Redux files, by first including the "store" directory: `reactjs/src/store`

We can then use the store folder to logically organize our work. For example...

```
store/index.js
store/actionTypes.js
store/posts/actions.js
store/posts/reducer.js
store/anotherPage(for example... users)/actions.js
store/users/reducer.js
etc.
```

**Tip:** We don't necessarily have to create 1/1 folders in our store folder for every page contained in a React app. Instead, we can just use store folders to logically organize related data. For example... the example ShipIt 'profile' page could be drawing from a users folder that contains a related reducer and actions.

 <br>
	
### Add an index file to the Store folder

Example store [index file](https://present.yourcode.app/004aff80-4c3a-11e9-acdb-4d51e6ac33f2/9)

Brief description of the store index file...

To create a store we need a reducer (only one reducer, but we can combine multiple reducers into one) and a middleware. The store index file is where we pull in all the reducers and combine them into one. Ideally, reducers should be grouped in a logical way. For example, if we know we have a post page that is expecting data (props), we can create in the store folder a sub folder to organize posts data using a reducer and action file...

`reactjs/src/store/posts/actions.js`  
`reactjs/src/store/posts/reducer.js`

This makes our application more manageable because instead of having one massive reducer, we took the time to break out the information across multiple reducers related to the different resources expecting data (i.e. pages located here: reactjs/src/pages).

For example, our app could have multiple folders in the store folder for comments, users, etc. After pulling in the reducers, you will need to use combineReducers (which is imported from Redux).

```
// combine multiple reducers into one
const rootReducer = combineReducers({
  comments,
  posts,
  ...and so on,
});

```

[Add a reducer to the store](https://present.yourcode.app/004aff80-4c3a-11e9-acdb-4d51e6ac33f2/16): This example slide demonstrates how to add a reducer to the store index file.
To decide how many reducers and action files are needed for a store, you could begin by checking out what pages/components exist and how they are organized in a React app. For example, the ShipIt app organizes most content in its pages directory: `reactjs/src/pages`

Upon review of the different reactjs pages, we can then decide how to organize our reducers and actions into related store folders.

So that Redux and Action Creators can work with the API, Thunk is needed. This is because the dispatch function will be used. This is typically synchronous, meaning that a call to dispatch returns data immediately without interruption. We know we will need to work with the API though, so Thunk will help us make API calls in an asynchronous way. In other words, we will use await to retrieve back information from the API before calling dispatch.

[Reference **actions.js** file](https://present.yourcode.app/004aff80-4c3a-11e9-acdb-4d51e6ac33f2/8): This file demonstrates asynchronous use of dispatch. This is the approach you can take when an asynchronous call to an API is needed.

[Reference **Store Index** File](https://present.yourcode.app/004aff80-4c3a-11e9-acdb-4d51e6ac33f2/9): This file demonstrates combining reducers and adding Thunk to the store.

This store.index code excerpt shows adding middleware for logging and Thunk...

```
// reactjs/src/store/index.js
// Import what we need from redux and
// Thunk middleware to enable asynchronous actions...

import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

// and later in the index.js code
// set up the middleware...

const middleware = applyMiddleware(
  thunkMiddleware,
  createLogger(),
);

```

After all of this setup work, the store is then exported.

<br>

## Create an actionTypes.js file

So we have consistency when using actions, use a file to keep track of the action names we will be using throughout our Reducers, Action Creators, etc.

Suggested location for this file...
`reactjs/src/store/actionTypes.js`

[Example actionTypes file](https://present.yourcode.app/004aff80-4c3a-11e9-acdb-4d51e6ac33f2/34): This example shows how actions may look when building out a store.

<br>

## Import and Provide the store to the App

`reactjs/src/App.js` —--> Update the App so that it has access to the store

An import statement will look something like this...

`import { store } from './store';`

After importing the store, we also need to provide access to the store to the entire app. We can do this by wrapping the entire app with the Provider tag. That looks something like this... `<Provider store={store}>`

Reference: [Adding Redux to an App](https://present.yourcode.app/004aff80-4c3a-11e9-acdb-4d51e6ac33f2/10)

<br>

## Connect Components...

The example ShipIt pages directory contains components we would likely want to connect (so those components can access store data). To connect any of these pages/components to data... we would need to create `container.js` files.

### Add a Container File

Example location for a container.js file...  
`reactjs/src/pages/post/container.js`

[Example **container.js** file](https://present.yourcode.app/004aff80-4c3a-11e9-acdb-4d51e6ac33f2/11): This container demonstrates how to use mapStateToProps and mapDispatchToProps.

A good way of thinking about mapDispatchToProps is that we use this to provide to the page any action needed for the page. We defined those actions in our `store/PageName/actions.js` file.

A good way of thinking about mapStateToProps is that this is providing the piece of state needed for the page. When an action is invoked due to a state change (like a button being clicked, a form being submitted, a page loading, etc.) The reducer sends back to the action this portion of state that can then be used within the page.

After creating the container file the page itself needs to be updated to have access to the container data.

<br>

### Update a Page to use Container

At this point we need to switch the page/component to use our container file instead of default or example data.

[Update the Container](https://present.yourcode.app/004aff80-4c3a-11e9-acdb-4d51e6ac33f2/18): This example page demonstrates how to import and export a container so that we are essentially wrapping the page with data provided to us from the store.

After connecting a component, we also want to make sure we are no longer using any defaultProps or example data. If you were to experiment with the ShipIt site for example, you would want to comment out all of that to see if the application is actually pulling in data from the container.

<br>

**Note: Remove Example Data!**
After connecting a page, we can test to see if data is actually propagating the page as needed.

- Does temporary default data exist for the page? For example, the ShipIt app uses default data initially for its examplePosts. That data is pulled from '../../exampleData/posts.json';
- If temporary data like that exists, then we would want to comment this out to be able to experiment with Redux. In other words, we would remove our **defaultProps**!

**Tip:** If you experiment with containers, you may want to isolate exactly where data is being used within the app. Click around the React ShipIt site, and you can quickly see where defaultProps data is being used on the frontend. Sometimes it may be necessary to refresh the browser. As we connect containers we can then revisit these locations to verify data is actually coming through as needed.

<br>

## Reference Links

**Resource 1: Redux for Beginners – The Brain-Friendly Guide to Learning Redux**  
[freecodecamp.org](https://www.freecodecamp.org/news/redux-for-beginners-the-brain-friendly-guide-to-redux/)

This article provides a very in-depth explanation of the workings of Redux Toolkit by walking through the steps of creating a simple to-do list app. I found it very helpful to see how you would use Redux Toolkit to perform CRUD operations with code examples and explanations of what is happening behind the scenes. I feel a bit more confident in my ability to implement Redux Toolkit into my final project.

<br>

**Resource 2: createAsyncThunk in Redux-Toolkit**  
[javascript.plainenglish.io](https://javascript.plainenglish.io/createasyncthunk-in-redux-toolkit-4d8d2f0412d3)

The previous article API section and the "createAsyncThunk in Redux-Toolkit" article gave me a pretty basic understanding of how to use middleware with Redux Toolkit to make API calls. I learned that Redux Toolkit is synchronous, so you would need to use the createAsyncThunk middleware to make the calls to the API.

**Example:**

```
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_,{rejectWithValue}, {condition:true}) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        return data;
        } catch (error) {
        return rejectWithValue([], error);
    }
);
```

**createAsyncThunk** accepts three arguments:

- The first is a string action type.

  - **ex:** _'todos/fetchTodos'_

- The second is the payload creator callback function.

  - **ex:** _async (\_,{rejectWithValue}) => {}_

- The third is an options object.

  - **ex:** _{condition:true}_

**Type**

This is a string that is used to index additional action types such as pending, success, and failure. The additional action types represent the life cycle of an asynchronous action.

- **ex:** _'todos/fetchTodos'_
  - **pending**: _'todos/fetchTodos_PENDING'_
  - **fulfilled**: _'todos/fetchTodos_FULFILLED'_
  - **rejected**: _'todos/fetchTodos_REJECTED'_

**Payload Creator**

This is an async function that returns a promise. If the function is successful, the promise will resolve with the payload. If the function fails, the promise will reject with the error.

- **ex:** _async (\_,{rejectWithValue}) => {}_
  - arg: a string or object value
  - slug: of the job in your dispatch
  - thunkAPI: an object that contains Redux thunk function parameters.

**Options Object**

This object contains the optional parameters that can be passed to the createAsyncThunk function.

- **ex:** _{condition:true}_
  - condition: a boolean value that determines whether the thunk will be executed.

<br>

**Resource 3: Redux Devtools for Dummies**  
[codeburst.io](https://codeburst.io/redux-devtools-for-dummies-74566c597d7)

This topic has been covered a bit in previous research, but I wanted to learn more about how to implement it into my final project. I found this article helpful in getting things set up. It takes you through each step, from setting up the Chrome extension to installing the necessary dependencies and settings. It also gives a decent breakdown of the DevTools Console.
