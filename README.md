# Level 2 Assignment 01: TypeScript: Blog

# What are some differences between Interfaces and Types in TypeScript?

We use "interfaces" and "types" for multiple benefits. The first core reason for using TypeScript is type safety for our code. Apart from this main core reason, there are benefits like Code Autocompletion, Reusable and scalable Code, Self-Documentation, etc.

However, though both Interfaces and Types provide type safety, code intelligence, and other similar benefits, there are still differences between these. Here I am gonna talk about 3 core differences between Type and Interface:
differences

1. Delaration Marging:
   This is one of the main differences between Type and Interface. Delaration Marging is allowed in Interface but not in Type. Here is the example:

interface Person {
name: string;
}

interface Person {
age: number;
}

const person: Person = { name: "John", age: 30 }; // This will work

type Person = {
name: string;
};

type Person = {
age: number; // it will show error as it is not allowed.
};

2. Use with Primitives, Unions, and Tuples:
   Interface only works with object shape, whereas Type is flexible with the use of Primitives, Unions, and Tuples. Example:

   interface ID = string | number; // It won't work as Interface can only describe object shapes

where Type is flexible with:
type ID = string | number;

type Point = [number, number];

type Status = "success" | "error";

3. Extending
   Both can extend, but interface uses extends while type uses intersection (&). Example:

interface Animal {
name: string;
}

interface Dog extends Animal {
breed: string;
}

type Animal = {
name: string;
};

type Dog = Animal & {
breed: string;
};

So, these were the 3 core differences of Type and Interface.

# What is the use of the keyof keyword in TypeScript? With an example.

keyof is a another beatiful type operator of typescript. Its powerful and very helpful for writing code. It's used to create a union of the property names (keys) of a given type or interface.

keyof helps writing error free generic funtion, without it there is chances of making error by typing mistmatch or wrong key of object, without keyof typescript won't show any error while writing or you can say before compiling. So, it protectss us from mistakes and makes the valid return type.

Example of using keyof in generic funtion:

interface Book {
title: string;
pages: number;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
return obj[key];
}

const book: Book = { title: "TS Guide", pages: 300 };

// Valid use:
const title = getProperty(book, "title"); // Returns string which is value of title "TS Guide"

// Invalid use:
const author = getProperty(book, "author"); // It will show error instantly in code as "author" is not a key of Book

So, keyof leads to safer, cleaner, and smarter code — which is exactly what TypeScript aims for.
