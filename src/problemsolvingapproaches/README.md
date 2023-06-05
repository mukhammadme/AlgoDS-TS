# Problem Solving Patterns

- [Problem Solving Patterns](#problem-solving-patterns)
  - [How to improve problem solving skills?](#how-to-improve-problem-solving-skills)
  - [Problem Solving](#problem-solving)
    - [Understand the Problem](#understand-the-problem)
    - [Explore Concrete Examples](#explore-concrete-examples)
    - [Break It Down](#break-it-down)
    - [Solve/Simplify](#solvesimplify)
    - [Look Back and Refactor](#look-back-and-refactor)
      - [REFACTORING QUESTIONS](#refactoring-questions)

## How to improve problem solving skills?

1. **Devise** a plan for solving problems
2. **Master** common problem solving patterns

## Problem Solving

- Understand the Problem
- Explore Concrete Examples
- Break It Down
- Solve/Simplify
- Look Back and Refactor

### Understand the Problem

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
5. How should I label the important pieces of data that are a part of the problem?

> Example:
>
> Write a function which takes two numbers and returns their sum.
>
> 1. Can I restate the problem in my own words?
    - Implement addition
> 2. What are the inputs that go into the problem?
    - ints?
    - floats?
    - what about string for large numbers?
> 3. What are the outputs that should come from the solution to the problem?
    - int?
    - float?
    - string?
> 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
> 5. How should I label the important pieces of data that are a part of the problem?

### Explore Concrete Examples

1. Start with Simple Examples
2. Progress to More Complex Examples
3. Explore Examples with Empty Inputs
4. Explore Examples with Invalid Inputs

> Example:
>
> Write a function which takes in a string and returns counts of each character in the string.
>
> 1. Start with simple examples
    - charCount("aaaa") => {a:4}
    - charCount("hello") => {h:1, e:1, l:2, o:1}
> 2. Progress to more complex examples
    - charCount("my phone number is 182763") => what about spaces and numbers?
    - charCount("Hello hi") What about (upper/lower)casing?
> 3. Explore examples with Empty inputs
    - charCount("") => What should be returned?
> 4. Explore examples with invalid inputs
    - charCount(11223) => What should be returned?

### Break It Down

Explicitly write out the steps you need to take.

_This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well._

> Example:
>
> Write a function which takes in a string and returns counts of each character in the string
>
> charCount("aaa") => {a: 4}
> charCount("Your PIN number is 1234!") =>
> {
      1: 1,
      2: 1,
      3: 1,
      4: 1,
      b: 1,
      e: 1,
      i: 2,
      m: 1,
      n: 2,
      o: 1,
      p: 1,
      r: 2,
      s: 1,
      u: 2,
      y: 1
    }
>
> 1) Less details
> 
> ``` code
> charCount(str) {
>    // do something
>    // return an object with keys that are lowercase alphanumeric characters in the string; 
>       values should be the counts for those characters.
> }
> ```
>
> 2) More details
> 
>``` code
> charCount(str) {
>    // make object to return at end
>    // loop over string, for each character...
>        // if the char is a number/letter AND is a key in object, add one to count
>        // if the char is a number/letter AND is not in object, add it and set value to 1
>        // if the character is something else (space, period, etc) don't do anything
>    // return object at end
>}
> ```

### Solve/Simplify

1. Find the core difficulty in what you're trying to do
2. Temporarily ignore that difficulty
3. Write a simplified solution
4. Then incorporate that difficulty back in

> Example:
>
> Write a function which takes in a string and returns counts of each character in the string

```ts
function charCount(str: string) {
 // make object to return at end
 const result: { [key: string]: number } = {};
 // loop over string, for each character...
 for (let i = 0; i < str.length; i++) {
  let char = str[i].toLowerCase();
  // if the char is a number/letter AND is a key in object, add one to count
  if (result[char] > 0) {
   result[char]++;
  }
  // if the char is a number/letter AND is not in object, add it and set value to 1
  else {
   result[char] = 1;
  }
 }
 // if the character is something else (space, period, etc) don't do anything
 // return object at end
 return result;
}
```

### Look Back and Refactor

#### REFACTORING QUESTIONS

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

> Example:
>
> Write a function which takes in a string and returns counts of each character in the string

```ts
// 1-Solurion O(n)
function charCount(str: string) {
    const result: { [key: string]: number } = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            result[char] = ++result[char] ||  1;
        }
    }
    return result;
}


// 2-Solurion O(n)
function charCount(str: string) {
    const result: { [key: string]: number } = {};
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            result[char] = ++result[char] ||  1;
        }
    }
    return result;
}

function isAlphaNumeric(char: string) {
    const code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
        return false;
    }
    return true;
}
```
