---
layout: post
title:  "JavaScript Concepts: Ruby Classes vs. JavaScript Constructor Functions"
date:   2016-02-13 10:56:33 -0600
categories: javascript
---

#### Ruby Classes

In Ruby, everything is an object. You can define a custom `class` to make a sort of "blueprint" for objects you plan to create in your program that would be categorized together in real life. All objects that belong to that class are "instances" of that class, and the `class` definition itself specifies what those individual instances "know" (attributes, stored in instance variables - `@variable`) and what they can "do" (instance methods). Ruby classes also have an `initialize` method, which is automatically called any time you create a new instance of the class.

#### JavaScript Constructor Functions

In JavaScript, it's easy to achieve a similar object-oriented design pattern by using constructor functions. A constructor function is sort of like a Ruby initialize method and class definition all in one. It is like an initialize method in that it sets the value of certain instance variables, known as **properties**, and it also lets you define methods that the object can do, which are ALSO its **properties**. (Edit: After reading other [posts](http://torihuang.github.io/blog/JavaScript.html), I feel I should point out that in JavaScript's prototype inheritance you are creating a clone of a prototype object, but you can add and modify properties on your new object at will after the initial cloning; the inheritance isn't as rigid as a Ruby object that is an instance of its parent class).

So, a JavaScript object's "instance variables" and "methods" are all lumped together as "properties" on that object.

#### How to Define a Constructor Function

You define a constructor function in the same way that you'd make any other function in JavaScript, but the convention is to begin its name with a capital letter, which is similar to class-naming conventions in other languages. The constructor function can accept any number of parameters, just like the arguments of the initialization method in a Ruby class definition.

Inside the function, you will define properties that any new object in this "class" will share, and you define them using the `this` keyword, which refers to the present object (the present "instance" being created). The values of these properties will vary depending on the particular object, of course, which is why it is useful to pass instance-specific data into the constructor function via its parameters.

If you want to create a class method, you can define a function as the value of a property on the object.

```javascript
    function Car (make, model, year, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.report = function () {
            console.log('This car is a %d %s %s with %d miles.', year, make, model, mileage);
        }
    }
```

#### Using Our Constructor Function to Create an Object

To create a new object using our constructor function, we use the `new` keyword. The `new` keyword will automatically create a new object and will invoke the associated constructor function with the new object playing the role of `this`.

```javascript
        var my_car = new Car ('Honda', 'Civic', 1997, 120326);
```

The resulting object is saved in the `my_car` variable and looks like this:

```javascript
        // my_car

        {
            make: "Honda",
            model: "Civic",
            year: 1997,
            mileage: 120326,
            report: function () {
                console.log('This car is a %d %s %s with %d miles.', year, make, model, mileage);
            }
        }
```

#### Using Our New Object

To access the properties (including the attributes and the methods) on our object, we can either use the bracket `[ ]` syntax or the dot `.` syntax. The dot can be used to find the exact property name, but only works if the property name is a single word (no spaces) and follows the rules for [valid JavaScript variable naming](https://mathiasbynens.be/notes/javascript-identifiers). The bracket syntax will evaluate whatever is in the brackets and use that returned value as the exact propery name to search for.

```javascript
        console.log(my_car.make, my_car.model);

        // ->  "Honda Civic"

        console.log(my_car["make"], my_car["mo" + "del"]);

        // ->  "Honda Civic"
```

To use our `report` property, we can access it just like any other property, but since its a function we'd like to invoke, we must include `()` after the property name. Parentheses are required to invoke a function in JavaScript, regardless of whether you are passing any parameters.

In the following example, we will access our `report` property, which was defined as a function, and then invoke it with parentheses. We will also then change one of the properties on our object and then run the report again.

```javascript
        my_car.report();

        // ->  "This car is a 1997 Honda Civic with 120326 miles." 

        my_car.mileage++;
        my_car.report();

        // ->  "This car is a 1997 Honda Civic with 120327 miles."                  
```


#### Further Resources

*   [Working with Objects - Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)