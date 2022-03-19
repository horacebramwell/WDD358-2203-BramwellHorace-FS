# Project & Portfolio VI

- **RESEARCH - Remembering Redux**
- **Horace Bramwell**
- **03/20/2022**

<br>

## Why you should use an object, and not an array, for lists in Redux

This article makes a good case for using an object instead of an array for lists in Redux. You can reduce the complexity of your code and make it easier to perform operations on the list by using an object. For example, to perform read, update, or delete operations in an array, you have to write a lot of code to handle the actions. You can reduce that code by opting for an object instead. You can perform the same operations by accessing a unique identifier with an object versus an array where you must use complex functions.

**Example:**

```
// Array
const todos = [ { id: 1, text: 'Learn Redux' }, { id: 2, text: 'Learn React' } ];

// Find the item with id: 1
const todo = todos.find(todo => todo.id === 1);

// Object
const todos = {
    1: { id: 1, text: 'Learn Redux' },
    2: { id: 2, text: 'Learn React' }
    };
}

// Find the item with id: 1
const todo = todos[1];
```

<br>

## Redux DevTools: Tips and tricks for faster debugging

This article discusses some tips and tricks for faster debugging in Redux using Redux DevTools. Redux dev tools are essentially tools used for Redux-based applications. Similar to Chrome DevTools which allows us to directly manipulate content on a web page, the Redux dev tools allow us to manipulate Redux operations on the web application. Some of the actions we can perform using Redux DevTools include:

- **Action tracing**: This allows us to see what call stack has triggered an action.
- **Skipping actions**: This can be done by using the log monitor and inspector to disable or remove an action from the timeline.
- **Jumping to actions**: In addition to skipping actions, Redux DevTools allows us to jump to a particular state without the need of moving through the timeline.
- **Allowing & Blocking Actions**: We can monitor only desired actions or block certain actions from appearing in the DevTools by adding a list of actions to either block or allow in the DevTools settings or while initializing it in our applications.

<br>

## Reference Links

Use this section to highlight your own independent research. Replace the example references below with your own links and recommended resources. It is acceptable to provide multiple links for a single topic.

What resource(s) did you find most helpful for this research assignment and why?

**Resource 1: Title**  
[Site Address](https://www.someaddress.com/full/url/)

**Resource 2: Title**  
[Site Address](https://www.someaddress.com/full/url/)

**Resource 3: Title**  
[Site Address](https://www.someaddress.com/full/url/)
