# Project & Portfolio VI

- **Research: How to Build an API**
- **Horace Bramwell**
- **03/06/2022**

<br>

## Building a Production Ready API

This resources covers the best practices and guidelines for building a production ready API. Some of the key concepts include:

- **Proper URL Schemas** - I learned that it is best to avoid verbs in the URL and use a scheme to indicate the type of resource. For example, a URL of `/users` is better than `/getUsers`. Although the latter can still work, it doesn't scale well.
- **Useing proper status codes** - I learned that it is best to use proper status codes to indicate the success or failure of a request and that they should be used consistently throughout the API. For example, GET, PUT, and PATCH should all return a 200 status code if the request is successful. If the request is unsuccessful, then the status code should be 400 or 500 depending on the type of error.
- **Asynchronous Response** - It is best practice to return a response to the client if an action is being performed asynchronously. For example, if a user is requesting a resource and the resource is being processed, then the response should be a 202 status code which indicates that the request was accepted but the response is not yet ready.

<br>

## Why Separate Your Front-end and Backend

This article covers some of the pros and cons of combining the front-end and backend as well as separating them. I hadn't thought of this before, but I think it is important to understand the reasons why software companies may prefer one or the other. Some of the key concepts include:

- **Cons of Coupling The Front-end and Backend** - Although there are some advantages to coupling the front-end and backend, coupling the front-end and backend doesn't make a lot of sense when working with a large application.
- **Pros of Seperating the Front-end from The Backend** - While there are some disadvantages to seperating the front-end from the backend, taking this approach makes it easier to make changes to the front-end without having to worry about breaking the backend and vice versa. It also make development and delpoyment quicker.
- **Which To Choose?** - I learned that both coupling and seperating the front-end from the backend have their own pros and cons. It is best to understand the ins-and-outs of your project before making a decision. For example, if you are working on a small application, then you may want to combine the front-end and backend. On the other hand, if you know your application is going to be large and contain a lot of logic, if might make more sense to separate the front-end from the backend.

<br>

## Reference Links

What resource(s) did you find most helpful for this research assignment and why?

**Resource 1: Seven Reasons Why A Website's Front-End And Back-End Should Be Kept Separate**  
[Forbes.com](https://www.forbes.com/sites/forbestechcouncil/2018/07/19/seven-reasons-why-a-websites-front-end-and-back-end-should-be-kept-separate/?sh=7f1a2b374fca/) - This article gave some additional insight into why it is best to separate the front-end and backend.

**Resource 2: How to Use Git and Git Workflows – a Practical Guide**  
[Freecodecamp.com](https://www.freecodecamp.org/news/practical-git-and-git-workflows/#pull-request-workflow) - This article is a very in depth guide to git and git workflows. I found this resource helpful in helping understand pull requests workflow. This was something that sort of confused me initially, but I think I have a better understanding of what it and it's importance.

**Resource 3: Database Structure and Design Tutorial**  
[lucidchart.com](https://www.lucidchart.com/pages/database-diagram/database-design) - This resource does a pretty good job of breaking down the structure and design of a database. It covers the process, how to analyze requirements, and integrety rules. I found this resource helpful because it was very clear and easy to understand as a new comer to database design.
