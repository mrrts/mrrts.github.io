---
layout: post
title:  "Ruby Concepts: the Enumerable \"any?\" Method"
date:   2016-01-28 10:56:33 -0600
categories: ruby enumerable
---

#### What is the `any?` Method?

The [Enumerable](http://ruby-doc.org/core-2.2.3/Enumerable.html) module in Ruby contains many useful methods that can traverse, search, and sort arrays and hashes.

The `any?` method is used to search through the object and evaluate each item in it using the block that you supply. If _any_ of the items causes that block to return true, the `any?` method itself will return true. If none of the items causes the block to evaluate to true, then the `any?` method will return false.

#### Usage

Consider the following code, which determines whether there are any even numbers in the array.

```ruby
my_array = [3, 7, 5, 1]
my_other_array = [3, 7, 6, 5, 1]

my_array.any? {|item| item % 2 == 0}
    # returns FALSE

my_other_array.any? {|item| item % 2 == 0}
    # returns TRUE
```
               

We called the `any?` method on our arrays, and then we supplied a block to it (`{ ... }`). Then, in between the pipes we created a variable to refer to the current item we're testing in the array: `|item|`. Then, we wrote an expression to evaluate using that current item: `item % 2 == 0`. This expression will evaluate as true if the item is an even number, and it will evaluate to false if it isn't. If _any_ of the items cause that expression to evaluate as true, then the whole `any?` method will return true. The method essentially asks, "Are _any_ of the numbers in this list even?"

#### Example With Strings

Let's use the `any?` method in a game to evaluate whether the user was able to successfully, say, describe a koala using only words with 4 letters or fewer.

```ruby
response1 = "It is wee and can look like a bear in a tree"
response2 = "It is a wee animal with a soft bear face"
responses = [response1, response2]

responses.each do |response|
    if response.split(' ').any? {|word| word.length > 4}
        puts "'#{response}' is not a winning sentence."
    else 
        puts "'#{response}' is a winning sentence!"
    end
end
```

This outputs the following:

```
'It is a wee and can look like a bear in a tree' is a winning sentence!

'It is a wee animal with a soft bear face' is not a winning sentence.
```
                 