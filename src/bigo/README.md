# Big O Notation

- [Big O Notation](#big-o-notation)
  - [What's Big O Notation?](#whats-big-o-notation)
  - [Big O of Objects](#big-o-of-objects)
  - [Big O of Object Methods](#big-o-of-object-methods)
  - [Big O of Arrays](#big-o-of-arrays)
  - [Big O of Array Operations](#big-o-of-array-operations)

## What's Big O Notation?

Big O Notation is a tool used to describe the time complexity of algorithms. It calculates the time taken to run an algorithm as the input grows. In other words, it calculates the worst-case time complexity of an algorithm. Big O Notation in Data Structure describes the upper bound of an algorithm's runtime.

## Big O of Objects

Insertion -   O(1)

Removal -   O(1)

Searching -   O(N)

Access -   O(1)

When you don't need any ordering, objects are an excellent choice!

## Big O of Object Methods

Object.keys -   O(N)

Object.values -   O(N)

Object.entries -   O(N)

hasOwnProperty -   O(1)

## Big O of Arrays

Insertion -   It depends....

Removal -   It depends....

Searching -   O(N)

Access -   O(1)

## Big O of Array Operations

- push -   O(1)
- pop -   O(1)
- shift -   O(N)
- unshift -   O(N)
- concat -   O(N)
- slice -   O(N)
- splice -   O(N)
- sort -   O(N * log N)
- forEach/map/filter/reduce/etc. -   O(N)
