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

* When you add a custom validation rule, you can pass in a function that will be called with the value of the field. If the function does not throw an error, the validation passes.

<br>

## Sequelize: Hooks

Another great video by Alex Booker covering Sequelize hooks also known as middleware. Hooks are a great way to add additional functionality to your models.

* Hooks are functions that are called when some event occurs.
* Hooks are called before and after the event.

```
beforeCreate: function(user, options) {
    user.email = user.email.toLowerCase();
}
```

* There are several hooks available to you. You can find a list of them [here](https://sequelize.org/master/manual/hooks.html).
* You can't use hooks with instances. You can only use hooks with models.
* There are alternative ways to add hooks. 




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
