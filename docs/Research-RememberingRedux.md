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

**Resource 1: Jest Testing: A Helpful, Introductory Tutorial**  
[testim.io/](https://medium.com/geekculture/a-beginners-guide-to-unit-testing-with-jest-549a47edd3ea)

I wanted to learn more about unit testing with Jest and found this article to be a good resource. It walks you through the process of setting up a test environment, writing tests, and running them. As someone who has never written a test before, this article is a great introduction. Unit testing is considered one of the most important parts of software development. They are used to test the functionality of our code and to ensure that our code is working as intended.

<br>

**Resource 2: JavaScript Spread Operator**  
 [javascripttutorial](https://www.javascripttutorial.net/es6/javascript-spread/)

This article gives a straight forward explanation of the spread operator in JavaScript. Essentialy, the spread operator is used to expand or spread an iterable or an array. For example:

```
const arrValue = ['Hello', 'World'];

console.log(...arrValue); // Hello World
```

The spread operator can also be used to copy an array or object. For example:

```
const arrValue = ['Hello', 'World'];
const arrCopy = [...arrValue, '!', 'My', 'Name', 'Is', 'Horace'];


console.log(arrCopy); // Hello World ! My Name Is Horace
```

The spread operator can also be used on objects. For example:

```
const objValue = {
    name: 'Horace',
    city: 'Fort Lauderdale'
};


const objCopy = {
    ...objValue,
    state: 'FL'
};

console.log(objCopy); // { name: 'Horace', city: 'Fort Lauderdale', state: 'FL' }

```

<br>

**Resource 3: Container/Presentational Pattern**
[patterns.dev](https://www.patterns.dev/posts/presentational-container-pattern/)

This resource expands upon one of the resources provided this week. It provides visual examples of both the container and presentational components, and a detailed explanation of how they work. I found the use of the visual examples more helpful, allowing me to see exactly what is being explained in the article.

- **Presentational components** are components that are used to display data that gets passed in as props from the container component.
- **Container components** are responsible for passing data to the presentational components that they contain. Container components usually do not render any other components besides the presentational components.

There are a few benefits to using the container/presentational pattern such as encouraging the separation of concerns, allowing for more flexibility in the design of the application, and making components more reusable.

<br>

### **Presentational Component**

```
export default function Button(props) {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    );
}

```

### **Container Component**

```
export default class ButtonContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            <Button
                text={`Clicked ${this.state.count} times`}
                onClick={this.handleClick}
            />
        );
    }
}
```
