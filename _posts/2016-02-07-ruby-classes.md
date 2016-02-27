---
layout: post
title:  "Ruby Concepts: Ruby Classes"
date:   2016-02-07 10:56:33 -0600
categories: ruby
---

#### What is a class?

Classes are one of the fundamental elements of object-oriented programming, which is a programming paradigm that abstracts the logic pertaining to similar "objects" into "classes" of attributes and methods. A class, therefore, is a sort of blueprint for new "instances" of the defined class. It defines the attributes of that particular object instance, which are known as _instance variables_, and also the _methods_ that that all instances can perform.

Classes help you to keep your code <abbr>DRY</abbr> (Don't Repeat Yourself) by making common methods and attributes easy to re-use and re-define for multiple related objects. You can also avoid repetition when you create a new, more specific sub-class by making it inherit from a parent class. The new class will have all of the attributes and methods of its parent class but may override them or add to them as needed.

#### Classes in Ruby

The syntax for defining a class in Ruby is quite simple. You simply use the `class` keyword and a capitalized class name. For our example we will create a class called Dog, which will be the general classification for individual dogs.

#### Defining the class and initialization

A class will have an `initialize` method, which can receive arguments and perform some initial logic when creating a new instance of the class. This is a good time to set up some initial instance variables, which are values defined for the particular instance only and are marked with a `@` symbol. Instance variables will be available inside of any method in the class definition.

```ruby
        class Dog

            def initialize(name, gender, breed, age)
                @name = name.capitalize
                @gender = gender
                @breed = breed.capitalize
                @age = age.to_i
            end

        end
```

#### Adding class methods

All new instances of `Dog` will represent a single real-life dog and will, just like their real-life counterparts, have their own `@name`, `@gender`, `@breed`, and `@age`. Let's add some methods, which can be thought of in this example as behaviors that each individual Dog has in common. The method is the same for all instances of the class, but it can be tailored to the data of the individual instance by incorporating the instance variables into its logic:

```ruby
        class Dog

            def initialize(name, gender, breed, age)
                @name = name.capitalize
                @gender = gender
                @breed = breed.capitalize
                @age = age.to_i
            end

            def bark
                puts "#{@name} says, 'Woof!'"
            end

            def print_profile
                puts "#{@name} is a #{@age}-year-old #{@gender} #{@breed}."
            end

        end
```

#### Using our class

In order to make a new instance of the class, I will (outside the class definition) define a variable as a new instance of the class: `dog1 = Dog.new("Jojo", "male", "Rottweiler", 4)`. Using the `new` method creates the instance of the class as a new object and calls the class's `initialize` method with the arguments you pass to it.

While we're at it, let's create a second, separate instance of the `Dog` class: `dog2 = Dog.new("Buttercup", "female", "Golden Retriever", 6)`.

`dog1` and `dog2` point to two separate objects, but since they are instances of the same `Dog` class, they both have the `bark` and `print_profile` methods available to them. If you use either of these methods on the separate objects, you will get results that use that object's instance variables' values:

```ruby
        > dog1.bark

        #=> "Jojo says, 'Woof!'"

        > dog2.bark

        #=> "Buttercup says, 'Woof!'"

        > dog1.print_profile

        #=> "Jojo is a 4-year-old male Rottweiler."

        > dog2.print_profile 

        #=> "Buttercup is a 6-year-old female Golden Retriever."
```

#### Further information

This is just an introduction to the concept of classes and object-oriented programming. For more information, visit one of the following resources:

*   [Tutorialspoint.com - Object Oriented Ruby](http://www.tutorialspoint.com/ruby/ruby_classes.htm)
*   [Rubylearning.com - Writing our own class in Ruby](http://rubylearning.com/satishtalim/writing_our_own_class_in_ruby.html)
*   [Ruby Docs - The "Class" class](http://ruby-doc.org/core-2.2.0/Class.html)