---
layout: post
title:  "Ruby Concepts: Arrays and Hashes"
date:   2016-01-21 10:56:33 -0600
categories: ruby
---

#### Indexed Collections

There are many real world programming situations where you may need to store a collection of items into a variable. For example, if you need to handle the titles of Shakespeare's comedies, doesn't it make sense to store the titles of those comedies as a single list? Information that belongs together should be stored together. The following is not [exhaustive documentation](http://ruby-doc.org) of the Array and Hash classes but is meant to serve as an introduction.

#### Arrays

In Ruby, as in many programming languages, you can create such a list by initiating a new Array, which is an object that itself contains any number of indexed objects. These objects themselves may be integers, floats, strings, blocks, hashes, other arrays, etc, or even a mixture of different types of objects.

To create a new Array in Ruby, you can create a new instance of the Array class: `my_array = Array.new([object1, object2, object3])`. You can also use the literal syntax: `my_array = [object1, object2, object3]`. Each of the items in the array is indexed, which means that you can select a specific item based on its position in the list. To choose a specific item in the `my_array` variable, we would type the variable, followed by the index number in brackets. It is important to note that the first item has an index of 0, not 1\. To get the first item, we would type `my_array[0]`. You can also start counting from the end and work your way backwards by using negative index numbers. The last item has an index of -1, the second-to-last item has an index of -2, and so on. To select the last item, therefore, we would type `my_array[-1]`.

To add an item to an array that exists, one tool you can use is the `push` method.  

```ruby 
my_array = [1, 2, 3]  
my_array.push('taco')  

=> [1, 2, 3, 'taco']
````

#### Hashes

Hashes are similar to arrays in that you can use them to store a collection of objects. But whereas arrays define the index for you (i.e. 0, 1, 2, 3, 4, etc), in hashes, you define the index for your value, and it's known as a "key". Therefore, a hash is a collection of key/value pairs. It's important to note that the keys must be unique within the hash; two keys may share identical values, but each key can only have one value associated with it and must therefore be unique. If we had two keys named "favorite food", and one had the value "pizza", and one had the value "chocolate", which would be the favorite food? Because of this requirement for unique keys, hashes are also known as 'dictionaries'.

Hashes can be created most easily using the literal syntax, which uses curly braces `{}` and separates keys and values with `=>` and separates pairs with a comma: 

```ruby 
my_hash = {'key1'=>'value1', 'key2'=>'value2'}
```

Maybe it makes sense in our program to associate pairs of data, like U.S. Presidents and their ages at inauguration:

```ruby 
president_ages = {'Theodore Roosevelt' => 42, 'John F. Kennedy' => 43, 'Bill Clinton' => 46}
```

We could access a particular key/value pair by using its key in brackets: `president_ages['Bill Clinton']` will return the value `46`

To add a new item to the hash, just assign a value to the key specified in the brackets:

```ruby 
president_ages['Ulysses S. Grant'] = 46  

=> {'Theodore Roosevelt' => 42, 'John F. Kennedy' => 43, 'Bill Clinton' => 46, 'Ulysses S. Grant' => 46}
```

But be careful to remember that a hash can only have unique key-names, so if you were to assign a value to a key that already exists in the hash, you will overwrite your key/value pair!

#### Enumerable

One of the reasons arrays and hashes are so useful in programming is that they can be read, altered, and iterated over with the Enumerable methods: `sort`, `each`, `select`, `map`, and many more. Consider the following code:

```ruby 
president_ages.each do |key, value|  
  puts "#{key} was #{value} years old at inauguration."  
end  
```

This would output the following strings:

```
Theodore Roosevelt was 42 years old at inauguration.  
John F. Kennedy was 43 years old at inauguration.  
Bill Clinton was 46 years old at inauguration.  
Ulysses S. Grant was 46 years old at inauguration.
```

Hopefully after reading this short introduction to arrays and hashes in Ruby, you can begin to see the value of using these objects to store collections of related data.