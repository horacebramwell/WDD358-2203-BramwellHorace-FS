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

## Example Topic Title

Brief description of the resource and key concepts learned. Feel free to use bullets, embedded images, and other ideas to capture your research

- Key concept 1
- Key concept 2
- Key concept 3

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
