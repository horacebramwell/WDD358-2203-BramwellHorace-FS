# Project & Portfolio VI

- **RESEARCH - Complex Sequelize**
- **Horace Bramwell**
- **03/13/2022**

<br>

## Sequelize: Validation

Alex Booker does a great job of explaining the validation process in Sequelize with very detailed examples.

- Model validation allow you to validate the data before saving it to the database. This is useful for preventing data from being saved to the database if it is invalid and to prevent errors from occurring in your application.
- Add the validate property to the model definition and pass in an object with the validation rules.
- Errors should be user friendly and added to inside the validation object.

```
title: {
    type: DataTypes.STRING,
    validate: {
        len: {
            args: [1, 255], // min, max length of the title
            msg: 'Title must be between 1 and 255 characters' // explicitly set the error message
        }
    }
}
```

- If the model allowNull is set to true, the validation will not be run.
- Custom validation rules can be added to the model.

```
title: {
    type: DataTypes.STRING,
    validate: {
        startsWithUpper: function(val) {
            let firstChar = val.charAt(0);
            let startsWithUpper = firstChar === firstChar.toUpperCase();
            if (!startsWithUpper) {
                throw new Error('Title must start with an uppercase letter');
            } else {
                // ...
            }
        }
```

- When you add a custom validation rule, you can pass in a function that will be called with the value of the field. If the function does not throw an error, the validation passes.

<br>

## Sequelize: Hooks

Another great video by Alex Booker covering Sequelize hooks also known as middleware. Hooks are a great way to add additional functionality to your models.

- Hooks are functions that are called when some event occurs.
- Hooks are called before and after the event.

```
beforeCreate: function(user, options) {
    user.email = user.email.toLowerCase();
}
```

- There are several hooks available to you. You can find a list of them [here](https://sequelize.org/master/manual/hooks.html).
- You can't use hooks with instances. You can only use hooks with models.
- There are 3 ways to add hooks to your models. 

```
// 1. Add a hook to the model using the hook property

    User.init({
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        }
    }, {
        hooks: {
            beforeCreate: function(user, options) {
                user.email = user.email.toLowerCase();
            }
        },
        sequelize: db
    });

// 2. Using the Model object

    User.addHook('beforeCreate', function(user, options) {
        user.email = user.email.toLowerCase();
    });

 // 3. Using the Model object with a hook function
    
    User.beforeCreate(async (user, options) {
        user.email = user.email.toLowerCase();
    });
```

<br>

## Reference Links

**Resource 1: Configuring Environment Variables in Node.js**
[Youtube.com](https://www.youtube.com/watch?v=14zY-u9EBCU) 

This was a helpful video in helping me understand what environment variables are and how to set them up. There are a few different ways they can be set up. 

* Enviornment variables usually are all caps. They don't have to be, it's just best practice. For example, to create `MY_VARIABLE`. 
* To run the variable in the application, you would use `process.env.MY_VARIABLE`.
* The variable can be set in a number of ways. 

``` 
    // 1. Set the variable in the application

    process.env.MY_VARIABLE = 'Hello World';

    // 2. Set the variable in the application using the dotenv package

    // This will look for a file called .env in the root directory of the project.
    require('dotenv').config(); 

    // 3. Set the variable in the command line

    MY_VARIABLE=Hello World  

    // 4. Set the variable using cross-env 

    cross-env MY_VARIABLE=Hello World

    // 5. Set the variable inside of the package.json file

    "scripts": {
        "dev": "PORT=3000 node index.js"
    }

```


**Resource 2: Sequelize Migration**
[Youtube.com](https://www.youtube.com/watch?v=a5Wh_LDXtLc) 

This video by Ben Awad does a great job explaing sequelize migrations. This has been something that I didn't quite understand at first. Although the video is 5 years old, it still does a great job explaining what migrations are, how to use them, and how to run them in Sequelize.

* A migration is a file that is used to track the changes to the database.
* We can use migrations to add new columns, remove columns, or change the data type of a column.
* The migration file has an up and down function. Inside of these fucntions is where we place the code that we want to run.
* The up function is used to update the database.
* The down function is used to roll back the changes.

```
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', { 
            id: {
                allowNull: false, 
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users');
    }
};
```

**Resource 3: 17 Practical psql Commands That You Don’t Want To Miss**
[postgresqltutorial.com](https://www.postgresqltutorial.com/psql-commands/)

This is a pretty short but uself guide to common psql terminal commands. Some of them include:

* psql -d database_name -U username -c - This is the command to connect to the database.
* \q - This command is used to exit the psql terminal.
* \l - This command is used to list all of the databases.
* \c - This command is used to connect to a specific database.
* \d - This command is used to describe a table.
* \dt - This command is used to list all of the columns in a table.
