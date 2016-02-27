---
layout: post
title:  "Programming Concepts: Dynamic vs. Static-Typed Languages"
date:   2016-02-17 10:56:33 -0600
categories: programming
---

#### Variable Types

In most programming languages, we define variables and assign them a value of some sort to use later in the program. The value assigned to the variable can be any one of several "types": an object, primitive string, integer, float number, boolean, symbol, array, hash, or a special value like `undefined` or `nil`. Languages differ in the amount of flexibility they give to the program in its treatment of these variables.

#### Statically-Typed Languages

When you hear about a 'statically-typed' language, it doesn't have anything to do with 'typing' on a keyboard. It has to do with determining the _types_ of the variables in the programs written in that language.

In a statically-typed language, the type of the variable is known at compile time, which is when the code is translated to fast, low-level, machine-readable code. The programmer specifies the type of the variable when declaring the variable itself. The individual variable may not hold a value of a different type later in the program.

The advantage for the programmer is that the compiler can catch 'type' errors even before the program is attempting to run. It already knows that the addition of this variable, which is declared as a string, and that variable, which is declared as an integer, will not compute. Because the type of the variable is fixed, or static, there will never be a situation where both variables could have an integer value.

Examples of statically-typed languages include C, C++, and Java.

Example of declaring variables in C:

```c
        // Variable declaration:
        extern int a, b;
        extern int c;
        extern float f;
```

Example of defining variables and assigning them values in C:

```c
       /* variable definition: */
       int a, b;
       int c;
       float f;

       /* actual initialization */
       a = 10;
       b = 20;

       c = a + b;
       printf("value of c : %d \n", c);

       f = 70.0/3.0;
       printf("value of f : %f \n", f);
```

#### Dynamically-Typed Languages

In contrast, a dynamically-typed language interprets its variables at runtime, when the program is actually running. A variable can be declared with a string value, for instance, but it can be given an integer value at a later point in the program.

Because the variable can truly _vary_ in type, there is no way to predict type errors with certainty prior to runtime. Therefore, a program written in a dynamically-typed language may have more bugs to track down due to mis-matched data types. For instance, you may be attempting to call a method on a string object that only belongs to array objects.

While there is more potential for bugs at runtime with a dynamically-typed language, there is also a significant advantage in that the programmer is able to write code much more quickly because they don't have to spend the time specifying the type for every variable they declare. You can still define the type of your variable in most dynamically-typed languages, but the language does not require it.

Examples of dynamically-typed languages include Perl, Ruby, Python, PHP, and JavaScript.

#### Sources

*   [Explanation on StackOverflow](http://stackoverflow.com/questions/1517582/what-is-the-difference-between-statically-typed-and-dynamically-typed-languages)
*   [TutorialsPoint: C Variables](http://www.tutorialspoint.com/cprogramming/c_variables.htm)