# Getting Started ...🚀

This project was bootstrapped using several demos linked-to below. This code is updated and revised on occasion. Use this material as additional reference while conducting your own research, development, and personal challenge activity.

<br>

## Available Scripts

In this "root" project directory, you can run:

### `dev-react-demo`
Runs an updated version of this [React demo](https://present.yourcode.app/af6e49c0-4be7-11e9-90d3-85a73e7e935c/0).   

The demo shows how to set up a React front-end server, and have that server communicate with a backend API. The code was recently revised and now demonstrates the use of React Router v6. 

### `react-demo`
This just runs the react-demo frontend, without the backend API.

### `dev-web`
The "web" folder was created following the "[Node-Setup](https://present.yourcode.app/39a7ef40-3aa6-11e9-9a38-61dde94d9e52/0)" demo, which shows the fundamentals of setting up a server. Use the folder as a general reference. 

### `web`
This runs the web server, without a backend API.

### `dev-web`
This runs the web server with a backend API. 

### `api`
This runs the API server, without a frontend.

### `react`
This runs the example ShipIt app, without a backend API. 

### `dev-reactjs`
This runs the example ShipIt app, with an in progress backend API. Feel free to experiment with the backend API by building out models, controllers, routes, etc. 

### `test`
An example test is available in the api directory. It uses the `__tests__` folder, which refers to a mock test that resides in the `__labs` folder. This was added for your reference and is for demonstration purposes only, but feel free to experiment with your own tests. 

To see Jest in action, CD into the api directory and run the test script: 

**npm run test** 

The example api test is from the Jest [getting started](https://jestjs.io/docs/getting-started) docs. 

The root package.json isn't running any tests, so the script is set to:   
`echo \"Error: no test specified\" && exit 1`


### `start`
This script is useful when using services like Heroku. Services like Heroku will look for a start script. Review this [deployment demo](https://present.yourcode.app/f31c9f70-895b-11ea-ab90-7fd834a0466e/0) to see and understand how the start script works with a variety of other scripts shown in this example codebase. 

<br>

**Note:**   
**`api/db/config.json`**   
This file is slightly different from the deployment demo. The update shown in this codebase now includes SSL settings, which are now required by Heroku.  


