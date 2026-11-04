export interface BankQuestion {
  id: string;
  topic: string;
  question: string;
  answer: string;
  tags: string[];
}

/**
 * 1,000+ Curated Interview Questions and Crisp Model Answers across 16 core disciplines:
 * JavaScript, TypeScript, React, Node.js, Python, Java, Go, SQL & Data, System Design,
 * DevOps & Cloud, Security, AI & Machine Learning, Algorithms & DSA, Frontend, Mobile, and Behavioral.
 */
export const questionBank: BankQuestion[] = [
  {
    "id": "q-javascript-1",
    "topic": "JavaScript",
    "question": "What is iOS 11 SDK Features for Developers ?",
    "answer": "New MapKit Markers Configurable File Headers Block Based UITableView Updates MapKit Clustering Closure Based KVO Vector UIImage Support New MapKit Display Type Named colors in Asset Catalog Password Autofill Face landmarks, Barcode and Text Detection Multitasking using the new floating Dock, slide-over apps, pinned apps, and the new App Switcher Location Permission: A flashing blue status bar anytime an app is collecting your location data in the background. Updated locations permissions that always give the user the ability to choose only to share location while using the app.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-2",
    "topic": "JavaScript",
    "question": "What’s Completion Handler ?",
    "answer": "Completion handlers are super convenient when our app is making an API call, and we need to do something when that task is done, like updating the UI to show the data from the API call. We’ll see completion handlers in Apple’s APIs like dataTaskWithRequest and they can be pretty handy in your own code. The completion handler takes a chunk of code with 3 arguments:(NSData?, NSURLResponse?, NSError?) that returns nothing: Void. It’s a closure. The completion handlers have to marked @escaping since they are executed some point after the enclosing function has been executed.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-3",
    "topic": "JavaScript",
    "question": "What kind of order functions can we use on collection types ?",
    "answer": "map(:): Returns an array of results after transforming each element in the sequence using the provided closure. filter(:): Returns an array of elements that satisfy the provided closure predicate. reduce(::): Returns a single value by combining each element in the sequence using the provided closure. sorted(by:): Returns an array of the elements in the sequence sorted based on the provided closure predicate. To see all methods available from Sequence",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-4",
    "topic": "JavaScript",
    "question": "What is the Swift main advantage ?",
    "answer": "To mention some of the main advantages of Swift: Optional Types, which make applications crash-resistant. Built-in error handling. Closures. Generics, Protocol Extensions and Constraints make it easy to reuse code and implement new functionality. Faster in execution when using best practices (Slower in compilation). Type-safe language. Supports pattern matching. More human readable code.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-5",
    "topic": "JavaScript",
    "question": "What are the data types present in JavaScript?",
    "answer": "JavaScript has primitive and composite data types.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-6",
    "topic": "JavaScript",
    "question": "What is the difference between null and undefined?",
    "answer": "While both null and undefined represent \"no value\" in JavaScript, they are distinct in their roles and origins.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-7",
    "topic": "JavaScript",
    "question": "How does JavaScript handle type coercion?",
    "answer": "Type Coercion in JavaScript refers to the automatic conversion of values from one data type to another.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-8",
    "topic": "JavaScript",
    "question": "Explain the concept of hoisting in JavaScript.",
    "answer": "Hoisting is a JavaScript mechanism that involves moving variable and function declarations to the top of their containing scope during the compile phase. However, the assignments to these variables or the definitions of functions remain in place. For instance, even though the call to myFunction appears before its definition, hoisting ensures that it doesn't cause an error.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-9",
    "topic": "JavaScript",
    "question": "Why Hoisting Matters",
    "answer": "Understanding hoisting can help you prevent certain unexpected behaviors in your code. For example, it can shed light on unexpected \"undefined\" values that might appear even after a variable is declared and initialized.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-10",
    "topic": "JavaScript",
    "question": "What is the scope in JavaScript?",
    "answer": "Scope defines the accessibility and lifetime of variables in a program. In JavaScript, there are two primary types: Global Scope and Local Scope.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-11",
    "topic": "JavaScript",
    "question": "What is the difference between == and ===?",
    "answer": "Strict equality (===) in JavaScript requires both value and type to match, testing for more specific conditions and reducing the likelihood of unexpected results. In contrast, the abstract equality comparison (==) can lead to type coercion, potentially causing counterintuitive outcomes. While both comparison modes test value equality, === ensures an additional match of data type.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-javascript-12",
    "topic": "JavaScript",
    "question": "Describe closure in JavaScript. Can you give an example?",
    "answer": "In JavaScript, closures enable a function to access its outer scope, retaining this access even after the parent function has finished executing. This mechanism provides a powerful tool for data encapsulation and privacy.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-13",
    "topic": "JavaScript",
    "question": "What is the 'this keyword' and how does its context change?",
    "answer": "In JavaScript, the context of this refers to the execution context, typically an object that owns the function where this is used.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-14",
    "topic": "JavaScript",
    "question": "What are arrow functions and how do they differ from regular functions?",
    "answer": "Let's look at the key features of arrow functions and how they differ from traditional functions in JavaScript.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-15",
    "topic": "JavaScript",
    "question": "When to Use Arrow Functions",
    "answer": "- Event Handlers: Ideal for concise, inline event handling, where this context can be inherited from the lexical scope. - Callback Functions: Useful for array methods like map, filter, and reduce. - Avoidance of this Redefinition: When you want to maintain the surrounding context of this and avoid unintended redefinition.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-16",
    "topic": "JavaScript",
    "question": "What are template literals in JavaScript?",
    "answer": "Template literals are a feature in modern JavaScript versions that offer a more flexible and readable way to work with strings. They are often referred to as \"template strings\".",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-17",
    "topic": "JavaScript",
    "question": "What is a higher-order function in JavaScript?",
    "answer": "A higher-order function in JavaScript is a function that can take other functions as arguments or can return functions. This feature enables functional programming paradigms such as map, reduce, and filter. Higher-order functions offer versatility and modularity, fostering streamlined, efficient code.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-18",
    "topic": "JavaScript",
    "question": "Can functions be assigned as values to variables in JavaScript?",
    "answer": "Yes, JavaScript supports first-class functions, meaning functions can be treated as variables and then assigned to other variables or passed as arguments to other functions. Functions defined as regular functions or arrow functions are both first-class in JavaScript.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-19",
    "topic": "JavaScript",
    "question": "How do functional programming concepts apply in JavaScript?",
    "answer": "Functional Programming (FP) concepts in JavaScript are a direct result of the language's first-class functions. Key FP principles, such as immutability, pure functions, and declarative style, play a crucial role.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-20",
    "topic": "JavaScript",
    "question": "What are IIFEs (Immediately Invoked Function Expressions)?",
    "answer": "The Immediately Invoked Function Expression (IIFE) design pattern employs an anonymous function that gets executed promptly after its definition. Key characteristics of IIFEs include localized variable scopes and immediate activation upon interpreter parsing.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-21",
    "topic": "JavaScript",
    "question": "How do you create private variables in JavaScript?",
    "answer": "In JavaScript, encapsulating private state within an object can be achieved using a closure. This ensures the state is local to the object and not directly accessible from outside.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-22",
    "topic": "JavaScript",
    "question": "What is the event loop in Node.js?",
    "answer": "The event loop is a fundamental concept in Node.js for managing asynchronous operations. Its efficiency is a key reason behind Node.js's high performance.",
    "tags": [
      "async",
      "performance"
    ]
  },
  {
    "id": "q-javascript-23",
    "topic": "JavaScript",
    "question": "How Does the Event Loop Work?",
    "answer": "1. Initialization: When Node.js starts, it initializes the event loop to watch for I/O operations and other asynchronous tasks. 2. Queueing: Any task or I/O operation is added to a queue, which can be either the microtask queue or the macrotask/Callback queue. 3. Polling: The event loop iteratively checks for tasks in the queue while also waiting for I/O and timers. 4. Execution Phases: When the event loop detects tasks in the queue, it executes them in specific phases, ensuring order efficiency.",
    "tags": [
      "async"
    ]
  },
  {
    "id": "q-javascript-24",
    "topic": "JavaScript",
    "question": "How Decorators Work",
    "answer": "- Higher-Order Functions: Decorators are functions that take another function as an argument and return a new function. - Closures: They leverage Python’s support for closures to \"wrap\" the original function, allowing code execution both before and after the target function runs. - First-Class Objects: Since functions in Python are first-class objects, they can be passed as arguments, assigned to variables, and returned from other functions.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-25",
    "topic": "JavaScript",
    "question": "What is this repo?",
    "answer": "A practice lab for JavaScript interviews. It's not a long theory course: it's concrete, direct material aimed at helping you pass your next technical interview. It includes: - Interview questions by topic, each with a short answer, a simple explanation, a code example, a common mistake, and how to answer it out loud. - Code challenges you can run with Node.js. - Output questions (what does this code print?) with answers and explanations. - Mock interviews for junior, mid-level, and frontend profiles. - A 4-week study path. ---",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-26",
    "topic": "JavaScript",
    "question": "How to run the exercises",
    "answer": "You need Node.js installed (version 18 or later). Run any .js file directly: node 06-code-challenges/reverse-string.js node 07-output-questions/output-001.js Or use the scripts defined in package.json: npm run output:001 npm run output:002 npm run start:challenge ---",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-27",
    "topic": "JavaScript",
    "question": "How to practice for interviews",
    "answer": "- Read the question and answer it out loud as if an interviewer were sitting across from you. - Use the \"How to answer it in an interview\" section of each topic as a base script, but in your own words. - Do the mock interviews in 08-mock-interviews/ with a timer. - Practice writing code without autocomplete to get used to whiteboards and plain editors. - Review the output questions until you can predict the result without hesitating. ---",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-28",
    "topic": "JavaScript",
    "question": "How to contribute",
    "answer": "Found a bug, want to add a question, or improve an explanation? All help is welcome. Read CONTRIBUTING.md to learn how. ---",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-29",
    "topic": "JavaScript",
    "question": "Are you looking for a junior dev job?",
    "answer": "- :link: JrDevJobs: http://jrdevjobs.com - :link: Stackoverflow Junior jobs: https://stackoverflow.com/jobs/junior-developer-jobs [[↑] Back to top](#table-of-contents-of-this-readme-file)",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-30",
    "topic": "JavaScript",
    "question": "When you get stuck",
    "answer": "- Codementor : A mentorship community to learn from fellow developers via live 1:1 help and more. - devRant : Community where you can rant and release your stress - Learn Anything : Community curated knowledge graph of best paths for learning anything - Quora : A place to share knowledge and better understand the world - Stack Overflow : subscribe to their weekly newsletter and any other topic which you find interesting - Stackoverflow High Scored JS Questions : Dashboard to track top Javascript questions asked on Stackoverflow [[↑] Back to top](#table-of-contents-of-this-readme-file)",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-31",
    "topic": "JavaScript",
    "question": "What is an event loop?",
    "answer": "The event loop in JavaScript handles asynchronous operations by queuing them up and processing them one by one in a non-blocking way. It checks the event queue continuously and processes the oldest operation first. When an operation is completed, its callback function is executed.",
    "tags": [
      "async"
    ]
  },
  {
    "id": "q-javascript-32",
    "topic": "JavaScript",
    "question": "What are the drawbacks of using the \"delete\" operator in JavaScript?",
    "answer": "The \"delete\" operator in JavaScript has drawbacks. It can be slow and impact performance when deleting object properties. It does not affect the prototype chain, leading to unexpected behavior. It also cannot delete variables or functions declared with \"var\" or \"function\" keywords.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-javascript-33",
    "topic": "JavaScript",
    "question": "Find the output of this:",
    "answer": "func createCounter () -> () -> Void { var counter = 0 func incrementCounter () { counter += 1 print (counter) } return incrementCounter } let closure = createCounter() closure() closure() closure()",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-javascript-34",
    "topic": "JavaScript",
    "question": "How to use this repository",
    "answer": "Install all dependencies npm install Run ESLint You may want to run it to check code quality. npm run lint Run all tests npm test Run tests by name npm test -- 'LinkedList' Troubleshooting",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-typescript-35",
    "topic": "TypeScript",
    "question": "Install job search tools",
    "answer": "python3 tools/installportalclis.py # Windows: python tools\\installportalclis.py It runs bun install in every portal CLI under .agents/skills//cli/ - discovered, not listed, so a portal you add with /add-portal or copy from another fork is included on a fresh clone. A CLI whose package.json declares an install-time lifecycle script is skipped and reported rather than run. --dry-run shows what it would install. For linkedin-search and freehire-search the install is optional: both have zero runtime dependencies and run with plain bun; bun install only pulls TypeScript dev types.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-36",
    "topic": "TypeScript",
    "question": "Strict Input Validation (Allow-listing)",
    "answer": "Description: Validate input against a defined schema. In 2026, utilize Pydantic (Python) or Zod (TypeScript/Node.js) for runtime type checking and constraint enforcement. - Example (Pydantic v2.10+): from pydantic import BaseModel, StringConstraints from typing import Annotated class UserLogin(BaseModel):",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-37",
    "topic": "TypeScript",
    "question": "What is TypeScript and how does it differ from JavaScript?",
    "answer": "TypeScript is a statically-typed superset of JavaScript, developed and maintained by Microsoft. It enables enhanced code maintainability and predictability. After compiling, TypeScript code is transpiled into standard, browser-compatible JavaScript. Key distinctions between TypeScript and JavaScript include the use of type annotations, the ability to work with existing JavaScript code, and more.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-38",
    "topic": "TypeScript",
    "question": "Can you explain what is meant by \"TypeScript is a superset of JavaScript\"?",
    "answer": "TypeScript is often described as a \"superset of JavaScript\" because every valid JavaScript code is also a valid TypeScript code. TypeScript is designed in a way that it fully embraces existing JavaScript syntax and functionality. This ensures a smooth transition for developers wishing to adopt or migrate to TypeScript.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-39",
    "topic": "TypeScript",
    "question": "What are the basic types available in TypeScript?",
    "answer": "TypeScript provides an assortment of basic types for different kinds of data, such as numbers, strings, boolean values, arrays, tuples and more.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-40",
    "topic": "TypeScript",
    "question": "How do you declare variables in TypeScript?",
    "answer": "In TypeScript, variable declarations support different methodologies for declaring variables and their associated types.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-41",
    "topic": "TypeScript",
    "question": "Function Scope",
    "answer": "All three methods (var, let, and const) are confined to their immediate function scope: function doSomething() { let tempValue: number = 42; var result: boolean = true; }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-42",
    "topic": "TypeScript",
    "question": "What are Interfaces in TypeScript and how do they work?",
    "answer": "In TypeScript, an interface defines the structure and types of its members. It acts as a contract for the required properties and methods, ensuring that implementing classes or objects match this structure.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-43",
    "topic": "TypeScript",
    "question": "How do you define and use a function in TypeScript?",
    "answer": "When defining a function in TypeScript, you have the following fundamental components to consider: - Function Signature: Comprising the function's purpose, parameters, type, and return value. - Function Body: Containing the actual operation or series of steps the function will execute.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-44",
    "topic": "TypeScript",
    "question": "Function Declaration",
    "answer": "To declare a function, you specify its name, its parameter list, and its return type. If the function doesn't return a value, you set the return type to void. Here is a code example: function greet(name: string): void { console.log(Hello, ${name}!); }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-45",
    "topic": "TypeScript",
    "question": "Function Expression",
    "answer": "You can also declare functions using expressions, which involve assigning functions to variables as values. This approach allows you to be more flexible, such as when you're using callbacks. Here is an example: let greet: (name: string) => void; greet = function(name: string): void { console.log(Hello, ${name}!); };",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-46",
    "topic": "TypeScript",
    "question": "Optional and Default Parameters",
    "answer": "TypeScript supports both optional and default function parameters, enhancing the flexibility of your functions. Optional Parameters are denoted by a ? symbol after the parameter name. Here is the code example: function greet(name: string, title?: string) { if (title) { console.log(Hello, ${title} ${name}!); } else { console.log(Hello, ${name}!); } } Default Parameters are when you assign a default value to a parameter: Here is the code example: function greet(name = \"Stranger\") { console.log(Hello, ${name}!); }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-47",
    "topic": "TypeScript",
    "question": "Use Rest Parameters",
    "answer": "You can define a parameter as a \"rest\" parameter, which means the function can accept any number of arguments for that parameter. Here is the code example: function introduce(greeting: string, ...names: string[]) { console.log(${greeting}, ${names.join(\", \")}!); } introduce(\"Hello\", \"Alice\", \"Bob\", \"Carol\");",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-48",
    "topic": "TypeScript",
    "question": "Function Overloads",
    "answer": "You can declare multiple function overloads to define a set of parameters and their return types for a single function. This feature is especially beneficial when the function's behavior logically varies based on different input types. Here is the code example: function specialGreet(name: string): void; function specialGreet(title: string, name: string): void; function specialGreet(a: any, b?: any): void { if (b) { console.log(Hello, ${a}, ${b}); } else { console.log(Hello, ${a}); } }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-49",
    "topic": "TypeScript",
    "question": "Call Signature",
    "answer": "When using objects in TypeScript, you have the call signature to define the expected function structure for a specific method within the object. Here is a code example: type Greeter = { (name: string): void }; let welcome: Greeter; welcome = function(name: string): void { console.log(Welcome, ${name}!); };",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-50",
    "topic": "TypeScript",
    "question": "What does \"type inference\" mean in the context of TypeScript?",
    "answer": "In TypeScript, type inference is a core feature that allows the type of a variable to be automatically determined from its value. This provides the benefits of static typing without the need for explicit type annotations.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-51",
    "topic": "TypeScript",
    "question": "Explain the use of 'let' and 'const' in TypeScript.",
    "answer": "TypeScript makes use of const and let for variable declaration. These two keywords offer explicitness, scoping, and immutability for efficient code maintenance.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-52",
    "topic": "TypeScript",
    "question": "How do you compile TypeScript files into JavaScript?",
    "answer": "Compiling TypeScript (.ts) into JavaScript (.js) involves integrating a TypeScript compiler (tsc). You can customize the compilation process using tsconfig.json and even adopt more advanced methods to suit project needs:",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-53",
    "topic": "TypeScript",
    "question": "Explain classes in TypeScript. How are they different from ES6 classes?",
    "answer": "While TypeScript and ES6 classes share many similarities, TypeScript's classes offer additional features and strong typing to make your code more robust.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-54",
    "topic": "TypeScript",
    "question": "How do you implement Inheritance in TypeScript?",
    "answer": "Let's look at how you can use inheritance in TypeScript using both ES6 classes and prototypal inheritance.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-55",
    "topic": "TypeScript",
    "question": "Inheritance with ES6 Class Syntax",
    "answer": "With the advent of ES6, a more familiar class-based inheritance method was introduced. This method is usually easier to read and understand.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-56",
    "topic": "TypeScript",
    "question": "Inheritance with Prototypal Methodology",
    "answer": "Prior to ES6, TypeScript, like JavaScript, used a prototypal inheritance approach. The prototypal mechanism can be useful when developing complex object structures, but it is important to be aware of the nuances in order to avoid unexpected behavior.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-57",
    "topic": "TypeScript",
    "question": "What are access modifiers and how do they work in TypeScript?",
    "answer": "Access modifiers are TypeScript's way of controlling class member visibility and mutability. They enforce encapsulation and are especially useful for object-oriented design.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-58",
    "topic": "TypeScript",
    "question": "Discuss Abstract classes and their purposes in TypeScript.",
    "answer": "In TypeScript, abstract classes serve as blueprints that guide derived classes, essentially laying out the structure without necessarily providing complete implementations of methods.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-59",
    "topic": "TypeScript",
    "question": "Can you describe the use of Constructors within TypeScript classes?",
    "answer": "TypeScript provides a convenient way to define constructors for classes using the constructor keyword. A constructor method allows you to initialize class members and can have access specifiers. They are useful for setting up an object's initial state.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-60",
    "topic": "TypeScript",
    "question": "Does it support languages other than Python?",
    "answer": "A: Yes! Algo Sensei supports all major programming languages (Python, JavaScript, Java, C++, Go, TypeScript, Rust, etc.). Just specify your preferred language and Claude will adapt accordingly.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-61",
    "topic": "TypeScript",
    "question": "How do you navigate programmatically in Next.js?",
    "answer": "Using useRouter() hook. const router = useRouter(); function handleClick() { router.push(/path); } Go There; router.push(href: string, { scroll: boolean }) :arrowup: Back to Top 12. ### How do you enable TypeScript in a Next.js project? By adding a tsconfig.json file. :arrowup: Back to Top 13. ### What is API Routes in Next.js? A feature to create API endpoints in the pages/api or app/api directory. It allow you to create custom request handlers for a given route using the Web Request and Response APIs.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-62",
    "topic": "TypeScript",
    "question": "How do you enable TypeScript in a Next.js project?",
    "answer": "By adding a tsconfig.json file. :arrowup: Back to Top 13. ### What is API Routes in Next.js? A feature to create API endpoints in the pages/api or app/api directory. It allow you to create custom request handlers for a given route using the Web Request and Response APIs. :arrowup: Back to Top 14. ### What is the public folder in Next.js? A folder for static assets to be served from the root URL. public/ ├── favicon.ico |── robots.txt |── images/ | └── profile.jpg :arrowup: Back to Top 15. ### What is dynamic import in Next.js? A feature to load components or modules dynamically.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-63",
    "topic": "TypeScript",
    "question": "How do you configure a custom Babel setup in Next.js?",
    "answer": "By adding a babel.config.js file. :arrowup: Back to Top 40. ### What is the purpose of next-env.d.ts? A TypeScript declaration file for Next.js types. :arrowup: Back to Top 41. ### What is the purpose of next-compose-plugins? To compose and apply multiple Next.js plugins. :arrowup: Back to Top 42. ### How do you add polyfills in Next.js? By importing them in the \\app.js file or using next-polyfill. :arrowup: Back to Top 43. ### What is static optimization in Next.js? A feature that automatically determines if a page can be statically generated. :arrowup: Back to Top",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-typescript-64",
    "topic": "TypeScript",
    "question": "What are the basic data types in TypeScript?",
    "answer": "The basic data types in TypeScript are number, string, boolean, object, array, tuple, and enum. 470. ### What is tuple datatype in TypeScript? In TypeScript, a tuple is a type that allows you to define an array with a fixed number of elements of different types. Tuples are similar to arrays, but the types of elements in a tuple are fixed and their order matters. Tuples are useful when you want to work with a specific set of values, each with its own type, and maintain their order throughout the program.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-65",
    "topic": "TypeScript",
    "question": "What is tuple datatype in TypeScript?",
    "answer": "In TypeScript, a tuple is a type that allows you to define an array with a fixed number of elements of different types. Tuples are similar to arrays, but the types of elements in a tuple are fixed and their order matters. Tuples are useful when you want to work with a specific set of values, each with its own type, and maintain their order throughout the program.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-66",
    "topic": "TypeScript",
    "question": "How does TypeScript support class-based object-oriented programming?",
    "answer": "TypeScript supports class-based object-oriented programming. It allows defining classes, inheritance, access modifiers (public, private, protected), abstract classes, and interfaces for contracts. It enforces type checking and helps organize complex class hierarchies and interactions.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-67",
    "topic": "TypeScript",
    "question": "What is the \"readonly\" modifier in TypeScript, and how does it affect properties and arrays?",
    "answer": "The \"readonly\" modifier in TypeScript is used to make properties or array elements read-only, meaning they cannot be modified once initialized. It provides a way to enforce immutability and prevent accidental modifications to certain values. When applied to properties, it prevents reassignment, and when applied to arrays, it disallows adding or removing elements after initialization.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-68",
    "topic": "TypeScript",
    "question": "What is the keyof operator in TypeScript?",
    "answer": "The keyof operator in TypeScript is used to get a union type of all the keys (property names) of an object type. It allows you to access and use the keys of an object type as string literals in type operations and transformations. interface Person { name: string; age: number; } type PersonKeys = keyof Person; const key1: PersonKeys = 'name'; //Valid key const key3: PersonKeys = 'address'; //Error",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-69",
    "topic": "TypeScript",
    "question": "What is Union types in Typescript?",
    "answer": "Union types allow you to define a type that can hold values of multiple types. It is denoted by the \"|\" symbol. type UnionType = string | number; let val: UnionType; val = \"hello\"; // Valid val = 123; // Valid val = true; // Error, as boolean is not part",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-70",
    "topic": "TypeScript",
    "question": "What is declaration merging in Typescript?",
    "answer": "Declaration merging in TypeScript lets you combine multiple declarations with the same name into a single declaration. It allows you to add or extend properties, methods, or functionality to existing types, making it easier to build and extend code across multiple sources without duplicating definitions. interface Box { height: number; width: number; } interface Box { scale: number; } let box: Box = { height: 5, width: 6, scale: 10 };",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-typescript-71",
    "topic": "TypeScript",
    "question": "Does TypeScript supports function overloading?",
    "answer": "Yes, TypeScript supports function overloading, which means you can define multiple versions of a function with different parameter types or arity. This allows you to provide different implementations of the function based on the arguments passed to it. 500. ### What are the best practices when using TypeScript? To use TypeScript effectively, follow these best practices: use static typing for error prevention and code clarity, enable strict mode and null checks, minimize the use of any type, follow consistent naming conventions, keep TypeScript and compiler options up to date, etc.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-72",
    "topic": "TypeScript",
    "question": "What are the best practices when using TypeScript?",
    "answer": "To use TypeScript effectively, follow these best practices: use static typing for error prevention and code clarity, enable strict mode and null checks, minimize the use of any type, follow consistent naming conventions, keep TypeScript and compiler options up to date, etc.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-typescript-73",
    "topic": "TypeScript",
    "question": "What are the benefits of composition API?",
    "answer": "The composition API provides several benefits over the traditional Options API as listed below. 1. Better logic reuse and code organization: 2. Better typescript support: 3. Easier testing 4. Smaller production bundles ⬆ Back to Top 234. ### What are composition functions? Composition API is a set of additive, function-based APIs that allow flexible composition of component logic. ⬆ Back to Top 235. ### What is teleport? The component allows you to render a part of your component's template into a different location in the DOM — outside the current component's hierarchy.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-react-74",
    "topic": "React",
    "question": "What are the challenges for?",
    "answer": "They could be: - Short coding exercises, for use in interviews with candidates - Ways for you to test yourself / test your coding abilities under pressure - Fun exercises to help you learn React &nbsp;",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-react-75",
    "topic": "React",
    "question": "How do they work / how do I get started?",
    "answer": "The scaffolding of each challenges / app is done for you and each challenge has create-react-app as its foundation. - Clone the whole challenges repository - Run yarn or npm install in any of the individual challenge directories to install dependencies - Run yarn start or npm start to start the application on port 3000 (CRA default) - Each challenge has a README with requirements for you to complete Some challenges might require usage of external APIs, but all information will be provided in the individual challenge readme. &nbsp;",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-76",
    "topic": "React",
    "question": "Why are the solutions invite only?",
    "answer": "People use these challenges for interviews. By putting the solutions behind a collaboration wall / invite-only repository we can discourage candidates from simply looking up the solutions. &nbsp;",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-77",
    "topic": "React",
    "question": "Can I search for GitHub users and see if they accessed the solutions?",
    "answer": "Yes! We track current / past collaborators, meaning if you want to check if a potential candidate had access / looked at the solutions you can simply search for them. You can do this by clicking the search icon in the top left at solutions.alexgurr.com. and searching for them. &nbsp;",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-78",
    "topic": "React",
    "question": "Why does it take so long for updates / new challenges?",
    "answer": "I work on these challenges & solutions in my spare time, on top of a full time job and everything else that comes in life. Because of this, I don't always get a lot of time to maintain and add new challenges. Interested in becoming a collaborator or submitting your own challenge? Reach out below or submit a new challenge! &nbsp;",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-79",
    "topic": "React",
    "question": "What Makes A Good Challenge?",
    "answer": "- Clear requirements - Fun and engaging - Accurate difficulty level - Looks good (visually pleasing) - Realistic -- would someone ever need to build something like this in real life? - Easy to get started (minimal pre-requisites)",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-80",
    "topic": "React",
    "question": "What makes React Native special for iOS?",
    "answer": "(Unlike PhoneGap) with React Native your application logic is written and runs in JavaScript, whereas your application UI is fully native; therefore you have none of the compromises typically associated with HTML5 UI. Additionally (unlike Titanium), React introduces a novel, radical and highly functional approach to constructing user interfaces. In brief, the application UI is simply expressed as a function of the current application state.",
    "tags": [
      "async"
    ]
  },
  {
    "id": "q-react-81",
    "topic": "React",
    "question": "Agentic Workflows & Conversational AI",
    "answer": "Autonomous Agents: LLMs acting as \"reasoning engines\" that utilize ReAct (Reason + Act) patterns to invoke external APIs and tools. Function Calling: Structured output generation (JSON/Schema) for seamless integration with React 19 Server Components and backend microservices.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-82",
    "topic": "React",
    "question": "Automated Software Engineering",
    "answer": "Repository-Level Reasoning: Analyzing entire codebases to identify architectural bottlenecks, moving beyond simple snippet generation. Modern Syntax Adherence: Generating type-safe code for Python 3.14+ (utilizing advanced match statements and improved TaskGroups) and React 19 (leveraging use and Action hooks). Automated Formal Verification: Writing unit tests and performing static analysis to ensure $O(n \\log n)$ or better algorithmic efficiency.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-react-83",
    "topic": "React",
    "question": "Why Use Lifting State Up?",
    "answer": "- Data Synchronization: Ensures child components react to the same state updates, preventing disparate or \"stale\" UI states. - Derived State Efficiency: Simplifies logic where multiple children depend on a single state variable; the parent calculates derived values, reducing redundant computations.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-84",
    "topic": "React",
    "question": "When It's Overkill",
    "answer": "Lifting state unnecessarily causes Prop Drilling, where intermediate components pass data they do not utilize. - Escalation Path: If state must be accessed by components deeply nested in the tree (e.g., global themes, auth state), utilize the Context API or state management libraries (e.g., Zustand or TanStack Store) to bypass the middle-tier components. - Heuristic: If moving state up increases the props count of intermediate components by more than 3, evaluate the use of Composition (passing components as children) or a dedicated state provider.",
    "tags": [
      "security",
      "architecture"
    ]
  },
  {
    "id": "q-react-85",
    "topic": "React",
    "question": "When to Pick Redux",
    "answer": "Complex State Dependencies: Use when state slices share data or require relational logic. Large-Scale Performance Requirements: Use when granular component updates are required to prevent re-rendering the entire component tree. Advanced Caching: Use when the application requires sophisticated data fetching and cache invalidation strategies provided by RTK Query.",
    "tags": [
      "performance",
      "architecture"
    ]
  },
  {
    "id": "q-react-86",
    "topic": "React",
    "question": "When to Pick Context API",
    "answer": "Static or Low-Frequency Data: Ideal for configuration data that rarely changes (e.g., UI themes, current user locale). Simple Dependency Injection: Use when you need to pass down services or singleton instances without explicit prop drilling. Component Libraries: Essential for building compound component patterns where sub-components must access parent state implicitly.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-87",
    "topic": "React",
    "question": "How this Course is structured",
    "answer": "There are 5 different folders in this repo: 1. CSS 2. JavaScript 3. React 4. Web Fundamentals 5. DSA Each folder contains information about the content.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-88",
    "topic": "React",
    "question": "How do you handle environment variables in Next.js?",
    "answer": "By adding them to .env.local and accessing via process.env. :arrowup: Back to Top 17. ### What is the default port for a Next.js app? Port 3000. :arrowup: Back to Top 18. ### How to change default port for a Next.js app? \"scripts\": { \"dev\": \"next dev -p 8080\", // for dev \"start\": \"next start -p 8080\" // for prod }, :arrowup: Back to Top 19. ### What is Fast Refresh in Next.js? A feature for quick feedback when editing React components. :arrowup: Back to Top 20. ### What is next.config.js?",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-89",
    "topic": "React",
    "question": "What is the default port for a Next.js app?",
    "answer": "Port 3000. :arrowup: Back to Top 18. ### How to change default port for a Next.js app? \"scripts\": { \"dev\": \"next dev -p 8080\", // for dev \"start\": \"next start -p 8080\" // for prod }, :arrowup: Back to Top 19. ### What is Fast Refresh in Next.js? A feature for quick feedback when editing React components. :arrowup: Back to Top 20. ### What is next.config.js? A configuration file to customize Next.js settings. // @ts-check",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-90",
    "topic": "React",
    "question": "How to change default port for a Next.js app?",
    "answer": "\"scripts\": { \"dev\": \"next dev -p 8080\", // for dev \"start\": \"next start -p 8080\" // for prod }, :arrowup: Back to Top 19. ### What is Fast Refresh in Next.js? A feature for quick feedback when editing React components. :arrowup: Back to Top 20. ### What is next.config.js? A configuration file to customize Next.js settings. // @ts-check / @type {import('next').NextConfig} / const nextConfig = { / config options here / }; module.exports = nextConfig;",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-91",
    "topic": "React",
    "question": "What is Fast Refresh in Next.js?",
    "answer": "A feature for quick feedback when editing React components. :arrowup: Back to Top 20. ### What is next.config.js? A configuration file to customize Next.js settings. // @ts-check / @type {import('next').NextConfig} / const nextConfig = { / config options here / }; module.exports = nextConfig; :arrowup: Back to Top 21. ### How do you add component-level CSS in Next.js? Using CSS modules with a .module.css file extension. // styles.module.css .example {",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-92",
    "topic": "React",
    "question": "How do you add global CSS in Next.js?",
    "answer": "By importing CSS files in the \\app.js file. :arrowup: Back to Top 23. ### How do you use Tailwind CSS in Next.js? By installing Tailwind CSS and configuring it in the next.config.js file. npm install tailwindcss postcss autoprefixer npx tailwindcss init -p Then, add the following to your tailwind.config.js: module.exports = { content: [ \"./pages//.{js,ts,jsx,tsx}\", \"./components//.{js,ts,jsx,tsx}\", ], theme: { extend: {}, }, plugins: [], };",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-93",
    "topic": "React",
    "question": "How do you use Tailwind CSS in Next.js?",
    "answer": "By installing Tailwind CSS and configuring it in the next.config.js file. npm install tailwindcss postcss autoprefixer npx tailwindcss init -p Then, add the following to your tailwind.config.js: module.exports = { content: [ \"./pages//.{js,ts,jsx,tsx}\", \"./components//.{js,ts,jsx,tsx}\", ], theme: { extend: {}, }, plugins: [], }; And import Tailwind CSS in your \\app.js: import \"tailwindcss/tailwind.css\";",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-94",
    "topic": "React",
    "question": "What is static optimization in Next.js?",
    "answer": "A feature that automatically determines if a page can be statically generated. :arrowup: Back to Top 44. ### How do you handle internationalization (i18n) in Next.js? By configuring i18n settings in next.config.js. module.exports = { i18n: { locales: [\"en\", \"fr\"], defaultLocale: \"en\", }, }; :arrowup: Back to Top 45. ### What is React Strict Mode in Next.js? A development mode only feature for highlighting potential problems in an application. It helps to identify unsafe lifecycles, legacy API usage, and a number of other features. module.exports = { reactStrictMode: true, };",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-react-95",
    "topic": "React",
    "question": "How do you perform client-side data fetching in Next.js?",
    "answer": "Using useEffect and fetch or any other data fetching library like axios,fetch or swr by Next.js team. import { useState, useEffect } from \"react\"; function Profile() { const [data, setData] = useState(null); const [isLoading, setLoading] = useState(true); useEffect(() => { fetch(\"/api/profile\") .then((res) => res.json()) .then((data) => { setData(data); setLoading(false); }); }, []); if (isLoading) return Loading...; if (!data) return No profile data; return ( {data.name} {data.bio} ); }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-96",
    "topic": "React",
    "question": "When to choose App Router over Pages Router in Next.js?",
    "answer": "You might choose the App Router over the Pages Router in the following scenarios: - When you need advanced routing capabilities, such as nested routes and layouts. - When you want to leverage React Server Components for better performance and flexibility. - When your application requires more complex data fetching strategies. The App Router is suitable for larger applications or when you want to take advantage of the latest features in Next.js 13. :arrowup: Back to Top",
    "tags": [
      "performance",
      "testing"
    ]
  },
  {
    "id": "q-react-97",
    "topic": "React",
    "question": "What is the loading.js file in App Router?",
    "answer": "The loading.js file creates loading UI that shows instantly while route segments are loading. It automatically wraps the page and its children in a React Suspense boundary. // app/dashboard/loading.js export default function Loading() { return ( Loading dashboard... ); } app/ ├── dashboard/ │ ├── loading.js // Loading UI for dashboard │ ├── page.js │ └── settings/ │ ├── loading.js // Loading UI for settings │ └── page.js The loading UI will be shown immediately on navigation and can be nested for granular loading states. :arrowup: Back to Top",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-98",
    "topic": "React",
    "question": "How do you handle streaming and suspense in App Router?",
    "answer": "The App Router has built-in support for streaming and React Suspense, allowing you to progressively render and stream UI to the client. // app/page.js import { Suspense } from \"react\"; async function UserProfile({ userId }) { const user = await getUserData(userId); // This can be slow return Welcome, {user.name}!; } async function UserPosts({ userId }) { const posts = await getUserPosts(userId); // This can also be slow return ( {posts.map((post) => ( {post.title} ))} ); } export default function Page({ params }) { return ( User Dashboard Loading profile...}>",
    "tags": [
      "async"
    ]
  },
  {
    "id": "q-react-99",
    "topic": "React",
    "question": "What is React Server Components (RSC) in App Router?",
    "answer": "React Server Components (RSC) are a new React feature that allows components to be rendered on the server. In the App Router, components are Server Components by default. Server Components (default): // app/page.js - This is a Server Component async function ServerComponent() { const data = await fetch(\"https://api.example.com/data\"); const result = await data.json(); return ( Server Rendered Data {result.message} ); } Client Components (opt-in with \"use client\"): // app/components/ClientComponent.js \"use client\"; import { useState } from \"react\"; export default function ClientComponent() {",
    "tags": [
      "async"
    ]
  },
  {
    "id": "q-react-100",
    "topic": "React",
    "question": "What is JSX in ReactJS?",
    "answer": "JSX stands for JavaScript syntax extension. It is a JavaScript extension that allows us to describe React's object tree using a syntax that resembles that of an HTML template. It is just an XML-like extension that allows us to write JavaScript that looks like markup and have it returned from a component. 335. ### Explain the concept of virtual DOM in ReactJS. Virtual DOM is a lightweight copy of the actual DOM maintained by React. It allows React to efficiently update and render components by calculating the optimal changes needed and applying them to the real DOM.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-101",
    "topic": "React",
    "question": "Explain the concept of virtual DOM in ReactJS.",
    "answer": "Virtual DOM is a lightweight copy of the actual DOM maintained by React. It allows React to efficiently update and render components by calculating the optimal changes needed and applying them to the real DOM.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-102",
    "topic": "React",
    "question": "What are the lifecycle methods in ReactJS and how do they work?",
    "answer": "Lifecycle methods in ReactJS are special methods that are invoked at different stages of a component's lifecycle. They allow developers to perform specific actions at certain points, such as initializing state, updating the UI, or cleaning up resources. Examples of lifecycle methods include \"componentDidMount,\" \"componentDidUpdate,\" and \"componentWillUnmount.\" They provide hooks to execute code at specific moments during the component's lifespan.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-103",
    "topic": "React",
    "question": "What is the purpose of the \"setState\" method in ReactJS and how does it work?",
    "answer": "The \"setState\" method in ReactJS is used to update the state of a component. It is a built-in method provided by React's Component class. When called, \"setState\" triggers a re-render of the component, updating its UI based on the new state. 345. ### What is the significance of the \"React.Fragment\" component? \"React.Fragment\" is a component in ReactJS that allows you to group multiple elements without adding extra DOM elements. It helps keep the rendered output clean and is particularly useful when you don't want to introduce additional wrappers or nesting levels.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-104",
    "topic": "React",
    "question": "What is the significance of the \"React.Fragment\" component?",
    "answer": "\"React.Fragment\" is a component in ReactJS that allows you to group multiple elements without adding extra DOM elements. It helps keep the rendered output clean and is particularly useful when you don't want to introduce additional wrappers or nesting levels.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-105",
    "topic": "React",
    "question": "Explain the concept of React Hooks and their benefits.",
    "answer": "React Hooks provide a way to reuse stateful logic without writing a class component. Hooks enable developers to manage component state, handle side effects, and tap into the React lifecycle in a more straightforward and flexible manner. They offer benefits like improved code readability, reusability, and easier testing. Some commonly used hooks include useState, useEffect, and useContext.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-react-106",
    "topic": "React",
    "question": "When do we prefer to use a class component over a function component?",
    "answer": "If a component needs state or lifecycle methods, we should use the class component; otherwise, use the function component. However, after React 16.8, with the addition of Hooks, you could use state, lifecycle methods, and other features that were only available in the class component right in your function component.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-107",
    "topic": "React",
    "question": "Explain the concept of lazy loading in React.",
    "answer": "Lazy loading in React is a technique used to optimize performance by loading components or resources only when they are needed. Instead of loading all components upfront, you can dynamically import them using the React.lazy function and render them when required. This helps reduce the initial bundle size and improves the loading speed of your application.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-react-108",
    "topic": "React",
    "question": "When would you use the useCallback hook in React? How does it differ from the useMemo hook?",
    "answer": "The useCallback hook in React is like useMemo, but it memoizes functions instead of values. It's handy when passing callbacks to child components because it avoids unnecessary re-renders. By memoizing the function, it ensures that the same function instance is returned as long as the dependencies (inputs) remain unchanged. This optimization can improve performance in certain situations by preventing unnecessary function recreations.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-react-109",
    "topic": "React",
    "question": "What is the impact of indexes as keys?",
    "answer": "Using indexes as keys in React can cause problems. When components are rendered using indexes as keys, React may not properly update or reorder them when the order changes. This can result in incorrect rendering, loss of component state, and slower performance. It's better to use unique and stable identifiers as keys to avoid these issues and ensure that components are updated correctly.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-react-110",
    "topic": "React",
    "question": "Why React uses className over class attribute?",
    "answer": "React uses className instead of class in HTML because class is a reserved keyword in JavaScript. Using class would cause conflicts with JavaScript syntax. So, to avoid issues, React uses className for specifying CSS classes on elements. This allows developers to apply CSS classes to React components without running into conflicts or JavaScript errors.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-111",
    "topic": "React",
    "question": "Explain why and when would you use useMemo()?",
    "answer": "You would use useMemo() in React when you want to optimize performance by memoizing the result of a function or computation. It is used to avoid unnecessary calculations or expensive operations by caching the computed value until its dependencies change. By using useMemo(), you can ensure that the computation is only performed when necessary, reducing the workload on the application and improving efficiency.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-react-112",
    "topic": "React",
    "question": "What are the advantages of styled components?",
    "answer": "Styled components in React can be more complex and have a higher learning curve compared to traditional CSS stylesheets. Defining styles within JavaScript may require developers to adapt their workflow and understand CSS-in-JS concepts. Additionally, the generated class names for styled components can be less readable, making debugging more challenging",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-react-113",
    "topic": "React",
    "question": "What are the differences between React and React Native?",
    "answer": "React is a JavaScript library used for building web user interfaces, while React Native is a framework for developing native mobile applications. React renders components to the web browser using virtual DOM, while React Native renders components directly to native UI elements for iOS and Android platforms, resulting in a more native-like experience.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-114",
    "topic": "React",
    "question": "What is React Dev Tool?",
    "answer": "React DevTools is a browser extension that helps developers debug and inspect React applications. It allows you to see the component structure, check and modify component data, and analyze performance. It's a useful tool for understanding how React components work and finding and fixing issues in your code.",
    "tags": [
      "performance",
      "testing"
    ]
  },
  {
    "id": "q-react-115",
    "topic": "React",
    "question": "Can you explain React's \"lifting state up\" concept and why it is important?",
    "answer": "\"Lifting state up\" is a concept in React where you move the shared state of multiple components to their common parent component. By doing this, you establish a single source of truth for the shared state, allowing you to pass down the state and related functions as props to child components. It enables better data flow, state management, and enhances performance by reducing unnecessary re-rendering.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-react-116",
    "topic": "React",
    "question": "How do refs affect the component lifecycle in React?",
    "answer": "Refs in React do not directly impact the component lifecycle. They provide a way to access and interact with elements or components separately from lifecycle methods. Refs allow you to work with specific parts of the component without affecting its lifecycle or rendering.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-117",
    "topic": "React",
    "question": "How do you access the DOM node using refs in React?",
    "answer": "Accessing the DOM node using refs in React is straightforward. After creating a ref using the useRef hook or the React.createRef() function, you can attach the ref to a JSX element using the ref attribute. Once the component has rendered, you can access the DOM node by referring to the current property of the ref.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-118",
    "topic": "React",
    "question": "What is the recommended approach for binding functions in React components?",
    "answer": "The recommended approach for binding functions in React components is to use arrow function syntax or bind the functions in the constructor. Arrow function syntax simplifies the code and eliminates the need for explicit binding. 415. ### Explain the difference between binding in class components and functional components in React. Binding functions in class components is done using the constructor or arrow function syntax, while functional components don't require explicit binding as they automatically bind functions to the component instance.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-119",
    "topic": "React",
    "question": "Explain the difference between binding in class components and functional components in React.",
    "answer": "Binding functions in class components is done using the constructor or arrow function syntax, while functional components don't require explicit binding as they automatically bind functions to the component instance.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-120",
    "topic": "React",
    "question": "how is React different from Angular?",
    "answer": "ReactJS is a JavaScript library focused on building user interfaces using reusable components, while Angular is a comprehensive framework following the MVC/MVVM patterns. React uses JavaScript and JSX, whereas Angular is based on TypeScript. React has a simpler learning curve, a large community, and a lightweight nature, while Angular offers a complete solution with a steeper learning curve, a robust ecosystem provided by Google, and built-in features. The choice depends on project needs, team preferences, and scalability requirements.",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-react-121",
    "topic": "React",
    "question": "What is Material-UI, and what is its purpose in React development?",
    "answer": "Material-UI is a React component library that implements Google's Material Design guidelines. It offers pre-designed and customizable UI components, making it easier to build visually appealing and user-friendly interfaces. With Material-UI, developers can focus on functionality while simplifying the process of styling and creating responsive layouts.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-122",
    "topic": "React",
    "question": "Why does strict mode render twice in React?",
    "answer": "Strict mode in React renders components twice to provide additional checks and useful warnings. It acts as a safeguard that catches possible issues in your code. By rendering twice, React can detect and alert you about problems like unintended side effects or outdated practices. This way, you can fix those issues before they cause any trouble in your application, making it more reliable and sturdy.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-123",
    "topic": "React",
    "question": "Explain DOM diffing?",
    "answer": "DOM diffing, or reconciliation in React, is the process of comparing the previous and new versions of the user interface. It identifies the changes and updates needed for the actual web page. React determines what has changed, adds or removes elements, and updates only the necessary parts of the user interface. This makes the updates faster and more efficient by avoiding unnecessary re-rendering and manipulation of the web page.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-124",
    "topic": "React",
    "question": "What are the potential pitfalls or common mistakes when using the useEffect hook? How can you avoid them?",
    "answer": "Some common mistakes with useEffect are: forgetting dependencies, causing stale data or infinite loops; not cleaning up properly, leading to memory leaks; and modifying state or props without proper dependency management, resulting in unexpected behavior. To avoid these, include all dependencies, update state or props conditionally, perform cleanup operations, and handle errors appropriately.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-react-125",
    "topic": "React",
    "question": "Explain the benefits and drawbacks of server-side rendering in React.js.",
    "answer": "The benefits of server-side rendering in React.js include improved SEO, faster initial page load, and better performance for low-end devices. However, it can introduce more complexity and may not be suitable for all applications. 450. ### What are the performance implications of server-side rendering in React.js? Server-side rendering can improve performance by reducing the time required for the initial render, but it can also increase the server load and network traffic for subsequent or additional requests.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-react-126",
    "topic": "React",
    "question": "What are the performance implications of server-side rendering in React.js?",
    "answer": "Server-side rendering can improve performance by reducing the time required for the initial render, but it can also increase the server load and network traffic for subsequent or additional requests.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-react-127",
    "topic": "React",
    "question": "How can you handle data fetching and asynchronous operations during server-side rendering in React.js?",
    "answer": "Data fetching and asynchronous operations during server-side rendering can be handled by making use of lifecycle methods like componentDidMount or using libraries like react-async. 455. ### What considerations should you keep in mind when implementing server-side rendering for a large-scale React.js application? Considerations for server-side rendering in large-scale React.js applications include optimizing performance, managing data fetching efficiently, and dealing with complex application states.",
    "tags": [
      "async",
      "performance",
      "architecture"
    ]
  },
  {
    "id": "q-react-128",
    "topic": "React",
    "question": "What considerations should you keep in mind when implementing server-side rendering for a large-scale React.js application?",
    "answer": "Considerations for server-side rendering in large-scale React.js applications include optimizing performance, managing data fetching efficiently, and dealing with complex application states.",
    "tags": [
      "performance",
      "architecture"
    ]
  },
  {
    "id": "q-react-129",
    "topic": "React",
    "question": "How does server-side rendering impact the development and debugging process compared to client-side rendering?",
    "answer": "Server-side rendering impacts development and debugging differently from client-side rendering, as errors and issues can occur on both the server and the client. Proper error handling and debugging techniques are necessary. 460. ### Can you explain the concept of hydration in the context of server-side rendering in React.js? Hydration in server-side rendering refers to the process of attaching event listeners and reattaching React components on the client-side after the initial server-rendered HTML has been received. It enables interactivity and seamless transition to client-side rendering.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-react-130",
    "topic": "React",
    "question": "Can you explain the concept of hydration in the context of server-side rendering in React.js?",
    "answer": "Hydration in server-side rendering refers to the process of attaching event listeners and reattaching React components on the client-side after the initial server-rendered HTML has been received. It enables interactivity and seamless transition to client-side rendering.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-131",
    "topic": "React",
    "question": "Why do we need Nextjs?",
    "answer": "Next.js is a React framework that provides server-side rendering (SSR), static site generation (SSG), and other features like routing and API handling. It is useful for building optimized and performant React applications, improving SEO, and enabling server-side functionality. 465. ### What are some of the challenges you have faced working with React? &nbsp; &nbsp; &nbsp; Write your own answer",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-react-132",
    "topic": "React",
    "question": "什么是 Pure Components?",
    "answer": "React.PureComponent 与 React.Component 完全相同，只是它为你处理了 shouldComponentUpdate() 方法。当属性或状态发生变化时，PureComponent 将对属性和状态进行浅比较。另一方面，一般的组件不会将当前的属性和状态与新的属性和状态进行比较。因此，在默认情况下，每当调用 shouldComponentUpdate 时，默认返回 true，所以组件都将重新渲染。 ⬆ 返回顶部 8. ### React 的状态是什么? 组件的状态是一个对象，它包含某些信息，这些信息可能在组件的生命周期中发生更改。我们应该尽量使状态尽可能简单，并尽量减少有状态组件的数量。让我们创建一个包含消息状态的 User 组件： class User extends React.Component { constructor(props) { super(props) this.state = { message: 'Welcome to React world' } } render() { return ( {this.state.message} ) } }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-133",
    "topic": "React",
    "question": "什么是 forward refs?",
    "answer": "Ref forwarding 是一个特性，它允许一些组件获取接收到 ref 对象并将它进一步传递给子组件。 const ButtonElement = React.forwardRef((props, ref) => ( {props.children} )); // Create ref to the DOM button: const ref = React.createRef(); {'Forward Ref'} ⬆ 返回顶部 22. ### callback refs 和 findDOMNode() 哪一个是首选选项? 最好是使用 callback refs 而不是 findDOMNode() API。因为 findDOMNode() 阻碍了将来对 React 的某些改进。 使用 findDOMNode 已弃用的方案： class MyComponent extends Component { componentDidMount() { findDOMNode(this).scrollIntoView() }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-134",
    "topic": "React",
    "question": "callback refs 和 findDOMNode() 哪一个是首选选项?",
    "answer": "最好是使用 callback refs 而不是 findDOMNode() API。因为 findDOMNode() 阻碍了将来对 React 的某些改进。 使用 findDOMNode 已弃用的方案： class MyComponent extends Component { componentDidMount() { findDOMNode(this).scrollIntoView() } render() { return } } 推荐的方案是： class MyComponent extends Component { componentDidMount() { this.node.scrollIntoView() } render() { return this.node = node} /> } }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-135",
    "topic": "React",
    "question": "为什么 React 使用 className 而不是 class 属性?",
    "answer": "class 是 JavaScript 中的关键字，而 JSX 是 JavaScript 的扩展。这就是为什么 React 使用 className 而不是 class 的主要原因。传递一个字符串作为 className 属性。 render() { return {'Menu'} } 在实际项目中，我们经常使用classnames来方便我们操作className。 ⬆ 返回顶部 46. ### 什么是 Fragments ? 它是 React 中的常见模式，用于组件返回多个元素。Fragments 可以让你聚合一个子元素列表，而无需向 DOM 添加额外节点。 render() { return ( ) }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-136",
    "topic": "React",
    "question": "为什么使用 Fragments 比使用容器 div 更好?",
    "answer": "1. 通过不创建额外的 DOM 节点，Fragments 更快并且使用更少的内存。这在非常大而深的节点树时很有好处。 2. 一些 CSS 机制如Flexbox和CSS Grid具有特殊的父子关系，如果在中间添加 div 将使得很难保持所需的结构。 3. 在 DOM 审查器中不会那么的杂乱。 ⬆ 返回顶部 48. ### 在 React 中什么是 Portal ? Portal 提供了一种很好的将子节点渲染到父组件以外的 DOM 节点的方式。 ReactDOM.createPortal(child, container) 第一个参数是任何可渲染的 React 子节点，例如元素，字符串或片段。第二个参数是 DOM 元素。 ⬆ 返回顶部 49. ### 什么是无状态组件? 如果行为独立于其状态，则它可以是无状态组件。你可以使用函数或类来创建无状态组件。但除非你需要在组件中使用生命周期钩子，否则你应该选择函数组件。无状态组件有很多好处： 它们易于编写，理解和测试，速度更快，而且你可以完全避免使用this关键字。 ⬆ 返回顶部 50. ### 什么是有状态组件? 如果组件的行为依赖于组件的state，那么它可以被称为有状态组件。这些有状态组件总是类组件，并且具有在constructor中初始化的状态。",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-137",
    "topic": "React",
    "question": "在 React 中什么是 Portal ?",
    "answer": "Portal 提供了一种很好的将子节点渲染到父组件以外的 DOM 节点的方式。 ReactDOM.createPortal(child, container) 第一个参数是任何可渲染的 React 子节点，例如元素，字符串或片段。第二个参数是 DOM 元素。 ⬆ 返回顶部 49. ### 什么是无状态组件? 如果行为独立于其状态，则它可以是无状态组件。你可以使用函数或类来创建无状态组件。但除非你需要在组件中使用生命周期钩子，否则你应该选择函数组件。无状态组件有很多好处： 它们易于编写，理解和测试，速度更快，而且你可以完全避免使用this关键字。 ⬆ 返回顶部 50. ### 什么是有状态组件? 如果组件的行为依赖于组件的state，那么它可以被称为有状态组件。这些有状态组件总是类组件，并且具有在constructor中初始化的状态。 class App extends Component { constructor(props) { super(props) this.state = { count: 0 } } render() {",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-138",
    "topic": "React",
    "question": "在 React 中如何使用 innerHTML?",
    "answer": "dangerouslySetInnerHTML 属性是 React 用来替代在浏览器 DOM 中使用 innerHTML。与 innerHTML 一样，考虑到跨站脚本攻击（XSS），使用此属性也是有风险的。使用时，你只需传递以 html 作为键，而 HTML 文本作为对应值的对象。 在本示例中 MyComponent 组件使用 dangerouslySetInnerHTML 属性来设置 HTML 标记： function createMarkup() { return { html: 'First &middot; Second' } } function MyComponent() { return } ⬆ 返回顶部 61. ### 如何在 React 中使用样式? style 属性接受含有 camelCased（驼峰）属性的 JavaScript 对象，而不是 CSS 字符串。这与 DOM 样式中的 JavaScript 属性一致，效率更高，并且可以防止 XSS 安全漏洞。 const divStyle = { color: 'blue', backgroundImage: 'url(' + imgUrl + ')' }; function HelloWorldComponent() { return Hello World!",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-139",
    "topic": "React",
    "question": "在 componentWillMount() 方法中使用 setState() 好吗?",
    "answer": "建议避免在 componentWillMount() 生命周期方法中执行异步初始化。在 mounting 发生之前会立即调用 componentWillMount()，且它在 render() 之前被调用，因此在此方法中更新状态将不会触发重新渲染。应避免在此方法中引入任何副作用或订阅操作。我们需要确保对组件初始化的异步调用发生在 componentDidMount() 中，而不是在 componentWillMount() 中。 componentDidMount() { axios.get(api/todos) .then((result) => { this.setState({ messages: [...result.data] }) }) } ⬆ 返回顶部 66. ### 如果在初始状态中使用 props 属性会发生什么? 如果在不刷新组件的情况下更改组件上的属性，则不会显示新的属性值，因为构造函数函数永远不会更新组件的当前状态。只有在首次创建组件时才会用 props 属性初始化状态。 以下组件将不显示更新的输入值： class MyComponent extends React.Component { constructor(props) { super(props) this.state = { records: [],",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-140",
    "topic": "React",
    "question": "如何实现 Server Side Rendering 或 SSR?",
    "answer": "React 已经配备了用于处理 Node 服务器上页面渲染的功能。你可以使用特殊版本的 DOM 渲染器，它遵循与客户端相同的模式。 import ReactDOMServer from 'react-dom/server' import App from './App' ReactDOMServer.renderToString() 此方法将以字符串形式输出常规 HTML，然后将其作为服务器响应的一部分放在页面正文中。在客户端，React 检测预渲染的内容并无缝地衔接。 ⬆ 返回顶部 72. ### 如何在 React 中启用生产模式? 你应该使用 Webpack 的 DefinePlugin 方法将 NODEENV 设置为 production，通过它你可以去除 propType 验证和额外警告等内容。除此之外，如果你压缩代码，如使用 Uglify 的死代码消除，以去掉用于开发的代码和注释，它将大大减少包的大小。 ⬆ 返回顶部 73. ### 什么是 CRA 及其好处? create-react-app CLI 工具允许你无需配置步骤，快速创建和运行 React 应用。 让我们使用 CRA 来创建 Todo 应用：",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-141",
    "topic": "React",
    "question": "生命周期方法 getDerivedStateFromProps() 的目的是什么?",
    "answer": "新的静态 getDerivedStateFromProps() 生命周期方法在实例化组件之后以及重新渲染组件之前调用。它可以返回一个对象用于更新状态，或者返回 null 指示新的属性不需要任何状态更新。 class MyComponent extends React.Component { static getDerivedStateFromProps(props, state) { // ... } } 此生命周期方法与 componentDidUpdate() 一起涵盖了 componentWillReceiveProps() 的所有用例。 ⬆ 返回顶部 77. ### 生命周期方法 getSnapshotBeforeUpdate() 的目的是什么? 新的 getSnapshotBeforeUpdate() 生命周期方法在 DOM 更新之前被调用。此方法的返回值将作为第三个参数传递给componentDidUpdate()。 class MyComponent extends React.Component { getSnapshotBeforeUpdate(prevProps, prevState) { // ... } } 此生命周期方法与 componentDidUpdate() 一起涵盖了 componentWillUpdate() 的所有用例。",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-142",
    "topic": "React",
    "question": "生命周期方法 getSnapshotBeforeUpdate() 的目的是什么?",
    "answer": "新的 getSnapshotBeforeUpdate() 生命周期方法在 DOM 更新之前被调用。此方法的返回值将作为第三个参数传递给componentDidUpdate()。 class MyComponent extends React.Component { getSnapshotBeforeUpdate(prevProps, prevState) { // ... } } 此生命周期方法与 componentDidUpdate() 一起涵盖了 componentWillUpdate() 的所有用例。 ⬆ 返回顶部 78. ### createElement() 和 cloneElement() 方法有什么区别? JSX 元素将被转换为 React.createElement() 函数来创建 React 元素，这些对象将用于表示 UI 对象。而 cloneElement 用于克隆元素并传递新的属性。 ⬆ 返回顶部 79. ### 推荐的组件命名方法是什么? 建议通过引用命名组件，而不是使用 displayName。 使用 displayName 命名组件: export default React.createClass({",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-143",
    "topic": "React",
    "question": "createElement() 和 cloneElement() 方法有什么区别?",
    "answer": "JSX 元素将被转换为 React.createElement() 函数来创建 React 元素，这些对象将用于表示 UI 对象。而 cloneElement 用于克隆元素并传递新的属性。 ⬆ 返回顶部 79. ### 推荐的组件命名方法是什么? 建议通过引用命名组件，而不是使用 displayName。 使用 displayName 命名组件: export default React.createClass({ displayName: 'TodoApp', // ... }) 推荐的方式： export default class TodoApp extends React.Component { // ... } ⬆ 返回顶部 80. ### 在组件类中方法的推荐顺序是什么?",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-144",
    "topic": "React",
    "question": "React Mixins 是什么?",
    "answer": "Mixins 是一种完全分离组件通用功能的方法。 Mixins 不应该被继续使用，可以用高阶组件或装饰器来替换。 最常用的 mixins 是 PureRenderMixin。当 props 和状态与之前的 props 和状态相等时，你可能在某些组件中使用它来防止不必要的重新渲染： const PureRenderMixin = require('react-addons-pure-render-mixin') const Button = React.createClass({ mixins: [PureRenderMixin], // ... }) ⬆ 返回顶部 85. ### 为什么 isMounted() 是一个反模式，而正确的解决方案是什么? isMounted() 的主要场景是避免在组件卸载后调用 setState()，因为它会发出警告。 if (this.isMounted()) { this.setState({...}) } 在调用 setState() 之前检查 isMounted() 会消除警告，但也会破坏警告的目的。使用 isMounted() 有一种代码味道，因为你要检查的唯一原因是你认为在卸载组件后可能持有引用。",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-145",
    "topic": "React",
    "question": "在 React v16 中是否支持自定义 DOM 属性?",
    "answer": "是的，在过去 React 会忽略未知的 DOM 属性。如果你编写的 JSX 属性 React 无法识别，那么 React 将跳过它。例如： 在 React 15 中将在 DOM 中渲染一个空的 div： 在 React 16 中，任何未知的属性都将会在 DOM 显示： 这对于应用特定于浏览器的非标准属性，尝试新的 DOM APIs 与集成第三方库来说非常有用。 ⬆ 返回顶部 89. ### constructor 和 getInitialState 有什么区别? 当使用 ES6 类时，你应该在构造函数中初始化状态，而当你使用 React.createClass() 时，就需要使用 getInitialState() 方法。 使用 ES6 类:",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-146",
    "topic": "React",
    "question": "constructor 和 getInitialState 有什么区别?",
    "answer": "当使用 ES6 类时，你应该在构造函数中初始化状态，而当你使用 React.createClass() 时，就需要使用 getInitialState() 方法。 使用 ES6 类: class MyComponent extends React.Component { constructor(props) { super(props) this.state = { / initial state / } } } 使用 React.createClass(): const MyComponent = React.createClass({ getInitialState() { return { / initial state / } } }) 注意： 在 React v16 中 React.createClass() 已被弃用和删除，请改用普通的 JavaScript 类。 ⬆ 返回顶部 90. ### 是否可以在不调用 setState 方法的情况下，强制组件重新渲染?",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-147",
    "topic": "React",
    "question": "在使用 ES6 类的 React 中 super() 和 super(props) 有什么区别?",
    "answer": "当你想要在 constructor() 函数中访问 this.props，你需要将 props 传递给 super() 方法。 使用 super(props): class MyComponent extends React.Component { constructor(props) { super(props) console.log(this.props) // { name: 'John', ... } } } 使用 super(): class MyComponent extends React.Component { constructor(props) { super() console.log(this.props) // undefined } } 在 constructor() 函数之外，访问 this.props 属性会显示相同的值。 阅读资源：",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-148",
    "topic": "React",
    "question": "如何在 attribute 引号中访问 props 属性?",
    "answer": "React (或 JSX) 不支持属性值内的变量插值。下面的形式将不起作用： 但你可以将 JS 表达式作为属性值放在大括号内。所以下面的表达式是有效的： 使用模板字符串也是可以的： ⬆ 返回顶部 94. ### 什么是 React proptype 数组? 如果你要规范具有特定对象格式的数组的属性，请使用 React.PropTypes.shape() 作为 React.PropTypes.arrayOf() 的参数。 ReactComponent.propTypes = { arrayWithShape: React.PropTypes.arrayOf(React.PropTypes.shape({ color: React.PropTypes.string.isRequired,",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-149",
    "topic": "React",
    "question": "什么是 React proptype 数组?",
    "answer": "如果你要规范具有特定对象格式的数组的属性，请使用 React.PropTypes.shape() 作为 React.PropTypes.arrayOf() 的参数。 ReactComponent.propTypes = { arrayWithShape: React.PropTypes.arrayOf(React.PropTypes.shape({ color: React.PropTypes.string.isRequired, fontSize: React.PropTypes.number.isRequired })).isRequired } ⬆ 返回顶部 95. ### 如何有条件地应用样式类? 你不应该在引号内使用大括号，因为它将被计算为字符串。 相反，你需要将大括号移到外部（不要忘记在类名之间添加空格）： 模板字符串也可以工作：",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-150",
    "topic": "React",
    "question": "为什么 ReactDOM 从 React 分离出来?",
    "answer": "React 团队致力于将所有的与 DOM 相关的特性抽取到一个名为 ReactDOM 的独立库中。React v0.14 是第一个拆分后的版本。通过查看一些软件包，react-native，react-art，react-canvas，和 react-three，很明显，React 的优雅和本质与浏览器或 DOM 无关。为了构建更多 React 能应用的环境，React 团队计划将主要的 React 包拆分成两个：react 和 react-dom。这为编写可以在 React 和 React Native 的 Web 版本之间共享的组件铺平了道路。 ⬆ 返回顶部 98. ### 如何使用 React label 元素? 如果你尝试使用标准的 for 属性将 元素绑定到文本输入框，那么在控制台将会打印缺少 HTML 属性的警告消息。 {'User'} 因为 for 是 JavaScript 的保留字，请使用 htmlFor 来替代。 {'User'} ⬆ 返回顶部 99. ### 如何合并多个内联的样式对象? 在 React 中，你可以使用扩展运算符: {'Submit'}",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-151",
    "topic": "React",
    "question": "setState() 和 replaceState() 方法之间有什么区别?",
    "answer": "当你使用 setState() 时，当前和先前的状态将被合并。replaceState() 会抛出当前状态，并仅用你提供的内容替换它。通常使用 setState()，除非你出于某种原因确实需要删除所有以前的键。你还可以在 setState() 中将状态设置为 false/null，而不是使用 replaceState()。 ⬆ 返回顶部 102. ### 如何监听状态变化? 当状态更改时将调用以下生命周期方法。你可以将提供的状态和属性值与当前状态和属性值进行比较，以确定是否发生了有意义的改变。 componentWillUpdate(object nextProps, object nextState) componentDidUpdate(object prevProps, object prevState) ⬆ 返回顶部 103. ### 在 React 状态中删除数组元素的推荐方法是什么? 更好的方法是使用 Array.prototype.filter() 方法。 例如，让我们创建用于更新状态的 removeItem() 方法。 removeItem(index) { this.setState({ data: this.state.data.filter((item, i) => i !== index) }) }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-152",
    "topic": "React",
    "question": "在 create-react-app 项目中导入 polyfills 的方法有哪些?",
    "answer": "1. 从 core-js 中手动导入: 创建一个名为 polyfills.js 文件，并在根目录下的 index.js 文件中导入它。运行 npm install core-js 或 yarn add core-js 并导入你所需的功能特性： import 'core-js/fn/array/find' import 'core-js/fn/array/includes' import 'core-js/fn/number/is-nan' 2. 使用 Polyfill 服务: 通过将以下内容添加到 index.html 中来获取自定义的特定于浏览器的 polyfill： 在上面的脚本中，我们必须显式地请求 Array.prototype.includes 特性，因为它没有被包含在默认的特性集中。 ⬆ 返回顶部 112. ### 如何在 create-react-app 中使用 https 而不是 http? 你只需要使用 HTTPS=true 配置。你可以编辑 package.json 中的 scripts 部分： \"scripts\": {",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-153",
    "topic": "React",
    "question": "如何在 create-react-app 中使用 https 而不是 http?",
    "answer": "你只需要使用 HTTPS=true 配置。你可以编辑 package.json 中的 scripts 部分： \"scripts\": { \"start\": \"set HTTPS=true && react-scripts start\" } 或直接运行 set HTTPS=true && npm start ⬆ 返回顶部 113. ### 如何避免在 create-react-app 中使用相对路径导入? 在项目的根目录中创建一个名为 .env 的文件，并写入导入路径： NODEPATH=src/app 然后重新启动开发服务器。现在，你应该能够在没有相对路径的情况下导入 src/app 内的任何内容。 ⬆ 返回顶部 114. ### 如何为 React Router 添加 Google Analytics? 在 history 对象上添加一个监听器以记录每个页面的访问：",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-154",
    "topic": "React",
    "question": "如何避免在 create-react-app 中使用相对路径导入?",
    "answer": "在项目的根目录中创建一个名为 .env 的文件，并写入导入路径： NODEPATH=src/app 然后重新启动开发服务器。现在，你应该能够在没有相对路径的情况下导入 src/app 内的任何内容。 ⬆ 返回顶部 114. ### 如何为 React Router 添加 Google Analytics? 在 history 对象上添加一个监听器以记录每个页面的访问： history.listen(function (location) { window.ga('set', 'page', location.pathname + location.search) window.ga('send', 'pageview', location.pathname + location.search) }) ⬆ 返回顶部 115. ### 如何每秒更新一个组件? 你需要使用 setInterval() 来触发更改，但也需要在组件卸载时清除计时器，以防止错误和内存泄漏。",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-155",
    "topic": "React",
    "question": "如何为 React Router 添加 Google Analytics?",
    "answer": "在 history 对象上添加一个监听器以记录每个页面的访问： history.listen(function (location) { window.ga('set', 'page', location.pathname + location.search) window.ga('send', 'pageview', location.pathname + location.search) }) ⬆ 返回顶部 115. ### 如何每秒更新一个组件? 你需要使用 setInterval() 来触发更改，但也需要在组件卸载时清除计时器，以防止错误和内存泄漏。 componentDidMount() { this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000) } componentWillUnmount() { clearInterval(this.interval) } ⬆ 返回顶部 116. ### 如何将 vendor prefixes 应用于 React 中的内联样式?",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-156",
    "topic": "React",
    "question": "如何将 vendor prefixes 应用于 React 中的内联样式?",
    "answer": "React不会自动应用 vendor prefixes，你需要手动添加 vendor prefixes。 <div style={{ transform: 'rotate(90deg)', WebkitTransform: 'rotate(90deg)', // note the capital 'W' here msTransform: 'rotate(90deg)' // 'ms' is the only lowercase vendor prefix }} /> ⬆ 返回顶部 117. ### 如何使用 React 和 ES6 导入和导出组件? 导出组件时，你应该使用默认导出： import React from 'react' import User from 'user' export default class MyProfile extends React.Component { render(){ return ( //... ) }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-157",
    "topic": "React",
    "question": "在 React 中是否可以使用 async/await?",
    "answer": "如果要在 React 中使用 async/await，则需要 Babel 和 transform-async-to-generator 插件。 ⬆ 返回顶部 123. ### React 项目常见的文件结构是什么? React 项目文件结构有两种常见的实践。 1. 按功能或路由分组: 构建项目的一种常见方法是将 CSS，JS 和测试用例放在一起，按功能或路由分组。 common/ ├─ Avatar.js ├─ Avatar.css ├─ APIUtils.js └─ APIUtils.test.js feed/ ├─ index.js ├─ Feed.js ├─ Feed.css ├─ FeedStory.js ├─ FeedStory.test.js └─ FeedAPI.js profile/ ├─ index.js ├─ Profile.js",
    "tags": [
      "async",
      "testing"
    ]
  },
  {
    "id": "q-react-158",
    "topic": "React",
    "question": "什么是 React Router?",
    "answer": "React Router 是一个基于 React 之上的强大路由库，可以帮助您快速地向应用添加视图和数据流，同时保持 UI 与 URL 同步。 ⬆ 返回顶部 130. ### React Router 与 history 库的区别? React Router 是history库的包装器，它处理浏览器的window.history与浏览器和哈希历史的交互。它还提供了内存历史记录，这对于没有全局历史记录的环境非常有用，例如移动应用程序开发（React Native）和使用 Node 进行单元测试。 ⬆ 返回顶部 131. ### 在 React Router v4 中的组件是什么? React Router v4 提供了以下三种类型的 组件: 1. 2. 3. 以上组件将创建browser，hash和memory的 history 实例。React Router v4 通过router对象中的上下文使与您的路由器关联的history实例的属性和方法可用。 ⬆ 返回顶部 132. ### history 中的 push() 和 replace() 方法的目的是什么? 一个 history 实例有两种导航方法： 1. push() 2. replace()",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-react-159",
    "topic": "React",
    "question": "React Router 与 history 库的区别?",
    "answer": "React Router 是history库的包装器，它处理浏览器的window.history与浏览器和哈希历史的交互。它还提供了内存历史记录，这对于没有全局历史记录的环境非常有用，例如移动应用程序开发（React Native）和使用 Node 进行单元测试。 ⬆ 返回顶部 131. ### 在 React Router v4 中的组件是什么? React Router v4 提供了以下三种类型的 组件: 1. 2. 3. 以上组件将创建browser，hash和memory的 history 实例。React Router v4 通过router对象中的上下文使与您的路由器关联的history实例的属性和方法可用。 ⬆ 返回顶部 132. ### history 中的 push() 和 replace() 方法的目的是什么? 一个 history 实例有两种导航方法： 1. push() 2. replace() 如果您将 history 视为一个访问位置的数组，则push()将向数组添加一个新位置，replace()将用新的位置替换数组中的当前位置。 ⬆ 返回顶部 133. ### 如何使用在 React Router v4 中以编程的方式进行导航?",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-react-160",
    "topic": "React",
    "question": "在 React Router v4 中的组件是什么?",
    "answer": "React Router v4 提供了以下三种类型的 组件: 1. 2. 3. 以上组件将创建browser，hash和memory的 history 实例。React Router v4 通过router对象中的上下文使与您的路由器关联的history实例的属性和方法可用。 ⬆ 返回顶部 132. ### history 中的 push() 和 replace() 方法的目的是什么? 一个 history 实例有两种导航方法： 1. push() 2. replace() 如果您将 history 视为一个访问位置的数组，则push()将向数组添加一个新位置，replace()将用新的位置替换数组中的当前位置。 ⬆ 返回顶部 133. ### 如何使用在 React Router v4 中以编程的方式进行导航? 在组件中实现操作路由/导航有三种不同的方法。 1. 使用withRouter()高阶函数： withRouter()高阶函数将注入 history 对象作为组件的 prop。该对象提供了push()和replace()方法，以避免使用上下文。",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-react-161",
    "topic": "React",
    "question": "history 中的 push() 和 replace() 方法的目的是什么?",
    "answer": "一个 history 实例有两种导航方法： 1. push() 2. replace() 如果您将 history 视为一个访问位置的数组，则push()将向数组添加一个新位置，replace()将用新的位置替换数组中的当前位置。 ⬆ 返回顶部 133. ### 如何使用在 React Router v4 中以编程的方式进行导航? 在组件中实现操作路由/导航有三种不同的方法。 1. 使用withRouter()高阶函数： withRouter()高阶函数将注入 history 对象作为组件的 prop。该对象提供了push()和replace()方法，以避免使用上下文。 import { withRouter } from 'react-router-dom' // this also works with 'react-router-native' const Button = withRouter(({ history }) => ( <button type='button' onClick={() => { history.push('/new-location') }} > {'Click Me!'} ))",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-162",
    "topic": "React",
    "question": "为什么你会得到 \"Router may have only one child element\" 警告?",
    "answer": "此警告的意思是Router组件下仅能包含一个子节点。 你必须将你的 Route 包装在块中，因为是唯一的，它只提供一个路由。 首先，您需要在导入中添加Switch： import { Switch, Router, Route } from 'react-router' 然后在块中定义路由： ⬆ 返回顶部 136. ### 如何在 React Router v4 中将 params 传递给 history.push 方法? 在导航时，您可以将 props 传递给history对象：",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-163",
    "topic": "React",
    "question": "如何在 React Router v4 中将 params 传递给 history.push 方法?",
    "answer": "在导航时，您可以将 props 传递给history对象： this.props.history.push({ pathname: '/template', search: '?name=sudheer', state: { detail: response.data } }) search属性用于在push()方法中传递查询参数。 ⬆ 返回顶部 137. ### 如何实现默认页面或 404 页面? 呈现匹配的第一个孩子。 没有路径的总是匹配。所以你只需要简单地删除 path 属性，如下所示： ⬆ 返回顶部",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-164",
    "topic": "React",
    "question": "在 React 测试中什么是浅层渲染（Shallow Renderer）?",
    "answer": "浅层渲染对于在 React 中编写单元测试用例很有用。它允许您渲染一个一级深的组件并断言其渲染方法返回的内容，而不必担心子组件未实例化或渲染。 例如，如果您有以下组件： function MyComponent() { return ( {'Title'} {'Description'} ) } 然后你可以如下断言： import ShallowRenderer from 'react-test-renderer/shallow' // in your test const renderer = new ShallowRenderer() renderer.render() const result = renderer.getRenderOutput() expect(result.type).toBe('div') expect(result.props.children).toEqual([",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-react-165",
    "topic": "React",
    "question": "在 React 中 TestRenderer 包是什么?",
    "answer": "此包提供了一个渲染器，可用于将组件渲染为纯 JavaScript 对象，而不依赖于 DOM 或原生移动环境。该包可以轻松获取由 ReactDOM 或 React Native 平台所渲染的视图层次结构（类似于DOM树）的快照，而无需使用浏览器或jsdom。 import TestRenderer from 'react-test-renderer' const Link = ({page, children}) => {children} const testRenderer = TestRenderer.create( {'Facebook'} ) console.log(testRenderer.toJSON()) // { // type: 'a', // props: { href: 'https://www.facebook.com/' }, // children: [ 'Facebook' ] // } ⬆ 返回顶部 148. ### ReactTestUtils 包的目的是什么? ReactTestUtils由with-addons包提供，允许您对模拟 DOM 执行操作以进行单元测试。 ⬆ 返回顶部 149. ### 什么是 Jest?",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-react-166",
    "topic": "React",
    "question": "ReactTestUtils 包的目的是什么?",
    "answer": "ReactTestUtils由with-addons包提供，允许您对模拟 DOM 执行操作以进行单元测试。 ⬆ 返回顶部 149. ### 什么是 Jest? Jest是一个由 Facebook 基于 Jasmine 创建的 JavaScript 单元测试框架，提供自动模拟创建和jsdom环境。它通常用于测试组件。 ⬆ 返回顶部 150. ### Jest 对比 Jasmine 有什么优势? 与 Jasmine 相比，有几个优点： - 自动查找在源代码中要执行测试。 - 在运行测试时自动模拟依赖项。 - 允许您同步测试异步代码。 - 使用假的 DOM 实现（通过jsdom）运行测试，以便可以在命令行上运行测试。 - 在并行流程中运行测试，以便更快完成。 ⬆ 返回顶部 151. ### 举一个简单的 Jest 测试用例 让我们为sum.js文件中添加两个数字的函数编写一个测试： const sum = (a, b) => a + b",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-react-167",
    "topic": "React",
    "question": "Jest 对比 Jasmine 有什么优势?",
    "answer": "与 Jasmine 相比，有几个优点： - 自动查找在源代码中要执行测试。 - 在运行测试时自动模拟依赖项。 - 允许您同步测试异步代码。 - 使用假的 DOM 实现（通过jsdom）运行测试，以便可以在命令行上运行测试。 - 在并行流程中运行测试，以便更快完成。 ⬆ 返回顶部 151. ### 举一个简单的 Jest 测试用例 让我们为sum.js文件中添加两个数字的函数编写一个测试： const sum = (a, b) => a + b export default sum 创建一个名为sum.test.js的文件，其中包含实际测试： import sum from './sum' test('adds 1 + 2 to equal 3', () => { expect(sum(1, 2)).toBe(3) })",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-react-168",
    "topic": "React",
    "question": "mapStateToProps() 和 mapDispatchToProps() 之间有什么区别?",
    "answer": "mapStateToProps()是一个实用方法，它可以帮助您的组件获得最新的状态（由其他一些组件更新）： const mapStateToProps = (state) => { return { todos: getVisibleTodos(state.todos, state.visibilityFilter) } } mapDispatchToProps()是一个实用方法，它可以帮助你的组件触发一个动作事件（可能导致应用程序状态改变的调度动作）： const mapDispatchToProps = (dispatch) => { return { onTodoClick: (id) => { dispatch(toggleTodo(id)) } } } ⬆ 返回顶部 157. ### 我可以在 reducer 中触发一个 Action 吗? 在 reducer 中触发 Action 是反模式。您的 reducer 应该没有副作用，只是接收 Action 并返回一个新的状态对象。在 reducer 中添加侦听器和调度操作可能会导致链接的 Action 和其他副作用。",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-169",
    "topic": "React",
    "question": "我可以在 reducer 中触发一个 Action 吗?",
    "answer": "在 reducer 中触发 Action 是反模式。您的 reducer 应该没有副作用，只是接收 Action 并返回一个新的状态对象。在 reducer 中添加侦听器和调度操作可能会导致链接的 Action 和其他副作用。 ⬆ 返回顶部 158. ### 如何在组件外部访问 Redux 存储的对象? 是的，您只需要使用createStore()从它创建的模块中导出存储。此外，它不应污染全局窗口对象。 store = createStore(myReducer) export default store ⬆ 返回顶部 159. ### MVW 模式的缺点是什么? 1. DOM 操作非常昂贵，导致应用程序行为缓慢且效率低下。 3. 由于循环依赖性，围绕模型和视图创建了复杂的模型。 3. 协作型应用程序（如Google Docs）会发生大量数据更改。 4. 无需添加太多额外代码就无法轻松撤消（及时回退）。 ⬆ 返回顶部 160. ### Redux 和 RxJS 之间是否有任何相似之处? 这些库的目的是不同的，但是存在一些模糊的相似之处。",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-react-170",
    "topic": "React",
    "question": "在 React 中如何使用 Redux 的 connect() ?",
    "answer": "您需要按照两个步骤在容器中使用您的 Store： 1. 使用mapStateToProps()： 它将 Store 中的状态变量映射到您指定的属性。 2. 将上述属性连接到容器： mapStateToProps函数返回的对象连接到容器。你可以从react-redux导入connect()。 import React from 'react' import { connect } from 'react-redux' class App extends React.Component { render() { return {this.props.containerData} } } function mapStateToProps(state) { return { containerData: state.data } } export default connect(mapStateToProps)(App) ⬆ 返回顶部 163. ### 如何在 Redux 中重置状态? 你需要在你的应用程序中编写一个root reducer，它将处理动作委托给combineReducers()生成的 reducer。",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-171",
    "topic": "React",
    "question": "编写 mapDispatchToProps() 有哪些不同的方法?",
    "answer": "有一些方法可以将action creators绑定到mapDispatchToProps()中的dispatch()。以下是可能的写法： const mapDispatchToProps = (dispatch) => ({ action: () => dispatch(action()) }) const mapDispatchToProps = (dispatch) => ({ action: bindActionCreators(action, dispatch) }) const mapDispatchToProps = { action } 第三种写法只是第一种写法的简写。 ⬆ 返回顶部 173. ### 在 mapStateToProps() 和 mapDispatchToProps() 中使用 ownProps 参数有什么用? 如果指定了ownProps参数，React Redux 会将传递给该组件的 props 传递给你的connect函数。因此，如果您使用连接组件： import ConnectedComponent from './containers/ConnectedComponent';",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-172",
    "topic": "React",
    "question": "在 mapStateToProps() 和 mapDispatchToProps() 中使用 ownProps 参数有什么用?",
    "answer": "如果指定了ownProps参数，React Redux 会将传递给该组件的 props 传递给你的connect函数。因此，如果您使用连接组件： import ConnectedComponent from './containers/ConnectedComponent'; 你的mapStateToProps()和mapDispatchToProps()函数里面的ownProps将是一个对象： { user: 'john' } 您可以使用此对象来决定从这些函数返回的内容。 ⬆ 返回顶部 174. ### 如何构建 Redux 项目目录? 大多数项目都有几个顶级目录，如下所示： 1. Components: 用于dumb组件，Redux 不必关心的组件。 2. Containers: 用于连接到 Redux 的smart组件。 3. Actions: 用于所有 Action 创建器，其中文件名对应于应用程序的一部分。 4. Reducers: 用于所有 reducer，其中文件名对应于state key。 5. Store: 用于 Store 初始化。",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-173",
    "topic": "React",
    "question": "什么是 Redux DevTools?",
    "answer": "Redux DevTools是 Redux 的实时编辑的时间旅行环境，具有热重新加载，Action 重放和可自定义的 UI。如果您不想安装 Redux DevTools 并将其集成到项目中，请考虑使用 Chrome 和 Firefox 的扩展插件。 ⬆ 返回顶部 181. ### Redux DevTools 的功能有哪些? 1. 允许您检查每个状态和 action 负载。 2. 让你可以通过撤销回到过去。 3. 如果更改 reducer 代码，将重新评估每个已暂存的 Action。 4. 如果 Reducers 抛出错误，你会看到这发生了什么 Action，以及错误是什么。 5. 使用persistState()存储增强器，您可以在页面重新加载期间保持调试会话。 ⬆ 返回顶部 182. ### 什么是 Redux 选择器以及使用它们的原因? 选择器是将 Redux 状态作为参数并返回一些数据以传递给组件的函数。 例如，要从 state 中获取用户详细信息： const getUserData = state => state.user.data ⬆ 返回顶部 183. ### 什么是 Redux Form?",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-174",
    "topic": "React",
    "question": "React Native 和 React 有什么区别?",
    "answer": "React是一个 JavaScript 库，支持前端 Web 和在服务器上运行，用于构建用户界面和 Web 应用程序。 React Native是一个移动端框架，可编译为本机应用程序组件，允许您使用 JavaScript 构建本机移动应用程序（iOS，Android和Windows），允许您使用 React 构建组件。 ⬆ 返回顶部 189. ### 如何测试 React Native 应用程序? React Native 只能在 iOS 和 Android 等移动模拟器中进行测试。您可以使用 expo app（https://expo.io）在移动设备上运行该应用程序。如果使用 QR 代码进行同步，则您的移动设备和计算机应位于同一个无线网络中。 ⬆ 返回顶部 190. ### 如何在 React Native 查看日志? 您可以使用console.log，console.warn等。从 React Native v0.29 开始，您只需运行以下命令即可在控制台中查看日志： $ react-native log-ios $ react-native log-android ⬆ 返回顶部 191. ### 怎么调试 React Native 应用? 按照以下步骤调试 React Native 应用程序： 1. 在 iOS 模拟器中运行您的应用程序。",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-175",
    "topic": "React",
    "question": "如何测试 React Native 应用程序?",
    "answer": "React Native 只能在 iOS 和 Android 等移动模拟器中进行测试。您可以使用 expo app（https://expo.io）在移动设备上运行该应用程序。如果使用 QR 代码进行同步，则您的移动设备和计算机应位于同一个无线网络中。 ⬆ 返回顶部 190. ### 如何在 React Native 查看日志? 您可以使用console.log，console.warn等。从 React Native v0.29 开始，您只需运行以下命令即可在控制台中查看日志： $ react-native log-ios $ react-native log-android ⬆ 返回顶部 191. ### 怎么调试 React Native 应用? 按照以下步骤调试 React Native 应用程序： 1. 在 iOS 模拟器中运行您的应用程序。 2. 按Command + D，然后在网页中打开http://localhost:8081/debugger-ui。 3. 启用Pause On Caught Exceptions以获得更好的调试体验。 4. 按Command + Option + I打开 Chrome Developer 工具，或通过View ->Developer ->Developer Tools打开它。 5. 您现在应该能够像平常那样进行调试。 ⬆ 返回顶部",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-react-176",
    "topic": "React",
    "question": "Flow 和 PropTypes 有什么区别?",
    "answer": "Flow 是一个静态分析工具（静态检查器），它使用该语言的超集，允许你在所有代码中添加类型注释，并在编译时捕获整个类的错误。PropTypes 是一个基本类型检查器（运行时检查器），已经被添加到 React 中。除了检查传递给给定组件的属性类型外，它不能检查其他任何内容。如果你希望对整个项目进行更灵活的类型检查，那么 Flow/TypeScript 是更合适的选择。 ⬆ 返回顶部 195. ### 在 React 中如何使用 Font Awesome 图标? 接下来的步骤将在 React 中引入 Font Awesome： 1. 安装 font-awesome: $ npm install --save font-awesome 2. 在 index.js 文件中导入 font-awesome: import 'font-awesome/css/font-awesome.min.css' 3. 在 className 中添加 Font Awesome 类: render() { return }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-177",
    "topic": "React",
    "question": "在 React 中如何使用 Font Awesome 图标?",
    "answer": "接下来的步骤将在 React 中引入 Font Awesome： 1. 安装 font-awesome: $ npm install --save font-awesome 2. 在 index.js 文件中导入 font-awesome: import 'font-awesome/css/font-awesome.min.css' 3. 在 className 中添加 Font Awesome 类: render() { return } ⬆ 返回顶部 196. ### 什么 是 React 开发者工具? React Developer Tools 允许您检查组件层次结构，包括组件属性和状态。它既可以作为浏览器扩展（用于 Chrome 和 Firefox ），也可以作为独立的应用程序（用于其他环境，包括 Safari、IE 和 React Native）。",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-178",
    "topic": "React",
    "question": "在 Chrome 中为什么 DevTools 没有加载本地文件?",
    "answer": "如果您在浏览器中打开了本地 HTML 文件（file://...），则必须先打开Chrome Extensions并选中“允许访问文件URL”。 ⬆ 返回顶部 198. ### 如何在 React 中使用 Polymer? 1. 创建 Polymer 元素： Polymer({ is: 'calender-element', ready: function() { this.textContent = 'I am a calender' } }) 2. 通过在 HTML 文档中导入 Polymer 组件，来创建该组件对应的标签。例如，在 React 应用程序的 index.html 文件中导入。 3. 在 JSX 文件中使用该元素： import React from 'react'",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-179",
    "topic": "React",
    "question": "如何在 React 中使用 Polymer?",
    "answer": "1. 创建 Polymer 元素： Polymer({ is: 'calender-element', ready: function() { this.textContent = 'I am a calender' } }) 2. 通过在 HTML 文档中导入 Polymer 组件，来创建该组件对应的标签。例如，在 React 应用程序的 index.html 文件中导入。 3. 在 JSX 文件中使用该元素： import React from 'react' class MyComponent extends React.Component { render() { return ( )",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-180",
    "topic": "React",
    "question": "与 Vue.js 相比，React 有哪些优势?",
    "answer": "与 Vue.js 相比，React 具有以下优势： 1. 在大型应用程序开发中提供更大的灵活性。 2. 更容易测试。 3. 更适合创建移动端应用程序。 4. 提供更多的信息和解决方案。 ⬆ 返回顶部 200. ### React 和 Angular 有什么区别? | React | Angular |",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-181",
    "topic": "React",
    "question": "什么是 Styled Components?",
    "answer": "styled-components 是一个用于样式化 React 应用程序的 JavaScript 库。 它删除了样式和组件之间的映射，并允许您在 js 中编写 CSS。 ⬆ 返回顶部 203. ### 举一个 Styled Components 的例子? 让我们创建具有特定样式的和组件。 import React from 'react' import styled from 'styled-components' // Create a component that renders an which is centered, red and sized at 1.5em const Title = styled.h1 font-size: 1.5em; text-align: center; color: palevioletred; // Create a component that renders a with some padding and a papayawhip background const Wrapper = styled.section padding: 4em; background: papayawhip; Title和Wrapper变量现在是可以像任何其他 react 组件一样渲染。",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-react-182",
    "topic": "React",
    "question": "如何在 create-react-app 中使用 TypeScript?",
    "answer": "当您创建一个新项目带有--scripts-version选项值为react-scripts-ts时便可将 TypeScript 引入。 生成的项目结构如下所示： my-app/ ├─ .gitignore ├─ images.d.ts ├─ nodemodules/ ├─ public/ ├─ src/ │ └─ ... ├─ package.json ├─ tsconfig.json ├─ tsconfig.prod.json ├─ tsconfig.test.json └─ tslint.json ⬆ 返回顶部",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-react-183",
    "topic": "React",
    "question": "Redux 中的 Action 是什么?",
    "answer": "Actions是纯 JavaScript 对象或信息的有效负载，可将数据从您的应用程序发送到您的 Store。 它们是 Store 唯一的数据来源。 Action 必须具有指示正在执行的操作类型的 type 属性。 例如，表示添加新待办事项的示例操作： { type: ADDTODO, text: 'Add todo item' } ⬆ 返回顶部 209. ### 在 React 中 statics 对象是否能与 ES6 类一起使用? 不行，statics 仅适用于 React.createClass()： someComponent= React.createClass({ statics: { someMethod: function() { // .. } } }) 但是你可以在 ES6+ 的类中编写静态代码，如下所示：",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-184",
    "topic": "Node.js",
    "question": "What is big-o notation ?",
    "answer": "An algorithm is an impression method used to determine the working time for an input N size. The big-o notation grade is expressed by the highest value. And the big-o notation is finding the answer with the question of O(n). Here is a cheat sheet and swift algorithm club. For example; For Loops big-o notation is O(N). Because For Loops work n times. Variables (var number:Int = 4) big-o notation is O(1).",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-185",
    "topic": "Node.js",
    "question": "Do you know Back End development ?",
    "answer": "Depends. I have experienced PARSE and I am awarded FBStart. I decided to learn pure back end. You have two choices. Either you can learn node.js + express.js and mongodb. OR, you can learn Vapor or Kitura. Don’t you like or use Firebase? Firebase doesn't have a path for macOS X developers. If you want to learn Firebase, please just follow one month of Firebase Google Group.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-186",
    "topic": "Node.js",
    "question": "What’s the difference between the frame and the bounds?",
    "answer": "The bounds of a UIView is the rectangle, expressed as a location (x,y) and size (width,height) relative to its own coordinate system (0,0). The frame of a UIView is the rectangle, expressed as a location (x,y) and size (width,height) relative to the superview it is contained within.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-187",
    "topic": "Node.js",
    "question": "What is Regular expressions ?",
    "answer": "Regular expressions are special string patterns that describe how to search through a string.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-188",
    "topic": "Node.js",
    "question": "What is Node.js and why is it used?",
    "answer": "Node.js is an open-source, cross-platform JavaScript runtime environment that executes code outside of a web browser. It is built on V8, the same JavaScript engine within Chrome, and optimized for high performance. This environment, coupled with an event-driven, non-blocking I/O framework, is tailored for server-side web development and more.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-node-js-189",
    "topic": "Node.js",
    "question": "How does Node.js handle child threads?",
    "answer": "Node.js employs event-driven architecture and non-blocking I/O for efficiency. While Node.js operates off a single main thread, it can harness the full power of multi-core systems by launching child threads for specific tasks, such as file compression or image processing.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-190",
    "topic": "Node.js",
    "question": "Describe the event-driven programming in Node.js.",
    "answer": "Event-driven programming, a hallmark of Node.js, uses an event, listener, and emitter architecture to handle asynchronous tasks. This design centers around events and how they trigger actions in the attached listeners.",
    "tags": [
      "async"
    ]
  },
  {
    "id": "q-node-js-191",
    "topic": "Node.js",
    "question": "What is the difference between Node.js and traditional web server technologies?",
    "answer": "Node.js revolutionized server-side development with its non-blocking, event-driven architecture. Let's look at how it differs from traditional web servers and how it leverages a Single Input-Output (I/O) model.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-192",
    "topic": "Node.js",
    "question": "Explain what \"non-blocking\" means in Node.js.",
    "answer": "Node.js leverages non-blocking I/O to handle multiple operations without waiting for each to complete separately. This particular I/O model, coupled with the event-driven paradigm of Node.js, is key to its high performance and scalability, making it ideal for tasks such as data streaming, background tasks, and concurrent operations.",
    "tags": [
      "performance",
      "architecture"
    ]
  },
  {
    "id": "q-node-js-193",
    "topic": "Node.js",
    "question": "How do you update Node.js to the latest version?",
    "answer": "Regular updates ensure that your Node.js setup is secure, efficient, and equipped with the latest features. Here's how to keep it up-to-date.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-node-js-194",
    "topic": "Node.js",
    "question": "What is \"npm\" and what is it used for?",
    "answer": "npm (Node Package Manager) is a powerful and highly popular package manager that is focused on the Node.js environment. Its primary purpose is to simplify the installation, management, and sharing of libraries or tools written in Node.js. npm is more than just a package manager: It's also a thriving ecosystem, offering a plethora of ready-to-use modules and tools, thereby making the development workflow for Node.js even more efficient.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-195",
    "topic": "Node.js",
    "question": "How do you manage packages in a Node.js project?",
    "answer": "Node.js utilizes npm (Node Package Manager) or yarn for package management.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-196",
    "topic": "Node.js",
    "question": "What is a package.json file?",
    "answer": "The package.json file in Node.js projects contains valuable information, such as project metadata and dependencies. This file is essential for managing project modules, scripts, and version control and helps ensure the consistency and stability of your project.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-197",
    "topic": "Node.js",
    "question": "Describe some of the core modules of Node.js.",
    "answer": "Node.js offers a host of inbuilt modules that cover diverse functionalities, ranging from file system handling to HTTP server management. These modules expedite development and allow for more streamlined application building.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-198",
    "topic": "Node.js",
    "question": "How do you create a simple server in Node.js using the HTTP module?",
    "answer": "Let's look at how to create a simple server in Node.js using the built-in http module.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-199",
    "topic": "Node.js",
    "question": "Explain the purpose of the File System (fs) module.",
    "answer": "The File System (fs) module in Node.js facilitates file operations such as reading, writing, and manipulation. It's a core module, meaning it's available without needing 3rd-party installations.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-200",
    "topic": "Node.js",
    "question": "What is the Buffer class in Node.js?",
    "answer": "In Node.js, the Buffer class is a core module that provides a way to read, manipulate, and allocate binary data, which primarily represents a sequence of bytes (octets).",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-201",
    "topic": "Node.js",
    "question": "What are streams in Node.js and what types are available?",
    "answer": "Node.js utilizes streams for efficient handling of input/output data, offering two main varieties: readable and writable.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-202",
    "topic": "Node.js",
    "question": "WHERE Clause: Row-Level Predicate",
    "answer": "The WHERE clause acts as a pre-aggregation filter. It evaluates conditions against individual rows before any GROUP BY operation occurs. Execution Order: Applied immediately after the FROM/JOIN phase. Performance: Highly efficient when used with SARGable (Search ARGumentable) expressions. Indexing columns referenced in a WHERE clause allows for $O(\\log n)$ lookup performance via B-tree index traversal. Restrictions: Cannot reference aggregate functions (e.g., SUM(), AVG()) because the aggregation state has not yet been computed.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-node-js-203",
    "topic": "Node.js",
    "question": "What is Flutter?",
    "answer": "Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, macOS, Windows, and the web from a single codebase. Flutter was released in May 2017. Developers consider it as the fastest and most expressive way to create native apps. Flutter will have a significant impact on the development of high-quality, feature-packed mobile applications in the near future due to its simplicity, high performance as a result of its development, and rich user interface. Back to top ↑ &nbsp;&nbsp;/&nbsp;&nbsp; 🖌️ Edit answer",
    "tags": [
      "performance",
      "testing"
    ]
  },
  {
    "id": "q-node-js-204",
    "topic": "Node.js",
    "question": "What is Fat Arrow Notation in Dart?",
    "answer": "A fat arrow (=>) is used to define a single expression in a function. This is a cleaner way to write functions with a single statement. Syntax: ReturnType FunctionName(Params) => Expression; Example: // Without fat arrow notation String findSquare(int n) { return 'The square of $n is ${n n}.'; } // With fat arrow notation String findSquare(int n) => 'The square of $n is ${n n}.'; Back to top ↑ &nbsp;&nbsp;/&nbsp;&nbsp; 🖌️ Edit answer",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-205",
    "topic": "Node.js",
    "question": "What are the various kinds of Streams present in flutter?",
    "answer": "Streams in flutter are of two main types: Single Subscription Stream - Allows a single listener to subscribe at a time. - Suitable for sequential data processing, like events or user input. - Commonly used in situations like button clicks or network requests. Broadcast Stream - Allows multiple listeners to subscribe simultaneously. - Ideal for scenarios where the same data needs to be shared across multiple listeners. - Often used for shared events, like a global notification system. Back to top ↑ &nbsp;&nbsp;/&nbsp;&nbsp; 🖌️ Edit answer",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-206",
    "topic": "Node.js",
    "question": "What is a check in SQL?",
    "answer": "A Check Constraint is a rule that identifies valid values Constraint helps to enforce Domain Integrity. If the condition satisfied then it prevents the value from entering into the database. for columns of data. A Check in a Check Constraint is not Syntax: Create table tableName(Column1 dataType Check(expression), Column2, columnN) Example: create table emp(empId int check(empId >10),empName varchar(15)) Output: insert into emp values(8,'d') Output: Dropping the Check Constraint: Firstly, we can determine the name of the constraint using the following command: exec sphelp emp Output:",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-207",
    "topic": "Node.js",
    "question": "How to make remote connection in database?",
    "answer": "The following is the process to make a remote connection in database : Use SQL Server Surface Area Configuration Tool for enabling the remote connection in database. Click on Surface Area Configuration for Services and Connections. Click on SQLEXPRESS/Database Engine/RemoteConnections. Select the radio button: Local and Remote Connections and select ‘Using TCP/IP only’ under Local and Remote Connections. Click on OK button / Apply button",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-208",
    "topic": "Node.js",
    "question": "What are arrow function?",
    "answer": "Arrow functions are a shorthand syntax for writing function expressions in JavaScript. They use the => syntax to separate the function parameters from the function body and have a concise syntax that makes them ideal for writing short, one-liner functions. 160. ### What are first class function? First-class functions means when functions in that language are treated like any other variable. This means that functions can be assigned to variables, passed as arguments to other functions, and returned from functions.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-209",
    "topic": "Node.js",
    "question": "What is the difference between the asterisk () and the plus sign (+) in regular expressions?",
    "answer": "In regular expressions, the asterisk (\\) matches zero or more occurrences of the preceding character, while the plus sign (+) matches one or more occurrences of the preceding character. For example, if we want to match the letter \"a\" followed by zero or more \"b\" characters, we would use the asterisk in our regular expression like this: /ab\\/. This would match strings like \"a\", \"ab\", \"abb\", \"abbb\", and so on. On the other hand, if we want to match the letter \"a\" followed by one or more \"b\" characters, we would use the plus sign in our regular expression like this: /ab+/",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-210",
    "topic": "Node.js",
    "question": "How do you use the pipe (|) operator in regular expressions?",
    "answer": "The pipe (|) operator is used in regular expressions to match either one pattern or another. For example, the regular expression \"cat|dog\" will match either \"cat\" or \"dog\". You can also use parentheses to group patterns together when using the pipe operator. For example, the regular expression \"(red|green|blue) car\" will match \"red car\", \"green car\", or \"blue car\".",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-211",
    "topic": "Node.js",
    "question": "How do you match a specific character that has a special meaning in a regular expression?",
    "answer": "To match a specific character that has a special meaning in a regular expression, you can use an escape character () before the special character. 245. ### How do you use lookarounds in regular expressions? Lookarounds in regular expressions allow you to look ahead or behind the current position in the string without including the matched text in the result. Positive lookaheads (?=) and negative lookaheads (?!), as well as positive lookbehinds (?<=) and negative lookbehinds (?<!), are the four types of lookarounds that can be used.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-212",
    "topic": "Node.js",
    "question": "How do you use lookarounds in regular expressions?",
    "answer": "Lookarounds in regular expressions allow you to look ahead or behind the current position in the string without including the matched text in the result. Positive lookaheads (?=) and negative lookaheads (?!), as well as positive lookbehinds (?<=) and negative lookbehinds (?<!), are the four types of lookarounds that can be used.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-213",
    "topic": "Node.js",
    "question": "What is optional chaining?",
    "answer": "Optional chaining is a js feature by which using the ?. operator, you can directly access nested properties or call nested functions, and if any part of the chain is null or undefined, the expression short-circuits and returns undefined instead of throwing an error. 260. ### What is throttling? Throttling is a technique used in JavaScript to control the rate at which a particular function or code block is executed. It ensures that the function is called at a maximum frequency or a specified interval, preventing it from being invoked too frequently.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-214",
    "topic": "Node.js",
    "question": "What are macros?",
    "answer": "The AOT compiler supports macros in the form of functions or static methods that return an expression in a single return expression. For example, let us take a below macro function, export function wrapInArray(value: T): T[] { return [value]; } You can use it inside metadata as an expression, @NgModule({ declarations: wrapInArray(TypicalComponent) }) export class TypicalModule {} The compiler treats the macro expression as it written directly @NgModule({ declarations: [TypicalComponent] }) export class TypicalModule {} ⬆ Back to Top",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-node-js-215",
    "topic": "Node.js",
    "question": "How to trigger watchers on initialization?",
    "answer": "You can use immediate: true option in order to trigger watchers when the vue instance (or component) is being created. i.e This option will trigger the callback immediately with the current value of the expression. watch: { test: { immediate: true, handler(newVal, oldVal) { console.log(newVal, oldVal) }, }, }, ⬆ Back to Top 218. ### What is the purpose of comments option? When comments option enabled, it will preserve and render HTML comments found in templates. By default, it's value is false. Let's see the action in an example, {{ msg }} export default { comments: true,",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-node-js-216",
    "topic": "Node.js",
    "question": "How important is it to draw a diagram? What if I'm not a visual thinker?",
    "answer": "- A: Visualizing the system architecture through diagrams can be extremely helpful for both you and the interviewer. It provides a clear and concise way to communicate the overall design and the interactions between components. If you're not naturally inclined to draw diagrams, practice beforehand! There are many online tools that can help. However, if you feel a diagram is not the best way to express yourself, communicate clearly why and offer an alternative representation, such as a well-structured verbal explanation.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-217",
    "topic": "Python",
    "question": "What a problem looks like",
    "answer": "problems/vending-machine/ ├── README.md # statement, mermaid class diagram, design rationale, follow-ups ├── meta.json # machine-readable metadata (validated against schema/) ├── src/ │ ├── main.py # runnable demo │ └── ... # the implementation └── tests/ # pytest, asserting the behaviour the design exists to guarantee",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-python-218",
    "topic": "Python",
    "question": "Why is design pattern very important ?",
    "answer": "Design patterns are reusable solutions to common problems in software design. They’re templates designed to help you write code that’s easy to understand and reuse. Most common Cocoa design patterns: Creational: Singleton. Structural: Decorator, Adapter, Facade. Behavioral: Observer, and, Memento",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-219",
    "topic": "Python",
    "question": "57 new problems are added in InterviewQuestions.md. Solutions to be uploaded soon.",
    "answer": "40+ Common code and interview problems solved in Python (it's growing...)",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-220",
    "topic": "Python",
    "question": "How good is the code ?",
    "answer": "It is well tested Consistent formatting (using Black) It can compile in its current state (and there are relatively no issues)",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-python-221",
    "topic": "Python",
    "question": "Explain the ETL (Extract, Transform, Load) process and its stages.",
    "answer": "ETL is a data integration process that extracts data from various sources, transforms it to fit analytical needs, and then loads it into target data warehouses or databases. ETL is often implemented using specialized ETL tools, SQL, or programming languages such as Python or R.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-222",
    "topic": "Python",
    "question": "Difference from Traditional Systems",
    "answer": "- Memory Model: Go follows a \"Share by Communicating\" philosophy. In contrast, traditional systems like Java or C# adopt a shared memory model. - Concurrency Style: Go leverages the \"Do not communicate by sharing memory; instead, share memory by communicating\" paradigm. Languages like Python or Ruby often rely on shared memory for communication.",
    "tags": [
      "performance",
      "architecture"
    ]
  },
  {
    "id": "q-python-223",
    "topic": "Python",
    "question": "What is Pandas in Python and why is it used for data analysis?",
    "answer": "Pandas is a powerful Python library for data analysis. In a nutshell, it's designed to make the manipulation and analysis of structured data intuitive and efficient.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-224",
    "topic": "Python",
    "question": "What are the key features of Python?",
    "answer": "Python is a high-level, multi-paradigm programming language known for its simplicity, readable syntax, and a massive ecosystem. It is widely used in AI, web development, and automation.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-225",
    "topic": "Python",
    "question": "Interpreted and Interactive",
    "answer": "Python is an interpreted language, meaning code is executed line-by-line by the CPython interpreter. This removes the need for a separate compilation step, enabling an interactive workflow through REPLs and notebooks.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-226",
    "topic": "Python",
    "question": "Simple and Readable Syntax",
    "answer": "Python uses significant indentation rather than curly braces or keywords to define code blocks. Its syntax mimics natural English, adhering to the PEP 8 style guide to ensure high maintainability and readability.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-227",
    "topic": "Python",
    "question": "Cross-Platform Compatibility",
    "answer": "Python is platform-independent. Code written on one operating system (e.g., Windows) runs seamlessly on others (e.g., Linux, macOS) without modification, provided the Python interpreter is installed.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-228",
    "topic": "Python",
    "question": "Modular and Scalable",
    "answer": "Python encourages modularity through modules and packages. Developers can organize complex logic into reusable components, which facilitates the development of large-scale applications.",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-python-229",
    "topic": "Python",
    "question": "Massive Library Ecosystem",
    "answer": "The Python Package Index (PyPI) hosts over 500,000 libraries. It provides specialized tools for Data Science (Pandas), Machine Learning (PyTorch, TensorFlow), and Web Development (Django, FastAPI).",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-230",
    "topic": "Python",
    "question": "Versatile Application Domains",
    "answer": "Python is a \"general-purpose\" language. It dominates diverse fields including Artificial Intelligence, scientific computing, backend web development, and DevOps scripting.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-231",
    "topic": "Python",
    "question": "Automatic Memory Management",
    "answer": "Python manages memory automatically using Reference Counting and a Cyclic Garbage Collector. This abstracts low-level memory allocation, preventing common errors like memory leaks and segmentation faults.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-python-232",
    "topic": "Python",
    "question": "Dynamically Typed with Type Hinting",
    "answer": "Python is dynamically typed, meaning variable types are determined at runtime. However, modern Python (3.5+) supports optional type hinting, allowing for better IDE support and static analysis.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-233",
    "topic": "Python",
    "question": "Object-Oriented and Multi-Paradigm",
    "answer": "Everything in Python is an object. It supports Object-Oriented Programming (OOP), functional programming, and procedural styles, allowing developers to choose the best approach for their specific problem.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-234",
    "topic": "Python",
    "question": "Extensible and Integratable",
    "answer": "Python can be extended with modules written in C, C++, or Rust for performance-critical tasks. It acts as a \"glue language,\" easily integrating with existing legacy codebases and low-level APIs.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-python-235",
    "topic": "Python",
    "question": "How is Python executed?",
    "answer": "Python source code is not directly executed by the CPU. Instead, it undergoes a multi-stage process involving both compilation and interpretation.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-236",
    "topic": "Python",
    "question": "What is PEP 8 and why is it important?",
    "answer": "PEP 8 is the official Style Guide for Python Code, established as a Python Enhancement Proposal. It defines the conventions for formatting and structuring Python code to maximize readability, consistency, and maintainability across the global Python ecosystem. As Python creator Guido van Rossum famously stated, \"code is read much more often than it is written.\" Adhering to PEP 8 reduces cognitive load, allowing developers to focus on logic rather than formatting quirks.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-237",
    "topic": "Python",
    "question": "How is memory allocation and garbage collection handled in Python?",
    "answer": "In Python, memory allocation and garbage collection are managed automatically by the runtime, primarily through the Python Memory Manager. This system abstracts complex memory operations, ensuring safety and developer productivity.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-python-238",
    "topic": "Python",
    "question": "What are the built-in data types in Python?",
    "answer": "Python offers numerous built-in data types that provide varying functionalities and utilities for efficient memory management and data manipulation. These are generally categorized by their mutability.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-python-239",
    "topic": "Python",
    "question": "array (array.array)",
    "answer": "Space-efficient storage for basic values (integers, floats) constrained to a single type. It is available via the array module and is more memory-efficient than a list for large datasets of primitive types.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-python-240",
    "topic": "Python",
    "question": "deque (collections.deque)",
    "answer": "A double-ended queue designed for fast $O(1)$ appends and pops from both ends. It is provided by the collections module and is preferred over lists for queue implementations.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-241",
    "topic": "Python",
    "question": "types.SimpleNamespace",
    "answer": "A simple object that allows for the attribution of arbitrary properties via dot notation. It is often used as a lightweight, mutable alternative to an empty class.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-242",
    "topic": "Python",
    "question": "types.FunctionType",
    "answer": "The internal type for user-defined functions. Functions are first-class citizens in Python, meaning they can be passed as arguments, returned from other functions, and assigned attributes.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-243",
    "topic": "Python",
    "question": "Explain the difference between a mutable and immutable object.",
    "answer": "The distinction between mutable and immutable objects is a core principle of Python’s data model, determining how objects are stored, accessed, and modified in memory.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-python-244",
    "topic": "Python",
    "question": "How do you handle exceptions in Python?",
    "answer": "Exception handling in Python is a structured mechanism used to manage runtime errors gracefully, ensuring program stability. It relies on a block-based syntax to catch, process, and recover from exceptions without terminating the execution flow unexpectedly.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-245",
    "topic": "Python",
    "question": "What is the difference between list and tuple?",
    "answer": "Lists and Tuples are ordered sequences in Python, but they differ significantly in mutability, performance, and storage behavior.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-python-246",
    "topic": "Python",
    "question": "When to Use Each",
    "answer": "- Lists are ideal for collections of items that require frequent updates, resizing, or sorting during a program's execution. - Tuples are preferred for fixed data structures, protecting data from accidental modification, and serving as constant keys in mapping types. They are often used for heterogeneous data (records), whereas lists are typical for homogeneous data.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-247",
    "topic": "Python",
    "question": "How do you create a dictionary in Python?",
    "answer": "In Python, a dictionary is an ordered collection of key:value pairs that provides $O(1)$ average time complexity for lookups, insertions, and deletions. They are highly optimized hash tables and serve as one of the most fundamental data structures in the language.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-python-248",
    "topic": "Python",
    "question": "Difference between == and is in Python",
    "answer": "Both the == and is operators in Python facilitate different types of comparisons: - The == operator evaluates value equality. It checks if the data held by two objects is equivalent, typically by invoking the eq method. - The is operator evaluates object identity. It verifies if two variables reference the exact same instance in memory. In Python, every object has a unique identifier assigned by the interpreter. The is operator compares these memory addresses. If $id(a) = id(b)$, then a is b evaluates to True.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-python-249",
    "topic": "Python",
    "question": "How does a Python function work?",
    "answer": "Python functions are first-class objects that encapsulate logic, enable reusability, and manage state through scoping. In Python, a function is an instance of the function class, allowing it to be passed as an argument, returned from other functions, and assigned to variables.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-250",
    "topic": "Python",
    "question": "What is a lambda function, and where would you use it?",
    "answer": "A lambda function is a small, anonymous function defined using the lambda keyword. Unlike standard functions defined with def, lambdas are typically used for short-lived operations where a formal name is unnecessary for the logic being performed.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-251",
    "topic": "Python",
    "question": "Explain args and kwargs in Python.",
    "answer": "In Python, args and kwargs are special syntaxes used in function definitions to handle a variable number of arguments, providing flexibility in how functions are called and how data is passed. args collects extra positional arguments into a tuple, while kwargs collects extra keyword arguments into a dictionary.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-252",
    "topic": "Python",
    "question": "What are decorators in Python?",
    "answer": "In Python, a decorator is a design pattern and a language feature that allows you to dynamically modify or extend the behavior of functions or classes without permanently changing their source code. They are a form of metaprogramming where one function (the wrapper) modifies the behavior of another.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-253",
    "topic": "Python",
    "question": "How can you create a module in Python?",
    "answer": "You can create a Python module through the following standard methods: - Define: Save a Python file with a .py extension. This file acts as a module, where the filename (without the extension) serves as the module name. - Package Initialization: To organize multiple modules into a package, place an init.py file inside the directory. While implicit namespace packages exist, including this file explicitly marks a directory as a regular package and allows for package-level initialization. Next, use the import statement to access the module and its functionality within your project.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-254",
    "topic": "Python",
    "question": "Explain the difference between Python 2 and Python 3.",
    "answer": "Python 2.7 and Python 3.x are distinct versions of the Python programming language. They have some differences in syntax, features, and library support.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-255",
    "topic": "Python",
    "question": "How does Python manage memory?",
    "answer": "Python employs an automatic memory management process, commonly known as garbage collection. This mechanism, combined with dynamic typing and the use of references rather than direct memory addresses, affords Python both advantages and limitations.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-python-256",
    "topic": "Python",
    "question": "Discuss the difference between a list, a tuple, and a set in Python.",
    "answer": "Let's discuss the key features, use-cases, and main points of difference among Python lists, tuples, and sets.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-257",
    "topic": "Python",
    "question": "Describe how a dictionary works in Python. What are keys and values?",
    "answer": "A dictionary in Python is a powerful, built-in data structure for holding unordered key-value pairs. Keys are unique, immutable objects such as strings, numbers, or tuples, while values can be any type of object.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-258",
    "topic": "Python",
    "question": "What is list comprehension and give an example of its use?",
    "answer": "List comprehension is a concise way to create lists in Python. It is especially popular in data science for its readability and efficiency.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-259",
    "topic": "Python",
    "question": "Which is faster",
    "answer": "The ability to use list comprehensions can make operations faster than using traditional loops, as every list comprehension has an equivalent loop (it is a syntactic sugar). If you had to create very long lists in a loop, a list comprehension can offer a performance improvement.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-python-260",
    "topic": "Python",
    "question": "Explain the concept of generators in Python. How do they differ from list comprehensions?",
    "answer": "In Python, generators and list comprehensions are tools for constructing and processing sequences (like lists, tuples, and more). While both produce sequences, they differ in how and when they generate their elements.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-261",
    "topic": "Python",
    "question": "Discuss the usage of args and kwargs in function definitions.",
    "answer": "In Python, args and kwargs are terms used to indicate that a function can accept a variable number of arguments and parameters, respectively.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-262",
    "topic": "Python",
    "question": "How does Python's garbage collection work?",
    "answer": "Python employs automatic garbage collection to manage memory, removing the need for manual memory management.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-python-263",
    "topic": "Python",
    "question": "What are decorators, and can you provide an example of when you'd use one?",
    "answer": "Decorators in Python are higher-order functions that modify or enhance the behavior of other functions. They achieve this by taking a function as input, wrapping it inside another function, and then returning the wrapper. Decorators are often used in web frameworks, such as Flask, for tasks like request authentication and logging. They enable better separation of concerns and modular code design.",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-python-264",
    "topic": "Python",
    "question": "List the Python libraries that are most commonly used in machine learning and their primary purposes.",
    "answer": "Here are some of the most widely used Python libraries for machine learning, along with their primary functions.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-265",
    "topic": "Python",
    "question": "What is NumPy and how is it useful in machine learning?",
    "answer": "NumPy is a fundamental package used in scientific computing and a cornerstone of many Python-based machine learning frameworks. It provides support for the efficient manipulation of multi-dimensional arrays and matrices, offering a range of mathematical functions and tools.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-266",
    "topic": "Python",
    "question": "Give an overview of Pandas and its significance in data manipulation.",
    "answer": "Pandas is a powerful Python library for data manipulation, analysis, and visualization. Its flexibility and wealth of capabilities have made it indispensable across industries.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-267",
    "topic": "Python",
    "question": "Why Use Pandas?",
    "answer": "- Good for Small to Mid-size Data: It's especially helpful when handling datasets that fit in memory. - Rich Data Structures: Offers a variety of structures efficient for specific data handling tasks. - Integrated with Core Data Science Stack: Seamless compatibility with tools like NumPy, SciPy, and scikit-learn. - Comprehensive Functionality: Provides a wide range of methods for almost all data manipulation requirements. - Data Analysis Boost: It uniquely combines data structures and methods to elevate data exploration and analysis workflows.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-python-268",
    "topic": "Python",
    "question": "How does Scikit-learn fit into the machine learning workflow?",
    "answer": "Scikit-learn is a modular, robust, and easy-to-use machine learning library for Python, with a powerful suite of tools tailored to both model training and evaluation.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-269",
    "topic": "Python",
    "question": "Model Evaluation Tools",
    "answer": "- The library boasts a vast array of techniques for assessing model performance. It supports methods tailored to specific problem types, such as classification or regression.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-python-270",
    "topic": "Python",
    "question": "Explain Matplotlib and Seaborn libraries for data visualization.",
    "answer": "Matplotlib is one of the most widely used libraries for data visualization in Python. It provides a wide range of visualizations, and its interface is highly flexible, allowing for fine-grained control. Seaborn, built on top of Matplotlib, is a higher-level library that focuses on visual appeal and offers a variety of high-level plot styles. It simplifies the process of plotting complex data, making it especially useful for exploratory analysis.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-271",
    "topic": "Python",
    "question": "Parameterized Queries (Prepared Statements)",
    "answer": "Description: The industry-standard primary defense. The SQL query structure is sent to the database engine first, and user inputs are sent later as bound parameters. The database driver ensures inputs are treated strictly as data, never as executable code, reducing the risk to $O(1)$ complexity regarding query logic manipulation. - Python (SQLAlchemy 2.0 / psycopg3) Example:",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-272",
    "topic": "Python",
    "question": "What is FindJobs-Agent?",
    "answer": "A full-stack job search assistant that crawls postings from major tech companies, analyzes them with LLMs, parses your resume, and runs AI mock interviews — so you can focus on preparing, not sifting through job boards. The whole loop in one terminal run, offline: 54 sample postings crawled and structured, resume×job skill gaps, and a mock interview with a feedback report. Replay it with python examples/fulljourneydemo.py.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-273",
    "topic": "Python",
    "question": "What are single file components?",
    "answer": "Single File Components are an easy concept to understand. Earlier you might heard about all three parts(HTML, JavaScript and CSS) of your application kept in different components. But Single File Components encapsulate the structure, styling and behaviour into one file. In the beginning, it seems strange to have all three parts in one file, but it actually makes a lot more sense. Let's take an example of Singile File Components Welcome {{ name }}! module.exports = { data: function() { return { name: 'John' } } } h1 { color: #34c779; padding: 3px; }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-274",
    "topic": "Python",
    "question": "What's Housekeeping For?",
    "answer": "This repo already contains a lot of problems, and thus a lot of files and supporting files. It's only going to get bigger, so I'm working on some basic scripts to manage the repo's 'health' and to track its growth. Other things related to the repo but not the questions and exercises directly are in here to. Like the CONTRIBUTING.md file and the LICENSE and the TODO.md.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-python-275",
    "topic": "Python",
    "question": "Why Am I Seeing C++ In Here?",
    "answer": "When you need speed and a deeper understanding of a problem Python can be a too slow and too 'high-level'. Where it's useful I aim to include C++ solutions (or maybe Java, C) to show a solution that is efficient and doesn't hide away some of the complexity.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-276",
    "topic": "Java",
    "question": "What are the differences between Spring & Struts?",
    "answer": "Struts framework supports only developing web applications but spring framework supports various types of application development. In a web application not only have web related aspects, but can have various other things like managing business logic, persisting data, transaction management, messaging, calling external web-services etc. In this case Struts not able to serve these aspects but using Spring we can develop JSE, JEE, Remote(RMI), Persistency, Distributed applications etc. Technical Differences between Spring & Struts: | Spring | Struts |",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-java-277",
    "topic": "Java",
    "question": "Difference between Tight coupling & Loose coupling?",
    "answer": "A situation where an object can be used by another object is termed as coupling. It is the process of collaborating together and working for each other. It simply means that one class requires another class to complete its task. There are 2 types of coupling.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-278",
    "topic": "Java",
    "question": "Loose coupling:",
    "answer": "interface IWorker { void work(); } class SmartWorkerImpl implements IWorker { @Override public void work() { System.out.println(\"Smart Worker working\"); } } class LazyWorkerImpl implements IWorker { @Override public void work() { System.out.println(\"Lazy Worker working\"); } } class Manager { IWorker worker = null; public void setWorker(IWorker worker) { this.worker = worker; } public void manage() { worker.work();",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-279",
    "topic": "Java",
    "question": "What type of dependency injection spring supports?",
    "answer": "Spring supports three ways of dependency injection. - Setter Injection:- Injecting the bean dependencies using the setter methods is called setter injection. The container first calls the no argument constructor and then calls the setters. It means it is mandatory to have no-arg constructor when working with Setter injection. Setter injection can be acheived by tag. Syntax: Examples: setter-injectionmodule - Constructor injection:- Injecting the bean dependencies using the constructor is called constructor injection. Setter injection can be acheived by tag. Syntax:",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-280",
    "topic": "Java",
    "question": "Explain the main idea behind Java and the concept of Write Once, Run Anywhere.",
    "answer": "Java is a high-level, object-oriented programming language designed to be platform-independent. Its core philosophy is encapsulated in the concept of \"Write Once, Run Anywhere\" (WORA), which revolutionized software development by enabling cross-platform compatibility.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-281",
    "topic": "Java",
    "question": "Java Virtual Machine (JVM)",
    "answer": "The JVM acts as an abstraction layer between Java code and the underlying hardware or operating system. It interprets and executes Java bytecode, ensuring consistent behavior across different platforms.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-282",
    "topic": "Java",
    "question": "Standard Library",
    "answer": "Java provides a comprehensive standard library that offers cross-platform capabilities for common tasks like file handling and networking.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-283",
    "topic": "Java",
    "question": "How Java Achieves WORA",
    "answer": "1. Platform Independence: Java bytecode can run on any device with a compatible JVM, from smartphones to supercomputers. 2. JVM Customization: Each operating system has a tailored JVM version, ensuring WORA functionality across diverse environments. 3. Garbage Collection: Automatic memory management reduces the risk of memory leaks and simplifies development across platforms. 4. Security: Java's design excludes direct memory manipulation through pointers, enhancing security across different systems.",
    "tags": [
      "performance",
      "security"
    ]
  },
  {
    "id": "q-java-284",
    "topic": "Java",
    "question": "What are the main features of Java?",
    "answer": "Java's robustness makes it stand out with its powerful features.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-285",
    "topic": "Java",
    "question": "Can you list some non-object-oriented features of Java?",
    "answer": "While Java is primarily an object-oriented language, it also incorporates several non-object-oriented features, allowing for multi-paradigm development:",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-286",
    "topic": "Java",
    "question": "Describe the difference between JDK, JRE, and JVM.",
    "answer": "The JVM (Java Virtual Machine) is the cornerstone of Java's \"write once, run anywhere\" philosophy. It's an abstract computing machine that provides a runtime environment in which Java bytecode can be executed.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-287",
    "topic": "Java",
    "question": "What is the role of the ClassLoader?",
    "answer": "The ClassLoader is a crucial component in Java's runtime environment, responsible for loading class files into memory.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-java-288",
    "topic": "Java",
    "question": "What is the difference between a path and a classpath in Java?",
    "answer": "In Java, the classpath and path serve different purposes:",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-289",
    "topic": "Java",
    "question": "Can you explain the difference between an int and an Integer in Java?",
    "answer": "In Java, int and Integer are two distinct data types with unique properties and use cases.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-290",
    "topic": "Java",
    "question": "What are wrapper classes in Java?",
    "answer": "Wrapper classes in Java allow you to work with primitive data types as objects. They are particularly useful when working with generic collections or when using features that require objects, such as Java Bean properties. Wrapper classes not only provide a way to convert primitives to and from objects but also offer various utility methods specific to each primitive type.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-291",
    "topic": "Java",
    "question": "Utility Methods",
    "answer": "Wrapper classes provide useful utility methods for their respective types. String binaryString = Integer.toBinaryString(42); int maxValue = Integer.MAXVALUE; boolean isDigit = Character.isDigit('7');",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-292",
    "topic": "Java",
    "question": "What does it mean that Java is a statically typed language?",
    "answer": "Java being a statically typed language means that the type of a variable is known at compile time. This characteristic requires explicit declaration of a variable's type before it can be used.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-293",
    "topic": "Java",
    "question": "Is Java a pure object-oriented language? Why or why not?",
    "answer": "Java is not a pure object-oriented language. While it incorporates many object-oriented programming (OOP) principles, it retains some elements from procedural programming.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-294",
    "topic": "Java",
    "question": "What is bytecode in the context of Java?",
    "answer": "Bytecode in Java refers to the compact, platform-independent instructions generated by the Java compiler. It serves as an intermediate representation between Java source code and the Java Virtual Machine (JVM) execution environment.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-295",
    "topic": "Java",
    "question": "How does garbage collection work in Java?",
    "answer": "In Java, the Virtual Machine (JVM) manages memory through automatic garbage collection (GC). This process identifies and reclaims objects that are no longer in use.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-java-296",
    "topic": "Java",
    "question": "What is the purpose of the 'final' keyword?",
    "answer": "In Java, the final keyword offers restrictions and benefits. It primarily maintains the immutability of different entities.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-297",
    "topic": "Java",
    "question": "Can we overload or override static methods in Java?",
    "answer": "Garbage collection in Java is an automatic memory management process that identifies and removes objects that are no longer needed by the program. Here's how it works:",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-java-298",
    "topic": "Java",
    "question": "What is the significance of 'this' keyword in Java?",
    "answer": "The this keyword in Java is a reference to the current instance of a class. It serves several important purposes in object-oriented programming.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-299",
    "topic": "Java",
    "question": "Distinguishing Instance Variables from Local Variables",
    "answer": "When a method or constructor parameter has the same name as an instance variable, this helps to differentiate between them: public class Person { private String name; public Person(String name) { this.name = name; // 'this.name' refers to the instance variable } }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-300",
    "topic": "Java",
    "question": "Invoking Current Class Methods",
    "answer": "this can be used to call other methods within the same class: public class Calculator { public void multiply(int a, int b) { int result = a b; this.display(result); } private void display(int value) { System.out.println(\"Result: \" + value); } }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-301",
    "topic": "Java",
    "question": "Passing Current Object as Parameter",
    "answer": "this can be passed as an argument in method calls when an object needs to pass a reference to itself: public class Employee { public void updateRecord(Database db) { db.update(this); // Passing the current Employee object } }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-302",
    "topic": "Java",
    "question": "Constructor Chaining",
    "answer": "this() can be used to call another constructor in the same class: public class Rectangle { private int width, height; public Rectangle() { this(1, 1); // Calls the two-parameter constructor } public Rectangle(int width, int height) { this.width = width; this.height = height; } }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-303",
    "topic": "Java",
    "question": "Returning Current Class Instance",
    "answer": "this can be returned to allow method chaining: public class StringBuilder { private String str = \"\"; public StringBuilder append(String s) { str += s; return this; // Allows chaining like: new StringBuilder().append(\"A\").append(\"B\") } }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-304",
    "topic": "Java",
    "question": "Architecture And Coding",
    "answer": "- What is MVVM stands for? - What are the differences between MVP and MVVM? - Explain SOLID programming principle? - What is Dependency Inversion? - What is Dependency Injection? - What is repository pattern? - What is android clean architecture?",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-java-305",
    "topic": "Java",
    "question": "Tools and libraries",
    "answer": "- What is android DataBinding? - Explain scope concept in dagger2 - What is marble diagram? - Explain different types of Observables - How to implement instant search with RxJava?",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-go-306",
    "topic": "Go",
    "question": "What is Go and why was it created?",
    "answer": "Go, also referred to as Golang, is an open-source programming language developed by a team at Google and made available to the public in 2009. The design of Go is influenced by its renowned creators: Rob Pike, Ken Thompson, and Robert Griesemer. The language aimed to address specific challenges experienced by Google developers, and also sought to amalgamate the best features from different languages.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-go-307",
    "topic": "Go",
    "question": "Explain the workspace architecture in Go.",
    "answer": "The Go Language uses a simplified workspace architecture that sets it apart from many other programming languages.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-go-308",
    "topic": "Go",
    "question": "How is the GOPATH environment variable used?",
    "answer": "In Go, the GOPATH environmental variable is crucial, serving as the root for both package management and your code repository, and separating your development area from your installed packages.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-go-309",
    "topic": "Go",
    "question": "Describe how packages are structured in a Go program.",
    "answer": "In Go, all code resides within Packages. Each package has its designated role, with clear specifications on visibility, accessibility, and its place in the broader program.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-go-310",
    "topic": "Go",
    "question": "What are slices in Go, and how do they differ from arrays?",
    "answer": "Slices in Go are dynamic, flexible and reference-based data structures that enable efficient list management. They are built on top of arrays and offer features such as automatic resizing and ease of use.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-go-311",
    "topic": "Go",
    "question": "Could you explain what a goroutine is?",
    "answer": "Goroutines are lightweight threads or, more accurately, cooperative concurrent functions in Golang that manage their execution. They allow for independent code segments to execute concurrently.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-go-312",
    "topic": "Go",
    "question": "How does Go handle memory management?",
    "answer": "Go provides automatic memory management through a garbage collector. This ensures developers do not need to manage memory allocation or deallocation explicitly.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-go-313",
    "topic": "Go",
    "question": "Can you list and explain the basic data types in Go?",
    "answer": "Go provides a robust set of data types, addressing various data needs efficiently.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-go-314",
    "topic": "Go",
    "question": "What is the zero value of a variable in Go?",
    "answer": "In Go, variables automatically initialize to their zero values if not explicitly set. Zero values provide sensible defaults, especially when dealing with dynamically allocated variables like pointers.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-go-315",
    "topic": "Go",
    "question": "How do you manage error handling in Go?",
    "answer": "Go has a unique approach to error handling compared to other languages. It uses explicit error return types. This design choice reduces ambiguity about functions that can potentially fail and obviates the need for try-catch blocks. The Go philosophy stresses transparency and early reporting of issues. To adhere to these principles, the language offers a set of built-in tools and techniques.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-go-316",
    "topic": "Go",
    "question": "Can you convert between different data types in Go? How?",
    "answer": "Go offers a rich set of methods for efficiently managing and transforming data types.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-go-317",
    "topic": "Go",
    "question": "What is a channel in Go, and when would you use one?",
    "answer": "In Go, a channel is a way to safely and efficiently share data among Goroutines. Its primary design goal is to streamline concurrent communication and data transfer.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-go-318",
    "topic": "Go",
    "question": "Explain concurrency in Go and how it compares to parallelism.",
    "answer": "Goroutines enable concurrent execution in Go by running functions independently. Tasks are handled through a unicast communication model where a sender can reach multiple receivers, commonly through channels. This stands in contrast to a bidirectional approach characteristic of shared memory systems.",
    "tags": [
      "performance",
      "architecture"
    ]
  },
  {
    "id": "q-go-319",
    "topic": "Go",
    "question": "What does the range keyword do?",
    "answer": "In Go, range is a versatile loop construct that simplifies iterating over data structures like arrays, slices, maps, strings, and channels. It efficiently handles different data types and abstracts away the underlying indexing or iteration mechanisms.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-go-320",
    "topic": "Go",
    "question": "Why Algo Sensei?",
    "answer": "Traditional LeetCode practice has a problem: Copy-pasting solutions doesn't build problem-solving skills. Algo Sensei is different: - ✅ Teaches patterns instead of memorizing solutions - ✅ Progressive hints that guide you without spoiling - ✅ Real interview simulation with feedback - ✅ Intelligent mode detection - adapts to what you need - ✅ Pattern recognition training - see problems like pros do",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-go-321",
    "topic": "Go",
    "question": "Do I need Claude Code to use this?",
    "answer": "A: Algo Sensei works best with Claude Code, but you can use individual mode files as prompts in Claude.ai.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-go-322",
    "topic": "Go",
    "question": "Is this better than LeetCode Premium?",
    "answer": "A: Different purposes. Algo Sensei teaches you HOW to think. LeetCode Premium gives you solutions. Use both!",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-go-323",
    "topic": "Go",
    "question": "Can this help me pass FAANG interviews?",
    "answer": "A: Yes! Interview Mode simulates real interview conditions, and Pattern Mapper teaches the frameworks used in top companies.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-go-324",
    "topic": "Go",
    "question": "I'm a complete beginner. Is this for me?",
    "answer": "A: Absolutely! Tutor Mode is designed for beginners. Algo Sensei adapts to your level.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-go-325",
    "topic": "Go",
    "question": "Clone your forked repository (replace 'yourusername' with your GitHub username)",
    "answer": "git clone https://github.com/yourusername/go-interview-practice.git cd go-interview-practice",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-go-326",
    "topic": "Go",
    "question": "Clone your fork and set up a challenge workspace",
    "answer": "git clone https://github.com/yourusername/go-interview-practice.git cd go-interview-practice ./createsubmission.sh 1 # For challenge #1",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-go-327",
    "topic": "Go",
    "question": "Explore Challenges",
    "answer": "Browse challenges through the web UI or in the code repository. Each challenge includes: - Detailed problem statement - Function signature to implement - Comprehensive test cases - Learning resources",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-go-328",
    "topic": "Go",
    "question": "Implement Your Solution",
    "answer": "Write code that solves the challenge requirements and passes all test cases.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-go-329",
    "topic": "Go",
    "question": "Submit & Compare",
    "answer": "Submit your passing solution to be added to the scoreboard: - Your solution is automatically tested and scored - Execution time and resource usage are recorded - Your solution is ranked among other submissions - Access detailed performance metrics to optimize further",
    "tags": [
      "performance",
      "testing"
    ]
  },
  {
    "id": "q-go-330",
    "topic": "Go",
    "question": "Learn & Progress",
    "answer": "Review the learning materials to deepen your understanding of the concepts used.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-331",
    "topic": "SQL & Data",
    "question": "Explain the difference between OLTP and OLAP systems.",
    "answer": "OLTP (Online Transaction Processing) and OLAP (Online Analytical Processing) are two paradigms that cater to distinct data-handling needs.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-332",
    "topic": "SQL & Data",
    "question": "What is a data warehouse and its key characteristics?",
    "answer": "A data warehouse is a centralized repository that allows for data consolidation from a variety of sources. It is specifically designed for query and analysis rather than transaction processing. Let's look at its key characteristics.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-333",
    "topic": "SQL & Data",
    "question": "Quantitative Finance & Risk",
    "answer": "Algorithmic Alpha Generation: Processing unstructured \"alternative data\" (satellite imagery reports, social sentiment) to inform HFT (High-Frequency Trading) strategies. Real-time Fraud Detection: Identifying anomalous transaction sequences that deviate from the $n$-dimensional \"normal\" latent space of user behavior.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-334",
    "topic": "SQL & Data",
    "question": "What are Pandas indexes, and how are they used?",
    "answer": "In Pandas, an index serves as a unique identifier for each row in a DataFrame, making it powerful for data retrieval, alignment, and manipulation.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-335",
    "topic": "SQL & Data",
    "question": "WHERE vs. HAVING: Architectural Distinction",
    "answer": "The fundamental difference lies in the logical order of operations within the SQL execution pipeline. While both clauses filter rows, they function at distinct stages of the query lifecycle.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-336",
    "topic": "SQL & Data",
    "question": "Secure Stored Procedures",
    "answer": "Description: Stored procedures isolate data access logic. However, they only prevent SQLi if the procedure body itself uses parameterized logic. Constructing strings dynamically inside a procedure remains vulnerable. - Implementation Note: In 2026, favor Application-Level ORMs (e.g., Prisma, SQLAlchemy, or Entity Framework) over Stored Procedures for business logic to maintain Type Safety and database portability. ---",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-337",
    "topic": "SQL & Data",
    "question": "Principle of Least Privilege (PoLP)",
    "answer": "Description: A critical 2026 infrastructure requirement. The database user account assigned to the web application should possess only the minimum permissions necessary. - Requirements: - The application account should never run as dbowner or superuser. - Use Role-Based Access Control (RBAC) to restrict access to sensitive tables (e.g., auditlogs or sysusers). - Drop permissions for DROP, TRUNCATE, or GRANT operations. ---",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-338",
    "topic": "SQL & Data",
    "question": "ORM Security vs. Code Filtering",
    "answer": "Deprecated/Caution: Manual Code Filtering (sanitization/escaping via regex) is now considered an anti-pattern. It is error-prone, difficult to maintain, and often bypassable via encoding tricks (e.g., Unicode normalization). - 2026 Standard: Utilize modern Object-Relational Mappers (ORMs). High-quality ORMs default to parameterized queries and provide an abstraction layer that makes it difficult to accidentally write raw, insecure SQL. If custom raw queries are necessary, use strictly enforced parameter binding APIs only.",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-sql-data-339",
    "topic": "SQL & Data",
    "question": "What is a time series?",
    "answer": "A time series is a sequence of data points indexed in time order. It is a fundamental model for many real-world, dynamic phenomena because they provide insights into historical patterns and can be leveraged to make predictions about the future. Time series data exists in many domains, such as finance, economics, weather monitoring, and signal processing. Its unique properties and characteristics require specialized techniques for effective analysis.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-340",
    "topic": "SQL & Data",
    "question": "How do you deal with sparse data?",
    "answer": "We could take a look at L1 regularization since it best fits to the sparse data and do feature selection. If linear relationship - linear regression either - svm. Also it would be nice to use one-hot-encoding or bag-of-words. A one hot encoding is a representation of categorical variables as binary vectors. This first requires that the categorical values be mapped to integer values. Then, each integer value is represented as a binary vector that is all zero values except the index of the integer, which is marked with a 1.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-341",
    "topic": "SQL & Data",
    "question": "What is a database?",
    "answer": "A database is described as an organized way of collection of DATA. It is the collection of schemes, tables, queries, reports, views and other objects. Syntax: CREATEDATABASEDatabaseName Example: CREATEDATABASE Student or you can Create Database through Design/ Wizard form by right clicking on DATABASE option-New Database.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-342",
    "topic": "SQL & Data",
    "question": "What is PL/SQL?",
    "answer": "PL/SQL Control Statements in Oracle. Control Statements, • Control statements are very important in PL/SQL. • Control Statements are elements in a program that control the flow of program execution. • The syntax of control statements are similar to regular English and are very similar to choices that we make every day. • Branching statements are as follows: o If statement o If - THEN - ELSE o Nested IF o Branching with logical connectivity o While o For Loop",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-343",
    "topic": "SQL & Data",
    "question": "What is the difference between SQL and PL/SQL?",
    "answer": "SQL: It is referred as Structured Query Language. • Only simple IF / Else statements. • Through SQL you can interact with database through ADO.NET • In SQL you can execute a line of code • It can run only on windows PL/SQL: It is referred as Procedure Language / Structure Query Language: • In PL/SQL you can execute a block of code not a single line of code. • Deep control statements • It can run in UNIX also. • PL/SQL language includes object oriented programming techniques such as encapsulation, function overloading, and information hiding (all but inheritance).",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-344",
    "topic": "SQL & Data",
    "question": "What is a database table?",
    "answer": "Database table: Table contains records in the form of rows and columns. A permanent table is created in the database you specify and remains in the database permanently, until you delete it. Syntax: 1. Create table TableName (ID INT, NAME VARCHAR(30) ) 2. Drop syntax: drop table TableName 3. Select Syntax: Select from TableName",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-345",
    "topic": "SQL & Data",
    "question": "What is a query?",
    "answer": "A DB query is a code written in order to get the information back from the database. Query can be designed in such a way that it matched with our expectation of the result set. Simply, a question to the Database.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-346",
    "topic": "SQL & Data",
    "question": "What is subquery?",
    "answer": "A subquery is a query within another query. The outer query is called as main query, and inner query is called subquery. SubQuery is always executed first, and the result of subquery is passed on to the main query.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-347",
    "topic": "SQL & Data",
    "question": "What are the types of subquery?",
    "answer": "There are two types of subquery – Correlated and Non-Correlated. A correlated subquery cannot be considered as independent query, but it can refer the column in a table listed in the FROM the list of the main query. A Non-Correlated sub query can be considered as independent query and the output of subquery are substituted in the main query.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-348",
    "topic": "SQL & Data",
    "question": "How to create a table in SQL?",
    "answer": "SQL provides an organized way for table creation. Syntax: Create table TableName (columnName1 datatype, columnName2 datatype ) The following is an example of creating a simple table- create table Info (Name varchar(20), BirthDate date,Phone nvarchar(12), City varchar(20))",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-349",
    "topic": "SQL & Data",
    "question": "What are tables and Fields?",
    "answer": "A table is a set of data that are organized in a model with Columns and Rows. Columns can be categorized as vertical, and Rows are horizontal. A table has specified number of column called fields but can have any number of rows which is called record.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-350",
    "topic": "SQL & Data",
    "question": "How to delete a table in SQL Server?",
    "answer": "Delete Data Record from Database Table and deleting an existing table by the following method: Syntax: To delete all table records of a table: Delete TableName DELETE info",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-351",
    "topic": "SQL & Data",
    "question": "How to update a database table using SQL?",
    "answer": "To update an existing Table we use SQL Command UPDATE: It will update the records as per user defined query/need. Syntax: Update TableName SET ColumnName = NewData where Condition Update info Set City = 'Baroda' where id = 2",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-352",
    "topic": "SQL & Data",
    "question": "What is a primary key of a database?",
    "answer": "Primary key:- A table column with this constraint is called the key column for the table. This constraint helps the table to make sure that the value is not repeated and also that there are no null entries. Now this column does not allow null values and duplicate values. You can try inserting values to violate these conditions and see what happens. A table can have only one Primary key. Multiple columns can participate on the primary key. Example:",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-353",
    "topic": "SQL & Data",
    "question": "What is a unique key?",
    "answer": "A Unique key constraint uniquely identified each record in the database. This provides uniqueness for the column or set of columns. A Primary key constraint has automatic unique constraint defined on it. But not, in the case of Unique Key. There can be many unique constraint defined per table, but only one Primary key constraint defined per table.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-354",
    "topic": "SQL & Data",
    "question": "What is database normalization?",
    "answer": "Database normalization is the process of organizing the fields and tables of a relational database to minimize redundancy and dependency. Normalization usually involves dividing large tables into smaller (and less redundant) tables and defining relationships among them. Normalization is a bottom-up technique for database design. The evolution of Normalization theories is illustrated below: • First Normal Form (1NF) • Second Normal Form (2NF) • Third Normal Form (3NF) • Boyce-Codd Normal Form (BCNF) • 4th Normal Form • 5th Normal Form • 6th Normal Form",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-355",
    "topic": "SQL & Data",
    "question": "What is Denormalization.",
    "answer": "DeNormalization is a technique used to access the data from higher to lower normal forms of database. It is also process of introducing redundancy into a table by incorporating data from the related tables.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-356",
    "topic": "SQL & Data",
    "question": "What is a stored procedure?",
    "answer": "A Stored Procedure is a collection or a group of T-SQL statements. Stored Procedures are a precompiled set of one or more statements that are stored together in the database. They reduce the network load because of the precompilation. We can create a Stored Procedure using the \"Create proc\" statement.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-357",
    "topic": "SQL & Data",
    "question": "Why we use Stored Procedure",
    "answer": "There are several reasons to use a Stored Procedure. They are a network load reducer and decrease execution time because they are precompiled. The most important use of a Stored Procedure is for security purposes. They can restrict SQL Injection. We can avoid SQL injection by use of a Stored Procedure.",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-sql-data-358",
    "topic": "SQL & Data",
    "question": "How to create a Stored Procedure",
    "answer": "CREATE PROCEDURE spEmployee AS BEGIN SELECT EmployeeId, Name, Gender, DepartmentName FROM tblEmployees INNER JOIN tblDepartments ON tblEmployees.EmployeeDepartmentId = tblDepartments.DepartmentId END Advantages of using a Stored Procedure in SQL Server • It is very easy to maintain a Stored Procedure and they are re-usable. • The Stored Procedure retains the state of the execution plans. • Stored Procedures can be encrypted and that also prevents SQL Injection Attacks",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-359",
    "topic": "SQL & Data",
    "question": "What is the difference between Primary key and unique key?",
    "answer": "Primary key does not allow the null values but unique key allows one null value. Primary key will create clustered index on column but unique key will create non-clustered index by default.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-360",
    "topic": "SQL & Data",
    "question": "What is the use of OLAP?",
    "answer": "OLAP is useful because it provides fast and interactive access to aggregated data and the ability to drill down to detail.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-361",
    "topic": "SQL & Data",
    "question": "What is a measure in OLAP?",
    "answer": "Measures are the key performance indicator that you want to evaluate. To determine which of the numbers in the data might be measures. A rule of thumb is if a number makes sense when it is aggregated, then it is a measure.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-sql-data-362",
    "topic": "SQL & Data",
    "question": "What are dimensions in OLAP?",
    "answer": "Dimensions are the categories of data analysis. For example, in a revenue report by month by sales region, the two dimensions needed are time and sales region. Typical dimensions include product, time, and region.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-363",
    "topic": "SQL & Data",
    "question": "What are levels in dimensions?",
    "answer": "Dimensions are arranged in hierarchical levels, with unique positions within each level. For example, a time dimension may have four levels, such as Year, Quarter, Month, and Day. Or the dimension might have only three levels, for example, Year, Week, and Day. The values within the levels are called members. For example, the years 2002 and 2003 are members of the level Year in the Time dimension.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-364",
    "topic": "SQL & Data",
    "question": "What are fact tables and dimension tables in OLAP?",
    "answer": "Twist: - Can you explain the star schema for OLAP? The dimensions and measures are physically represented by a star schema. Dimension tables revolve around fact table. A fact table contains a column for each measure as well as a column for each dimension. Each dimension column has a foreign -key relationship to the related dimension table, and the dimension columns taken together are the key to the fact table.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-365",
    "topic": "SQL & Data",
    "question": "What is the difference between DELETE TABLE and TRUNCATE TABLE commands?",
    "answer": "DELETE TABLE syntax logs the deletes thus make the delete operation slow. TRUNCATE table does not log any information but it logs information about deallocation of data page of the table so TRUNCATE table is faster as compared to delete table. DELETE table can have criteria while TRUNCATE cannot. TRUNCATE table does not invoke trigger. I had mentioned that TRUNCATE table can not be rolled back while delete can be.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-366",
    "topic": "SQL & Data",
    "question": "What is LOCK escalation?",
    "answer": "Lock escalation is the process of converting of low-level locks (like rowlocks, page locks) into higher -level locks (like table locks). Every lock is a memory structure too many locks would mean, more memory being occupied by locks. To prevent this from happening, SQL Server escalates the many fine-grain locks to fewer coarse-grain locks. Lock escalation threshold was definable in SQL Server 6.5, but from SQL Server 7.0 onwards SQL Server dynamically manages it.",
    "tags": [
      "performance",
      "architecture"
    ]
  },
  {
    "id": "q-sql-data-367",
    "topic": "SQL & Data",
    "question": "What are the different ways of moving data between databases in SQL Server?",
    "answer": "There are lots of options available; you have to choose your option depending upon your requirements. Some of the options you have are BACKUP/RESTORE, detaching and attaching databases, replication, DTS, BCP, logshipping, INSERT...SELECT, SELECT...INTO, creating INSERT scripts to generate data.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-368",
    "topic": "SQL & Data",
    "question": "What is the difference between a HAVING CLAUSE and a WHERE CLAUSE?",
    "answer": "You can use Having Clause with the GROUP BY function in a query and WHERE Clause is applied to each row before, they are part of the GROUP BY function in a query.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-369",
    "topic": "SQL & Data",
    "question": "What is the difference between UNION and UNION ALL SQL syntax?",
    "answer": "UNION SQL syntax is used to select information from two tables. But it selects only distinct records from both the table, while UNION ALL selects all records from both the tables. Note :- Selected records should have same datatype or else the syntax will not work.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-370",
    "topic": "SQL & Data",
    "question": "What is the difference between Stored Procedure (SP) and User Defined Function (UDF)?",
    "answer": "Following are some major differences between a stored procedure and user defined functions:- You can not change any data using UDF while you can do everything with a stored procedure. UDF cannot be used in XML FOR clause but SP’s can be used. UDF does not return output parameters while SP’s return output parameters. If there is an error in UDF its stops executing. But in SP’s it just ignores the error and moves to the next statement. UDF cannot make permanent changes to server environments while SP’s can change some of the server environment.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-371",
    "topic": "SQL & Data",
    "question": "What is the purpose of Replication?",
    "answer": "Replication is way of keeping data synchronized in multiple databases. SQL server replication has two important aspects publisher and subscriber. Publisher Database server that makes data available for replication is known as Publisher. Subscriber Database Servers that get data from the publishers is called as Subscribers.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-372",
    "topic": "SQL & Data",
    "question": "What is BCP utility in SQL SERVER?",
    "answer": "BCP (Bulk Copy Program) is a command line utility by which you can import and export large amounts of data in and out of SQL SERVER database.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-373",
    "topic": "SQL & Data",
    "question": "What is a Cursor?",
    "answer": "A database Cursor is a control which enables traversal over the rows or records in the table. This can be viewed as a pointer to one row in a set of rows. Cursor is very much useful for traversing such as retrieval, addition and removal of database records.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-374",
    "topic": "SQL & Data",
    "question": "What are local and global variables and their differences?",
    "answer": "Local variables are the variables which can be used or exist inside the function. They are not known to the other functions and those variables cannot be referred or used. Variables can be created whenever that function is called. Global variables are the variables which can be used or exist throughout the program. Same variable declared in global cannot be used in functions. Global variables cannot be created whenever that function is called.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-375",
    "topic": "SQL & Data",
    "question": "What are query types in a database?",
    "answer": "Types of Commands in SQL ServerThese commands are categorized into: • DDL • DCL • DML • TCL Let's see these categories one-by-one. DDL - Data Definition Language (DDL) commands are the category responsible for dealing with the structure of objects. I mean that with these commands we can modify our object/entity structure. For example if there's one table and you want to modify the structure of that table, you can use DDL commands. The following are the commands in this category: Command Description Create Used to create objects. Alter Used to modify created object.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-376",
    "topic": "SQL & Data",
    "question": "What is Self-Join?",
    "answer": "Self-join is set to be query used to compare to itself. This is used to compare values in a column with other values in the same column in the same table. ALIAS ES can be used for the same table comparison.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-377",
    "topic": "SQL & Data",
    "question": "What is Cross-Join?",
    "answer": "Cross join defines as Cartesian product where number of rows in the first table multiplied by number of rows in the second table. If suppose, WHERE clause is used in cross join then the query will work like an INNER JOIN.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-378",
    "topic": "SQL & Data",
    "question": "What is user defined functions?",
    "answer": "User defined functions are the functions written to use that logic whenever required. It is not necessary to write the same logic several times. Instead, function can be called or executed whenever needed.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-379",
    "topic": "SQL & Data",
    "question": "What are all types of user defined functions?",
    "answer": "Three types of user defined functions are. l Scalar Functions. l Inline Table valued functions. l Multi statement valued functions. Scalar returns unit, variant defined the return clause. Other two types return table as a return.",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-sql-data-380",
    "topic": "SQL & Data",
    "question": "What is collation?",
    "answer": "Collation is defined as set of rules that determine how character data can be sorted and compared. This can be used to compare A and, other language characters and also depends on the width of the characters. ASCII value can be used to compare these character data.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-381",
    "topic": "SQL & Data",
    "question": "What are all different types of collation sensitivity?",
    "answer": "Following are different types of collation sensitivity -. l Case Sensitivity – A and a and B and b. l Accent Sensitivity. l Kana Sensitivity – Japanese Kana characters. l Width Sensitivity – Single byte character and double byte character.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-382",
    "topic": "SQL & Data",
    "question": "What is Online Transaction Processing (OLTP)?",
    "answer": "Online Transaction Processing or OLTP manages transaction based applications which can be used for data entry and easy retrieval processing of data. This processing makes like easier on simplicity and efficiency. It is faster, more accurate results and expenses with respect to OTLP. Example – Bank Transactions on a daily basis.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-383",
    "topic": "SQL & Data",
    "question": "What is CLAUSE?",
    "answer": "SQL clause is defined to limit the result set by providing condition to the query. This usually filters some rows from the whole set of records. Example – Query that has WHERE condition Query that has HAVING condition.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-384",
    "topic": "SQL & Data",
    "question": "What is recursive stored procedure?",
    "answer": "A stored procedure which calls by itself until it reaches some boundary condition. This recursive function or procedure helps programmers to use the same set of code any number of times.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-385",
    "topic": "SQL & Data",
    "question": "What is Union, minus and Interact commands?",
    "answer": "UNION operator is used to combine the results of two tables, and it eliminates duplicate rows from the tables. MINUS operator is used to return rows from the first query but not from the second query. Matching records of first and second query and other rows from the first query will be displayed as a result set. INTERSECT operator is used to return rows returned by both the queries.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-386",
    "topic": "SQL & Data",
    "question": "What is an ALIAS command?",
    "answer": "ALIAS name can be given to a table or column. This alias name can be referred in WHERE clause to identify the table or column. Example-. 1 Select st.StudentID, Ex.Result from student st, Exam as Ex where st.studentID = Ex. StudentID Here, st refers to alias name for student table and Ex refers to alias name for exam table.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-387",
    "topic": "SQL & Data",
    "question": "What is the difference between TRUNCATE and DROP statements?",
    "answer": "TRUNCATE removes all the rows from the table, and it cannot be rolled back. DROP command removes a table from the database and operation cannot be rolled back.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-388",
    "topic": "SQL & Data",
    "question": "What are aggregate and scalar functions?",
    "answer": "Aggregate functions are used to evaluate mathematical calculation and return single values. This can be calculated from the columns in a table. Scalar functions return a single value based on the input value. Example -. Aggregate – max(), count – Calculated with respect to numeric. Scalar – UCASE(), NOW() – Calculated with respect to strings.",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-sql-data-389",
    "topic": "SQL & Data",
    "question": "What is an inner join in SQL?",
    "answer": "Inner or Self Join - This Join returns a row when there is at least one match in both tables. Let’s see an example: Select From Table1 Inner Join Table2 on table1.ID = table2.ID The following query displays the Employee Name and the corresponding Manager Name within the employee table. SELECT e1.EmployeeName EmployeeName, e2.EmployeeName ManagerName FROM employee e1(nolock), employee e2(nolock) WHERE e1.EmployeeID = e2.ManagerID Output: An inner join (sometimes called a \"simple join\") is a join of two or more tables that returns only those rows that satisfy the join condition.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-390",
    "topic": "SQL & Data",
    "question": "What is full join in SQL?",
    "answer": "A Full Outer Join fetches all records of both tables; where the record does not match, it returns Null. select e.empId, e.empName, e1.empAdd from emp e full outer join empadd e1 on e.empI d = e1.empId Output: Or Full Outer Join - FULL OUTER JOIN: This JOIN is a combination of both. All records from both LeftTable and RightTable are in the result set and matched when they can be on the JoinCondition; when no record is found in the opposite table, NULL values are used for the columns. Select From Table1 Full Outer Join on table1.ID = table2.ID",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-391",
    "topic": "SQL & Data",
    "question": "How to create a database using SQL?",
    "answer": "A database is described as an organized way of collection of DATA. It is the collection of schemes, tables, queries, reports, views and other objects. Syntax: CREATEDATABASEDatabaseName Example: CREATEDATABASE Student Or you can create Database through Design/ Wizard form by right clicking on DATABASE option - New Database",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-392",
    "topic": "SQL & Data",
    "question": "What is data Integrity?",
    "answer": "Data Integrity defines the accuracy and consistency of data stored in a database. It can also define integrity constraints to enforce business rules on the data when it is entered into the application or database.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-393",
    "topic": "SQL & Data",
    "question": "What is Auto Increment?",
    "answer": "Auto increment keyword allows the user to create a unique number to be generated when a new record is inserted into the table. AUTO INCREMENT keyword can be used in Oracle and IDENTITY keyword can be used in SQL SERVER. Mostly this keyword can be used whenever PRIMARY KEY is used.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-394",
    "topic": "SQL & Data",
    "question": "What is the difference between Cluster and Non-Cluster Index?",
    "answer": "Clustered index is used for easy retrieval of data from the database by altering the way that the records are stored. Database sorts out rows by the column which is set to be clustered index. A nonclustered index does not alter the way it was stored but creates a complete separate object within the table. It point back to the original table rows after searching.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-395",
    "topic": "SQL & Data",
    "question": "What is Datawarehouse?",
    "answer": "Datawarehouse is a central repository of data from multiple sources of information. Those data are consolidated, transformed and made available for the mining and online processing. Warehouse data have a subset of data called Data Marts.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-396",
    "topic": "SQL & Data",
    "question": "How to alter a table schema in SQL Server?",
    "answer": "Altering Tables: It is used to modify an existing table. CREATE TABLE Stock ( ID SMALLINT ); mysql > ALTER TABLE Stock - > ADD COLUMN Quantity SMALLINT UNSIGNED NOT NULL, - > MODIFY ID SMALLINT UNSIGNED NOT NULL, - > ADD PRIMARY KEY(ID); mysql > Describe Stock; mysql > ALTER TABLE Stock; Example in Sql:",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-397",
    "topic": "SQL & Data",
    "question": "How to get unique records in SQL?",
    "answer": "Unique Constraint: It ensures that each row for a column must have a unique value. It is like a Primary key but it can accept only one null value. In a table one or more column can contain a Unique Constraint. Column Level: Syntax:Create Table TableName (ColumnName Datatype Constraint ConstraintName Unique) Example:Create Table MYTab(IId int constraint UniqueCons Unique ,Name nvarchar(50))",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-398",
    "topic": "SQL & Data",
    "question": "What is a candidate key?",
    "answer": "A table may have more than one combination of columns that could uniquely identify the rows in a table; each combination is a candidate key. During database design you can pick up one of the candidate keys to be the primary key. For example, in the supplier table supplierid and suppliername can be candidate key but you will only pick up supplierid as the primary key.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-399",
    "topic": "SQL & Data",
    "question": "What it is Single query or command execution Full programming language",
    "answer": "What it comprises Data source for reports, web pages Application language to build, format and display report, web pages Characteristic Declarative in nature Procedural in nature Used for Manipulating data Creating applications",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-400",
    "topic": "SQL & Data",
    "question": "What is BCP? When is it used?",
    "answer": "It is a tool used to duplicate enormous quantity of information from tables and views. It does not facsimile the structures same as foundation to target. BULK INSERT command helps to bring in a data folder into a record, table or view in a user-specific arrangement.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-401",
    "topic": "SQL & Data",
    "question": "When is the UPDATESTATISTICS command used?",
    "answer": "This command is used, ones the processing of large data is done. When we delete a large number of files, alteration or reproduction takes place in the tables, to be concerned of these changes we need to restructure the indexes This is done UPDATESTATISTICS.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-sql-data-402",
    "topic": "SQL & Data",
    "question": "When is the Explicit Cursor Used ?",
    "answer": "If the developer needs to perform the row by row operations for the result set containing more than one row, then he unambiguously declares a pointer with a name. They are managed by OPEN, FETCH and CLOSE.%FOUND, %NOFOUND, %ROWCOUNT and %ISOPEN characteristics are used in all types of pointers.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-403",
    "topic": "SQL & Data",
    "question": "What are the three ways that Dynamic SQL can be executed?",
    "answer": "l Writing a query with parameters. l Using EXEC. l Using spexecutesql.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-404",
    "topic": "SQL & Data",
    "question": "What is the native system stored procedure to execute a command against all databases?",
    "answer": "l The spMSforeachdb system stored procedure accepts the @Command parameter which can be exetecuted against all databases. The ‘?’ is used as a placeholder for the database name to execute the same command. l The alternative is to use a cursor to process specific commands against each database.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-405",
    "topic": "SQL & Data",
    "question": "How can a SQL Developer prevent T-SQL code from running on a production SQL Server?",
    "answer": "Use IF logic with the @@SERVERNAME function compared against a string with a RETURN command before any other logic.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-406",
    "topic": "SQL & Data",
    "question": "How do you maintain database integrity where deletions from one table will automatically cause deletions in another table?",
    "answer": "You can create a trigger that will automatically delete elements in the second table when elements from the first table are removed.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-407",
    "topic": "SQL & Data",
    "question": "What is the SQL CASE statement used for? Explain with an example?",
    "answer": "It allows you to embed an if-else like clause in the SELECT clause. SELECT EmployeeName, CASE Location WHEN 'alex' THEN Bonus 2 WHEN 'robin' THEN Bonus , 5 ELSE Bonus END \"New Bonus\" FROM Intellipaatemployee;",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-408",
    "topic": "SQL & Data",
    "question": "What are the risks of storing a hibernate-managed object in cache? How do you overcome the problems?",
    "answer": "The primary problem here is that the object will outlive the session it came from. Lazily loaded properties won’t get loaded if needed later. To overcome the problem, perform cache on the object’s id and class and then retrieve the object in the current session context.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-409",
    "topic": "SQL & Data",
    "question": "What command using Query Analyzer will give you the version of SQL server and operating system?",
    "answer": "SELECT SERVERPROPERTY (‘productversion’), SERVERPROPERTY (‘productlevel’), SERVERPROPERTY (‘edition’).",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-410",
    "topic": "SQL & Data",
    "question": "What does it mean to have QUOTEDIDENTIFIER ON? What are the implications of having it OFF?",
    "answer": "When SET QUOTEDIDENTIFIER is ON, identifiers can be delimited by double quotation marks, and literals must be delimited by single quotation marks. When SET QUOTEDIDENTIFIER is OFF, identifiers cannot be quoted and must follow all Transact-SQL rules for identifiers.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-411",
    "topic": "SQL & Data",
    "question": "How to get @@ERROR and @@ROWCOUNT at the same time?",
    "answer": "If @@Rowcount is checked after Error checking statement then it will have 0 as the value of @@Recordcount as it would have been reset. And if @@Recordcount is checked before the error-checking statement then @@Error would get reset. To get @@error and @@rowcount at the same time do both in same statement and store them in local variable. SELECT @RC = @@ROWCOUNT, @ER = @@ERROR",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-412",
    "topic": "SQL & Data",
    "question": "What is de-normalization in SQL database administration? Give examples",
    "answer": "De-normalization is used to optimize the readability and performance of the database by adding redundant data. It covers the inefficiencies in the relational database software. De-normalization logical data design tend to improve the query responses by creating rules in the database which are called as constraints. Examples include the following : l Materialized views for implementation purpose such as : l Storing the count of “many” objects in one-to-many relationship. l Linking attribute of one relation with other relations. l To improve the performance and scalability of web applications.",
    "tags": [
      "performance",
      "architecture"
    ]
  },
  {
    "id": "q-sql-data-413",
    "topic": "SQL & Data",
    "question": "Can you explain about buffer cash and log Cache in SQL Server?",
    "answer": "l Buffer Cache : Buffer cache is a memory pool in which data pages are read. The ideal performance of the buffer cache is indicated as: 95% indicates that pages that were found in the memory are 95% of time. Another 5% is need physical disk access. If the value falls below 90%, it is the indication of more physical memory requirement on the server. l Log Caches : Log cache is a memory pool used to read and write the log pages. A set of cache pages are available in each log cache. The synchronization is reduced between log and data buffers by managing log cache separately from the buffer cache.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-sql-data-414",
    "topic": "SQL & Data",
    "question": "How to store pdf file in SQL Server?",
    "answer": "Create a column as type ‘blob’ in a table. Read the content of the file and save in ‘blob’ type column in a table. Or Store them in a folder and establish the pointer to link them in the database.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-415",
    "topic": "SQL & Data",
    "question": "What is Failover clustering overview?",
    "answer": "Failover clustering is mainly used for data availability. Typically, in a failover cluster, there are two machines. l One machine provides the basic services and the second is available to run the service when the primary system fails. l The primary system is monitored periodically to check if it works. This monitoring may be performed by the failover computer or an independent system also called as cluster controller. In an event of failure of primary computer, the failover system takes control.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-416",
    "topic": "SQL & Data",
    "question": "What is Builtin/Administrator?",
    "answer": "The Builtin/Administrator account is basically used during some setup to join some machine in the domain. It should be disabled immediately thereafter. For any disaster recovery, the account will be automatically enabled. It should not be used for normal operations.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-417",
    "topic": "SQL & Data",
    "question": "How can you create an empty table from an existing table?",
    "answer": "Example will be - 1 Select into studentcopy from student where 1=2 Here, we are copying student table to another table with the same structure with no rows copied.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-418",
    "topic": "SQL & Data",
    "question": "How to fetch common records from two tables?",
    "answer": "Common records result set can be achieved by -. 1 Select studentID from student. INTERSECT Select StudentID from Exam",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-419",
    "topic": "SQL & Data",
    "question": "How to fetch alternate records from a table?",
    "answer": "Records can be fetched for both Odd and Even row numbers -. To display even numbers-. 1 Select studentId from (Select rowno, studentId from student) where mod(rowno,2)=0 To display odd numbers-. 1 Select studentId from (Select rowno, studentId from student) where mod(rowno,2)=1 from (Select rowno, studentId from student) where mod(rowno,2)=1.[/sql]",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-420",
    "topic": "SQL & Data",
    "question": "How to select unique records from a table?",
    "answer": "Select unique records from a table by using DISTINCT keyword. 1 Select DISTINCT StudentID, StudentName from Student.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-421",
    "topic": "SQL & Data",
    "question": "What is the command used to fetch first 5 characters of the string?",
    "answer": "There are many ways to fetch first 5 characters of the string -. 1 Select SUBSTRING(StudentName,1,5) as studentname from student 1 Select RIGHT(Studentname,5) as studentname from student",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-422",
    "topic": "SQL & Data",
    "question": "Which operator is used in query for pattern matching?",
    "answer": "LIKE operator is used for pattern matching, and it can be used as -. 1. % – Matches zero or more characters. 2. (Underscore) – Matching exactly one character. Example -. 1 Select from Student where studentname like ‘a%’ 1 Select from Student where studentname like ‘ami’",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-423",
    "topic": "SQL & Data",
    "question": "What is the default join in SQL? Give an example query?",
    "answer": "The default join is INNER JOIN. Example SELECT columnname(s) FROM table1 INNER JOIN table2 ON table1.columnname=table2.columnname;",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-424",
    "topic": "SQL & Data",
    "question": "What is Union and Union All ? Explain the differences?",
    "answer": "• SQL UNION The UNION operator is used to combine the result-set of two or more SELECT statements. Notice that each SELECT statement within the UNION must have the same number of columns. The columns must also have similar data types. Also, the columns in each SELECT statement must be in the same order. Note: The UNION operator selects only distinct values by default. SELECT columnname(s) FROM table1 UNION SELECT columnname(s) FROM table2; • SQL UNION ALL 1. SQL UNION ALL Syntax SELECT columnname(s) FROM table1 UNION ALL SELECT columnname(s) FROM table2; Allows duplicate values.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-425",
    "topic": "SQL & Data",
    "question": "Why do we need distributed transactions?",
    "answer": "Unlike an ACID transaction on a single database, a distributed transaction involves altering data on multiple databases. Consequently, distributed transaction processing is more complicated, because the database must coordinate the committing or rollback of the changes in a transaction as a self-contained unit. In other words, all the nodes must commit, or all must abort and the entire transaction rolls back. This is why we need distributed transactions. Now, let's look at some popular solutions for distributed transactions:",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-sql-data-426",
    "topic": "SQL & Data",
    "question": "How do you add meta tags in Next.js?",
    "answer": "Using the Head component from next/head. import Head from \"next/head\"; function IndexPage() { return ( My page title <meta name=\"viewport\" content=\"initial-scale=1.0, width=device-width\" /> Hello world! ); } export default IndexPage; :arrowup: Back to Top 59. ### How to add sitemap in nextjs app?",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-sql-data-427",
    "topic": "SQL & Data",
    "question": "What is RAG (Retrieval-Augmented Generation)?",
    "answer": "RAG is a pattern where an LLM retrieves relevant context from an external knowledge source (vector DB, search index, graph) before generating an answer, reducing hallucinations and grounding responses in your data. The full pipeline is covered in RAG Fundamentals and scaled in Production RAG at Scale.",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-sql-data-428",
    "topic": "SQL & Data",
    "question": "How do I build a multi-tenant RAG system safely?",
    "answer": "Use defense-in-depth: per-tenant indexes or namespaces, query-time access checks, and prompt-layer guards. The Access Control chapter and Multi-Tenant SaaS Case Study cover the patterns that hold up in interviews and production.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-429",
    "topic": "SQL & Data",
    "question": "What is the CSS z-index property?",
    "answer": "The CSS z-index property controls the stacking order of elements on a page. Elements with a higher z-index value are displayed on top of elements with a lower z-index value. The default value of z-index is auto. 65. ### What are CSS pseudo-classes? Give some examples. CSS pseudo-classes are selectors that target elements based on their state or position in the document. Some examples include :hover, :active, :focus, :first-child, :last-child, and :nth-child.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-430",
    "topic": "SQL & Data",
    "question": "What is the purpose of the array splice method?",
    "answer": "The splice() is an array method in JavaScript that allows you to modify an array by adding, removing, or replacing elements. It takes two required parameters: the index at which to start making changes to the array, and the number of elements to remove. It also has an optional parameter for adding one or more elements to the array. 158. ### What is the difference between slice and splice? | slice | splice |",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-431",
    "topic": "SQL & Data",
    "question": "What is Parallel Programming in Swift?",
    "answer": "- Parallel programming refers to performing multiple tasks simultaneously. In Swift, this is typically accomplished using DispatchQueue.concurrentPerform. DispatchQueue.concurrentPerform(iterations: 10) { index in print(\"This is task \\(index)\") }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-432",
    "topic": "SQL & Data",
    "question": "What is the purpose of v-for directive?",
    "answer": "The built-in v-for directive allows us to loop through items in an array or object. You can iterate on each element in the array or object. 1. Array usage: {{ index }} - {{ item.message }} var vm = new Vue({ el: '#list', data: { items: [ { message: 'John' }, { message: 'Locke' } ] } }) You can also use of as the delimiter instead of in, similar to javascript iterators. 2. Object usage: {{ index }}. {{ key }}: {{ value }}",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-433",
    "topic": "SQL & Data",
    "question": "What are the types of formatting?",
    "answer": "Basically there are 4 types of formatting available in i18n plugin, 1. Named formatting: First You need to define the message keys in curly braces({}) const messages = { en: { message: { greeting: '{msg} Morning' } } } After that pass argument value along with key in the template {{ $t('message.greeting', { msg: 'Good' }) }} It outputs the result as below, Good Morning 2. List formatting: First you need to define zero index based keys in the messages, const messages = { en: { message: { greeting: '{0} Morning' } } }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-434",
    "topic": "SQL & Data",
    "question": "SQL was developed as an integral part of...",
    "answer": "> Relational Database Management Systems (RDBMS). SQL is the ANSI-standard language for creating, querying, updating, and managing relational databases. Major implementations include MySQL, PostgreSQL, SQL Server, Oracle, and SQLite. > > Real-world context: Every web application you use — Instagram, Netflix, Uber — stores its data in SQL databases (often sharded or replicated, but SQL at the core).",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-435",
    "topic": "SQL & Data",
    "question": "What does SQL stand for?",
    "answer": "> Structured Query Language. Originally called SEQUEL at IBM in the 1970s.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-436",
    "topic": "SQL & Data",
    "question": "What type of language is SQL?",
    "answer": "> Declarative (non-procedural). You state what result you want, not how to compute it. The database's query optimizer decides the \"how\" — which indexes to use, which join order is fastest, etc. > > Compare with PL/SQL (Oracle) or T-SQL (SQL Server), which are procedural extensions that add loops, variables, and conditional logic.",
    "tags": [
      "performance",
      "testing"
    ]
  },
  {
    "id": "q-sql-data-437",
    "topic": "SQL & Data",
    "question": "Which is NOT a valid SQL command: SELECT, REMOVE, UPDATE, INSERT?",
    "answer": "> REMOVE is not valid. To delete rows, use DELETE. DROP removes objects (tables, databases). > > | Command | Purpose | > |---------|---------| > | SELECT | Read data | > | INSERT | Add new rows | > | UPDATE | Modify existing rows | > | DELETE | Remove rows | > | CREATE/ALTER/DROP | Manage schema objects |",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-438",
    "topic": "SQL & Data",
    "question": "What is MySQL, and how does it differ from SQL?",
    "answer": "> SQL is the language (like English). MySQL is a database system that speaks SQL (like a person who speaks English). > > Analogy: SQL is the recipe; MySQL is the kitchen that follows it.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-439",
    "topic": "SQL & Data",
    "question": "What is PL/SQL, and how is it different from SQL?",
    "answer": "> PL/SQL = Procedural Language extensions to SQL (Oracle-specific). It adds variables, loops, IF-ELSE, and exception handling. > > | SQL | PL/SQL | > |-----|--------| > | Single statements | Blocks of code | > | No variables | Variables & constants | > | No loops | FOR, WHILE loops | > | Data-oriented | Application-oriented | > | Can embed in PL/SQL | Cannot embed SQL inside itself |",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-sql-data-440",
    "topic": "SQL & Data",
    "question": "What are the possible values for a BOOLEAN field in MySQL?",
    "answer": "> MySQL doesn't have a native BOOLEAN type. It uses TINYINT(1) where 0 = false, 1 = true, and any non-zero value is treated as true in conditions. > sql > CREATE TABLE users (isactive TINYINT(1) DEFAULT 1); > > PostgreSQL, however, has a true BOOLEAN type accepting TRUE, FALSE, and NULL.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-441",
    "topic": "System Design",
    "question": "Is there a Grokking System Design PDF or book?",
    "answer": "No. There is no official PDF, ebook, or printed book of the Grokking the System Design Interview course, and there never has been. The PDF files that circulate online are unofficial copies of an old version of the course. They are missing the newer lessons and every fix made since they were created. This repository is the official free way to read the material: every pattern guide, question, and cheat sheet here is free in your browser, no account needed. The full, current course is online at Grokking the System Design Interview. For more detail, see Is there a free official download?",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-442",
    "topic": "System Design",
    "question": "What is this Frontend System Design guide about?",
    "answer": "Frontend System Design guide attempts to cover the various factors to be considered while architecting a complex large-scale frontend application from scratch. Also the guide acts like a checklist that can be used as a reference for frontend system design. The guide aims to contain the breadth of the frontend systems while giving the directions to explore in depth for both individual contributors and system architects. Guide is generic and not biased towards any library or framework - Engineering Design - High Level Design - Low level Design ---",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-system-design-443",
    "topic": "System Design",
    "question": "How to approach a system design interview question",
    "answer": "> How to tackle a system design interview question. The system design interview is an open-ended conversation. You are expected to lead it. You can use the following steps to guide the discussion. To help solidify this process, work through the System design interview questions with solutions section using the following steps.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-444",
    "topic": "System Design",
    "question": "When to update the cache",
    "answer": "Since you can only store a limited amount of data in cache, you'll need to determine which cache update strategy works best for your use case.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-445",
    "topic": "System Design",
    "question": "What gets generated where",
    "answer": "- generate writes question packages to the current working directory, under ./system-design-questions//. Run it from wherever you want the files to live (a notes repo, a dotfiles directory, etc.). - mock and postmortem update state files in /.system-design/state/. - learn and learn --auto don't write any files unless you ask.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-446",
    "topic": "System Design",
    "question": "Software Development After 2025: Kubernetes & Generative AI",
    "answer": "The world of software development has evolved dramatically since 2017. Today, systems are designed for distribution from day one, powered by Kubernetes, container orchestration, and the rise of Generative AI. This shift demands fresh perspectives on architecture, scalability, and operational practices.",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-system-design-447",
    "topic": "System Design",
    "question": "Community Call to Action",
    "answer": "The original repo served countless learners and interview candidates, but its current lack of maintenance makes it effectively obsolete. If you find value in revitalizing this resource: - ⭐ Star this fork so it gains visibility - 📝 Contribute fixes for typos, link repairs, and outdated examples - 💡 Submit enhancements on Kubernetes best practices, AI-powered architectures, and modern tooling Together, we can create a state-of-the-art primer that reflects the realities of cloud-native, AI-augmented system design in 2025 and beyond.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-448",
    "topic": "System Design",
    "question": "Why is System Design so important?",
    "answer": "System design helps us define a solution that meets the business requirements. It is one of the earliest decisions we can make when building a system. Often it is essential to think from a high level as these decisions are very difficult to correct later. It also makes it easier to reason about and manage architectural changes as the system evolves.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-449",
    "topic": "System Design",
    "question": "Why use a CDN?",
    "answer": "Content Delivery Network (CDN) increases content availability and redundancy while reducing bandwidth costs and improving security. Serving content from CDNs can significantly improve performance as users receive content from data centers close to them and our servers do not have to serve requests that the CDN fulfills.",
    "tags": [
      "performance",
      "security"
    ]
  },
  {
    "id": "q-system-design-450",
    "topic": "System Design",
    "question": "Why do we need normalization?",
    "answer": "The goal of normalization is to eliminate redundant data and ensure data is consistent. A fully normalized database allows its structure to be extended to accommodate new types of data without changing the existing structure too much. As a result, applications interacting with the database are minimally affected.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-451",
    "topic": "System Design",
    "question": "Why is the Pre-commit phase helpful?",
    "answer": "The pre-commit phase accomplishes the following: - If the participant nodes are found in this phase, that means that every participant has completed the first phase. The completion of prepare phase is guaranteed. - Every phase can now time out and avoid indefinite waits.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-452",
    "topic": "System Design",
    "question": "When to use sharding?",
    "answer": "Here are some reasons why sharding might be the right choice: - Leveraging existing hardware instead of high-end machines. - Maintain data in distinct geographic regions. - Quickly scale by adding more shards. - Better performance as each machine is under less load. - When more concurrent connections are required.",
    "tags": [
      "performance",
      "architecture"
    ]
  },
  {
    "id": "q-system-design-453",
    "topic": "System Design",
    "question": "What is an event?",
    "answer": "An event is a data point that represents state changes in a system. It doesn't specify what should happen and how the change should modify the system, it only notifies the system of a particular state change. When a user makes an action, they trigger an event.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-454",
    "topic": "System Design",
    "question": "Why do we need an API Gateway?",
    "answer": "The granularity of APIs provided by microservices is often different than what a client needs. Microservices typically provide fine-grained APIs, which means that clients need to interact with multiple services. Hence, an API gateway can provide a single entry point for all clients with some additional features and better management.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-455",
    "topic": "System Design",
    "question": "When to use this pattern?",
    "answer": "We should consider using a Backend For Frontend (BFF) pattern when: - A shared or general purpose backend service must be maintained with significant development overhead. - We want to optimize the backend for the requirements of a specific client. - Customizations are made to a general-purpose backend to accommodate multiple interfaces.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-system-design-456",
    "topic": "System Design",
    "question": "Which API technology is better?",
    "answer": "Well, the answer is none of them. There is no silver bullet as each of these technologies has its own advantages and disadvantages. Users only care about using our APIs in a consistent way, so make sure to focus on your domain and requirements when designing your API.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-457",
    "topic": "System Design",
    "question": "Why do we need circuit breaking?",
    "answer": "It's common for software systems to make remote calls to software running in different processes, probably on different machines across a network. One of the big differences between in-memory calls and remote calls is that remote calls can fail, or hang without a response until some timeout limit is reached. What's worse is if we have many callers on an unresponsive supplier, then we can run out of critical resources leading to cascading failures across multiple systems.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-system-design-458",
    "topic": "System Design",
    "question": "Why do we need Rate Limiting?",
    "answer": "Rate limiting is a very important part of any large-scale system and it can be used to accomplish the following: - Avoid resource starvation as a result of Denial of Service (DoS) attacks. - Rate Limiting helps in controlling operational costs by putting a virtual cap on the auto-scaling of resources which if not monitored might lead to exponential bills. - Rate limiting can be used as defense or mitigation against some common attacks. - For APIs that process massive amounts of data, rate limiting can be used to control the flow of that data.",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-system-design-459",
    "topic": "System Design",
    "question": "Why do we need Service Discovery?",
    "answer": "In a monolithic application, services invoke one another through language-level methods or procedure calls. However, modern microservices-based applications typically run in virtualized or containerized environments where the number of instances of a service and their locations change dynamically. Consequently, we need a mechanism that enables the clients of service to make requests to a dynamically changing set of ephemeral service instances.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-460",
    "topic": "System Design",
    "question": "Why are they important?",
    "answer": "SLAs, SLOs, and SLIs allow companies to define, track and monitor the promises made for a service to its users. Together, SLAs, SLOs, and SLIs should help teams generate more user trust in their services with an added emphasis on continuous improvement to incident management and response processes.",
    "tags": [
      "async"
    ]
  },
  {
    "id": "q-system-design-461",
    "topic": "System Design",
    "question": "Why is disaster recovery important?",
    "answer": "Disaster recovery can have the following benefits: - Minimize interruption and downtime - Limit damages - Fast restoration - Better customer retention",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-462",
    "topic": "System Design",
    "question": "What is a Hypervisor?",
    "answer": "A Hypervisor sometimes called a Virtual Machine Monitor (VMM), isolates the operating system and resources from the virtual machines and enables the creation and management of those VMs. The hypervisor treats resources like CPU, memory, and storage as a pool of resources that can be easily reallocated between existing guests or new virtual machines.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-system-design-463",
    "topic": "System Design",
    "question": "How does SSO work?",
    "answer": "Now, let's discuss how Single Sign-On works: 1. The user requests a resource from their desired application. 2. The application redirects the user to the Identity Provider (IdP) for authentication. 3. The user signs in with their credentials (usually, username and password). 4. Identity Provider (IdP) sends a Single Sign-On response back to the client application. 5. The application grants access to the user.",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-system-design-464",
    "topic": "System Design",
    "question": "Why is it called an SSL certificate if it is deprecated?",
    "answer": "Most major certificate providers still refer to certificates as SSL certificates, which is why the naming convention persists.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-465",
    "topic": "System Design",
    "question": "Why was SSL so important?",
    "answer": "Originally, data on the web was transmitted in plaintext that anyone could read if they intercepted the message. SSL was created to correct this problem and protect user privacy. By encrypting any data that goes between the user and a web server, SSL also stops certain kinds of cyber attacks by preventing attackers from tampering with data in transit.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-466",
    "topic": "System Design",
    "question": "What is a URL Shortener?",
    "answer": "A URL shortener service creates an alias or a short URL for a long URL. Users are redirected to the original URL when they visit these short links. For example, the following long URL can be changed to a shorter URL. Long URL: https://karanpratapsingh.com/courses/system-design/url-shortener Short URL: https://bit.ly/3I71d3o",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-467",
    "topic": "System Design",
    "question": "Why do we need a URL shortener?",
    "answer": "URL shortener saves space in general when we are sharing URLs. Users are also less likely to mistype shorter URLs. Moreover, we can also optimize links across devices, this allows us to track individual links.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-system-design-468",
    "topic": "System Design",
    "question": "What kind of database should we use?",
    "answer": "Since the data is not strongly relational, NoSQL databases such as Amazon DynamoDB, Apache Cassandra, or MongoDB will be a better choice here, if we do decide to use an SQL database then we can use something like Azure SQL Database or Amazon RDS. For more details, refer to SQL vs NoSQL.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-469",
    "topic": "System Design",
    "question": "Why do we need an API key?",
    "answer": "As you must've noticed, we're using an API key to prevent abuse of our services. Using this API key we can limit the users to a certain number of requests per second or minute. This is quite a standard practice for developer APIs and should cover our extended requirement.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-470",
    "topic": "System Design",
    "question": "What is WhatsApp?",
    "answer": "WhatsApp is a chat application that provides instant messaging services to its users. It is one of the most used mobile applications on the planet, connecting over 2 billion users in 180+ countries. WhatsApp is also available on the web.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-471",
    "topic": "System Design",
    "question": "What is Twitter?",
    "answer": "Twitter is a social media service where users can read or post short messages (up to 280 characters) called tweets. It is available on the web and mobile platforms such as Android and iOS.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-472",
    "topic": "System Design",
    "question": "What is Netflix?",
    "answer": "Netflix is a subscription-based streaming service that allows its members to watch TV shows and movies on an internet-connected device. It is available on platforms such as the Web, iOS, Android, TV, etc.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-473",
    "topic": "System Design",
    "question": "What is AI system design?",
    "answer": "AI system design is the discipline of architecting production-grade systems built around LLMs, retrieval, agents, and evaluation. It covers model selection, RAG pipelines, agent orchestration, memory, observability, and safety. See LLM Internals and AI Design Patterns to get oriented.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-system-design-474",
    "topic": "System Design",
    "question": "How do I prepare for an AI engineering interview?",
    "answer": "Start with the Question Bank (147 questions through September 2026), then practice with Answer Frameworks and Whiteboard Exercises. Most senior interviews test RAG design, agent debugging, multi-tenant isolation, and cost/latency tradeoffs, all covered in the Case Studies. Before a real loop, do at least one timed mock with someone who will interrupt and push back; you can book one with Om on EngineBogie or Topmate.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-system-design-475",
    "topic": "System Design",
    "question": "What are AI agents and how are they different from chatbots?",
    "answer": "AI agents are LLM-driven systems that plan, call tools, and act over multiple steps to accomplish goals, whereas chatbots typically respond in a single turn. Agents introduce loops, memory, error recovery, and tool-use via protocols like MCP. Start with Agent Fundamentals.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-system-design-476",
    "topic": "System Design",
    "question": "How do I evaluate an LLM or RAG system in production?",
    "answer": "Combine offline evals (LLM-as-a-judge with ground-truth calibration), online metrics (faithfulness, context recall, answer relevance), and continuous tracing. The companion deep-dives AI Evals: Phoenix + Langfuse and AI Evals: LangWatch + Langfuse walk through this end-to-end.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-477",
    "topic": "System Design",
    "question": "What is agentic RAG?",
    "answer": "Agentic RAG combines retrieval with an agent loop that can decide what to search, when to re-query, and when to escalate, instead of running a single fixed retrieve-then-generate pass. See Agentic RAG for the architectures and tradeoffs.",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-system-design-478",
    "topic": "System Design",
    "question": "Is this guide free? Can I contribute?",
    "answer": "Yes, MIT-licensed and free. PRs are welcome; see Contributing Guide. If you have production failure modes, new model benchmarks, or interview questions to add, open a PR.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-479",
    "topic": "System Design",
    "question": "How often is this guide updated?",
    "answer": "Continuously. New model releases, protocol changes (MCP, A2A), and emerging patterns are added as they ship. The October 2026 refresh brought models, prices, protocols, and framework versions up to their state on October 1, 2026. Recent additions include a twelve-question Voice AI section, seven September 2026 questions, a tenth whiteboard exercise, a reworked Real-Time Voice Agents chapter, and the October 2026 Job Market Trends.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-480",
    "topic": "System Design",
    "question": "Can I use this guide if I am transitioning from backend, QA, PM, or EM into AI?",
    "answer": "Yes. The Role Transition Guide maps existing skills to AI engineering, MLE, and AI architect tracks, with reading paths per role. Pair it with COURSES.md for curated learning resources. ---",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-481",
    "topic": "System Design",
    "question": "How to use this book?",
    "answer": "For professionals (Google L5 or above), go directly to System Design in Practice. For junior and intermediate programmers (Google L3/L4), go to System Design Theories and then read System Design in Practice. For beginners, go to Prepare for an Interview effectively, then read System Design Theories, and finally go to System Design in Practice.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-482",
    "topic": "System Design",
    "question": "How the library is organized",
    "answer": "- prep/ — 28 building-block deep-dives (plus a 03a storage-engine foundations companion). The toolkit. Each: what problem it solves, the internals, the tradeoffs, and the \"say this in the room\" lines + a from-memory self-check. - designs/ — 26 fully worked end-to-end design walkthroughs, each run through the 7-step framework, cross-referencing the prep docs. The recombination practice. - mock-interviews/ — practice prompts to run cold. ---",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-system-design-483",
    "topic": "System Design",
    "question": "What is system design?",
    "answer": "The process of defining the architecture, modules, interfaces, and data for a system to satisfy specified requirements. System design could be seen as the application of systems theory to product environment.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-484",
    "topic": "System Design",
    "question": "Why is a high-level diagram necessary? Can I skip it?",
    "answer": "Not mandatory, but it has advantages: - Time management: Quickly outlines the system and raises discussion points. - Modularity: Each component can be a separate module for team collaboration. - Best practices: Mirrors backend system design and the C4 model for visualizing architecture (https://c4model.com/). Still not sure? Ask the interviewer if they want a diagram or prefer to jump into specific components.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-485",
    "topic": "System Design",
    "question": "How much detail should I provide?",
    "answer": "No strict rule. Work with the interviewer; ask if they want more detail or to move on. Observe their body language. If they interrupt, stop and ask if they have questions. Collaboration is key.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-486",
    "topic": "System Design",
    "question": "Why no mention of specific classes (RecyclerView/UICollectionView) or vendors (Room, CoreData, Realm)?",
    "answer": "- To keep the guide platform-agnostic. Libraries evolve rapidly. Abstracting functionality is more robust. - Vendor selection is subjective and based on experience/trends. - Large companies often build custom stacks. - Implementation details are widely available online.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-487",
    "topic": "System Design",
    "question": "What drawing tool should I use?",
    "answer": "Excalidraw and Google Drawings are popular choices. Some prefer collaborative editors and verbal discussion. Privacy policies may limit tool choices.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-488",
    "topic": "System Design",
    "question": "How do you know this approach works? Why is this guide necessary?",
    "answer": "- A: There's no one-size-fits-all approach to system design interviews. The structure of the interview heavily depends on the interviewer's style and the company's specific needs. However, having a structured framework like this helps both the candidate and the interviewer focus on the content of the discussion rather than getting bogged down in the organizational aspects of the interview. It provides a common language and a starting point for exploration.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-489",
    "topic": "System Design",
    "question": "Can you go a bit deeper into [specific technology/pattern/component]?",
    "answer": "- A: This guide aims to provide a broad overview of key concepts. It doesn't delve into extreme detail on any specific technology or implementation. The goal is to equip you with a foundational understanding, encouraging you to draw upon your personal experience and expertise to provide concrete solutions during the interview. Remember, the interviewer is assessing your problem-solving skills and your ability to adapt and apply your knowledge.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-490",
    "topic": "System Design",
    "question": "What if the interviewer wants to focus on a technology I'm not very familiar with?",
    "answer": "- A: Be honest about your strengths and weaknesses. If the interviewer veers into an area where your knowledge is limited, acknowledge that and explain your general understanding of the concepts involved. Emphasize your willingness to learn and your ability to quickly acquire new knowledge. Suggest alternative solutions using technologies you are more comfortable with.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-491",
    "topic": "System Design",
    "question": "How should I handle disagreements with the interviewer?",
    "answer": "- A: It's perfectly acceptable to have different opinions than the interviewer. However, approach the discussion respectfully and professionally. Clearly articulate your reasoning and be willing to consider alternative viewpoints. Avoid being argumentative or dismissive. If you strongly disagree, you can politely acknowledge the interviewer's perspective while reiterating your own rationale. The goal is to demonstrate your critical thinking skills and your ability to engage in constructive dialogue.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-492",
    "topic": "System Design",
    "question": "What if I get stuck and can't think of a solution?",
    "answer": "- A: Don't panic! It's okay to pause and take a moment to gather your thoughts. Communicate your thought process out loud. Explain what you're considering and what challenges you're facing. Ask clarifying questions to help you better understand the problem. If you're still stuck, ask the interviewer for a hint or guidance. The interviewer is more interested in seeing how you approach a difficult problem than in finding the perfect solution.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-493",
    "topic": "System Design",
    "question": "How much detail should I provide when discussing specific components?",
    "answer": "- A: The level of detail should depend on the interviewer's interest and the time available. Start with a high-level overview and then dive deeper into specific aspects as prompted by the interviewer. Pay attention to their body language and ask if they want you to elaborate or move on to another topic. Don't get bogged down in minute details unless the interviewer specifically requests it.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-494",
    "topic": "System Design",
    "question": "How do I choose between different architectural patterns (MVP, MVVM, MVI, etc.)?",
    "answer": "- A: There's no single \"best\" architectural pattern. Each pattern has its own advantages and disadvantages, and the best choice depends on the specific requirements of the project. Be prepared to explain the pros and cons of different patterns and justify your choice based on factors such as complexity, testability, and maintainability. Familiarity with common patterns such as MVVM with a unidirectional data flow (like MVI or Redux) is generally favored.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-system-design-495",
    "topic": "System Design",
    "question": "How can I improve my communication skills for system design interviews?",
    "answer": "- A: Practice explaining complex technical concepts in a clear and concise manner. Use diagrams and visual aids to illustrate your ideas. Practice active listening and ask clarifying questions to ensure that you understand the interviewer's perspective. Seek feedback from others on your communication style. Record yourself explaining technical concepts and analyze your performance. Focus on being clear, concise, and confident in your communication.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-system-design-496",
    "topic": "System Design",
    "question": "Should I memorize specific code snippets or API calls for the interview?",
    "answer": "- A: While having a general understanding of common APIs and libraries is helpful, it's generally not necessary (or advisable) to memorize specific code snippets. The focus should be on demonstrating your understanding of the underlying concepts and your ability to apply them to solve problems. If you need to refer to a specific API or code example, explain why you're using it and what it accomplishes.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-system-design-497",
    "topic": "System Design",
    "question": "Is it better to focus on a single area of mobile development (e.g., iOS or Android) or have broad knowledge across both platforms?",
    "answer": "- A: The ideal approach depends on the specific role and the company's needs. Some roles may require deep expertise in a single platform, while others may value broad knowledge across both platforms. Be honest about your skills and experience. If you have broad knowledge, highlight your ability to learn new technologies and adapt to different platforms. If you have deep expertise in a single platform, emphasize your ability to contribute immediately to the team and your willingness to learn about other platforms as needed.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-devops-cloud-498",
    "topic": "DevOps & Cloud",
    "question": "Explain NSPersistentContainer ?",
    "answer": "The persistent container creates and returns a container, having loaded the store for the application to it. This property is optional since there are legitimate error conditions that could cause the creation of the store to fail.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-devops-cloud-499",
    "topic": "DevOps & Cloud",
    "question": "What is Pointer ?",
    "answer": "A pointer is a direct reference to a memory address. Whereas a variable acts as a transparent container for a value, pointers remove a layer of abstraction and let you see how that value is stored.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-devops-cloud-500",
    "topic": "DevOps & Cloud",
    "question": "What kind of JSONSerialization have ReadingOptions ?",
    "answer": "mutableContainers Specifies that arrays and dictionaries are created as variables objects, not constants. mutableLeaves Specifies that leaf strings in the JSON object graph are created as instances of variable String. allowFragments Specifies that the parser should allow top-level objects that are not an instance of Array or Dictionary.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-devops-cloud-501",
    "topic": "DevOps & Cloud",
    "question": "What is Amazon Web Services (AWS) and what are its key features?",
    "answer": "Amazon Web Services (AWS) is a cloud computing platform that offers a vast range of services, including computing power, storage, and databases, to help businesses scale and grow more cost-effectively.",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-devops-cloud-502",
    "topic": "DevOps & Cloud",
    "question": "Explain the concept of Regions and Availability Zones in AWS.",
    "answer": "When working with AWS, it's important to understand the fundamental building blocks of Regions and Availability Zones.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-devops-cloud-503",
    "topic": "DevOps & Cloud",
    "question": "What is an Amazon Machine Image (AMI) and how is it used?",
    "answer": "An Amazon Machine Image (AMI) serves as a template for virtual servers, known as EC2 instances, enabling rapid and consistent provisioning.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-devops-cloud-504",
    "topic": "DevOps & Cloud",
    "question": "Describe the difference between Elastic IP and Public IP in AWS.",
    "answer": "In AWS, every EC2 instance automatically gets a Public IP and can optionally be assigned an Elastic IP for more flexibility.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-devops-cloud-505",
    "topic": "DevOps & Cloud",
    "question": "What is the role of the AWS Management Console?",
    "answer": "The AWS Management Console serves as a graphical user interface for interacting with AWS services. It offers an intuitive way to access and manage a wide range of AWS resources.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-devops-cloud-506",
    "topic": "DevOps & Cloud",
    "question": "Explain the concept of Elastic Computing in AWS.",
    "answer": "Elastic Computing in AWS refers to the ability to dynamically adjust your computing needs based on real-time demands and pay only for what you use. This is achieved through services like Amazon EC2.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-devops-cloud-507",
    "topic": "DevOps & Cloud",
    "question": "What is AWS Identity and Access Management (IAM) and why is it important?",
    "answer": "AWS Identity and Access Management (IAM) is a free AWS service that grants secure access to AWS resources. It enables you to control who can use your AWS resources (authentication) and how they can use them (authorization).",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-devops-cloud-508",
    "topic": "DevOps & Cloud",
    "question": "Describe the AWS Shared Responsibility Model.",
    "answer": "The AWS Shared Responsibility Model establishes clear responsibilities for security and compliance between AWS and the customer. This model varies for different AWS services, but generally follows two core components: \"Security of the Cloud\" and \"Security in the Cloud\".",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-devops-cloud-509",
    "topic": "DevOps & Cloud",
    "question": "What is the difference between Vertical Scaling and Horizontal Scaling in AWS?",
    "answer": "Vertical scaling involves increasing the resources of a single machine, such as its CPU or RAM. In contrast, horizontal scaling means adding more machines to a network, distributing the workload across them.",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-devops-cloud-510",
    "topic": "DevOps & Cloud",
    "question": "Explain the concept of High Availability in AWS.",
    "answer": "High Availability (HA) in AWS ensures that your applications and data are accessible and resilient to hardware and software failures. AWS achieves high availability through a combination of fault-tolerant design, redundancy, and automated recovery mechanisms.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-devops-cloud-511",
    "topic": "DevOps & Cloud",
    "question": "What is Amazon Elastic Compute Cloud (EC2) and what are its key features?",
    "answer": "Amazon Elastic Compute Cloud (EC2) is a web service that provides resizable compute capacity in the cloud. It is designed for developers to have full control over computing resources in a highly available and cost-effective manner.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-devops-cloud-512",
    "topic": "DevOps & Cloud",
    "question": "Describe the different EC2 instance types and their use cases.",
    "answer": "Amazon EC2 offers a broad range of instance types optimized to fit different use cases. These types can be categorized into groups like General Purpose, Compute Optimized, Memory Optimized, Storage Optimized, and Accelerated Computing.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-devops-cloud-513",
    "topic": "DevOps & Cloud",
    "question": "What is Amazon Elastic Container Service (ECS) and how does it work?",
    "answer": "Amazon Elastic Container Service (ECS) is a highly scalable, high-performance container management service that supports Docker containers and allows you to easily run applications on Amazon EC2 and AWS Fargate.",
    "tags": [
      "performance",
      "architecture"
    ]
  },
  {
    "id": "q-devops-cloud-514",
    "topic": "DevOps & Cloud",
    "question": "Explain the difference between Amazon EC2 and AWS Lambda.",
    "answer": "Amazon EC2 (Elastic Compute Cloud) and AWS Lambda offer compute services, but they differ in their paradigms of use.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-devops-cloud-515",
    "topic": "DevOps & Cloud",
    "question": "What is AWS Elastic Beanstalk and when would you use it?",
    "answer": "AWS Elastic Beanstalk is a Platform as a Service (PaaS) that streamlines the deployment and management of cloud-based applications. It automatically handles infrastructure provisioning, load balancing, auto-scaling, and more, allowing developers to focus primarily on writing code.",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-devops-cloud-516",
    "topic": "DevOps & Cloud",
    "question": "When to Use Elastic Beanstalk",
    "answer": "Beanstalk is especially beneficial for: - Rapid Deployment: It empowers quick deployment without the need for in-depth AWS knowledge. - Resource Optimization: Automated provisioning decreases the likelihood of over- or under-provisioning resources. - Focus on Development: It suits situations where developers prefer a managed environment, freeing them from infrastructural concerns. - Cost Efficiency for Development: It can help keep development costs in check, but might not be the most cost-efficient for large-scale, long-running applications due to its pricing model's lack of granular control.",
    "tags": [
      "performance",
      "architecture"
    ]
  },
  {
    "id": "q-devops-cloud-517",
    "topic": "DevOps & Cloud",
    "question": "What are the universal selector and the sibling combinator, and when would you use them?",
    "answer": "The Universal Selector (the asterisk, ) is a powerful tool that enables you to target every element within a specified container. While it's a straightforward selector, its implications can be broad. - When to Use: You might want to normalize or reset specific CSS properties (resetting padding, margin, etc.) across all elements within a container or the entire document. The Universal Selector effectively achieves this. - Best Practices: Overuse of the Universal Selector can lead to performance issues and unexpected style side effects. Keep its use concise and well-defined.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-devops-cloud-518",
    "topic": "DevOps & Cloud",
    "question": "Explain the concept of continuous integration and continuous delivery (CI/CD) in the context of machine learning.",
    "answer": "Continuous Integration in machine learning, often termed MLOps, involves automating the training, evaluation, and deployment of machine learning models. This process aims to ensure that the deployed model is always up-to-date and reliable.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-devops-cloud-519",
    "topic": "DevOps & Cloud",
    "question": "How do containerization and virtualization technologies support MLOps practices?",
    "answer": "Both containerization and virtualization are essential tools for MLOps, enabling better management of machine learning models, code, and environments.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-devops-cloud-520",
    "topic": "DevOps & Cloud",
    "question": "What is the difference between Container and SizedBox widget?",
    "answer": "SizedBox is a widget for giving some constant height or width between two widgets. It does not contain any decorative properties just like color, shape, borderRadius etc. On the other hand Container is a widget that any person can modify according to their needs. When used for whitespace, there is a linter warning to prefer SizedBox instead of Container. Because a Container is a heavier widget than a SizedBox, and as bonus, SizedBox has a const constructor, so it won't even create a new instance during runtime. Back to top ↑ &nbsp;&nbsp;/&nbsp;&nbsp; 🖌️ Edit answer",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-devops-cloud-521",
    "topic": "DevOps & Cloud",
    "question": "🐧 Infrastructure & Operating Systems",
    "answer": "- Linux Administration - System Management - Shell Scripting - Performance Tuning - Virtualization - VMware - VirtualBox - Networking Fundamentals - TCP/IP - DNS - Load Balancing",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-devops-cloud-522",
    "topic": "DevOps & Cloud",
    "question": "📊 Version Control & Collaboration",
    "answer": "- Git Fundamentals - Branching Strategies - Merge Conflict Resolution - Git Flow - Platforms - GitHub - GitLab - Bitbucket",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-devops-cloud-523",
    "topic": "DevOps & Cloud",
    "question": "🔄 CI/CD & Automation",
    "answer": "- Continuous Integration - Jenkins - GitHub Actions - GitLab CI - Configuration Management - Ansible - Puppet - Infrastructure as Code - Terraform - CloudFormation - GitOps - ArgoCD - Flux",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-devops-cloud-524",
    "topic": "DevOps & Cloud",
    "question": "☁️ Cloud Platforms",
    "answer": "- Amazon Web Services (AWS) - EC2, S3, RDS - Lambda, ECS, EKS - CloudWatch, IAM - Google Cloud Platform (GCP) - Compute Engine - Cloud Functions - GKE - Microsoft Azure - Azure VMs - Azure Functions - AKS",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-devops-cloud-525",
    "topic": "DevOps & Cloud",
    "question": "🐳 Containerization & Orchestration",
    "answer": "- Container Technologies - Docker - Podman - Container Security - Orchestration Platforms - Kubernetes - OpenShift - Docker Swarm - Package Management - Helm - Kustomize",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-devops-cloud-526",
    "topic": "DevOps & Cloud",
    "question": "📊 Monitoring & Security",
    "answer": "- Observability Stack - Prometheus - Grafana - ELK Stack - Security Tools - Trivy - SonarQube - OWASP Tools",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-devops-cloud-527",
    "topic": "DevOps & Cloud",
    "question": "💾 Data Management",
    "answer": "- Databases - SQL (PostgreSQL, MySQL) - NoSQL (MongoDB, Cassandra) - Cache (Redis, Memcached) - Search Engines - Elasticsearch - Solr ---",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-devops-cloud-528",
    "topic": "DevOps & Cloud",
    "question": "What are some of the advantages of HTML5 over its previous versions?",
    "answer": "Some advantages of HTML5 are: 1. It has multi media support 2. Improved performance (faster loading) 3. Better accessibility 15. ### What is the canvas element in HTML5? The \\ element is a container that is used to draw graphics on the web page using scripting language like javascript.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-devops-cloud-529",
    "topic": "DevOps & Cloud",
    "question": "What is the canvas element in HTML5?",
    "answer": "The \\ element is a container that is used to draw graphics on the web page using scripting language like javascript.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-devops-cloud-530",
    "topic": "DevOps & Cloud",
    "question": "What is the gap property in Flexbox, and how is it used to add spacing between flex items?",
    "answer": "The gap property in Flexbox sets the spacing between flex items, both horizontally and vertically. It is a shorthand for row-gap and column-gap. 80. ### How do you center an element using flexbox? To center an element using flexbox, we need to set the parent container's display property to flex and use the justify-content & align-items properties with the value of center.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-devops-cloud-531",
    "topic": "DevOps & Cloud",
    "question": "How do you center an element using flexbox?",
    "answer": "To center an element using flexbox, we need to set the parent container's display property to flex and use the justify-content & align-items properties with the value of center.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-security-532",
    "topic": "Security",
    "question": "Operating Systems",
    "answer": "View topics and checklist - [ ] Deadlock detection and prevention P0 - [ ] File systems P1 - [ ] Distributed file systems (HDFS, Ceph) P0 - [ ] File system encryption P0 - [ ] Journaling file systems (ext3, ext4) P1 - [ ] Network file systems (NFS, SMB) P1 - [ ] Memory management P1 - [ ] Buddy memory allocation P1 - [ ] Memory-mapped files P1 - [ ] Page replacement algorithms (LRU, FIFO, Clock) P1 - [ ] Processes P0 - [ ] Scheduling algorithms P1",
    "tags": [
      "performance",
      "architecture"
    ]
  },
  {
    "id": "q-security-533",
    "topic": "Security",
    "question": "What is Platform limitations of tvOS ?",
    "answer": "First, tvOS provides no browser support of any kind, nor is there any WebKit or other web-based rendering engine you can program against. This means your app can’t link out to a web browser for anything, including web links, OAuth, or social media sites. Second, tvOS apps cannot explicitly use local storage. At product launch, the devices ship with either 32 GB or 64 GB of hard drive space, but apps are not permitted to write directly to the on-board storage. tvOS app bundle cannot exceed 4 GB.",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-security-534",
    "topic": "Security",
    "question": "What are Realm benefits ?",
    "answer": "An open-source database framework. Easy to set up. All changes are made to objects in store directly. Supports observing changes. Supports encryption. Fast.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-security-535",
    "topic": "Security",
    "question": "What is the purpose of html directive?",
    "answer": "The v-html directive is used to update the inner html of a DOM element with latest data. It is similar to innerHTML property in DOM. The example usage of this directive as shown below, {{ htmlContent }} Note: This directive should be used with trused content only but not on user provided content. Otherwise it can leads to XSS vulnerabilities. ⬆ Back to Top 237. ### What are the key differences between Vue 2 and Vue 3? | Feature | Vue 2 | Vue 3 |",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-ai-machine-learning-536",
    "topic": "AI & Machine Learning",
    "question": "What do you want to do?",
    "answer": "Pick the door that fits you. Each journey has its own 101 to 301 path. - 🧑‍💻 I want to use AI in my work → Use AI - 🏗️ I want to build AI systems → Build AI - 🔬 I want to understand the research → Understand AI - 💬 I'm prepping for an interview → Interview Prep hub - 📚 I just want to browse the course catalog → Courses and learning resources, by topic - 📺 I'd rather watch → Video transcripts and resources ---",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-537",
    "topic": "AI & Machine Learning",
    "question": "Fork and clone",
    "answer": "gh repo fork MadsLorentzen/ai-job-search --clone cd ai-job-search > [!IMPORTANT] > A fork of this repo is always public — GitHub does not allow private forks of > public repositories — and /setup (step 3 below) writes your personal data (name, > contact details, employment history, salary expectations) into tracked files. > If this copy is for your own job search rather than for contributing changes back, > use a private repository with this repo as upstream instead — the two-minute > recipe is in SETUP.md section 8, > and every update workflow works identically. Fork only to contribute.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-538",
    "topic": "AI & Machine Learning",
    "question": "Search for jobs",
    "answer": "/scrape This searches multiple job portals for positions matching your profile, deduplicates results, and presents them sorted by fit. Pick a match to run /apply on it directly — or, when a scrape returns more jobs than you want to eyeball, run /rank to batch-score them all against the fit framework and get a ranked shortlist first.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-539",
    "topic": "AI & Machine Learning",
    "question": "How to Contribute to AI Interview System?",
    "answer": "- Take a look at the Existing Issues or create your own Issues! - Wait for the Issue to be assigned to you. - Fork the repository - Have a look at Contibuting Guidelines --- Github Discussions ---",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-540",
    "topic": "AI & Machine Learning",
    "question": "How do CNNs deal with overfitting?",
    "answer": "Convolutional Neural Networks (CNNs) handle overfitting through a combination of techniques that are tailored to their unique architecture, data characteristics, and computational demands.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-541",
    "topic": "AI & Machine Learning",
    "question": "Describe the concept of overfitting and underfitting in machine learning models.",
    "answer": "Overfitting and underfitting are phenomena that arise when training machine learning models.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-542",
    "topic": "AI & Machine Learning",
    "question": "Why Use Cross-Validation Over Train/Test Split?",
    "answer": "- Maximizes Dataset Utility: With cross-validation, every data point is used for both training and testing, minimizing information loss. - More Reliable Performance Estimates: Cross-validation produces multiple performance metrics (such as accuracy or mean squared error), allowing for the calculation of standard deviation and confidence intervals. - Helps Combat Overfitting: Models consistently performing better on the training set than the test set are likely overfitted, a phenomenon easily detectable with cross-validation.",
    "tags": [
      "performance",
      "testing"
    ]
  },
  {
    "id": "q-ai-machine-learning-543",
    "topic": "AI & Machine Learning",
    "question": "What is regularization and how does it help prevent overfitting?",
    "answer": "Regularization is a set of techniques used in machine learning to prevent overfitting. It accomplishes this by adding penalties to the model's loss function, leading to more generalized models. Two common types of regularization are Lasso (L1) and Ridge (L2), each with its unique penalty strategy.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-544",
    "topic": "AI & Machine Learning",
    "question": "Describe the concept of Overfitting and Underfitting in ML models.",
    "answer": "Overfitting and underfitting are two types of modeling errors that occur in machine learning.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-545",
    "topic": "AI & Machine Learning",
    "question": "Explain the concept of Cross-Validation and its importance in ML.",
    "answer": "Cross-Validation (CV) is a robust technique for assessing the performance of a machine learning model, especially when it involves hyperparameter tuning or comparing multiple models. It addresses issues such as overfitting and ensures a more reliable performance estimate on unseen data.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ai-machine-learning-546",
    "topic": "AI & Machine Learning",
    "question": "What is Feature Selection and its techniques?",
    "answer": "Feature Selection is a critical step in the machine learning pipeline. It aims to identify the most relevant features from a dataset, leading to improved model performance, reduced overfitting, and faster training times.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ai-machine-learning-547",
    "topic": "AI & Machine Learning",
    "question": "Wrapper Methods",
    "answer": "- Description: Wrapper methods select features based on their performance with a specific machine learning algorithm. Common techniques include Recursive Feature Elimination (RFE) and Forward-Backward Selection. - Advantages: They take feature dependencies into account and can improve model accuracy. - Limitations: They can be computationally expensive and prone to overfitting.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ai-machine-learning-548",
    "topic": "AI & Machine Learning",
    "question": "Define deep learning and how it differs from other machine learning approaches.",
    "answer": "Deep Learning represents a subset of machine learning that emphasizes multi-layered artificial neural networks. These deep neural networks (DNNs) have the unparalleled ability to learn from unstructured or unlabeled data.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-549",
    "topic": "AI & Machine Learning",
    "question": "What is an artificial neural network?",
    "answer": "An Artificial Neural Network (ANN) is an advanced computational model inspired by the human brain. It's characterized by its structure of interconnected nodes and their ability to perform tasks, such as pattern recognition, through learning algorithms.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-550",
    "topic": "AI & Machine Learning",
    "question": "Explain the concept of 'depth' in deep learning.",
    "answer": "In the context of Deep Learning, the term \"depth\" refers to the number of layers in a neural network, and is a key differentiator from traditional, shallow learning models.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-551",
    "topic": "AI & Machine Learning",
    "question": "What are activation functions, and why are they necessary?",
    "answer": "Activation functions play a crucial role in deep learning by introducing non-linearity to the model. This enables the neural network to learn complex patterns and achieve accurate predictions.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-552",
    "topic": "AI & Machine Learning",
    "question": "Why Non-linearity is Essential in Neural Networks",
    "answer": "- Without non-linearity, the entire neural network reduces to a single-layer model, making it incapable of learning from intricate, real-world data. - To understand why, consider a network that only performs linear transformations ($y = mx + b$). No matter the number of layers, the output will be a linear combination of the inputs, simplifying the entire network to a single linear transformation.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-553",
    "topic": "AI & Machine Learning",
    "question": "Describe the role of weights and biases in neural networks.",
    "answer": "The neural network utilizes both weights and biases to transform input data into the corresponding output.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-554",
    "topic": "AI & Machine Learning",
    "question": "What is the vanishing gradient problem, and how can it be avoided?",
    "answer": "The Vanishing Gradient Problem arises in deep neural networks when gradients become increasingly small as they propagate backward through multiple layers during training.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-555",
    "topic": "AI & Machine Learning",
    "question": "Explain the difference between shallow and deep neural networks.",
    "answer": "Shallow neural networks have a limited number of layers while deep neural networks (> 3) layers are characterized by a deeper, more complex architecture.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-556",
    "topic": "AI & Machine Learning",
    "question": "What is the universal approximation theorem?",
    "answer": "The Universal Approximation Theorem (UAT) establishes the remarkable capability of certain types of neural networks to approximate essentially any continuous function. This theorem laid the foundation for the widespread adoption of neural networks and remains an essential theoretical underpinning to deep learning.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-557",
    "topic": "AI & Machine Learning",
    "question": "How do dropout layers help prevent overfitting?",
    "answer": "Dropout layers in neural networks are a powerful weapon against overfitting.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-558",
    "topic": "AI & Machine Learning",
    "question": "What is forward propagation and backpropagation?",
    "answer": "Forward propagation involves the initial flow of input data through the layers of a neural network, whereas backpropagation is the subsequent flow of error signals from the network's output back to its input, updating the model's weights to minimize the error.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-559",
    "topic": "AI & Machine Learning",
    "question": "What is a Convolutional Neural Network (CNN), and when would you use it?",
    "answer": "A Convolutional Neural Network (CNN) is a deep learning model tailored for tasks involving visual data, such as image or video recognition. Its unique architecture takes into account the spatial nature of images, handling them more efficiently than traditional deep learning models like standard multilayer perceptrons.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-560",
    "topic": "AI & Machine Learning",
    "question": "Explain Recurrent Neural Networks (RNNs) and their use cases.",
    "answer": "Recurrent Neural Networks (RNNs) are a class of deep learning models specifically designed to handle sequential data. They achieve this capability through internal memory, enabling them to process inputs of varying lengths while considering temporal dependencies.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ai-machine-learning-561",
    "topic": "AI & Machine Learning",
    "question": "Discuss the architecture and applications of Long Short-Term Memory networks (LSTMs).",
    "answer": "LSTMs are a type of RNN with a more sophisticated structure that helps mitigate the vanishing gradient problem, making them particularly effective for tasks handling sequential data.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ai-machine-learning-562",
    "topic": "AI & Machine Learning",
    "question": "What is the significance of Residual Networks (ResNets)?",
    "answer": "Residual Networks, or ResNets, are a meaningful architectural development that have significantly impacted the field of deep learning by alleviating the vanishing gradient problem. This divergence from traditional architectures has enabled substantially deeper neural networks, leading to improved accuracy in both training and testing stages.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-ai-machine-learning-563",
    "topic": "AI & Machine Learning",
    "question": "How does a Transformer architecture function, and in what context is it typically used?",
    "answer": "The Transformer architecture is a type of neural network that has made a considerable impact in natural language processing (NLP) tasks, thanks to its parallel processing and scalability. It eliminates the need for recurrent or convolutional layers, which can be computationally expensive.",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-ai-machine-learning-564",
    "topic": "AI & Machine Learning",
    "question": "What does HTML stand for and what is its purpose?",
    "answer": "HTML or Hyper Text Markup Language is the standard language for creating web pages and applications. HTML5, the latest version as of 2022, introduces several new elements and attributes, elevating user experience and software application standards. HTML is responsible for structuring web content, ensuring accessibility, and guiding how web pages are visually presented. It remains the foundational structure for running nearly all web content.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-ai-machine-learning-565",
    "topic": "AI & Machine Learning",
    "question": "Describe the basic structure of an HTML document.",
    "answer": "HyperText Markup Language (HTML) serves as the backbone of web content, defining its structure and semantics. We will now walk you through the fundamental elements of an HTML document.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-566",
    "topic": "AI & Machine Learning",
    "question": "What do DOCTYPE and html lang attributes do?",
    "answer": "Document Type (DOCTYPE) and the lang attribute play crucial roles in our webpages.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-567",
    "topic": "AI & Machine Learning",
    "question": "What is the difference between head and body tags?",
    "answer": "While the \\ and \\ tags are fundamental to every HTML document, they serve distinct purposes and are located in separate areas of the web page.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-568",
    "topic": "AI & Machine Learning",
    "question": "Role and Content",
    "answer": "- Head: Houses meta-information, such as document title, character encoding, and stylesheets, all of which are essential for page setup but not visible to the user. - Body: Contains the bulk of visible content, including text, images, videos, links, and more.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-569",
    "topic": "AI & Machine Learning",
    "question": "Placement in the HTML File",
    "answer": "- Head: Precedes the body and provides setup before actual content is rendered. - Body: Follows the head section and encompasses all visible content.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-570",
    "topic": "AI & Machine Learning",
    "question": "Common Elements in Each Section",
    "answer": "- Head: Typically links to CSS files or may have inline CSS, contains the document title, any JavaScript reference, character set declaration, and meta tags. - Body: Holds structural components like headers, navbars, articles, sections, and the footer, along with visual content like images and visible text.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-571",
    "topic": "AI & Machine Learning",
    "question": "Can you explain the purpose of meta tags in HTML?",
    "answer": "Meta tags provide metadata about a web page through information invisible to visitors but essential for search engines, social media, and other web technology. This metadata includes details such as the page's title, keywords, and description.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-572",
    "topic": "AI & Machine Learning",
    "question": "How do you link a CSS file to an HTML document?",
    "answer": "Linking a CSS file to an HTML document is a fundamental step for styling. This is generally done by indicating the CSS file's path in the head section of the HTML file using tags.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-573",
    "topic": "AI & Machine Learning",
    "question": "How do you link a JavaScript file to an HTML document?",
    "answer": "To link a JavaScript file to an HTML document, you need to use the HTML tag. There are two primary ways to do this: 1. External Script File: Link a separate JavaScript file to your HTML document. 2. Inline Script: Embed JavaScript code directly within your HTML file.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-574",
    "topic": "AI & Machine Learning",
    "question": "How do you add a comment in HTML and why would you use them?",
    "answer": "To add a comment in HTML, wrap it between . For example: Hello, World!",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-575",
    "topic": "AI & Machine Learning",
    "question": "When are Comments Unnecessary?",
    "answer": "- Trivial Cases: Comments like \" wrapper\" or \" tag\" denote the obvious. - Self-Explanatory Code: Writing self-descriptive code eliminates the need for specific comments.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-576",
    "topic": "AI & Machine Learning",
    "question": "How do you serve your page in multiple languages?",
    "answer": "Let's discuss the best practices for serving web pages in multiple languages and the corresponding HTML5 tag, .",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-577",
    "topic": "AI & Machine Learning",
    "question": "What are data- attributes and when should they be used?",
    "answer": "Data attributes in HTML5, often referred to as data- attributes, help embed custom data within HTML elements. This presents a powerful tool for web developers, facilitating streamlined JavaScript and CSS operations.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-578",
    "topic": "AI & Machine Learning",
    "question": "What is the difference between b and strong tags?",
    "answer": "The and tags are both used for text emphasis in HTML, but they have different semantic meanings.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-579",
    "topic": "AI & Machine Learning",
    "question": "When would you use em over i, and vice versa?",
    "answer": "Let's see the difference between 'em' and 'i' HTML tags.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-580",
    "topic": "AI & Machine Learning",
    "question": "When to Use 'em'",
    "answer": "The 'em' tag italicizes the text by default and should be reserved for occasions when emphasis is needed. One potential usage could be for interactive instructions: Press Enter to submit.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-581",
    "topic": "AI & Machine Learning",
    "question": "When to Use 'i'",
    "answer": "The 'i' tag, or italics tag, is often avoided for text styling. Instead, consider semantic HTML, CSS, or more explicit HTML options like for emphasis, when possible. Here's an example of combined with CSS for an additional bit of fluorescence. His anger was palpable.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-582",
    "topic": "AI & Machine Learning",
    "question": "What is the purpose of small, s, and mark tags?",
    "answer": "The small, s, and mark HTML5 tags are used to alter the structure and presentation of text content.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-583",
    "topic": "AI & Machine Learning",
    "question": "What are semantic HTML tags and why are they important?",
    "answer": "Semantic HTML tags provide both structure and meaning to web content. They allow crawlers, browsers, and even assistive technologies to understand content better and present it more effectively. This approach improves accessibility and search engine optimization, making pages easier to maintain and understand.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ai-machine-learning-584",
    "topic": "AI & Machine Learning",
    "question": "How do you create a paragraph or a line break in HTML?",
    "answer": "In HTML, to create a paragraph, use ... tags, and to insert a line break, use tag.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-585",
    "topic": "AI & Machine Learning",
    "question": "Ring Attention",
    "answer": "Distributes the attention matrix computation across a cluster of GPUs by passing blocks of Keys and Values in a ring, bypassing single-device VRAM limits.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-586",
    "topic": "AI & Machine Learning",
    "question": "FlashAttention-3",
    "answer": "A hardware-aware algorithm that utilizes asynchronous TMAX/TMIN operations on modern GPUs to reduce memory I/O overhead, maintaining $O(n^2)$ logic with significantly lower latency.",
    "tags": [
      "async",
      "performance"
    ]
  },
  {
    "id": "q-ai-machine-learning-587",
    "topic": "AI & Machine Learning",
    "question": "State Space Models (SSMs) & Hybrids",
    "answer": "Models like Mamba-2 or Jamba handle long-term dependencies with $O(n)$ complexity by replacing or augmenting the attention mechanism with a recurrent-style hidden state $\\mathbf{h}t$: $$\\mathbf{h}t = \\mathbf{A}\\mathbf{h}{t-1} + \\mathbf{B}\\mathbf{x}t$$ $$\\mathbf{y}t = \\mathbf{C}\\mathbf{h}t$$",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-588",
    "topic": "AI & Machine Learning",
    "question": "KV Cache Compression",
    "answer": "Techniques like StreamingLLM and H2O (Heavy Hitter Oracle) prune the KV cache, retaining only \"attention sinks\" and recent high-activation tokens to maintain context without linear memory growth.",
    "tags": [
      "performance",
      "security"
    ]
  },
  {
    "id": "q-ai-machine-learning-589",
    "topic": "AI & Machine Learning",
    "question": "Advanced Linguistic Processing (NLP)",
    "answer": "Zero-Shot Inference: Utilizing In-Context Learning (ICL) to perform tasks without parameter updates. Semantic Sentiment Analysis: Moving beyond keyword matching to understanding nuanced sarcasm and emotional gradients using Causal Decoder-only architectures. Entity Disambiguation: Leveraging high-dimensional embeddings to distinguish between identical tokens in varying semantic contexts.",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-ai-machine-learning-590",
    "topic": "AI & Machine Learning",
    "question": "Multimodal Content Synthesis",
    "answer": "Diffusion-Transformer (DiT) Integration: Blending LLM reasoning with diffusion backbones for temporally consistent video and image generation. Contextual Expansion: Generating long-form technical documentation where consistency is maintained across $10^6+$ token windows. Cross-Modal Style Transfer: Translating the \"tone\" of a text document into visual or auditory assets.",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-ai-machine-learning-591",
    "topic": "AI & Machine Learning",
    "question": "Neural Machine Translation (NMT)",
    "answer": "Low-Resource Language Support: Utilizing back-translation and synthetic data to support dialects with minimal native training corpora. Polyglot Reasoning: Real-time translation that preserves idiomatic integrity and technical nomenclature across specialized domains (e.g., quantum computing, maritime law).",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-592",
    "topic": "AI & Machine Learning",
    "question": "Hyper-Personalized Pedagogy",
    "answer": "Socratic Tutoring: AI tutors that guide students through problem-solving steps rather than providing direct answers. Knowledge Graph Mapping: Aligning LLM outputs with verified educational ontologies to prevent hallucinations in STEM subjects.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-593",
    "topic": "AI & Machine Learning",
    "question": "Bio-Medical & Life Sciences",
    "answer": "Proteomics and Genomics: Fine-tuned LLMs (e.g., ESM-3 variants) predicting protein folding and molecular interactions. Clinical Trial Optimization: Synthesizing patient data to identify viable candidates and predicting adverse drug-drug interactions via high-dimensional embedding clusters.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ai-machine-learning-594",
    "topic": "AI & Machine Learning",
    "question": "Collaborative Creative Intelligence",
    "answer": "World Building: Generating internally consistent lore and physics constraints for gaming and cinematic production. Co-Pilot Composition: Serving as a recursive feedback loop for authors, providing structural critiques based on narratological frameworks.",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-ai-machine-learning-595",
    "topic": "AI & Machine Learning",
    "question": "Automated Research & Synthesis",
    "answer": "RAG-Enhanced Literature Review: Utilizing Retrieval-Augmented Generation to synthesize peer-reviewed data while providing verifiable citations. Hypothesis Generation: Identifying \"white spaces\" in scientific literature by mapping the connectivity of disparate research papers.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-596",
    "topic": "AI & Machine Learning",
    "question": "Ubiquitous Accessibility",
    "answer": "Neural Speech Synthesis: Converting text to speech with human-level prosody and emotional inflection. Visual Semantic Description: Real-time video-to-text for the visually impaired, describing complex social dynamics and environmental hazards.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-597",
    "topic": "AI & Machine Learning",
    "question": "Legal Tech & Computational Law",
    "answer": "Automated Redlining: Identifying clauses in contracts that deviate from a firm’s \"Gold Standard\" or specific jurisdictional statutes. E-Discovery Automation: Scanning petabytes of litigation data to identify relevant patterns with a recall rate exceeding human paralegal capabilities. ---",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-598",
    "topic": "AI & Machine Learning",
    "question": "Zero-shot Translation",
    "answer": "Modern Causal Decoder-only LLMs perform translation via next-token prediction without explicit parallel corpora training. They leverage high-dimensional cross-lingual mappings learned during pre-training.",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-ai-machine-learning-599",
    "topic": "AI & Machine Learning",
    "question": "In-Context Learning (Few-shot)",
    "answer": "LLMs utilize In-Context Learning (ICL) to align with specific lexical choices or dialectal nuances by providing a few exemplar pairs in the prompt prefix.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-600",
    "topic": "AI & Machine Learning",
    "question": "Many-to-Many Multilingual Translation",
    "answer": "Unlike traditional Neural Machine Translation (NMT) which often required $N(N-1)$ models, a single LLM acts as a universal pivot. They utilize shared subword embeddings (e.g., Tiktoken or SentencePiece) to represent multiple languages in a unified vector space.",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-ai-machine-learning-601",
    "topic": "AI & Machine Learning",
    "question": "Long-Context Aware Translation",
    "answer": "LLMs with context windows exceeding $10^6$ tokens can ingest entire documents to maintain discourse consistency. This solves the \"anaphora resolution\" problem where pronouns must match the gender/number of nouns mentioned chapters earlier.",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-ai-machine-learning-602",
    "topic": "AI & Machine Learning",
    "question": "Steerable Style and Formality",
    "answer": "Through System Prompting, LLMs can be constrained to specific personas (e.g., \"Technical Writer,\" \"Victorian Novelist\"). This utilizes the model's ability to navigate different regions of the latent space during the decoding process.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-603",
    "topic": "AI & Machine Learning",
    "question": "Cross-lingual Transfer for Low-resource Languages",
    "answer": "LLMs exhibit Cross-lingual Transfer where knowledge from high-resource languages (English/Spanish) assists in translating low-resource languages (Quechua/Wolof). This is achieved through the shared semantic representations in the hidden layers.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-604",
    "topic": "AI & Machine Learning",
    "question": "Low-Latency Real-time Translation",
    "answer": "By employing Speculative Decoding and FlashAttention-3, LLMs minimize the $O(n^2)$ self-attention bottleneck, enabling streaming translation for live captions with sub-100ms token latency.",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-ai-machine-learning-605",
    "topic": "AI & Machine Learning",
    "question": "Chain-of-Thought (CoT) Explanation",
    "answer": "LLMs can perform \"Translation Reasoning,\" where the model first analyzes the grammatical structure and idiomatic meaning before generating the target text, significantly reducing hallucination in complex metaphors. explanationprompt: str = \"\"\" Analyze the idiom \"It's raining cats and dogs,\" explain the French equivalent \"Il pleut des cordes,\" and then provide the translation. \"\"\"",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-606",
    "topic": "AI & Machine Learning",
    "question": "Domain-Specific Fine-tuning (PEFT)",
    "answer": "Using Parameter-Efficient Fine-Tuning (PEFT) such as LoRA ($W = W0 + BA$), models are specialized for legal, medical, or aerospace engineering domains using minimal compute while retaining general linguistic capabilities.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-607",
    "topic": "AI & Machine Learning",
    "question": "LLM-as-a-Judge (TQA)",
    "answer": "Traditional metrics like BLEU or METEOR are being replaced by LLM-based assessment. LLMs evaluate translations based on Fluency, Adequacy, and Semantic Compression, often outperforming human-correlated metrics via COMET-style embeddings. $$ \\text{Score} = \\text{LLM\\Eval}(\\text{Source}, \\text{Reference}, \\text{Hypothesis}) $$",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-608",
    "topic": "AI & Machine Learning",
    "question": "Function Calling and Tool Use",
    "answer": "Modern chatbots no longer rely solely on Intent Recognition via classification. Instead, they use Function Calling. The LLM parses user prompts to generate structured JSON arguments for external APIs, effectively \"acting\" rather than just \"responding.\"",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-609",
    "topic": "AI & Machine Learning",
    "question": "Contextual Entity Extraction",
    "answer": "While traditional Named Entity Recognition (NER) used Bi-LSTMs or BERT, 2026 standards utilize zero-shot extraction. LLMs identify entities and simultaneously map them to a schema using Pydantic validation, ensuring type safety in downstream logic.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-610",
    "topic": "AI & Machine Learning",
    "question": "State Management and Memory",
    "answer": "Beyond Coreference Resolution, modern systems utilize Vector Databases (e.g., Pinecone, Weaviate) to manage \"Long-term Memory.\" This avoids context window saturation by retrieving relevant past interactions via cosine similarity: $$\\text{similarity} = \\frac{A \\cdot B}{\\|A\\| \\|B\\|}$$",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ai-machine-learning-611",
    "topic": "AI & Machine Learning",
    "question": "Natural Language Generation (NLG) with Reasoning",
    "answer": "Modern NLG utilizes Chain-of-Thought (CoT) prompting. The model does not just predict the next token; it generates an internal \"scratchpad\" of reasoning steps to ensure the output is logically sound and contextually grounded.",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-ai-machine-learning-612",
    "topic": "AI & Machine Learning",
    "question": "What is MLOps and how does it differ from DevOps?",
    "answer": "MLOps is a collaborative approach that unifies data engineering, ML deployment, and DevOps. While DevOps focuses on the software development life cycle (SDLC), MLOps tailors these best practices to the Machine Learning lifecycle.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-613",
    "topic": "AI & Machine Learning",
    "question": "Can you explain the MLOps lifecycle and its key stages?",
    "answer": "MLOps is a set of practices to streamline the Machine Learning lifecycle, allowing for effective collaboration between teams, reproducibility, and automated processes. The six key stages encompass the complete workflow from development to deployment and maintenance.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-614",
    "topic": "AI & Machine Learning",
    "question": "Business Understanding & Data Acquisition",
    "answer": "- Goal: Establish a clear understanding of the problem and gather relevant data. - Activities: Define success metrics, identify data sources, and clean and preprocess data.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-615",
    "topic": "AI & Machine Learning",
    "question": "Data Preparation",
    "answer": "- Goal: Prepare the data necessary for model training and evaluation. - Activities: Split the data into training, validation, and test sets. Perform feature engineering and data augmentation.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-ai-machine-learning-616",
    "topic": "AI & Machine Learning",
    "question": "Model Building & Training",
    "answer": "- Goal: Develop a model that best fits the stated problem and data. - Activities: Perform initial model training, Select the most promising model(s) and tune hyperparameters.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-617",
    "topic": "AI & Machine Learning",
    "question": "Model Evaluation & Interpretability",
    "answer": "- Goal: Assess the model's performance and understand its decision-making process. - Activities: Evaluate the model on unseen data and interpret feature importance.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ai-machine-learning-618",
    "topic": "AI & Machine Learning",
    "question": "Model Deployment",
    "answer": "- Goal: Make the model accessible for inference in production systems. - Activities: Create APIs or services for the model. Test its integration with the production environment.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-ai-machine-learning-619",
    "topic": "AI & Machine Learning",
    "question": "Model Monitoring & Maintenance",
    "answer": "- Goal: Ensure the model's predictions remain accurate and reliable over time. - Activities: Monitor the model's performance in a live environment and retrain it when necessary, Whether through offline evaluations or automated online learning (Feedback Loop).",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ai-machine-learning-620",
    "topic": "AI & Machine Learning",
    "question": "What are some of the benefits of implementing MLOps practices in a machine learning project?",
    "answer": "MLOps is crucial for integrating Machine Learning (ML) models into functional systems. Its implementation offers a myriad of benefits:",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-621",
    "topic": "AI & Machine Learning",
    "question": "What is a model registry and what role does it play in MLOps?",
    "answer": "A model registry is a centralized and version-controlled repository for machine learning models. It serves as a linchpin in effective MLOps by streamlining model lifecycle management, fostering collaboration, and promoting governance and compliance.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-622",
    "topic": "AI & Machine Learning",
    "question": "What are feature stores, and why are they important in MLOps?",
    "answer": "A feature store is a centralized repository that stores, manages, and serves up input data and derived features. It streamlines and enhances the machine learning development process, making data more accessible and reducing duplication and redundancy. Key to Effective Machine Learning Pipelines, the feature store maintains a link between offline (historical) and online (current) data features.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-623",
    "topic": "AI & Machine Learning",
    "question": "What are DataOps and how do they relate to MLOps?",
    "answer": "DataOps and MLOps work synergistically to enhance data reliability and optimize ML deployments. While MLOps aims to streamline the entire machine learning lifecycle, DataOps focuses specifically on the data aspects.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ai-machine-learning-624",
    "topic": "AI & Machine Learning",
    "question": "Describe the significance of experiment tracking in MLOps.",
    "answer": "Experiment tracking is one of the foundational pillars of MLOps, essential for ensuring reproducibility, accountability, and model interpretability.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-625",
    "topic": "AI & Machine Learning",
    "question": "What are some popular tools and platforms used for MLOps?",
    "answer": "MLOps offers an array of tools to streamline the machine learning life cycle across development, testing, and deployment.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-ai-machine-learning-626",
    "topic": "AI & Machine Learning",
    "question": "What is the role of cloud computing in MLOps?",
    "answer": "Cloud computing fundamentally enhances MLOps by providing scalable resources, accessibility, and cost-efficiency. It enables data scientists and engineers to build, test, and deploy machine learning models seamlessly.",
    "tags": [
      "architecture",
      "testing"
    ]
  },
  {
    "id": "q-ai-machine-learning-627",
    "topic": "AI & Machine Learning",
    "question": "How would you design a scalable machine learning infrastructure?",
    "answer": "A scalable MLOps pipeline typically comprises several layers, from data management to model deployment. Each component must be optimized for efficiency and adaptability.",
    "tags": [
      "performance",
      "architecture"
    ]
  },
  {
    "id": "q-ai-machine-learning-628",
    "topic": "AI & Machine Learning",
    "question": "What considerations are important when choosing a computation resource for training machine learning models?",
    "answer": "Compute resources are vital for training machine learning models. The choice depends on the dataset size, model complexity, and budget.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-629",
    "topic": "AI & Machine Learning",
    "question": "Explain environment reproducibility and its challenges in MLOps.",
    "answer": "Ensuring reproducibility in an AI/ML project is vital for accountability, auditability, and legal compliance. However, achieving this is particularly challenging due to the complexity of ML systems.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-630",
    "topic": "AI & Machine Learning",
    "question": "How does infrastructure as code (IaC) support machine learning operations?",
    "answer": "IaC (Infrastructure as Code) streamlines infrastructure provisioning and maintenance, enhancing reliability and consistency in ML operations. Its main features include version management, reproducibility, and automated deployment.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-631",
    "topic": "AI & Machine Learning",
    "question": "Core Transformer",
    "answer": "| Problem | Links | |---------|-------| | Implement Multi-Head Attention | Q / S | | Implement Grouped Query Attention | Q / S | | Implement KV Cache | Q / S | | Implement Sliding Window Attention | Q / S |",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-632",
    "topic": "AI & Machine Learning",
    "question": "What Makes This Unique",
    "answer": "1. Iterative System Design: See exactly how to build systems step-by-step in interviews 2. Production Focus: Real costs, metrics, tradeoffs (not just toy examples) 3. Complete Code: Every algorithm, system, and pattern has working code 4. Modern Tech Stack: LangGraph, RAG, LoRA/QLoRA, agentic AI (2025 standards) 5. Interview-Optimized: 45-minute format, STAR stories, questions to ask",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ai-machine-learning-633",
    "topic": "AI & Machine Learning",
    "question": "How long Phase 4 takes: 25–35 minutes, silently",
    "answer": "This is the part nobody warns you about, so here it is up front. Once you confirm the architecture, generation runs roughly 25–35 minutes for a bundle, 12–20 for a single file, and produces no output until it is finished. That time is real work — a live registry call for every version pin, a full composition pass, and at least one validator round trip — but from your side it looks like nothing happening. The Architect is required to tell you the estimate before it starts. If it doesn't, that's a bug. Go make coffee; what comes back is a file path and the first command to run.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-634",
    "topic": "AI & Machine Learning",
    "question": "Define variance",
    "answer": "Variance is the expectation of the squared deviation of a random variable from its mean. Informally, it measures how far a set of (random) numbers are spread out from their average value. The variance is the square of the standard deviation, the second central moment of a distribution, and the covariance of the random variable with itself. Var(X) = E[(X - m)^2], m=E[X] Variance is, thus, a measure of the scatter of the values of a random variable relative to its mathematical expectation.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-635",
    "topic": "AI & Machine Learning",
    "question": "Logistic regression",
    "answer": "Log odds - raw output from the model; odds - exponent from the output of the model. Probability of the output - odds / (1+odds).",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-636",
    "topic": "AI & Machine Learning",
    "question": "Notes from Coursera Deep Learning courses by Andrew Ng",
    "answer": "Notes from Coursera Deep Learning courses by Andrew Ng",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-637",
    "topic": "AI & Machine Learning",
    "question": "Pseudo Labeling",
    "answer": "Pseudo-labeling is a technique that allows you to use predicted with confidence test data in your training process. This effectivey works by allowing your model to look at more samples, possibly varying in distributions. I have found this Kaggle kernel to be useful in understanding how one can use pseudo-labeling in light of having too few train data points.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-ai-machine-learning-638",
    "topic": "AI & Machine Learning",
    "question": "Knowledge Distillation",
    "answer": "It is the process by which a considerably larger model is able to transfer its knowledge to a smaller one. Applications include NLP and object detection allowing for less powerful hardware to make good inferences without significant loss of accuracy. Example: model compression which is used to compress the knowledge of multiple models into a single neural network. Explanation",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-639",
    "topic": "AI & Machine Learning",
    "question": "What is a confidence interval in layman's terms?",
    "answer": "Confidence interval as the name suggests is the amount of confidence associated with an interval of values to get the desired outcome. For example : if 100 - 200 range is a 95% confidence interval , it implies that someone can have 95% assurance that the data point or any desired value is present in that range.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-640",
    "topic": "AI & Machine Learning",
    "question": "What people use it for",
    "answer": "- Job interviews. Behavioral, technical and HR questions answered from your CV and the job description, which you paste once into Instructions. - Coding interviews. Screen analysis reads the task on screen (LeetCode, HackerRank, CoderPad, Codility or a shared editor) and answers with an approach and code. - Sales and client calls. The answer to a customer's question while they are still talking, and a report with next steps afterwards. - Meetings and lectures. A live transcript in 28 languages, suggested questions, and a summary with decisions and action items.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-641",
    "topic": "AI & Machine Learning",
    "question": "Is Meetingly free?",
    "answer": "Yes. The free plan gives 50 AI answers a day with no card, on one computer. With your own API key there is no Meetingly limit at all. The code is open source under Apache-2.0.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-642",
    "topic": "AI & Machine Learning",
    "question": "Is Meetingly a Cluely alternative?",
    "answer": "Yes. It does the same job (live answers in an overlay during a call), and it is open source, runs on Linux too, hides from screen sharing on the free plan, and works with your own API key or a local model.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-643",
    "topic": "AI & Machine Learning",
    "question": "Does it work with Zoom, Google Meet and Microsoft Teams?",
    "answer": "Yes, and with any other call app. Meetingly captures your computer's audio (loopback on Windows, an audio tap on macOS 13 and later, PulseAudio monitor devices on Linux), so nothing joins the meeting and the other side sees no bot.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ai-machine-learning-644",
    "topic": "AI & Machine Learning",
    "question": "Is it hidden from screen sharing? Is it undetectable?",
    "answer": "On Windows and macOS the windows use the operating system's screen-capture protection, so screen shares and recordings normally leave them out. Some capture methods can still include them, Linux has no such protection, and Meetingly is not built to get around proctoring software. No tool can honestly promise to be undetectable.",
    "tags": [
      "async"
    ]
  },
  {
    "id": "q-ai-machine-learning-645",
    "topic": "AI & Machine Learning",
    "question": "Can it help in coding interviews?",
    "answer": "Yes. Screen analysis takes a screenshot only when you press it, reads the task (LeetCode, HackerRank, CoderPad, Codility or any editor) and answers with an approach and code. With your own key, choose a model that accepts images.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-algorithms-dsa-646",
    "topic": "Algorithms & DSA",
    "question": "Algorithms, Data Science",
    "answer": "Algorithm Part I and Part II, by Robert Sedgewick and Kevin Wayne, Princeton Coursera. > Char 1-6 | Char 7-12 | PDF Notes | Markdown Notes Kaggle Notes > Kaggle Mini-courses | PDF Notes | Markdown Notes --- Connect with me: &nbsp; GitHub • Resume • LinkedIn • X • Email • Instagram • Facebook • Douban • WeChat",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-647",
    "topic": "Frontend & Web",
    "question": "What does CSS stand for and what is its primary use?",
    "answer": "Cascading Style Sheets (CSS) is primarily designed to separate web page content from its visual presentation. This allows for a consistent and adaptable design across multiple web pages.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-648",
    "topic": "Frontend & Web",
    "question": "How do you include CSS in your HTML document?",
    "answer": "There are four primary methods to incorporate CSS in an HTML document, each presenting unique advantages and use cases.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-649",
    "topic": "Frontend & Web",
    "question": "Can you explain the difference between class and ID selectors?",
    "answer": "Class and ID selectors in CSS serve distinct roles and have limitations in their applicability.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-650",
    "topic": "Frontend & Web",
    "question": "What are pseudo-classes in CSS?",
    "answer": "Pseudo-classes are special keywords in CSS that allow you to apply styles to elements based not only on their state or position in the document tree but also on user interaction.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-651",
    "topic": "Frontend & Web",
    "question": "Describe how to implement a CSS reset and why it is useful.",
    "answer": "A CSS reset is a set of styles intended to reduce browser inconsistencies in elements such as margins, paddings, and various typical style defaults.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-652",
    "topic": "Frontend & Web",
    "question": "How do you select elements by attribute in CSS?",
    "answer": "While programming in CSS, you can leverage attribute selectors to define rules based on the presence or value of specific HTML attributes.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-653",
    "topic": "Frontend & Web",
    "question": "What is a pseudo-element, and what are they used for?",
    "answer": "Pseudo-elements are virtual elements that give developers the power to style parts of an HTML document that don't correspond to actual HTML elements. Essentially, they let you apply styles to specific parts of an element without the need for extra HTML markup. Commonly used pseudo-elements include ::before and ::after which let developers insert content before or after an element, respectively.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-654",
    "topic": "Frontend & Web",
    "question": "Hacks for Older Browsers",
    "answer": "- Link: Sometimes, especially with prior versions of Internet Explorer, using pseudo-elements proves crucial for achieving desired stylings. - Implementation: Useful for applying specifically crafted styles that wouldn't work properly on older browsers without this technique.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-655",
    "topic": "Frontend & Web",
    "question": "Explain the difference between the child combinator and the descendant combinator.",
    "answer": "The child combinator (>) and the descendant combinator () both serve to target HTML elements with CSS. However, they operate in different ways.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-656",
    "topic": "Frontend & Web",
    "question": "How would you select all direct children elements of a particular type?",
    "answer": "To select all direct children of a specific type in CSS, you can use the > child selector combined with the desired element to build the selector. For example, to select all the direct children that are elements within an element, you would use the following CSS: ul > li { / Styles here / }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-657",
    "topic": "Frontend & Web",
    "question": "When To Use Sibling Combinator",
    "answer": "The Sibling Combinator (+) in CSS targets elements that are immediately preceded by a specified element. Unlike child (>) or descendant (whitespace) selectors, the sibling combinator allows direct sibling targeting. - When to Use: For DOM structures where direct sibling relationships are key, such as tabbed content or multi-step forms. - Best Practices: While direct sibling targeting is useful, ensure it's the most efficient method for your objective. Overreliance can lead to inflexible CSS and HTML structures.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-658",
    "topic": "Frontend & Web",
    "question": "What is the CSS Box Model?",
    "answer": "The Box Model is the foundational concept in CSS that describes the structure of an HTML element. It encompasses four key components: content, padding, border, and margin.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-659",
    "topic": "Frontend & Web",
    "question": "Explain margin collapsing.",
    "answer": "Margin collapsing can occur when there are adjacent vertical margins between elements. In such cases, the larger of the two margins becomes the \"collapsed margin.\"",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-660",
    "topic": "Frontend & Web",
    "question": "How do you center a block element with CSS?",
    "answer": "To center a block-level element using CSS, there are several methods, which handle either horizontal or vertical alignment.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-661",
    "topic": "Frontend & Web",
    "question": "What is the difference between block, inline, and inline-block elements?",
    "answer": "Block elements, by default, stack vertically, while inline elements sit next to each other on the same line. Inline-block elements combine characteristics of both, stacking vertically and allowing for adjustments in height, margin, and padding.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-662",
    "topic": "Frontend & Web",
    "question": "What is semantic HTML?",
    "answer": "Semantic HTML uses specific HTML elements to provide additional information about the structure and content of the page, making it more accessible and easy to read. 4. ### What are different types of list in HTML? There are 3 types of list in HTML. They are Ordered list, unordered list and definition list. 5. ### What is the difference between div element and span element? The div element is a block-level element that is used to group and organize other HTML elements while span element is an inline-element that is used to apply style or attribute to a specific part of a block-level element.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-663",
    "topic": "Frontend & Web",
    "question": "What are different types of list in HTML?",
    "answer": "There are 3 types of list in HTML. They are Ordered list, unordered list and definition list. 5. ### What is the difference between div element and span element? The div element is a block-level element that is used to group and organize other HTML elements while span element is an inline-element that is used to apply style or attribute to a specific part of a block-level element.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-664",
    "topic": "Frontend & Web",
    "question": "What is the difference between div element and span element?",
    "answer": "The div element is a block-level element that is used to group and organize other HTML elements while span element is an inline-element that is used to apply style or attribute to a specific part of a block-level element.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-665",
    "topic": "Frontend & Web",
    "question": "How do you create a hyperlink in HTML?",
    "answer": "Hyperlinks are created using \\(anchor) tag, which contains the URL of the link and the text to be displayed. 10. ### What is the purpose of the alt attribute in HTML? The alt attribute is used to provide a text description of an image for users who are unable in to see the image, such as those who use screen readers.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-666",
    "topic": "Frontend & Web",
    "question": "What is the purpose of the alt attribute in HTML?",
    "answer": "The alt attribute is used to provide a text description of an image for users who are unable in to see the image, such as those who use screen readers.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-667",
    "topic": "Frontend & Web",
    "question": "What is the purpose of \\ tag?",
    "answer": "The \\ tag in HTML is used to provide metadata about document, such as title of page, links and other information that is not directly displayed on the web page. This information is used by browser and search engine to understand the content and structure of the web page. 20. ### What is the purpose of the \\ tag in HTML? The \\ tag is used to provide additional information about the webpage, such as author, keywords, description which is used by search engines to understand the content of the page.",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-frontend-web-668",
    "topic": "Frontend & Web",
    "question": "What is the purpose of the \\ tag in HTML?",
    "answer": "The \\ tag is used to provide additional information about the webpage, such as author, keywords, description which is used by search engines to understand the content of the page.",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-frontend-web-669",
    "topic": "Frontend & Web",
    "question": "what is the difference between HTML tag and HTML element?",
    "answer": "HTML tag is just opening or closing entity. For example \\ and \\ are called HTML tags. HTML element consists of opening tag, closing tag and content(optional for content-less tags). For example: \\ This is the content \\, this complete thing is called HTML element.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-670",
    "topic": "Frontend & Web",
    "question": "What is the use of \"target\" attribute in HTML?",
    "answer": "The \"target\" attribute is used to specify where to open the linked document when the user clicks on the hyperlink. 30. ### What is the use of \"em\" tag? The \"em\" tag is a semantic tag which is used to apply emphasis to a word or phrase within a paragraph. Example: The sentence \"I really enjoyed cycling\" could be written using the \"em\" tag to emphasize the word \"really\": \"I \\really \\ enjoyed the concert last night.\"",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-671",
    "topic": "Frontend & Web",
    "question": "What is the use of \"em\" tag?",
    "answer": "The \"em\" tag is a semantic tag which is used to apply emphasis to a word or phrase within a paragraph. Example: The sentence \"I really enjoyed cycling\" could be written using the \"em\" tag to emphasize the word \"really\": \"I \\really \\ enjoyed the concert last night.\"",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-672",
    "topic": "Frontend & Web",
    "question": "What is the use of \\ tag?",
    "answer": "The \\ tag is used to define an option in a dropdown list. The 'value' attribute in \\ tag is specifies the value of the option that will be submitted when the form is submitted. 43. ### How can you make an image clickable in html? To make an image clickable, we have to use anchor tag with the image tag nested inside it and specify where we want to be directed to in \"href\" attribute when image in click. 44. ### Details about all tags used in HTML table. | Tag Name | Definition |",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-673",
    "topic": "Frontend & Web",
    "question": "How can you make an image clickable in html?",
    "answer": "To make an image clickable, we have to use anchor tag with the image tag nested inside it and specify where we want to be directed to in \"href\" attribute when image in click. 44. ### Details about all tags used in HTML table. | Tag Name | Definition |",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-674",
    "topic": "Frontend & Web",
    "question": "What are HTML entities?",
    "answer": "HTML entities are codes used to represent special characters in HTML that cannot be easily typed or displayed. Example: &amp represents (&) 49. ### What is the purpose of the \\ element in HTML5, and how is it used to optimize images? The \\ element in HTML5 is used to provide multiple versions of an image at different resolutions or sizes, and allows the browser to choose the best version to display based on the user's device and viewport size. 50. ### HTML ARIA attributes. | Attribute | Description | Example |",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-frontend-web-675",
    "topic": "Frontend & Web",
    "question": "What is the purpose of the \\ element in HTML5, and how is it used to optimize images?",
    "answer": "The \\ element in HTML5 is used to provide multiple versions of an image at different resolutions or sizes, and allows the browser to choose the best version to display based on the user's device and viewport size. 50. ### HTML ARIA attributes. | Attribute | Description | Example |",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-frontend-web-676",
    "topic": "Frontend & Web",
    "question": "What are some new features in CSS3?",
    "answer": "Some new features of CSS3 are: 1. New selectors. 2. Pseudo-classes 3. Rounded Corners(Border-radius) 4. Text shadow 5. Gradient, etc 54. ### What are the css selectors? CSS selector is a part of css rule which is used to apply styles to a target specific HTML element or group of elements. 55. ### What is universal selector in css? The universal selector is a css selector that can be used to apply styles to all elements on a page or to reset styles for all elements to their default values",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-677",
    "topic": "Frontend & Web",
    "question": "What are the css selectors?",
    "answer": "CSS selector is a part of css rule which is used to apply styles to a target specific HTML element or group of elements. 55. ### What is universal selector in css? The universal selector is a css selector that can be used to apply styles to all elements on a page or to reset styles for all elements to their default values",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-678",
    "topic": "Frontend & Web",
    "question": "What is universal selector in css?",
    "answer": "The universal selector is a css selector that can be used to apply styles to all elements on a page or to reset styles for all elements to their default values",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-679",
    "topic": "Frontend & Web",
    "question": "What is the difference between margin and padding in CSS?",
    "answer": "Margin is the space between the border of an element and the surrounding elements, while padding is the space between the content of an element and its border. 59. ### Explain the CSS display property and its values. The CSS display property controls how an element is displayed on a page. The possible values are block, inline, inline-block, none, and others. 60. ### What is the CSS position property and its values? The CSS position property controls how an element is positioned on a page. The possible values are static, relative, absolute, fixed, and sticky",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-680",
    "topic": "Frontend & Web",
    "question": "Explain the CSS display property and its values.",
    "answer": "The CSS display property controls how an element is displayed on a page. The possible values are block, inline, inline-block, none, and others. 60. ### What is the CSS position property and its values? The CSS position property controls how an element is positioned on a page. The possible values are static, relative, absolute, fixed, and sticky",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-681",
    "topic": "Frontend & Web",
    "question": "What is the CSS position property and its values?",
    "answer": "The CSS position property controls how an element is positioned on a page. The possible values are static, relative, absolute, fixed, and sticky",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-682",
    "topic": "Frontend & Web",
    "question": "What are CSS pseudo-classes? Give some examples.",
    "answer": "CSS pseudo-classes are selectors that target elements based on their state or position in the document. Some examples include :hover, :active, :focus, :first-child, :last-child, and :nth-child.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-683",
    "topic": "Frontend & Web",
    "question": "How do you create a responsive CSS animation?",
    "answer": "We can create responsive CSS animation by using relative units like percentages instead of fixed units like pixels. We can also use media queries to adjust the animation properties based on the size of the viewport. 70. ### How do you optimize CSS animations for performance? We can optimize CSS animation for performance by using techniques like reducing the number of elements being animated, minimizing the use of box-shadow and text-shadow, and using transform and opacity instead of top, left, bottom, and right.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-frontend-web-684",
    "topic": "Frontend & Web",
    "question": "How do you optimize CSS animations for performance?",
    "answer": "We can optimize CSS animation for performance by using techniques like reducing the number of elements being animated, minimizing the use of box-shadow and text-shadow, and using transform and opacity instead of top, left, bottom, and right.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-frontend-web-685",
    "topic": "Frontend & Web",
    "question": "What are gradients in CSS?",
    "answer": "It is a property of CSS which allows you to display a smooth transformation between two or more than two specified colors. There are two types of gradients in CSS. They are: Linear gradient and radial gradient. 75. ### What is the difference between linear and radial gradient in CSS? A linear gradient creates a smooth transition between two or more colors in a straight line while the radial gradient creates a smooth transition between two or more colors in a circular shape.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-686",
    "topic": "Frontend & Web",
    "question": "What is the difference between linear and radial gradient in CSS?",
    "answer": "A linear gradient creates a smooth transition between two or more colors in a straight line while the radial gradient creates a smooth transition between two or more colors in a circular shape.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-687",
    "topic": "Frontend & Web",
    "question": "How do you align items within a grid using CSS?",
    "answer": "You can align items within a grid using the justify-items and align-items properties. justify-items aligns items horizontally within a grid, while align-items aligns items vertically. 85. ### What is the difference between grid-row and grid-column in CSS Grid? grid-row is used to position an item within a row, while grid-column is used to position an item within a column. Both properties can take a value of either a number or a named grid line.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-688",
    "topic": "Frontend & Web",
    "question": "What is the difference between grid-row and grid-column in CSS Grid?",
    "answer": "grid-row is used to position an item within a row, while grid-column is used to position an item within a column. Both properties can take a value of either a number or a named grid line.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-689",
    "topic": "Frontend & Web",
    "question": "How do you delay the start of a CSS transition?",
    "answer": "You can delay the start of a CSS transition using the transition-delay property. This property specifies the amount of time to wait before starting the transition, in seconds or milliseconds. Example: transition-delay: 1s; 90. ### How do you apply a transition to multiple properties at once? You can apply a transition to multiple properties at once by separating the property names with commas in the transition-property property. example, transition-property: background-color, color, opacity;",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-690",
    "topic": "Frontend & Web",
    "question": "How do you apply a transition to multiple properties at once?",
    "answer": "You can apply a transition to multiple properties at once by separating the property names with commas in the transition-property property. example, transition-property: background-color, color, opacity;",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-691",
    "topic": "Frontend & Web",
    "question": "Can you apply multiple transformations to the same element using CSS 2D transforms?",
    "answer": "Yes, you can apply multiple transformations to the same element using CSS 2D transforms. You can do this by separating each transformation function with a space in the transform property. 95. ### What is the difference between the translate() and rotate() functions? The translate() function is used to move an element along the x-axis and/or y-axis, while the rotate() function is used to rotate an element clockwise or counterclockwise around a given point.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-692",
    "topic": "Frontend & Web",
    "question": "What is the difference between the translate() and rotate() functions?",
    "answer": "The translate() function is used to move an element along the x-axis and/or y-axis, while the rotate() function is used to rotate an element clockwise or counterclockwise around a given point.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-693",
    "topic": "Frontend & Web",
    "question": "How does color contrast applies to accessibility in web design?",
    "answer": "It is important because people with visual impairments or color blindness may have trouble seeing things if there is not enough contrast. There are guidelines for making sure there is enough contrast which makes the website content more accessible to the people. 100. ### what is css filter? CSS filters are a set of visual effects that can be applied to HTML elements using CSS. Filters can be used to adjust the appearance of an element in various ways, such as changing its color, blurring or sharpening it, adjusting its brightness or contrast, and more.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-694",
    "topic": "Frontend & Web",
    "question": "what is css filter?",
    "answer": "CSS filters are a set of visual effects that can be applied to HTML elements using CSS. Filters can be used to adjust the appearance of an element in various ways, such as changing its color, blurring or sharpening it, adjusting its brightness or contrast, and more.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-695",
    "topic": "Frontend & Web",
    "question": "What is the :not() pseudo-class used for in CSS?",
    "answer": "The :not() pseudo-class is used to select all elements that do not match the specified selector. 104. ### How do you target all even or odd elements using a pseudo-selector in CSS? The :nth-child() pseudo-selector can be used with the \"even\" or \"odd\" keyword to target all even or odd elements of a parent element. 105. ### What is the :visited pseudo-class used for in CSS? The :visited pseudo-class is used to target a link that has been visited by the user.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-696",
    "topic": "Frontend & Web",
    "question": "How do you target all even or odd elements using a pseudo-selector in CSS?",
    "answer": "The :nth-child() pseudo-selector can be used with the \"even\" or \"odd\" keyword to target all even or odd elements of a parent element. 105. ### What is the :visited pseudo-class used for in CSS? The :visited pseudo-class is used to target a link that has been visited by the user.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-697",
    "topic": "Frontend & Web",
    "question": "What is the :visited pseudo-class used for in CSS?",
    "answer": "The :visited pseudo-class is used to target a link that has been visited by the user.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-698",
    "topic": "Frontend & Web",
    "question": "What is the :checked pseudo-class used for in CSS?",
    "answer": "The :checked pseudo-class is used to target form elements that have been selected by the user, such as checkboxes or radio buttons. This can be used to change the appearance or behavior of the selected element. 110. ### What is the @media rule in CSS? The @media rule in CSS allows developers to apply styles to a web page based on the size of the device or screen being used to view it, making it more responsive.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-699",
    "topic": "Frontend & Web",
    "question": "What is the @media rule in CSS?",
    "answer": "The @media rule in CSS allows developers to apply styles to a web page based on the size of the device or screen being used to view it, making it more responsive.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-700",
    "topic": "Frontend & Web",
    "question": "How do you optimize responsive images for faster loading in CSS?",
    "answer": "To optimize responsive images for faster loading in CSS, you can use smaller file formats like JPEG and PNG, reduce the image size and resolution, and use lazy loading to only load images when they are needed.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-frontend-web-701",
    "topic": "Frontend & Web",
    "question": "What is the difference between visibility:hidden and display:none?",
    "answer": "visibility:hidden means the tag is not visible, but the space is allocated for it on the page. display:none means the tag will not appear at all and there will be no space allocated for it between the other tags. 119. ### Are quotes mandatory in URL’s? Quotes are optional in URL’s, and it can be single or double. 120. ### Explain what are web-safe fonts and fallback fonts. Web-safe fonts are fonts that are commonly installed on most devices and web browsers. Fallback fonts are alternative fonts specified in case the primary font is not available on the user's device.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-702",
    "topic": "Frontend & Web",
    "question": "Are quotes mandatory in URL’s?",
    "answer": "Quotes are optional in URL’s, and it can be single or double. 120. ### Explain what are web-safe fonts and fallback fonts. Web-safe fonts are fonts that are commonly installed on most devices and web browsers. Fallback fonts are alternative fonts specified in case the primary font is not available on the user's device.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-703",
    "topic": "Frontend & Web",
    "question": "Explain what are web-safe fonts and fallback fonts.",
    "answer": "Web-safe fonts are fonts that are commonly installed on most devices and web browsers. Fallback fonts are alternative fonts specified in case the primary font is not available on the user's device.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-704",
    "topic": "Frontend & Web",
    "question": "What is specificity in CSS?",
    "answer": "Specificity in CSS is a way of determining which CSS rule applies to an element. It is based on the number of selectors and their types in a CSS rule. Specificity is calculated using a formula: inline styles have the highest specificity, followed by IDs, classes, and then elements. 125. ### Which property is used to control the scrolling of an image in the background? The background-attachment property is used to control the scrolling of an image in the background.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-705",
    "topic": "Frontend & Web",
    "question": "Which property is used to control the scrolling of an image in the background?",
    "answer": "The background-attachment property is used to control the scrolling of an image in the background.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-706",
    "topic": "Frontend & Web",
    "question": "How can you create a CSS-only dropdown menu?",
    "answer": "A CSS-only dropdown menu can be created by using the \"hover\" pseudo-class and the \"display\" property. When the user hovers over a parent element, the \"display\" property of the child element can be set to \"block\" or \"inline-block\" to reveal the dropdown menu. 130. ### What are the potential drawbacks of using CSS frameworks such as Bootstrap? Using CSS frameworks like Bootstrap can lead to bloated code, difficulties in customizing the design, and unoriginal or generic looks",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-707",
    "topic": "Frontend & Web",
    "question": "What are the potential drawbacks of using CSS frameworks such as Bootstrap?",
    "answer": "Using CSS frameworks like Bootstrap can lead to bloated code, difficulties in customizing the design, and unoriginal or generic looks",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-708",
    "topic": "Frontend & Web",
    "question": "What are some common performance issues with TailwindCSS, and how do you optimize performance in your projects?",
    "answer": "Common performance issues with TailwindCSS include the size of the CSS file and the number of classes being generated. To optimize performance, it is important to enable the purge option in a production environment, use a caching mechanism to speed up builds, and avoid generating unnecessary classes.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-frontend-web-709",
    "topic": "Frontend & Web",
    "question": "what is the difference between sass and scss?",
    "answer": "Sass and SCSS are both CSS pre-processors and are very similar, but they have different syntax. Sass has a more concise and less verbose syntax, with no curly braces and no semicolon whereas SCSS has a syntax that is almost identical to standard CSS, with curly braces and semicolons 140. ### Can you describe a situation where you would choose not to use Sass? A developer might choose not to use Sass if they prefer to stick with standard CSS for simplicity or if they are working on a small project where the added features of Sass may not be necessary.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-710",
    "topic": "Frontend & Web",
    "question": "Can you describe a situation where you would choose not to use Sass?",
    "answer": "A developer might choose not to use Sass if they prefer to stick with standard CSS for simplicity or if they are working on a small project where the added features of Sass may not be necessary.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-711",
    "topic": "Frontend & Web",
    "question": "How do you use 'if' statements in SCSS?",
    "answer": "In SCSS, you can use the @if directive to add conditional logic to your styles. Example: //declaring variable $background-color: #333; body { @if $background-color == #333 { background-color: $background-color; } @else { background-color: #fff; } }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-712",
    "topic": "Frontend & Web",
    "question": "How do you ensure that your CSS is scalable and maintainable for large projects?",
    "answer": "We can ensure that our CSS is scalable and maintainable for large project by: 1. Using proper naming convection for ID and classes. 2. Using preprocessor like sass, less, etc. 3. Using performance enhancing techniques like lazy-loading, etc. 150. ### How do you use CSS variables to create more flexible and dynamic designs, and what are some use cases where variables are particularly useful? CSS variables can improve maintainability and reduce repetition. Variables are particularly useful for theming, creating responsive designs, and making changes to global styles.",
    "tags": [
      "performance",
      "architecture"
    ]
  },
  {
    "id": "q-frontend-web-713",
    "topic": "Frontend & Web",
    "question": "How do you use CSS variables to create more flexible and dynamic designs, and what are some use cases where variables are particularly useful?",
    "answer": "CSS variables can improve maintainability and reduce repetition. Variables are particularly useful for theming, creating responsive designs, and making changes to global styles.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-714",
    "topic": "Frontend & Web",
    "question": "What is the difference between let, const, and var in JavaScript?",
    "answer": "The var keyword is used for variable declaration in older versions of JavaScript, while let and const were introduced in ES6. Var has a function-level scope, while let and const have block-level scope. Additionally, const variables cannot be reassigned after being declared, while let variables can be. 155. ### How do you convert a string to a number in JavaScript? You can use the Number() or parseFloat() functions to convert a string to a number in JavaScript.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-715",
    "topic": "Frontend & Web",
    "question": "How do you convert a string to a number in JavaScript?",
    "answer": "You can use the Number() or parseFloat() functions to convert a string to a number in JavaScript.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-716",
    "topic": "Frontend & Web",
    "question": "What are first class function?",
    "answer": "First-class functions means when functions in that language are treated like any other variable. This means that functions can be assigned to variables, passed as arguments to other functions, and returned from functions.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-717",
    "topic": "Frontend & Web",
    "question": "What are modules in javascript?",
    "answer": "Modules are a way of organizing code into separate files or components that can be reused in different parts of an application. Modules allow you to encapsulate data and functionality, making your code more organized and easier to maintain",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-718",
    "topic": "Frontend & Web",
    "question": "What is memoization?",
    "answer": "Memoization is a technique used in computer science to speed up the execution of functions by caching the results of expensive function calls and returning the cached result when the same inputs occur again. 170. ### What is the purpose of the \"use strict\" statement in JavaScript? The \"use strict\" statement is used to enable strict mode in JavaScript, which helps to prevent common errors and make the code more secure. It prevents things like use of undeclared variable, use of keywords as variable name, using duplicate property names in objects, etc.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-719",
    "topic": "Frontend & Web",
    "question": "What is the purpose of the \"use strict\" statement in JavaScript?",
    "answer": "The \"use strict\" statement is used to enable strict mode in JavaScript, which helps to prevent common errors and make the code more secure. It prevents things like use of undeclared variable, use of keywords as variable name, using duplicate property names in objects, etc.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-720",
    "topic": "Frontend & Web",
    "question": "What is a cookie in javascript?",
    "answer": "A cookie is a small data file that a website stores on a user's computer or device. Cookies are commonly used to remember user preferences and login information, and to track user activity on a website. Cookies can also have an expiration date, after which they are automatically deleted. 172. ### What are the differences between cookie, local storage and session storage? | Feature | Cookie | Local storage | Session storage |",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-721",
    "topic": "Frontend & Web",
    "question": "What are the differences between cookie, local storage and session storage?",
    "answer": "| Feature | Cookie | Local storage | Session storage |",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-722",
    "topic": "Frontend & Web",
    "question": "What is the difference between synchronous and asynchronous code in JavaScript?",
    "answer": "Synchronous code executes tasks in sequence and waits for each task to complete before moving on, while asynchronous code can execute multiple tasks simultaneously and doesn't wait for them to complete before moving on to the next task. 175. ### What are promises in JavaScript? Promises in JavaScript are a way of handling async operations. They help us write async code that looks and behaves like sync code, making it easier to read and maintain. Promises have three states: pending, fulfilled, and rejected.",
    "tags": [
      "async"
    ]
  },
  {
    "id": "q-frontend-web-723",
    "topic": "Frontend & Web",
    "question": "What are promises in JavaScript?",
    "answer": "Promises in JavaScript are a way of handling async operations. They help us write async code that looks and behaves like sync code, making it easier to read and maintain. Promises have three states: pending, fulfilled, and rejected.",
    "tags": [
      "async"
    ]
  },
  {
    "id": "q-frontend-web-724",
    "topic": "Frontend & Web",
    "question": "What is NaN in javascript?",
    "answer": "NaN (Not A Number) is a special value in JavaScript that represents a situation where a value is not a valid number. One important thing to note is that NaN is not equal to any value, including itself. We can use the isNaN() function to check whether a value is NaN or not. 180. ### How do you find operating system details in javascript? In JavaScript, you can find the operating system details of the user by accessing the navigator object, which contains information about the user's browser and environment.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-725",
    "topic": "Frontend & Web",
    "question": "How do you find operating system details in javascript?",
    "answer": "In JavaScript, you can find the operating system details of the user by accessing the navigator object, which contains information about the user's browser and environment.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-726",
    "topic": "Frontend & Web",
    "question": "What is the difference between innerHTML and innerText?",
    "answer": "The main difference between innerText and innerHTML in the DOM is that innerText returns only the visible text content of an element, excluding any HTML tags, while innerHTML returns the complete HTML content of an element, including any nested elements and tags. 185. ### What is the role of the Window object in the DOM? The Window object in the DOM represents the browser window or tab that displays the web page. It provides methods and properties for controlling and manipulating the browser window.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-727",
    "topic": "Frontend & Web",
    "question": "What is the role of the Window object in the DOM?",
    "answer": "The Window object in the DOM represents the browser window or tab that displays the web page. It provides methods and properties for controlling and manipulating the browser window.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-728",
    "topic": "Frontend & Web",
    "question": "How do you redirect new page in javascript?",
    "answer": "To redirect to a new page using JavaScript, you can use the window.location object's assign or replace methods. Example: // Redirect to a new page window.location.assign(\"https://www.example.com\"); // Redirect to a new page and replace the current page in the browser history window.location.replace(\"https://www.example.com\");",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-729",
    "topic": "Frontend & Web",
    "question": "What is a JSON?",
    "answer": "JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications .",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-730",
    "topic": "Frontend & Web",
    "question": "What is the extends keyword in JavaScript, and how is it used for inheritance?",
    "answer": "The extends keyword is used in JavaScript to create a new class that inherits from an existing class. It is used in the class declaration syntax, like this: class ChildClass extends ParentClass { // ChildClass methods and properties } 210. ### what is the purpose of super() in javascript classes? The super() keyword in JavaScript is used to call a method or constructor of a parent class from within a subclass. It allows a subclass to inherit and use functionality from the parent class, while also adding its own functionality.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-731",
    "topic": "Frontend & Web",
    "question": "what is the purpose of super() in javascript classes?",
    "answer": "The super() keyword in JavaScript is used to call a method or constructor of a parent class from within a subclass. It allows a subclass to inherit and use functionality from the parent class, while also adding its own functionality.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-732",
    "topic": "Frontend & Web",
    "question": "What is set keyword in javascript classes?",
    "answer": "The set keyword is used to define a method that sets the value of a property. When the property is assigned a value, the set method is automatically called, and it can perform any necessary validation or processing before setting the property's value. 215. ### Can you explain the concept of instance variables in a class in JavaScript? In JavaScript, instance variables are properties of an object that are specific to an instance of a class. When we create a new instance of a class using the new keyword, each instance has its own set of instance variables that are separate from other instances.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-733",
    "topic": "Frontend & Web",
    "question": "Can you explain the concept of instance variables in a class in JavaScript?",
    "answer": "In JavaScript, instance variables are properties of an object that are specific to an instance of a class. When we create a new instance of a class using the new keyword, each instance has its own set of instance variables that are separate from other instances.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-734",
    "topic": "Frontend & Web",
    "question": "Can you explain the concept of polymorphism in classes in JavaScript?",
    "answer": "Polymorphism in JavaScript classes means that different objects can share the same methods, even if they belong to different classes. This allows us to reuse code across multiple classes and write more flexible, maintainable code.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-735",
    "topic": "Frontend & Web",
    "question": "What is the difference between Object.create() and new Object() in JavaScript?",
    "answer": "The main difference between new Object() and Object.create() is that new Object() creates a new object from scratch, while Object.create() creates a new object that inherits from an existing object.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-736",
    "topic": "Frontend & Web",
    "question": "How do you reload the current page using JavaScript's window.location object?",
    "answer": "You can reload the current page using the reload() method of the window.location object. window.location.reload(); 250. ### How do you get the value of a query parameter from the URL using JavaScript's window.location object? You can get the value of a query parameter from the URL using the searchParams property of the window.location object. For example, to get the value of a query parameter named id. const id = new URLSearchParams(window.location.search).get(\"id\");",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-737",
    "topic": "Frontend & Web",
    "question": "How do you get the value of a query parameter from the URL using JavaScript's window.location object?",
    "answer": "You can get the value of a query parameter from the URL using the searchParams property of the window.location object. For example, to get the value of a query parameter named id. const id = new URLSearchParams(window.location.search).get(\"id\");",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-738",
    "topic": "Frontend & Web",
    "question": "How do you get the current timestamp in JavaScript?",
    "answer": "You can get the current timestamp in JavaScript using the getTime() method of the Date object, which returns the number of milliseconds since January 1, 1970, 00:00:00 UTC. 255. ### How do you add or subtract days to a date in JavaScript? You can add or subtract days to a date in JavaScript using the setDate() method of the Date object, which allows you to set the day of the month for a given date. let date = new Date(); date.setDate(date.getDate() + 3); console.log(date); // Output: the date 3 days from now",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-739",
    "topic": "Frontend & Web",
    "question": "How do you add or subtract days to a date in JavaScript?",
    "answer": "You can add or subtract days to a date in JavaScript using the setDate() method of the Date object, which allows you to set the day of the month for a given date. let date = new Date(); date.setDate(date.getDate() + 3); console.log(date); // Output: the date 3 days from now",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-740",
    "topic": "Frontend & Web",
    "question": "What is throttling?",
    "answer": "Throttling is a technique used in JavaScript to control the rate at which a particular function or code block is executed. It ensures that the function is called at a maximum frequency or a specified interval, preventing it from being invoked too frequently.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-741",
    "topic": "Frontend & Web",
    "question": "What is a scope chain in JavaScript's function execution context?",
    "answer": "The scope chain is a list of all the variable environments that are accessible to the function. It is used to resolve variable references during the function's execution. When a variable is not found in the current variable environment, JavaScript looks up the scope chain to find the variable in outer environments until it reaches the global execution context.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-742",
    "topic": "Frontend & Web",
    "question": "What paradigm is Javascript?",
    "answer": "JavaScript is a multi-paradigm language, supporting imperative/procedural programming, Object-Oriented Programming and functional programming. JavaScript supports Object-Oriented Programming with prototypical inheritance. 270. ### How do you empty an array? You can empty an array quickly by setting the array length to zero. let cities = [\"Singapore\", \"Delhi\", \"London\"]; cities.length = 0; // cities becomes []",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-743",
    "topic": "Frontend & Web",
    "question": "How do you empty an array?",
    "answer": "You can empty an array quickly by setting the array length to zero. let cities = [\"Singapore\", \"Delhi\", \"London\"]; cities.length = 0; // cities becomes []",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-744",
    "topic": "Frontend & Web",
    "question": "What is a spread operator?",
    "answer": "The spread operator (...) is used to spread elements from an array or object into another array, function call, or object literal. It allows you to unpack or expand the individual items or properties from the source into a destination. const fruits = ['apple', 'banana', 'orange']; const fruitSalad = ['kiwi', 'grape', ...fruits, 'melon']; //fruitSalad = [\"kiwi\", \"grape\", \"apple\", \"banana\", \"orange\", \"melon\"]",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-745",
    "topic": "Frontend & Web",
    "question": "What's a typical use case for anonymous functions?",
    "answer": "Anonymous functions are functions that are not bound to a name. They are often used as inline functions, or as arguments to other functions. One typical use case for anonymous functions is as callback functions. 279. ### What is negative Infinity? Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero. 280. ### What is the data type of variables in JavaScript? All variables in JavaScript are object data types.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-746",
    "topic": "Frontend & Web",
    "question": "What is negative Infinity?",
    "answer": "Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero. 280. ### What is the data type of variables in JavaScript? All variables in JavaScript are object data types.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-747",
    "topic": "Frontend & Web",
    "question": "What is the data type of variables in JavaScript?",
    "answer": "All variables in JavaScript are object data types.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-748",
    "topic": "Frontend & Web",
    "question": "How are JavaScript and ECMA Script related?",
    "answer": "ECMA Script is like rules and guidelines, while Javascript is a scripting language used for web development. 285. ### What are the different ways to delete a variable in JavaScript? We can delete a variable and remove it from memory in the following ways: 1. Using the delete keyword: let x = 10; console.log(x); // Output: 10 delete x; console.log(x); // Output: 10 (variable still exists but with no value) 2. Setting the variable to undefined or null: let x = 10; console.log(x); // Output: 10 x = undefined; console.log(x); // Output: undefined 3. Using a block scope with let or const:",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-frontend-web-749",
    "topic": "Frontend & Web",
    "question": "What are the different ways to delete a variable in JavaScript?",
    "answer": "We can delete a variable and remove it from memory in the following ways: 1. Using the delete keyword: let x = 10; console.log(x); // Output: 10 delete x; console.log(x); // Output: 10 (variable still exists but with no value) 2. Setting the variable to undefined or null: let x = 10; console.log(x); // Output: 10 x = undefined; console.log(x); // Output: undefined 3. Using a block scope with let or const: //Variables declared with let or const within a block scope will automatically be removed // from memory once the block is exited. {",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-frontend-web-750",
    "topic": "Frontend & Web",
    "question": "When to Use Internal and External JavaScript Code?",
    "answer": "If you have only a few lines of code that is specific to a particular webpage. In that case, it is better to keep your JavaScript code internal within your HTML document. On the other hand, if your JavaScript code is used in many web pages, you should consider keeping your code in a separate file.If your code is too long, it is better to keep it in a separate file. This helps in easy debugging.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-frontend-web-751",
    "topic": "Frontend & Web",
    "question": "What is a non-blocking function?",
    "answer": "A non-blocking function, also known as an asynchronous function, is a type of function that does not block the execution of other code while it is running. Instead of waiting for the function to complete before moving on to the next task, non-blocking functions allow the program to continue executing other tasks while it performs its operation in the background. 295. ### What is a blocking function? A blocking function is a type of function that halts the execution of the program until it completes its task or receives a response.",
    "tags": [
      "async"
    ]
  },
  {
    "id": "q-frontend-web-752",
    "topic": "Frontend & Web",
    "question": "What is a blocking function?",
    "answer": "A blocking function is a type of function that halts the execution of the program until it completes its task or receives a response.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-753",
    "topic": "Frontend & Web",
    "question": "What is a PWA?",
    "answer": "PWAs (Progressive Web Apps) are web applications that use JavaScript, HTML, and CSS to provide a mobile app-like experience. They work offline, send push notifications, and can be installed on devices. PWAs combine the best of web and app technologies, allowing users to access them directly through web browsers without the need for app store downloads.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-754",
    "topic": "Frontend & Web",
    "question": "What are the different ways to optimize JavaScript code?",
    "answer": "To optimize JavaScript code, you can combine and minify files, minimize global variables, optimize loops and conditionals, use efficient data structures and algorithms, cache data, leverage asynchronous programming, and optimize DOM manipulation.",
    "tags": [
      "async",
      "performance"
    ]
  },
  {
    "id": "q-frontend-web-755",
    "topic": "Frontend & Web",
    "question": "What is function currying?",
    "answer": "Function currying is a process in which we convert a function with multiple parameters to a chain of functions with a single parameter. // Normal function function sum(a, b) { return a + b; } // Curried function function currySum(a) { return function (b) { return a + b; } } 310. ### What does delete do in JavaScript? The delete operator is used for deleting an object’s property or key.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-frontend-web-756",
    "topic": "Frontend & Web",
    "question": "What does delete do in JavaScript?",
    "answer": "The delete operator is used for deleting an object’s property or key.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-757",
    "topic": "Mobile",
    "question": "What Are B-Trees?",
    "answer": "B-trees are search trees that provide an ordered key-value store with excellent performance characteristics. In principle, each node maintains a sorted array of its own elements, and another array for its children.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-mobile-758",
    "topic": "Mobile",
    "question": "When bounds origin will be different from 0,0?",
    "answer": "Let's take an example of UIScrollView: UIScrollView's bounds.origin will not be (0, 0) when its contentOffset is not (0, 0).",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-759",
    "topic": "Mobile",
    "question": "What are layer objects and what do they represent?",
    "answer": "Layer objects are data objects which represent visual content. Layer objects are used by views to render their content. Custom layer objects can also be added to the interface to implement complex animations and other types of sophisticated visual effects.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-760",
    "topic": "Mobile",
    "question": "What is NSFetchRequest ?",
    "answer": "NSFetchRequest is the class responsible for fetching from Core Data. Fetch requests are both powerful and flexible. You can use fetch requests to fetch a set of objects meeting the provided criteria, individual values and more.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-761",
    "topic": "Mobile",
    "question": "What is the three major debugging improvements in Xcode 8 ?",
    "answer": "The View Debugger lets us visualize our layouts and see constraint definitions at runtime. Although this has been around since Xcode 6, Xcode 8 introduces some handy new warnings for constraint conflicts and other great convenience features. The Thread Sanitizer is an all new runtime tool in Xcode 8 that alerts you to threading issues — most notably, potential race conditions. The Memory Graph Debugger is also brand new to Xcode 8. It provides visualization of your app’s memory graph at a point in time and flags leaks in the Issue navigator.",
    "tags": [
      "performance",
      "testing"
    ]
  },
  {
    "id": "q-mobile-762",
    "topic": "Mobile",
    "question": "What is TVMLKit ?",
    "answer": "TVMLKit is the glue between TVML, JavaScript, and your native tvOS application.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-763",
    "topic": "Mobile",
    "question": "What is JSON/PLIST limits ?",
    "answer": "We create your objects and then serialized them to disk.. It’s great and very limited use cases. We can’t obviously use complex queries to filter your results. It’s very slow. Each time we need something, we need to either serialize or deserialize it. it’s not thread-safe.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-764",
    "topic": "Mobile",
    "question": "What are SQLite limits ?",
    "answer": "We need to define the relations between the tables. Define the schema of all the tables. We have to manually write queries to fetch data. We need to query results and then map those to models. Queries are very fast.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-765",
    "topic": "Mobile",
    "question": "How many are there APIs for battery-efficient location tracking ?",
    "answer": "There are 3 apis. Significant location changes — the location is delivered approximately every 500 meters (usually up to 1 km) Region monitoring — track enter/exit events from circular regions with a radius equal to 100m or more. Region monitoring is the most precise API after GPS. Visit events — monitor place Visit events which are enters/exits from a place (home/office).",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-766",
    "topic": "Mobile",
    "question": "What is Remote Notifications attacment’s limits ?",
    "answer": "We can be sent with video or image with push notification. But maximum payload is 4kb.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-767",
    "topic": "Mobile",
    "question": "What is three triggers for a local notification ?",
    "answer": "Location, Calendar, and Time Interval. A Location notification fires when the GPS on your phone is at a location or geographic region. Calendar trigger is based on calendar data broken into date components. Time Interval is a count of seconds until the timer goes off.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-768",
    "topic": "Mobile",
    "question": "How could we get device token ?",
    "answer": "There are two steps to get device token. First, we must show the user’s permission screen, after we can register for remote notifications. If these steps go well, the system will provide device token. If we uninstall or reinstall the app, the device token would change.",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-mobile-769",
    "topic": "Mobile",
    "question": "What is Encapsulation ?",
    "answer": "Encapsulation is an object-oriented design principles and hides the internal states and functionality of objects. That means objects keep their state information private.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-770",
    "topic": "Mobile",
    "question": "What Is Dependency Management?",
    "answer": "If we want to integrate open source project, add a framework from a third party project, or even reuse code across our own projects, dependency management helps us to manage these relationships. Check this out",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-771",
    "topic": "Mobile",
    "question": "What is UML Class Diagrams?",
    "answer": "UML Class Diagram is a set of rules and notations for the specification of a software system, managed and created by the Object Management Group.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-772",
    "topic": "Mobile",
    "question": "What is GraphQL ?",
    "answer": "GraphQL is trying to solve creating a query interface for the clients at the application level. Apollo iOS is a strongly-typed, caching GraphQL client for iOS, written in Swift.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-773",
    "topic": "Mobile",
    "question": "Explain Common features of Protocols & superclasses",
    "answer": "implementation reuse provide points for customization interface reuse supporting modular design via dynamic dispatch on reused interfaces",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-774",
    "topic": "Mobile",
    "question": "What is Continuous Integration ?",
    "answer": "Continuous Integration allows us to get early feedback when something is going wrong during application development. There are a lot of continuous integration tools available. Self hosted server - Xcode Server - Jenkins - TeamCity - Cloud solutions - TravisCI - Bitrise - Buddybuild",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-775",
    "topic": "Mobile",
    "question": "What is the difference Delegates and Callbacks ?",
    "answer": "The difference between delegates and callbacks is that with delegates, the NetworkService is telling the delegate “There is something changed.” With callbacks, the delegate is observing the NetworkService.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-776",
    "topic": "Mobile",
    "question": "Explain Linked List",
    "answer": "Linked List basically consist of the structures we named the Node. These nodes basically have two things. The first one is the one we want to keep. (we do not have to hold single data, we can keep as much information as we want), and the other is the address information of the other node. Disadvantages of Linked Lists, at the beginning, there is extra space usage. Because the Linked List have an address information in addition to the existing information. This means more space usage.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-777",
    "topic": "Mobile",
    "question": "Explain AutoLayout",
    "answer": "AutoLayout provides a flexible and powerful layout system that describes how views and the UI controls calculates the size and position in the hierarchy.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-778",
    "topic": "Mobile",
    "question": "What is the disadvantage to hard-coding log statements ?",
    "answer": "First, when you start to log. This starts to accumulate. It may not seem like a lot, but every minute adds up. By the end of a project, those stray minutes will equal to hours. Second, Each time we add one to the code base, we take a risk of injecting new bugs into our code.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-779",
    "topic": "Mobile",
    "question": "What is pair programming?",
    "answer": "Pair programming is a tool to share information with junior developers. Junior and senior developer sitting side-by-side this is the best way for the junior to learn from senior developers. Check out Martin Fowler on “Pair Programming Misconceptions”, WikiHow on Pair Programming",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-780",
    "topic": "Mobile",
    "question": "Explain blocks",
    "answer": "Blocks are a way of defining a single task or unit of behavior without having to write an entire Objective-C class. they are anonymous functions.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-781",
    "topic": "Mobile",
    "question": "What is Keychain ?",
    "answer": "Keychain is an API for persisting data securly in iOS App. There is a good library - Locksmith",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-782",
    "topic": "Mobile",
    "question": "What is the biggest changes in UserNotifications ?",
    "answer": "We can add audio, video and images. We can create custom interfaces for notifications. We can manage notifications with interfaces in the notification center. New Notification extensions allow us to manage remote notification payloads before they’re delivered.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-783",
    "topic": "Mobile",
    "question": "Explain to using Class and Inheritance benefits",
    "answer": "With Overriding provides a mechanism for customization Reuse implementation Subclassing provides reuse interface Modularity Subclasses provide dynamic dispatch",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-784",
    "topic": "Mobile",
    "question": "Explain Priority Inversion and Priority Inheritance.",
    "answer": "If high priority thread waits for low priority thread, this is called Priority Inversion. if low priority thread temporarily inherit the priority of the highest priority thread, this is called Priority Inheritance.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-785",
    "topic": "Mobile",
    "question": "Where do we use Dependency Injection ?",
    "answer": "We use a storyboard or xib in our iOS app, then we created IBOutlets. IBOutlet is a property related to a view. These are injected into the view controller when it is instantiated, which is essentially a form of Dependency Injection. There are forms of dependency injection: constructor injection, property injection and method injection.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-786",
    "topic": "Mobile",
    "question": "What is RGR ( Red — Green — Refactor ) ?",
    "answer": "Red, Green and Refactor are stages of the TDD (Test Driven Development). Red: Write a small amount of test code usually no more than seven lines of code and watch it fail. Green: Write a small amount of production code. Again, usually no more than seven lines of code and make your test pass. Refactor: Tests are passing, you can make changes without worrying. Clean up your code. There are great workshop notes here.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-mobile-787",
    "topic": "Mobile",
    "question": "What is you favorite Visualize Chart library ?",
    "answer": "Charts has support iOS,tvOS,OSX The Apple side of the cross platform MPAndroidChart. Core Plot is a 2D plotting framework for macOS, iOS, and tvOS TEAChart has iOS support",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-788",
    "topic": "Mobile",
    "question": "What is the difference between LLVM and Clang?",
    "answer": "Clang is the front end of LLVM tool chain ( “clang” C Language Family Frontend for LLVM ). Every Compiler has three parts . 1. Front end ( lexical analysis, parsing ) 2. Optimizer ( Optimizing abstract syntax tree ) 3. Back end ( machine code generation ) Front end ( Clang ) takes the source code and generates abstract syntax tree ( LLVM IR ).",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-mobile-789",
    "topic": "Mobile",
    "question": "What is Class ?",
    "answer": "A class is meant to define a functionality of an object. In this way, a class is like a blueprint of an object.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-790",
    "topic": "Mobile",
    "question": "What is Object?",
    "answer": "Entity that representable in code, holds memory address. Underlying entity exposes interface and functionality.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-mobile-791",
    "topic": "Mobile",
    "question": "What is the difference between property and instance variable?",
    "answer": "A property is an instance variable with associated getter and setter methods. Property syntax creates all three components implicitly. A calculated (readonly) property is a getter method with no underlying instance variable.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-792",
    "topic": "Mobile",
    "question": "Explain difference between SDK and Framework ?",
    "answer": "SDK is a more broad set of software development tools. This set is used for creation of applications. Framework is basically a platform which is used for developing software applications. It provides the necessary foundation on which the programs can be developed for a specific platform. SDK and Framework complement each other, and SDKs are available for frameworks.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-793",
    "topic": "Mobile",
    "question": "What is Downcasting ?",
    "answer": "When we’re casting an object to another type in Objective-C, it’s pretty simple since there’s only one way to do it. In Swift, though, there are two ways to cast — one that’s safe and one that’s not . In swift: as used for upcasting and type casting to bridged type as? used for safe casting, return nil if failed as! used to force casting, crash if failed. should only be used when we know the downcast will succeed. In Objc: (Object )variable",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-794",
    "topic": "Mobile",
    "question": "What is bitcode ?",
    "answer": "Bitcode refers to to the type of code: “LLVM Bitcode” that is sent to iTunes Connect. This allows Apple to use certain calculations to re-optimize apps further (e.g: possibly downsize executable sizes). If Apple needs to alter your executable then they can do this without a new build being uploaded.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-mobile-795",
    "topic": "Mobile",
    "question": "What is the difference SVN and Git ?",
    "answer": "SVN relies on a centralised system for version management. It’s a central repository where working copies are generated and a network connection is required for access. Git relies on a distributed system for version management. You will have a local repository on which you can work, with a network connection only required to synchronise.",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-mobile-796",
    "topic": "Mobile",
    "question": "What does code signing do?",
    "answer": "Signing our app allows iOS to identify who signed our app and to verify that our app hasn’t been modified since you signed it. The Signing Identity consists of a public-private key pair that Apple creates for us.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-797",
    "topic": "Mobile",
    "question": "What problems does delegation solve?",
    "answer": "Avoiding tight coupling of objects Modifying behavior and appearance without the need to subclass objects Allowing tasks to be handed off to any arbitrary object",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-798",
    "topic": "Mobile",
    "question": "What is the difference between a delegate and an NSNotification?",
    "answer": "Delegates and NSNotifications can be used to accomplish nearly the same functionality. However, delegates are one-to-one while NSNotifications are one-to-many. Explain SiriKit Limitations SiriKit cannot use all app types Not a substitute for a full app only an extension Siri requires a consistent Internet connection to work Siri service needs to communicate Apple Servers.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-799",
    "topic": "Mobile",
    "question": "Why do we use a delegate pattern to be notified of the text field’s events?",
    "answer": "Because at most only a single object needs to know about the event.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-800",
    "topic": "Mobile",
    "question": "What is the major purposes of Frameworks?",
    "answer": "Frameworks have three major purposes: - Code encapsulation - Code modularity - Code reuse You can share your framework with your other apps, team members, or the iOS community. When combined with Swift’s access control, frameworks help define strong, testable interfaces between code modules.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-mobile-801",
    "topic": "Mobile",
    "question": "How to educate app with Context ?",
    "answer": "Education in context technique helping users interact with an element or surface in a way they have not done so previously. This technique often includes slight visual cues and subtle animation.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-802",
    "topic": "Mobile",
    "question": "What is the benefit writing tests in iOS apps ?",
    "answer": "Writing tests first gives us a clear perspective on the API design, by getting into the mindset of being a client of the API before it exists. Good tests serve as great documentation of expected behavior. It gives us confidence to constantly refactor our code because we know that if we break anything our tests fail. If tests are hard to write its usually a sign architecture could be improved. Following RGR ( Red — Green — Refactor ) helps you make improvements early on.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-mobile-803",
    "topic": "Mobile",
    "question": "What is five essential practical guidelines to improve your typographic quality of mobile product designs ?",
    "answer": "1. Start by choosing your body text typeface. 2. Try to avoid mixing typefaces. 3. Watch your line length. 4. Balance line height and point size. 5. Use proper Apostrophes and Dashes.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-804",
    "topic": "Mobile",
    "question": "What does Yak Shaving mean ?",
    "answer": "Yak shaving is a programing term that refers to a series of tasks that need to be performed before a project can progress to its next milestone.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-805",
    "topic": "Mobile",
    "question": "What is the Test Driven Development of three simple rules ?",
    "answer": "You are not allowed to write any production code unless it is to make a failing unit test pass. You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures. You are not allowed to write any more production code than is sufficient to pass the one failing unit test.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-mobile-806",
    "topic": "Mobile",
    "question": "Why it is better to use higher order functions?",
    "answer": "Functions that take another function as a parameter, or return a function, as a result, are known as higher-order functions. Swift defines these functions as CollectionType. The very basic higher order function is a filter.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-807",
    "topic": "Mobile",
    "question": "What is Concurrency ?",
    "answer": "Concurrency is dividing up the execution paths of your program so that they are possibly running at the same time. The common terminology: process, thread, multithreading, and others. Terminology; Process, An instance of an executing app Thread, Path of execution for code Multithreading, Multiple threads or multiple paths of execution running at the same time. Concurrency, Execute multiple tasks at the same time in a scalable manner. Queues, Queues are lightweight data structures that manage objects in the order of First-in, First-out (FIFO). Synchronous vs Asynchronous tasks",
    "tags": [
      "async",
      "architecture"
    ]
  },
  {
    "id": "q-mobile-808",
    "topic": "Mobile",
    "question": "What is the difference between Synchronous & Asynchronous task ?",
    "answer": "Synchronous: waits until the task has completed Asynchronous: completes a task in background and can notify you when complete",
    "tags": [
      "async"
    ]
  },
  {
    "id": "q-mobile-809",
    "topic": "Mobile",
    "question": "Explain #keyPath() ?",
    "answer": "Using #keyPath(), a static type check will be performed by virtue of the key-path literal string being used as a StaticString or StringLiteralConvertible. At this point, it’s then checked to ensure that it A) is actually a thing that exists and B) is properly exposed to Objective-C.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-810",
    "topic": "Mobile",
    "question": "What is bounding box?",
    "answer": "Bounding box is a term used in geometry; it refers to the smallest measure (area or volume) within which a given set of points.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-811",
    "topic": "Mobile",
    "question": "What is Dynamic Dispatch ?",
    "answer": "Dynamic Dispatch is the process of selecting which implementation of a polymorphic operation that’s a method or a function to call at run time. This means, that when we wanna invoke our methods like object method. (Swift does not default to dynamic dispatch)",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-812",
    "topic": "Mobile",
    "question": "What’s Code Coverage ?",
    "answer": "It is a metric used to measure the percentage of source code covered when tests run.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-mobile-813",
    "topic": "Mobile",
    "question": "What is Functions ?",
    "answer": "Functions let us group a series of statements together to perform some task. Once a function is created, it can be reused over and over in your code. If you find yourself repeating statements in your code, then a function may be the answer to avoid that repetition. Pro Tip, Good functions accept input and return output. Bad functions set global variables and rely on other functions to work.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-814",
    "topic": "Mobile",
    "question": "How to Prioritize Usability in Design ?",
    "answer": "Broke down its design process to prioritize usability in 4 steps: Think like the user, then design the UX. Remember that users are people, not demographics. When promoting an app, consider all the situations in which it could be useful. Keep working on the utility of the app even after launch.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-815",
    "topic": "Mobile",
    "question": "What is Responder Chain ?",
    "answer": "A ResponderChain is a hierarchy of objects that have the opportunity to respond to events received.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-816",
    "topic": "Mobile",
    "question": "What allows you to combine your commits ?",
    "answer": "last commit - git rebase -i HEAD1 combine - git squash",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-817",
    "topic": "Mobile",
    "question": "What is the difference ANY and ANYOBJECT ?",
    "answer": "According to Apple’s Swift documentation: Any can represent an instance of any type at all, including function types and optional types. AnyObject can represent an instance of any class type.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-818",
    "topic": "Mobile",
    "question": "What is a property? How can you create one? What is the benefits to use properties?",
    "answer": "@property, (auto)synthesize; getter/setter method (also send KVO notifications). Hides the iVars (safety and flexibility)",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-819",
    "topic": "Mobile",
    "question": "Difference between extensions () and (named) in categories implementations?",
    "answer": "() should be only one and for main interface (name) for categories",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-820",
    "topic": "Mobile",
    "question": "Can you re-declare a property in subclass or extension?",
    "answer": "YES. If you declare a property in one class as readonly, you can redeclare it as readwrite in a class extension, in a protocol, or in a subclass.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-821",
    "topic": "Mobile",
    "question": "What are formal and informal protocols?",
    "answer": "Formal are the real protocols, informal are categories on NSObject (with optional methods)",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-822",
    "topic": "Mobile",
    "question": "How to declare protected-like methods (accessible only for some dedicated classes)?",
    "answer": "Separate header file with (named) category, and include it in other class",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-823",
    "topic": "Mobile",
    "question": "Explain Selectors in ObjC",
    "answer": "In Objective-C, a selector is the name used to select a method to execute on an object, or, more succinctly, the unique identifier that replaces the name when the source code is compiled. A selector is represented by the special Objective-C type called SEL .",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-824",
    "topic": "Mobile",
    "question": "What is interface?",
    "answer": "Defines the functions and properties of an object that is exposed to outside",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-825",
    "topic": "Mobile",
    "question": "How many different annotations available in Objective-C ?",
    "answer": "\\Nullunspecified, which bridges to a Swift implicitly unwrapped optional. This is the default. \\Nonnull, the value won’t be nil it bridges to a regular reference. \\Nullable the value can be nil, it bridges to an optional. \\Nullresettable the value can never be nil, when read but you can set it to know to reset it. This is only apply property.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-826",
    "topic": "Mobile",
    "question": "What is made up of NSError object?",
    "answer": "There are three parts of NSError object a domain, an error code, and a user info dictionary. The domain is a string that identifies what categories of errors this error is coming from.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-827",
    "topic": "Mobile",
    "question": "Why do we use @synchronized ?",
    "answer": "synchronized guarantees that only one thread can be executing that code in the block at any given time.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-828",
    "topic": "Mobile",
    "question": "What is @synthesize in Objective-C ?",
    "answer": "synthesize generates getter and setter methods for your property.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-829",
    "topic": "Mobile",
    "question": "What is @dynamic in Objective-C ?",
    "answer": "We use dynamic for subclasses of NSManagedObject. @dynamic tells the compiler that getter and setters are implemented using dynamic dispatch of Objective-C runtime.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-830",
    "topic": "Mobile",
    "question": "Why don’t we use strong for enum property in Objective-C ?",
    "answer": "Because enums aren’t objects, so we don’t specify strong or weak here. (C Enum)",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-831",
    "topic": "Mobile",
    "question": "What is Protocol Extensions?",
    "answer": "We can adopt protocols using extensions as well as on the original type declaration. This allows you to add protocols to types you don’t necessarily own.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-832",
    "topic": "Mobile",
    "question": "Why do we use availability attributes ?",
    "answer": "Apple wants to support one system version back, meaning that we should support iOS9 or iOS8. Availability Attributes lets us to support previous version iOS.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-833",
    "topic": "Mobile",
    "question": "What’s the difference optional between nil and .None?",
    "answer": "There is no difference. Optional.None (.None for short) is the correct way of initializing an optional variable lacking a value, whereas nil is just syntactic sugar for .None.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-834",
    "topic": "Mobile",
    "question": "How do you follow up clean code for this project ?",
    "answer": "I follow style guide and coding conventions for Swift projects of Github and SwiftLint.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-835",
    "topic": "Mobile",
    "question": "How many different ways to pass data in Swift ?",
    "answer": "There are many different ways such as Delegate, KVO, Segue, and NSNotification, Target-Action, Callbacks.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-836",
    "topic": "Mobile",
    "question": "What is the difference Filter and Map Function ?",
    "answer": "Map, we pass in a function that returns a value for each element in an array. The return value of this function represents what an element becomes in our new array. Filter, we pass in a function that returns either true or false for each element. If the function that we pass returns true for a given element, then the element is included in the final array.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-837",
    "topic": "Mobile",
    "question": "What is DispatchGroup ?",
    "answer": "DispatchGroup allows for aggregate synchronization of work. We can use them to submit multiple different work items and track when they all complete, even though they might run on different queues. This behavior can be helpful when progress can’t be made until all of the specified tasks are complete.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-838",
    "topic": "Mobile",
    "question": "Explain subscripts ?",
    "answer": "Classes, structures, and enumerations can define subscripts, which are shortcuts for accessing the member elements of a collection, list, or sequence.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-839",
    "topic": "Mobile",
    "question": "What is Nil Coalescing & Ternary Operator ?",
    "answer": "nil coalescing - ?? teranry - ? : It is an easily return an unwrapped optional, or a default value. If we do not have value, we can set zero or default value.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-840",
    "topic": "Mobile",
    "question": "What is the difference CollectionViews & TableViews ?",
    "answer": "TableViews display a list of items, in a single column, a vertical fashion, and limited to vertical scrolling only. CollectionViews also display a list of items, however, they can have multiple columns and rows.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-841",
    "topic": "Mobile",
    "question": "What is Alamofire doing ?",
    "answer": "Alamofire uses URL Loading System in the background, so it does integrate well with the Apple-provided mechanisms for all the network development. This means, It provides chainable request/response methods, JSON parameter and response serialization, authentication, and many other features. It has thread mechanics and execute requests on a background thread and call completion blocks on the main thread.",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-mobile-842",
    "topic": "Mobile",
    "question": "Explain generics ?",
    "answer": "Generics create code that does not get specific about underlying data types. Generics allow us to know what type it is going to contain. Generics provide code reusability.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-843",
    "topic": "Mobile",
    "question": "Explain lazy ?",
    "answer": "An initial value of the lazy stored properties is calculated only when the property is called for the first time. There are situations when the lazy properties come very handy to developers.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-844",
    "topic": "Mobile",
    "question": "Explain what is defer ?",
    "answer": "defer keyword which provides a block of code that will be executed in the case when execution is leaving the current scope.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-845",
    "topic": "Mobile",
    "question": "What is Enum ?",
    "answer": "\"OR\" Type. Enum represents a group of all possible values the Object can represent.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-846",
    "topic": "Mobile",
    "question": "What is Operator Overloading ?",
    "answer": "Operator overloading allows us to change how existing operators behave with types that both already exist.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-847",
    "topic": "Mobile",
    "question": "How to pass a variable as a reference ?",
    "answer": "We need to mention that there are two types of variables: reference and value types. The difference between these two types is that by passing value type, the variable will create a copy of its data, and the reference type variable will just point to the original data in the memory. To pass value type as a reference we use &valueTypeVariable as an inout parameter in the function.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-mobile-848",
    "topic": "Mobile",
    "question": "What is the difference open & public access level ?",
    "answer": "open allows other modules to use the class and inherit the class; for members, it allows others modules to use the member and override it. public only allows other modules to use the public classes and the public members. Public classes can no longer be subclassed, nor public members can be overridden.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-849",
    "topic": "Mobile",
    "question": "What is the difference fileprivate, private and public private(set) access level ?",
    "answer": "fileprivate is accessible within the current file, private is accessible within the current declaration. public private(set) means getter is public, but the setter is private.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-850",
    "topic": "Mobile",
    "question": "What is Internal access ?",
    "answer": "Internal access enables entities to be used within any source file from their defining module, but not in any source file outside of the module. Internal access is the default level of access. So even though we haven’t been writing any access control specifiers in our code, our code has been at an internal level by default.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-851",
    "topic": "Mobile",
    "question": "Explain Forced Unwrapping",
    "answer": "When we defined a variable as optional, then to get the value from this variable, we will have to unwrap it. This just means putting an exclamation mark at the end of the variable.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-852",
    "topic": "Mobile",
    "question": "Explain Swift Standard Library Protocol ?",
    "answer": "There are a few different protocol. Equatable protocol, that governs how we can distinguish between two instances of the same type. That means we can analyze. If we have a specific value is in our array. The comparable protocol, to compare two instances of the same type and sequence protocol: prefix(while:) and drop(while:) [SE-0045]. Swift 4 introduces a new Codable protocol that lets us serialize and deserialize custom data types without writing any special code.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-853",
    "topic": "Mobile",
    "question": "Explain Swift Package Manager",
    "answer": "The Swift Package Manager will help to vastly improve the Swift ecosystem, making Swift much easier to use and deploy on platforms without Xcode such as Linux. The Swift Package Manager also addresses the problem of dependency hell that can happen when using many interdependent libraries. The Swift Package Manager only supports using the master branch. Swift Package Manager now supports packages with Swift, C, C++ and Objective-C.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-854",
    "topic": "Mobile",
    "question": "How is an inout parameter different from a regular parameter?",
    "answer": "An Inout is passed as function parameter. Inside a function the local copy is modified Before function returns it takes inout object and sets it's value equal to that local copy So it seems like you pass parameter by reference, however it's not actually the case",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-855",
    "topic": "Mobile",
    "question": "What are benefits of Guard ?",
    "answer": "There are two big benefits to guard. One is avoiding the pyramid of doom, as others have mentioned — lots of annoying if let statements nested inside each other moving further and further to the right. The other benefit is provide an early exit out of the function using break or using return.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-856",
    "topic": "Mobile",
    "question": "What is the difference between main() and runApp() functions in Flutter?",
    "answer": "The main() function tells Dart where the program starts, and it must be in the file that is considered the \"entry point\" for the program. By convention, this will be in a file called main.dart. This main function can execute any code within it's code block. The runApp() function takes (as parameter) widget that would be attached to the screen as a root of the widget tree that will be rendered. Back to top ↑ &nbsp;&nbsp;/&nbsp;&nbsp; 🖌️ Edit answer",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-857",
    "topic": "Mobile",
    "question": "What are widgets in Flutter?",
    "answer": "Widgets are the central class hierarchy in the Flutter framework, that describes the configuration of an element to manage the underlying render tree. A widget is an immutable description of part of a user interface. Widgets themselves have no mutable state, i.e., all their fields must be final. In Flutter, everything is a widget. Back to top ↑ &nbsp;&nbsp;/&nbsp;&nbsp; 🖌️ Edit answer",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-858",
    "topic": "Mobile",
    "question": "What is Hot Reload and Hot Restart in Flutter?",
    "answer": "Flutter's Hot Reload feature injects the updated source code files into the running Dart Virtual Machine (VM), and rebuilds the widget tree preserving the app state to quickly view the effects of the changes. Whereas Hot Restart loads the updated source code files into the VM and restarts the Flutter app, losing all the previous app states. Back to top ↑ &nbsp;&nbsp;/&nbsp;&nbsp; 🖌️ Edit answer",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-859",
    "topic": "Mobile",
    "question": "What do you mean by open-source software? Is Flutter open-source?",
    "answer": "Open-source software is software with source code that anyone can inspect, modify, and enhance. Open-source software is developed in a decentralized and collaborative way, relying on peer review and community production. Open source software is often cheaper, more flexible, and has more longevity than its proprietary peers because it is developed by communities rather than a single author or company. Yes, Flutter is an open-source software development kit. Back to top ↑ &nbsp;&nbsp;/&nbsp;&nbsp; 🖌️ Edit answer",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-mobile-860",
    "topic": "Mobile",
    "question": "What are packages and plugins in Flutter?",
    "answer": "A package only contains Dart code. Some of the packages may use Flutter specific functionality and thus have a dependency on the Flutter framework. A plugin contains Dart combined with one or more platform-specific native (Java/Swift/JavaScript) code. The API of the plugin is written in Dart and the implementations are written in native languages. Flutter uses platform channels to communicate with native codes. Back to top ↑ &nbsp;&nbsp;/&nbsp;&nbsp; 🖌️ Edit answer",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-861",
    "topic": "Mobile",
    "question": "What are different build modes in Flutter?",
    "answer": "The Flutter tooling supports three different build modes while compiling the app. We need to choose the build mode depending upon where we are in the development cycle. - debug: For development purpose, the hot reload feature is enabled only in the debug mode. - profile: For analyzing the app performance. We use DevTools suite to profile app's performance. - release: For releasing the app when everything is ready. To learn more, check docs. Back to top ↑ &nbsp;&nbsp;/&nbsp;&nbsp; 🖌️ Edit answer",
    "tags": [
      "performance",
      "testing"
    ]
  },
  {
    "id": "q-mobile-862",
    "topic": "Mobile",
    "question": "What is the difference between WidgetsApp and MaterialApp in Flutter?",
    "answer": "WidgetsApp is a convenient widget that wraps a number of widgets that are commonly required for an application. It also provides basic navigation. MaterialApp builds an application that uses the material design. It is built upon the WidgetsApp and contains some material-design specific functionality, such as AnimatedTheme. We certainly don't require MaterialApp every time when building a Flutter project. CupertinoApp gives iOS like look and feel, or we can even define our custom sets of widgets. Back to top ↑ &nbsp;&nbsp;/&nbsp;&nbsp; 🖌️ Edit answer",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-863",
    "topic": "Mobile",
    "question": "What is the difference between Expanded and Flexible widget?",
    "answer": "The only difference between these two widgets is the Flexible widget takes only the space needed by the child, whereas the Expanded widget enforces its child to take all the available space. The Expanded widget in flutter is shorthand of Flexible with the fit set to FlexFit. tight. Column(children: [ Row( children: [ExpandedWidget(), FlexibleWidget()], ), Row( children: [ExpandedWidget(), ExpandedWidget()], ), Row( children: [FlexibleWidget(), FlexibleWidget()], ), ]),",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-864",
    "topic": "Mobile",
    "question": "What is the purpose of SafeArea widget in Flutter?",
    "answer": "The SafeArea widget insets its child by sufficient padding to avoid intrusions by the operating system. For example, this will indent the child by enough to avoid the status bar at the top of the screen. It will also indent the child by the amount necessary to avoid the Notch, or similar creative physical features of the display. Back to top ↑ &nbsp;&nbsp;/&nbsp;&nbsp; 🖌️ Edit answer",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-mobile-865",
    "topic": "Mobile",
    "question": "What is sound null safety?",
    "answer": "Sound null safety makes types in code non-nullable by default and enables special static checks and compiler optimizations to guarantee that null-dereference errors won't appear at runtime because they will be spotted at compile-time and fixed. Null safety is a guarantee within an object-oriented programming language that no object references will have null or void values. Back to top ↑ &nbsp;&nbsp;/&nbsp;&nbsp; 🖌️ Edit answer",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-mobile-866",
    "topic": "Mobile",
    "question": "What is the difference between NetworkImage and Image.network in flutter?",
    "answer": "NetworkImage class creates an object that provides an image from the src URL passed to it. It is not a widget and does not output an image to the screen. Image.network creates a widget that displays an image on the screen. It is just a named constructor on the Image class. It sets the image property using the NetworkImage . This image property is then used to display the image. Back to top ↑ &nbsp;&nbsp;/&nbsp;&nbsp; 🖌️ Edit answer",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-867",
    "topic": "Software Engineering",
    "question": "Clone and Install",
    "answer": "git clone https://github.com/1146345502/aural-oss.git cd aural-oss npm ci",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-868",
    "topic": "Software Engineering",
    "question": "Set Up Supabase",
    "answer": "Option A — Supabase Cloud 1. Create a project at supabase.com 2. Copy your project URL and keys Option B — Local Supabase Requires Docker running on your machine. npx supabase start This pulls the Supabase Docker images, starts all services, and automatically applies all migrations from supabase/migrations/. When it finishes, it prints connection details including the API keys (look for the Publishable and Secret keys).",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-869",
    "topic": "Software Engineering",
    "question": "Run Migrations",
    "answer": "- Local Supabase: migrations are applied automatically during supabase start — skip this step. - Supabase Cloud: push the migrations to your remote project: npx supabase db push Or apply migrations manually from supabase/migrations/.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-870",
    "topic": "Software Engineering",
    "question": "Data Structures",
    "answer": "View topics and checklist - [ ] Arrays P0 - [ ] Graphs P0 - [ ] Acyclic graphs P0 - [ ] Bipartite graphs P0 - [ ] Directed graphs P0 - [ ] Graphs with special properties (e.g., planar graphs, Eulerian graphs) P0 - [ ] Representations (adjacency matrix, adjacency list) P1 - [ ] Edge list P1 - [ ] Incidence matrix P2 - [ ] Spanning trees (Minimum Spanning Tree, Maximum Spanning Tree) P0 - [ ] Traversal algorithms (DFS, BFS) P0 - [ ] Weighted graphs P0",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-871",
    "topic": "Software Engineering",
    "question": "Problem-solving and Coding",
    "answer": "View topics and checklist - [ ] Coding best practices P1 - [ ] Code readability P1 - [ ] Code reusability P1 - [ ] Code reviews P1 - [ ] Error handling P1 - [ ] Naming conventions P1 - [ ] Testing P1 - [ ] Version control (e.g., Git) P1 - [ ] Coding techniques P1 - [ ] Backtracking P0 - [ ] Binary search P0 - [ ] Bit manipulation P1",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-ext-872",
    "topic": "Software Engineering",
    "question": "Programming Languages and Concepts",
    "answer": "View topics and checklist - [ ] Asynchronous programming P0 - [ ] Callbacks P1 - [ ] Coroutines P1 - [ ] Futures P1 - [ ] Promises P0 - [ ] Concurrency P0 - [ ] Asynchronous programming P0 - [ ] Deadlocks P0 - [ ] Parallelism vs. Concurrency P0 - [ ] Race conditions P0 - [ ] Synchronization primitives (locks, mutexes, semaphores) P1 - [ ] Thread safety P0",
    "tags": [
      "async",
      "architecture"
    ]
  },
  {
    "id": "q-ext-873",
    "topic": "Software Engineering",
    "question": "System Architecture",
    "answer": "View topics and checklist - [ ] Caching strategies P1 - [ ] Cache aside P0 - [ ] Cache stampede prevention P0 - [ ] Write-behind caching P1 - [ ] Write-through caching P1 - [ ] Client-server architecture P1 - [ ] Basics P1 - [ ] Communication protocols P1 - [ ] Event-Driven Architecture (EDA) P0 - [ ] Advantages P1 - [ ] Basics P1 - [ ] Components P1",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-874",
    "topic": "Software Engineering",
    "question": "Version control System",
    "answer": "View topics and checklist - [ ] Bitbucket P2 - [ ] Git P1",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-875",
    "topic": "Software Engineering",
    "question": "Where did I reach",
    "answer": "1. A can't be done because of Reason D 2. B can't be done because of E. 3. I am facing error F while doing option C. // Template 2: (after greatly practicing template 1)",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-876",
    "topic": "Software Engineering",
    "question": "What You'll Find Here",
    "answer": "Concise yet in-depth theory notes Frequently asked interview questions Revision-friendly explanations Concept comparisons and cheat sheets Dry runs for important problems Company-oriented preparation topics Curated learning resources and roadmaps Continuously updated content Every folder is organized subject-wise with dedicated README.md files for easy navigation. ---",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-877",
    "topic": "Software Engineering",
    "question": "Why This Repository?",
    "answer": "Most interview preparation resources are either: Too theoretical Too scattered Too shallow Or difficult to revise quickly This repository is built with a different approach: Simplicity over unnecessary complexity Concept clarity over memorization Interview relevance over textbook dumping Structured learning over random notes The focus is not just cracking interviews, but genuinely understanding the fundamentals behind each concept. ---",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-878",
    "topic": "Software Engineering",
    "question": "How To Identify Personal Weaknesses?",
    "answer": "You can use online tools or just ask other people: - Google this \"free MBTI test\" if you are not an English native speaker it's better to use your mother language tools. - Use blogs like Wikihow: How to Identify Your Strengths and Weaknesses or bpalns: How to Identify Your Strengths and Weaknesses This is the process, and don't forget the compound effect is still their ^^ After getting the feedback you may back to your CV or Mock Interview, no worries you just need to keep going.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-ext-879",
    "topic": "Software Engineering",
    "question": "What is a Convolutional Neural Network (CNN)?",
    "answer": "A Convolutional Neural Network (CNN) is a specialized deep-learning system designed to handle visual data by capturing spatial dependencies and hierarchies of features, which are common in images. This model diminishes the requirement for manual feature extraction, making it more efficient than traditional methods such as edge detection and gradient estimation.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-880",
    "topic": "Software Engineering",
    "question": "Can you explain the structure of a typical CNN architecture?",
    "answer": "A standard CNN model is composed of several distinct types of layers that work together to extract features from images and classify them.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-881",
    "topic": "Software Engineering",
    "question": "How does convolution work in the context of a CNN?",
    "answer": "Convolutional Neural Networks (CNNs) use convolutional layers to extract features from input data, which could be images, text, or time series data. Let's look at how convolutional operations are carried out.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-882",
    "topic": "Software Engineering",
    "question": "What is the purpose of pooling in a CNN, and what are the different types?",
    "answer": "Pooling in Convolutional Neural Networks $CNNs$ serves the dual purpose of dimensionality reduction and feature extraction.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-883",
    "topic": "Software Engineering",
    "question": "How do activation functions play a role in CNNs?",
    "answer": "Convolutional Neural Networks (CNNs) are heavily reliant on activation functions to introduce non-linearities, an essential element for learning complex patterns from data.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-884",
    "topic": "Software Engineering",
    "question": "Why Non-Linearity is Needed",
    "answer": "Linear transformations can be represented as $f(x) = Ax + b$, where $A$ is a matrix and $b$ a vector. Without non-linear activations, the entire network would just optimize with respect to this linear transformation. This is like stacking multiple lines, always resulting in a line, failing to capture complex data distributions typically seen in computer vision tasks.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ext-885",
    "topic": "Software Engineering",
    "question": "Can you describe what is meant by 'depth' in a convolutional layer?",
    "answer": "In the context of a Convolutional Neural Network (CNN), 'depth' refers to the number of distinct filters applied to the input feature map.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-886",
    "topic": "Software Engineering",
    "question": "What is the difference between a fully connected layer and a convolutional layer?",
    "answer": "A Fully-Connected Layer (Dense Layer) and a Convolutional Layer (Convoluted Layer or \"ConvLayer\") are two key components in convolutional neural networks (CNNs).",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-887",
    "topic": "Software Engineering",
    "question": "What is feature mapping in CNNs?",
    "answer": "In Convolutional Neural Networks (CNNs), Feature Mapping refers to the process of transforming the input image or feature map into higher-level abstractions. It strategically uses filters and activation functions to identify and enhance visual patterns.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-888",
    "topic": "Software Engineering",
    "question": "How does parameter sharing work in convolutional layers?",
    "answer": "Parameter sharing is a fundamental aspect of Convolutional Neural Networks (CNN).",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-889",
    "topic": "Software Engineering",
    "question": "Why are CNNs particularly well-suited for image recognition tasks?",
    "answer": "Convolutional Neural Networks (CNNs) are optimized for image recognition. They efficiently handle visual data by leveraging convolutional layers, pooling, and other architectural elements tailored to image-specific features.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ext-890",
    "topic": "Software Engineering",
    "question": "Explain the concept of receptive fields in the context of CNNs.",
    "answer": "Receptive fields in the context of Convolutional Neural Networks (CNNs) refer to the area of an input volume that a particular layer is \"looking\" at. The receptive field size dictates which portions of the input volume contribute to the computation of a given activation.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-891",
    "topic": "Software Engineering",
    "question": "What is local response normalization, and why might it be used in a CNN?",
    "answer": "Local Response Normalization (LRN) was originally proposed for AlexNet, the CNN that won the 2012 ImageNet Challenge. However, the technique has mostly been superseded by others like batch and layer normalization.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-892",
    "topic": "Software Engineering",
    "question": "When to Consider LRN",
    "answer": "Due to its limited application, LRN is best-suited for specialized cases where using more conventional normalization techniques isn't feasible or detrimentally affects model performance, which may be rare. It might interest researchers and experimenters, especially those exploring historical CNN architectures like AlexNet, to see how modifying normalization techniques impacts network behavior and performance.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ext-893",
    "topic": "Software Engineering",
    "question": "Can you explain what a stride is and how it affects the output size of the convolution layer?",
    "answer": "In a convolutional neural network, 'stride' is the number of pixels by which the kernel moves as it sweeps across the input. This parameter influences the size of the output feature map.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-894",
    "topic": "Software Engineering",
    "question": "How do dilated convolutions differ from regular convolutions?",
    "answer": "Dilated convolutions, also known as atrous convolutions, offer a unique alternative to traditional convolutions, especially advantageous for CNNs with large receptive fields.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-895",
    "topic": "Software Engineering",
    "question": "How Do They Differ?",
    "answer": "Dilated convolutions differ from traditional ones in these key aspects: 1. Filter Application: While regular convolutions apply the filter to all spatial dimensions, dilated convolutions skip some dimensions, yielding sparse feature maps. 2. Field-of-View Expansion: Dilated convolutions achieve a wider receptive field without using larger filter sizes. This expansion is controlled by the dilation rate.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-896",
    "topic": "Software Engineering",
    "question": "What is computer vision and how does it relate to human vision?",
    "answer": "Computer Vision, a branch of Artificial Intelligence, aims to enable computers and machines to interpret and understand visual information such as images and videos. The field draws inspiration from the human visual system to replicate similar functions in machines.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-897",
    "topic": "Software Engineering",
    "question": "Describe the key components of a computer vision system.",
    "answer": "A Computer Vision (CV) system processes and interprets visual data to make decisions or disambiguate tasks. These systems perceive, understand, and act on visual information, much like the human visual system. The components of a Computer Vision System generally include tasks such as Image Acquisition, Pre-processing, Feature Extraction, Image Segmentation, Object Recognition, and Post-processing.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-898",
    "topic": "Software Engineering",
    "question": "Explain the concept of image segmentation in computer vision.",
    "answer": "Image Segmentation involves dividing a digital image into multiple segments (sets of pixels) to simplify image analysis.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-899",
    "topic": "Software Engineering",
    "question": "What is the difference between image processing and computer vision?",
    "answer": "While Image Processing and Computer Vision share some common roots and technologies, they serve distinct purposes.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-900",
    "topic": "Software Engineering",
    "question": "How does edge detection work in image analysis?",
    "answer": "Edge detection methods aim to find the boundaries in images. This step is vital in various computer vision tasks, such as object recognition, where edge pixels help define shape and texture.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-901",
    "topic": "Software Engineering",
    "question": "Discuss the role of convolutional neural networks (CNNs) in computer vision.",
    "answer": "Convolutional Neural Networks (CNNs) have revolutionized the field of computer vision with their ability to automatically and adaptively learn spatial hierarchies of features. They are at the core of many modern computer vision applications, from image recognition to object detection and semantic segmentation.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-902",
    "topic": "Software Engineering",
    "question": "What's the significance of depth perception in computer vision applications?",
    "answer": "Depth perception is crucial in various computer vision tasks, improving localization precision, object recognition, and 3D reconstruction.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-903",
    "topic": "Software Engineering",
    "question": "Explain the challenges of object recognition in varied lighting and orientations.",
    "answer": "Object recognition, which involves identifying and categorizing objects in images or videos, can be challenging in several ways, especially with variations in lighting and object orientation.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-904",
    "topic": "Software Engineering",
    "question": "What are the common image preprocessing steps in a computer vision pipeline?",
    "answer": "Image pre-processing involves a series of techniques tailored to optimize images for computer vision tasks such as classification, object detection, and more.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ext-905",
    "topic": "Software Engineering",
    "question": "How does image resizing affect model performance?",
    "answer": "Image resizing has substantial implications for both computational efficiency and model performance in computer vision applications. Let's delve into the details.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ext-906",
    "topic": "Software Engineering",
    "question": "What are some techniques to reduce noise in an image?",
    "answer": "Image noise can disrupt visual information and hinder both human and machine perception. Employing effective noise reduction techniques can significantly improve the quality of images.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-907",
    "topic": "Software Engineering",
    "question": "Explain how image augmentation can improve the performance of a vision model.",
    "answer": "Image augmentation is a technique used to artificially enlarge a dataset by creating modified versions of the original images. It helps in improving the accuracy of computer vision models, especially in scenarios with limited or unbalanced data.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ext-908",
    "topic": "Software Engineering",
    "question": "Discuss the concept of color spaces and their importance in image processing.",
    "answer": "Color spaces are mathematical representations designed for capturing and reproducing colors in digital media, such as images or video. They can have different characteristics, making them better suited for specific computational tasks.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-909",
    "topic": "Software Engineering",
    "question": "What are feature descriptors, and why are they important in computer vision?",
    "answer": "In Computer Vision, Feature Descriptors provide a compact representation of the information within an image or an object. They are an essential element in many tasks, such as object recognition, image matching, and 3D reconstruction.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-910",
    "topic": "Software Engineering",
    "question": "Explain the Scale-Invariant Feature Transform (SIFT) algorithm.",
    "answer": "Scale-Invariant Feature Transform (SIFT) is a widely-used method for keypoint detection and local feature extraction. It's robust to changes like scale, rotation, and illumination, making it effective for tasks such as object recognition, image stitching, and 3D reconstruction.",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-ext-911",
    "topic": "Software Engineering",
    "question": "What is machine learning and how does it differ from traditional programming?",
    "answer": "Machine Learning (ML) represents a departure from traditional rule-based programming by allowing systems to learn from data. While the latter requires explicit rules and structures, ML algorithms can uncover patterns and make decisions or predictions autonomously.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-912",
    "topic": "Software Engineering",
    "question": "Explain the difference between supervised and unsupervised learning.",
    "answer": "Supervised and unsupervised learning are fundamental paradigms in the realm of machine learning, each with its unique approach to handling data.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-913",
    "topic": "Software Engineering",
    "question": "What is the role of feature selection in machine learning?",
    "answer": "Feature selection plays a crucial role in machine learning, streamlining models for improved performance, interpretability, and efficiency.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ext-914",
    "topic": "Software Engineering",
    "question": "What is cross-validation and why is it important?",
    "answer": "Cross-validation is a robust method for estimating the performance of a machine learning model. Its key advantage over a simple train/test split is that it uses the full dataset for both training and testing, resulting in a more reliable performance metric.",
    "tags": [
      "performance",
      "testing"
    ]
  },
  {
    "id": "q-ext-915",
    "topic": "Software Engineering",
    "question": "Explain the bias-variance tradeoff in machine learning.",
    "answer": "The Bias-Variance Tradeoff is a fundamental concept in machine learning that deals with the interplay between a model's complexity, its predictive performance, and its generalizability to unseen data.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ext-916",
    "topic": "Software Engineering",
    "question": "Describe the difference between parametric and non-parametric models.",
    "answer": "In statistical modeling, there is a distinction between parametric and non-parametric methods, each with unique strengths and limitations.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-917",
    "topic": "Software Engineering",
    "question": "What is the curse of dimensionality and how does it impact machine learning?",
    "answer": "The curse of dimensionality is a phenomenon that arises when working with high-dimensional data, leading to significant challenges in problem-solving, computational efficiency, and generalization for machine learning algorithms.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-918",
    "topic": "Software Engineering",
    "question": "Explain the concept of model complexity and its relationship with performance.",
    "answer": "Model complexity refers to how intricate or flexible a machine learning model is in capturing relationships in data. This complexity comes with both advantages and disadvantages in terms of predictive performance and generalizability.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ext-919",
    "topic": "Software Engineering",
    "question": "What is data preprocessing and why is it important in machine learning?",
    "answer": "Data preprocessing is a crucial step in machine learning that focuses on cleaning, transforming, and preparing raw data for modeling. High-quality inputs are essential for accurate and reliable outputs.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-920",
    "topic": "Software Engineering",
    "question": "Explain the techniques used for handling missing data.",
    "answer": "Handling missing data is a critical part of data analysis. It ensures the accuracy and reliability of analytical results. Let's look at different strategies to deal with missing data.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-921",
    "topic": "Software Engineering",
    "question": "Handling During Data Collection",
    "answer": "- Standardized Entry Forms: Ensures all necessary fields are filled out. - Mandatory Fields: Requires specific fields to be completed. - Database Constraints: Using constraints like \"NOT NULL\" can prevent missing data at the system level.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-922",
    "topic": "Software Engineering",
    "question": "Advanced Techniques",
    "answer": "- Utilize Algorithms: Some machine learning models handle missing data more gracefully, like Random Forests or XGBoost. - Predictive Models: Building models to predict missing values using non-missing data as features. - Domain Knowledge: Understanding the reasons behind missing data and making informed decisions based on that knowledge.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-923",
    "topic": "Software Engineering",
    "question": "What is feature scaling and why is it necessary?",
    "answer": "Feature scaling is a crucial data preprocessing step for many machine learning algorithms. It standardizes the range of independent variables, ensuring they contribute to model training in a balanced way.",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-ext-924",
    "topic": "Software Engineering",
    "question": "Range of Values",
    "answer": "- Normalization: $[0, 1]$ for normalized data. - Standardization: No fixed range.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-925",
    "topic": "Software Engineering",
    "question": "Role of Outliers",
    "answer": "- Normalization: Might distort skewed data in the presence of outliers. - Standardization: Less prone to outlier influence.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-926",
    "topic": "Software Engineering",
    "question": "Data Interpretation",
    "answer": "- Normalization: Data is directly interpretable. - Standardization: Data is interpretably transformed, useful in certain algorithms, e.g. PCA.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-927",
    "topic": "Software Engineering",
    "question": "What is one-hot encoding and when is it used?",
    "answer": "One-Hot Encoding is a technique often employed with categorical data to make it compatible for machine learning algorithms that expect numerical input.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-928",
    "topic": "Software Engineering",
    "question": "What is data modeling and why is it important?",
    "answer": "Data modeling is a structured approach to designing a data storage system, whether it's a database, data warehouse, or any other data repository. It serves as a blueprint for organizing and storing data effectively.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-929",
    "topic": "Software Engineering",
    "question": "Explain the difference between conceptual, logical, and physical data models.",
    "answer": "Data models play a vital role in structuring and representing information. They can be organized into three main types: conceptual, logical, and physical.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-930",
    "topic": "Software Engineering",
    "question": "What are the key steps in the data modeling process?",
    "answer": "Data modeling is key to designing efficient and structured databases. The process typically follows a top-down approach, beginning with creating an Entity-Relationship Diagram (ERD) to visualize the data model, and then implementing the model in a database management system.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-931",
    "topic": "Software Engineering",
    "question": "Describe the different types of relationships in a relational database.",
    "answer": "In a relational database, data is organized into tables, and the way tables relate to each other establishes different types of relationships.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-932",
    "topic": "Software Engineering",
    "question": "What is normalization and why is it used in database design?",
    "answer": "Normalization is a set of techniques used in database design to ensure data integrity, reduce redundancy, and improve overall performance. It involves structuring data into multiple related tables, each serving a specific purpose.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ext-933",
    "topic": "Software Engineering",
    "question": "What is a star schema and when would you use it?",
    "answer": "The Star Schema is a data modeling technique optimized for data warehousing and analytics. It structures data into a central fact table and associated dimension tables, forming a star-like visual pattern.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ext-934",
    "topic": "Software Engineering",
    "question": "When to Use Star Schema",
    "answer": "The star schema is ideal for organizations focused on standardized reporting and predictable query patterns, such as: - Data Warehousing: It's a popular choice for dedicated analytical databases. - Ad Hoc and Standardized Reporting: Effective for reporting tools and analysts running known, repetitive queries.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-935",
    "topic": "Software Engineering",
    "question": "Describe the concept of slowly changing dimensions (SCDs) in data warehousing.",
    "answer": "In data warehousing, Slowly Changing Dimensions (SCDs) are a method for handling data that changes over time, especially useful for maintaining historical records alongside new ones.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-936",
    "topic": "Software Engineering",
    "question": "What is a fact table and how does it differ from a dimension table?",
    "answer": "In a star schema, fact tables and dimension tables play distinct roles. - Fact tables record specific metrics or measurements, and are linked to multiple dimension tables. - Dimension tables provide context to the measurements in the fact table and are typically descriptive in nature.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-937",
    "topic": "Software Engineering",
    "question": "Explain the purpose of surrogate keys in data modeling.",
    "answer": "In data modeling, surrogate keys play a crucial role in ensuring efficient data management and fostering better data quality. Let's look at their key functions:",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-938",
    "topic": "Software Engineering",
    "question": "What are the common challenges faced during ETL processes?",
    "answer": "ETL (Extract, Transform, Load) processes are essential for data pipelines. While powerful, they present unique challenges.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-939",
    "topic": "Software Engineering",
    "question": "Describe the difference between full load and incremental load in ETL.",
    "answer": "In ETL (Extract, Transform, Load) processes, two common data loading strategies are Full Load and Incremental Load.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-940",
    "topic": "Software Engineering",
    "question": "What is data staging and why is it important in ETL?",
    "answer": "Data staging is an intermediate step in the ETL (Extract, Transform, Load) process. It involves moving data from its source to a temporary storage area before it's formatted and sent to its destination.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-941",
    "topic": "Software Engineering",
    "question": "Explain the difference between Supervised Learning and Unsupervised Learning.",
    "answer": "Supervised and Unsupervised Learning are two of the most prominent paradigms in machine learning, each with its unique methods and applications.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-942",
    "topic": "Software Engineering",
    "question": "What is the difference between Classification and Regression problems?",
    "answer": "Classification aims to categorize data into distinct classes or groups, while regression focuses on predicting continuous values.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-943",
    "topic": "Software Engineering",
    "question": "What is the Bias-Variance Tradeoff in ML?",
    "answer": "The Bias-Variance Tradeoff is a fundamental concept in machine learning that deals with the interplay between a model's predictive power and its generalizability.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-944",
    "topic": "Software Engineering",
    "question": "What is the curse of dimensionality and how does it impact ML models?",
    "answer": "The curse of dimensionality describes the issues that arise when working with high-dimensional data, affecting the performance of machine learning models.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ext-945",
    "topic": "Software Engineering",
    "question": "Explain the concept of Feature Engineering and its significance in ML.",
    "answer": "Feature engineering is a vital component of the machine-learning pipeline. It entails creating meaningful and robust representations of the data upon which the model will be built.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-946",
    "topic": "Software Engineering",
    "question": "What is Data Preprocessing and why is it important in ML?",
    "answer": "Data Preprocessing is a vital early-stage task in any machine learning project. It involves cleaning, transforming, and standardizing data to make it more suitable for predictive modeling.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-947",
    "topic": "Software Engineering",
    "question": "Explain the difference between Feature Scaling and Normalization.",
    "answer": "Both Feature Scaling and Normalization are data preprocessing techniques that aim to make machine learning models more robust and accurate. While they share similarities in standardizing data, they serve slightly different purposes.",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-ext-948",
    "topic": "Software Engineering",
    "question": "What is the purpose of One-Hot Encoding and when is it used?",
    "answer": "One-Hot Encoding is a technique frequently used to prepare categorical data for machine learning algorithms.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-949",
    "topic": "Software Engineering",
    "question": "Describe the concept of Handling Missing Values in datasets.",
    "answer": "Handling Missing Values is a crucial step in the data preprocessing pipeline for any machine learning or statistical analysis. It involves identifying and dealing with data points that are not available, ensuring the robustness and reliability of the subsequent analysis or model.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-950",
    "topic": "Software Engineering",
    "question": "Filter Methods",
    "answer": "- Description: Filter methods rank features based on certain criteria, such as their correlation with the target variable or their variance. - Advantages: They are computationally efficient and can be used in both regression and classification tasks. - Limitations: They do not take feature dependencies into account.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-951",
    "topic": "Software Engineering",
    "question": "Embedded Methods",
    "answer": "- Description: Embedded methods integrate feature selection with the model building process. Techniques like LASSO (Least Absolute Shrinkage and Selection Operator) and decision tree feature importances are examples of this approach. - Advantages: They are computationally efficient and provide feature rankings. - Limitations: They may not be transferable to other models.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-952",
    "topic": "Software Engineering",
    "question": "What is linear regression and how is it used in predictive modeling?",
    "answer": "Linear Regression is a statistical method to model the relationship between two numerical variables by fitting a linear equation to the observed data. This calibrated line serves as a predictive model to forecast future outcomes based on input features.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-953",
    "topic": "Software Engineering",
    "question": "Can you explain the difference between simple linear regression and multiple linear regression?",
    "answer": "While both simple linear regression (SLR) and multiple linear regression (MLR) predict a dependent variable using one or more independent variables, their methodologies and outcomes diverge in crucial ways.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-954",
    "topic": "Software Engineering",
    "question": "What assumptions are made in linear regression modeling?",
    "answer": "Linear regression makes several key assumptions about the nature of the relationship between the independent and dependent variables for the model to be valid.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-955",
    "topic": "Software Engineering",
    "question": "How do you interpret the coefficients of a linear regression model?",
    "answer": "The coefficients in a linear regression model provide insights into the strength and direction of the relationship between the input features and the target variable.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-956",
    "topic": "Software Engineering",
    "question": "What is the role of the intercept term in a linear regression model?",
    "answer": "The intercept term in linear regression, often denoted as $b0$, signifies the starting point or baseline value when all predictor variables are set to zero. It's crucial for mathematically anchoring the regression line and ensuring model utility in real-world situations.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-957",
    "topic": "Software Engineering",
    "question": "What are the common metrics to evaluate a linear regression model's performance?",
    "answer": "When evaluating a Linear Regression model, it's vital to use the right metrics to assess its performance.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ext-958",
    "topic": "Software Engineering",
    "question": "Explain the concept of homoscedasticity. Why is it important?",
    "answer": "Homoscedasticity is an essential assumption in several statistical techniques, including Linear Regression. It ensures that the variance of the residuals between independent and dependent variables remains constant across all levels of the independent variable.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-959",
    "topic": "Software Engineering",
    "question": "What is multicollinearity and how can it affect a regression model?",
    "answer": "Multicollinearity refers to high intercorrelations among independent variables in a regression model. This can cause a range of problems affecting the model's interpretability and reliability.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-960",
    "topic": "Software Engineering",
    "question": "How is hypothesis testing used in the context of linear regression?",
    "answer": "Hypothesis testing validates the significance of individual predictor (independent) variables and the model as a whole in the context of linear regression.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-ext-961",
    "topic": "Software Engineering",
    "question": "What do you understand by the term \"normality of residuals\"?",
    "answer": "Normality of residuals is a fundamental assumption of linear regression. It ensures that your model accurately reflects the relationship between variables and that results are reliable.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-962",
    "topic": "Software Engineering",
    "question": "Describe the steps involved in preprocessing data for linear regression analysis.",
    "answer": "Data preprocessing is essential for successful linear regression. This process involves steps such as loading the data, handling missing values, and feature scaling.",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-ext-963",
    "topic": "Software Engineering",
    "question": "Handling Missing Data",
    "answer": "Strategies to Handle Missing Data: - Drop records or fields: Useful when missing data is minimal. - Mean/Median/Mode Imputation: Substitute missing values with the mean, median, or mode of the feature. - Predictive models: Use advanced ML models to predict and fill missing values.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-964",
    "topic": "Software Engineering",
    "question": "Normalizing/Standardizing Features",
    "answer": "Why Normalize or Standardize: - It can make the learning process faster. - It ensures that no single feature dominates the others. Scale Features Based on Data Distribution: - For normal distributions: StandardScaler - For non-normal distributions: MinMaxScaler",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-ext-965",
    "topic": "Software Engineering",
    "question": "Encoding Categorical Data",
    "answer": "Reason for Encoding Categorical Variables: - Most ML algorithms are designed for numerical inputs. - In linear regression, a categorical variable with more than two categories often becomes multiple dummy variables.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-966",
    "topic": "Software Engineering",
    "question": "Feature Selection & Engineering",
    "answer": "- Remove irrelevant features. - Turn qualitative data into quantitative form. - Create new features by combining existing ones.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-967",
    "topic": "Software Engineering",
    "question": "Split Data into Training and Test Sets",
    "answer": "The primary purpose of splitting data is to assess model performance. Data is generally split into training and testing sets, often in an 80-20 or 70-30 ratio.",
    "tags": [
      "performance",
      "testing"
    ]
  },
  {
    "id": "q-ext-968",
    "topic": "Software Engineering",
    "question": "VIF and Multicollinearity Checks",
    "answer": "VIF: A measure to identify multicollinearity. It assesses how much the variance of an estimated regression coefficient increases if the predictors are correlated. Correlation Matrix: review pairwise correlations between variables, typically using Pearson correlation coefficient.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-969",
    "topic": "Software Engineering",
    "question": "How do you deal with missing values when preparing data for linear regression?",
    "answer": "Handling missing values in datasets is crucial for accurate and reliable modeling. Adverse consequences, such as biased coefficient estimates, reduced statistical power, and poor model generalization, can result from leaving them unaddressed in linear regression. Here are different techniques to deal with such instances.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-970",
    "topic": "Software Engineering",
    "question": "What feature selection methods can be used prior to building a regression model?",
    "answer": "Before training a regression model, it's important to select the most relevant features. This process improves the model's interpretability and generalization.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-971",
    "topic": "Software Engineering",
    "question": "Correlation Analysis",
    "answer": "Use Pearson's correlation coefficient to determine linear relationships between features and the target. Generally, features with high absolute correlation values (often above 0.5 or 0.7) are selected. import pandas as pd",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-972",
    "topic": "Software Engineering",
    "question": "Stepwise Regression",
    "answer": "This iterative technique either adds or removes features one at a time based on a chosen criterion, such as Bayesian Information Criterion (BIC) or Akaike Information Criterion (AIC). from sklearn.featureselection import RFE from sklearn.linearmodel import LinearRegression linreg = LinearRegression() selector = RFE(linreg, nfeaturestoselect=2) # Choose desired number of features selector.fit(X, y) selectedfeatures = X.columns[selector.support]",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-973",
    "topic": "Software Engineering",
    "question": "L1 Regularization (Lasso)",
    "answer": "L1 regularization introduces a penalty term calculated as the absolute sum of the feature coefficients. This encourages sparsity, effectively selecting features by setting some of their coefficients to zero. from sklearn.linearmodel import Lasso lasso = Lasso(alpha=0.1) # Adjust alpha for desired regularization strength lasso.fit(X, y) selectedfeatures = X.columns[lasso.coef != 0]",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-974",
    "topic": "Software Engineering",
    "question": "Tree-Based Methods: Feature Importance",
    "answer": "Algorithms like Decision Trees and their ensembles, such as Random Forest and Gradient Boosting, naturally quantify feature importance during the model building process. from sklearn.ensemble import RandomForestRegressor forest = RandomForestRegressor() forest.fit(Xtrain, ytrain) featureimportance = forest.featureimportances",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-975",
    "topic": "Software Engineering",
    "question": "Mutual Information",
    "answer": "This non-parametric method gauges the mutual dependence between two variables without necessarily assuming a linear relationship. from sklearn.featureselection import mutualinforegression mi = mutualinforegression(X, y)",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-976",
    "topic": "Software Engineering",
    "question": "How is feature scaling relevant to linear regression?",
    "answer": "Feature scaling is a crucial step in many machine learning pipelines, including Linear Regression. It ensures that all input features have a consistent scale. This standardization can be achieved through techniques like min-max scaling or mean normalization.",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-ext-977",
    "topic": "Software Engineering",
    "question": "Why Feature Scaling is Important",
    "answer": "- Gradient Descent: The optimization algorithm may converge faster with scaled features (like convergence to a minimum cost). - Regularization: When features are on different scales, the regularization term can unfairly penalize certain features or attributes. - Evaluating Coefficients' Importance: Without scaling, the magnitude of coefficients can be misleading. - K-nearest Neighbors (KNN) and Support Vector Machines (SVM): These algorithms are sensitive to feature scales. - Principal Component Analysis (PCA): Feature scaling is necessary before applying PCA to standardize outputs.",
    "tags": [
      "performance",
      "architecture"
    ]
  },
  {
    "id": "q-ext-978",
    "topic": "Software Engineering",
    "question": "Explain the concept of data splitting into training and test sets.",
    "answer": "To accurately evaluate the performance of a machine learning model, it's important to select independent datasets for training and testing. This is where data splitting comes in.",
    "tags": [
      "performance",
      "testing"
    ]
  },
  {
    "id": "q-ext-979",
    "topic": "Software Engineering",
    "question": "Why Split the Data?",
    "answer": "- Performance Check: Testing accuracy indicates how well a model will predict on future data. - Model Generalization Check: The test set evaluates if the model can accurately predict on data not seen during training.",
    "tags": [
      "performance",
      "testing"
    ]
  },
  {
    "id": "q-ext-980",
    "topic": "Software Engineering",
    "question": "What is Natural Language Processing (NLP) and why is it important?",
    "answer": "Natural Language Processing (NLP) encompasses the interaction between computers and human languages, enabling machines to understand, interpret, and produce human text and speech. From basic tasks such as text parsing to more advanced ones like sentiment analysis and translation, NLP is integral to various applications, including virtual assistants, content classification, and information retrieval systems.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-981",
    "topic": "Software Engineering",
    "question": "What do you understand by the terms 'corpus', 'tokenization', and 'stopwords' in NLP?",
    "answer": "In Natural Language Processing (NLP), a corpus, tokenization, and stopwords are fundamental concepts.",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-ext-982",
    "topic": "Software Engineering",
    "question": "Distinguish between morphology and syntax in the context of NLP.",
    "answer": "Morphology deals with the structure and formation of words, syntax its their arrangement in sentences.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-983",
    "topic": "Software Engineering",
    "question": "Explain the significance of Part-of-Speech (POS) tagging in NLP.",
    "answer": "Part-of-Speech (POS) Tagging plays a fundamental role in natural language processing by identifying the grammatical components of text, such as words and phrases, and labeling them with their corresponding parts of speech.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-984",
    "topic": "Software Engineering",
    "question": "Describe lemmatization and stemming. When would you use one over the other?",
    "answer": "Both lemmatization and stemming are methods for reducing inflected words to their root forms.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-985",
    "topic": "Software Engineering",
    "question": "What is a 'named entity' and how is Named Entity Recognition (NER) useful in NLP tasks?",
    "answer": "In Natural Language Processing, a named entity (NE) refers to real-world objects, such as persons, dates, or locations, that are assigned proper names.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-986",
    "topic": "Software Engineering",
    "question": "Define 'sentiment analysis' and discuss its applications.",
    "answer": "Sentiment analysis (SA), also known as opinion mining, is the computational study of people's emotions, attitudes, and opinions from text data. Its core goal is determining whether a piece of writing is positive, negative, or neutral. Applications of sentiment analysis are diverse, spanning diverse domains including:",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-987",
    "topic": "Software Engineering",
    "question": "How does a dependency parser work, and what information does it provide?",
    "answer": "A dependency parser is a tool used in natural language processing (NLP) to extract grammatical structure from free-form text.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-988",
    "topic": "Software Engineering",
    "question": "What are n-grams, and how do they contribute to language modeling?",
    "answer": "N-grams are sequential word or character sets, with \"n\" indicating the number of elements in a particular set. They play a crucial role in understanding context and text prediction, especially in statistical language models.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-989",
    "topic": "Software Engineering",
    "question": "Describe what a 'bag of words' model is and its limitations.",
    "answer": "The Bag of Words model, or BoW, is a fundamental technique in Natural Language Processing (NLP). This model disregards the word order and syntax within a text, focusing instead on the presence and frequency of words.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-990",
    "topic": "Software Engineering",
    "question": "Explain how the Naive Bayes classifier is used in NLP.",
    "answer": "Naive Bayes classifier is a popular choice for text classification tasks in Natural Language Processing (NLP). It's preferred for its simplicity, speed, and effectiveness.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-991",
    "topic": "Software Engineering",
    "question": "How are Hidden Markov Models (HMMs) applied in NLP tasks?",
    "answer": "Hidden Markov Models (HMMs) have a long-standing role in Natural Language Processing (NLP) tasks due to their ability to handle sequential data like text. From the early days of POS tagging to modern speech recognition and language translation, HMMs have been instrumental in numerous tasks.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-992",
    "topic": "Software Engineering",
    "question": "Discuss the role of Support Vector Machines (SVM) in text classification.",
    "answer": "Text Classification is a common Natural Language Processing (NLP) task and SVMs play a key role in this area.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-993",
    "topic": "Software Engineering",
    "question": "What are the advantages of using Random Forests in NLP?",
    "answer": "While Random Forests are most commonly associated with classification tasks, they also harbor several advantages for Natural Language Processing (NLP) applications.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-994",
    "topic": "Software Engineering",
    "question": "Explain how Decision Trees are utilized for NLP problems.",
    "answer": "Decision Trees in the context of Natural Language Processing (NLP) are multi-purpose, offering text analysis solutions across sentiment analysis, topic modeling, and language understanding. Here is an overview of how they operate in an NLP setting.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-995",
    "topic": "Software Engineering",
    "question": "What is Object-Oriented Programming (OOP)?",
    "answer": "Object-Oriented Programming is a programming paradigm that organizes code into self-contained objects. Each object combines data and the methods that operate on that data, resulting in more modular, flexible, and reusable code.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-996",
    "topic": "Software Engineering",
    "question": "What is the difference between procedural and Object-Oriented programming?",
    "answer": "Procedural and Object-Oriented Programming (OOP) are distinct programming paradigms. While procedural programming is linear and task-centric, OOP emphasizes an organic model, where data is encapsulated in objects.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-997",
    "topic": "Software Engineering",
    "question": "What is polymorphism? Explain overriding and overloading.",
    "answer": "Polymorphism in object-oriented programming allows objects of different types to be treated as if they belong to the same type through a shared interface. It abstracts method details, promoting code flexibility and reusability.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-998",
    "topic": "Software Engineering",
    "question": "What is inheritance? Name some types of inheritance.",
    "answer": "Inheritance is a fundamental concept in object-oriented programming that allows for the creation of new classes based on existing ones. Inheritance establishes an \"is-a\" relationship, where the derived class (also called the subclass or child class) inherits properties and behaviors from its parent, or base class.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-999",
    "topic": "Software Engineering",
    "question": "What is an abstraction? Name some abstraction techniques.",
    "answer": "Abstraction in object-oriented programming (OOP) is the concept of focusing on essential characteristics and hiding unnecessary details. It enables clear separation between high-level concepts and their specific implementations, promoting code reusability, maintainability, and security.",
    "tags": [
      "security"
    ]
  },
  {
    "id": "q-ext-1000",
    "topic": "Software Engineering",
    "question": "What is a class in OOP?",
    "answer": "Class in Object-Oriented Programming represents a blueprint for creating objects (instances). It encapsulates attributes (data) and behaviors (methods) under a unified structure. When instantiated, each object can carry individual data, adhering to the blueprint provided by its class.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1001",
    "topic": "Software Engineering",
    "question": "What is an object in OOP?",
    "answer": "An object represents a specific instance of a class. It encapsulates both data (attributes) and behavior (methods) within a single unit.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1002",
    "topic": "Software Engineering",
    "question": "How do access specifiers work and what are they typically?",
    "answer": "In Object-Oriented Programming (OOP), access specifiers define the level of visibility and accessibility of class members.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1003",
    "topic": "Software Engineering",
    "question": "Name some ways to overload a method.",
    "answer": "Let's look at three common techniques to overload a method.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1004",
    "topic": "Software Engineering",
    "question": "Changing Parameter Number",
    "answer": "This method involves altering the number of parameters in different method signatures. Here is an example in Java: public int calculateSum(int a, int b) { // Two parameters return a + b; } public int calculateSum(int a, int b, int c) { // Three parameters return a + b + c; }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1005",
    "topic": "Software Engineering",
    "question": "Adapting Parameter Order",
    "answer": "Another overloading technique involves rearranging the order of parameters in methods to create unique signatures. Here is an example in Java: public double calculateArea(double length, double width) { // Length, then width return length width; } public double calculateArea(double radius) { // Just radius for a circle return Math.PI radius radius; }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1006",
    "topic": "Software Engineering",
    "question": "Varying Parameter Type",
    "answer": "You can define methods with different types of parameters to enable overloading. Here is an example in Java: public void printDetails(String name, int age) { System.out.println(\"Name: \" + name + \" , Age: \" + age); } public void printDetails(int id) { System.out.println(\"ID: \" + id); } public void printDetails(double salary) { System.out.println(\"Salary: \" + salary); }",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1007",
    "topic": "Software Engineering",
    "question": "What is cohesion in OOP?",
    "answer": "Cohesion in OOP refers to how closely the methods and data within a single class are related to one another. A highly cohesive class is focused on a specific task or responsibility, making it easier to maintain, understand, and ensure reliability. High cohesion is a desired attribute because it means that methods and properties within a class work together in a unified manner. In contrast, low cohesion indicates that a class has multiple, often unrelated responsibilities, making it harder to understand and maintain.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1008",
    "topic": "Software Engineering",
    "question": "What is coupling in OOP?",
    "answer": "Coupling in OOP describes the degree of interdependence between classes or modules. It determines how closely different modules or classes are linked to each other, impacting the system's flexibility, maintainability, and testability. Loose coupling is generally preferred in software design.",
    "tags": [
      "testing"
    ]
  },
  {
    "id": "q-ext-1009",
    "topic": "Software Engineering",
    "question": "What is a constructor and how is it used?",
    "answer": "A constructor is a special method in object-oriented programming used for initializing objects. It ensures that newly created objects are set up with appropriate initial state and any required resources.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1010",
    "topic": "Software Engineering",
    "question": "Describe the concept of destructor or finalizer in OOP.",
    "answer": "Destructors, or class finalizers, are used in object-oriented programming to perform cleanup actions before an object is destroyed.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1011",
    "topic": "Software Engineering",
    "question": "Compare inheritance vs. mixin vs. composition.",
    "answer": "Inheritance, mixins, and composition are all techniques in object-oriented programming that deal with code reuse and the relationship between objects or classes. Let's look into the details and compare them:",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1012",
    "topic": "Software Engineering",
    "question": "Explain the difference between a Series and a DataFrame in Pandas.",
    "answer": "Pandas, a popular data manipulation and analysis library, primarily operates on two data structures: Series, for one-dimensional data, and DataFrame, for two-dimensional data.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1013",
    "topic": "Software Engineering",
    "question": "How can you read and write data from and to a CSV file in Pandas?",
    "answer": "Pandas makes reading from and writing to CSV files straightforward.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1014",
    "topic": "Software Engineering",
    "question": "How do you handle missing data in a DataFrame?",
    "answer": "Dealing with missing data is a common challenge in data analysis. Pandas offers flexible tools for handling missing data in DataFrames.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1015",
    "topic": "Software Engineering",
    "question": "Discuss the use of groupby in Pandas and provide an example.",
    "answer": "GroupBy in Pandas lets you aggregate and analyze data based on specific features or categories. This allows for powerful split-apply-combine operations, especially when combined with agg to define multiple aggregations at once.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1016",
    "topic": "Software Engineering",
    "question": "Explain the concept of data alignment and broadcasting in Pandas.",
    "answer": "Data alignment and broadcasting are two mechanisms that enable pandas to manipulate datasets with differing shapes efficiently.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1017",
    "topic": "Software Engineering",
    "question": "What is data slicing in Pandas, and how does it differ from filtering?",
    "answer": "Data slicing and filtering are distinct techniques used for extracting subsets of data in Pandas.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1018",
    "topic": "Software Engineering",
    "question": "Describe how joining and merging data works in Pandas.",
    "answer": "Pandas provides versatile methods for combining and linking datasets, with the two main approaches being join and merge. Let's explore how they operate.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1019",
    "topic": "Software Engineering",
    "question": "How do you apply a function to all elements in a DataFrame column?",
    "answer": "You can apply a function to all elements in a DataFrame column using Pandas' .apply() method along with a lambda function for quick transformations.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1020",
    "topic": "Software Engineering",
    "question": "Demonstrate how to handle duplicate rows in a DataFrame.",
    "answer": "Dealing with duplicate rows in a DataFrame is a common data cleaning task. The Pandas library provides simple, yet powerful, methods to identify and handle this issue.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1021",
    "topic": "Software Engineering",
    "question": "Describe how you would convert categorical data into numeric format.",
    "answer": "Converting categorical data to a numeric format, a process also known as data pre-processing, is fundamental for many machine learning algorithms that can only handle numerical inputs. There are two common approaches to achieve this: Label Encoding and One-Hot Encoding.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1022",
    "topic": "Software Engineering",
    "question": "How can you pivot data in a DataFrame?",
    "answer": "In Pandas, you can pivot data using the pivot or pivottable methods. These functions restructure data in various ways, such as converting unique values into column headers or aggregating values where duplicates exist for specific combinations of row and column indices.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1023",
    "topic": "Software Engineering",
    "question": "Show how to apply conditional logic to columns using the where() method.",
    "answer": "The where() method in Pandas enables conditional logic on columns, providing a more streamlined alternative to loc or if-else statements. The method essentially replaces values in a DataFrame or Series based on defined conditions.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1024",
    "topic": "Software Engineering",
    "question": "What is the purpose of the apply() function in Pandas?",
    "answer": "The apply() function in Pandas is utilized to apply a given function along either the rows or columns of a DataFrame for advanced data manipulation tasks.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1025",
    "topic": "Software Engineering",
    "question": "What is PyTorch and how does it differ from other deep learning frameworks like TensorFlow?",
    "answer": "PyTorch, a product of Facebook's AI Research lab, is an open-source machine learning library built on the strengths of dynamic computation graphs. Its features and workflow have made it a popular choice for researchers and developers alike.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1026",
    "topic": "Software Engineering",
    "question": "When to Choose PyTorch",
    "answer": "- Research-Oriented Projects: Especially those requiring dynamic behavior or experimental models. - Prototyping: For a rapid and nimble development cycle. - Small to Medium-Scale Projects: Where ease of use and quick learning curve are crucial. - Natural Language Processing (NLP) Tasks: Many NLP-focused libraries and tools utilize PyTorch.",
    "tags": [
      "architecture"
    ]
  },
  {
    "id": "q-ext-1027",
    "topic": "Software Engineering",
    "question": "When Both Choices Are Valid",
    "answer": "The choice between TensorFlow and PyTorch depends on the specific project requirements, the team's skills, and the preferred development approach. Many organizations use a hybrid approach, leveraging the strengths of both frameworks tailored to their needs.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1028",
    "topic": "Software Engineering",
    "question": "Explain the concept of Tensors in PyTorch.",
    "answer": "In PyTorch, Tensors serve as a fundamental building block, enabling efficient numerical computations on various devices, such as CPUs, GPUs, and TPUs. They are conceptually similar to numpy.arrays while benefiting from hardware acceleration and offering a range of advanced features for deep learning and scientific computing.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1029",
    "topic": "Software Engineering",
    "question": "In PyTorch, what is the difference between a Tensor and a Variable?",
    "answer": "PyTorch was initially developed around the concept of dynamic computation graphs, which are updated in real time as operations are applied to the network. The introduction of Autograd brought about the Variable. However, in more recent versions, Variable has been made obsolete, and utility has been integrated into the main Tensor class.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1030",
    "topic": "Software Engineering",
    "question": "How can you convert a NumPy array to a PyTorch Tensor?",
    "answer": "Converting a NumPy array to a PyTorch Tensor involves multiple steps, and there are different ways to carry out the transformation.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1031",
    "topic": "Software Engineering",
    "question": "What is the purpose of the .grad attribute in PyTorch Tensors?",
    "answer": "In PyTorch, the .grad attribute in Tensors serves a critical function by tracking gradients during backpropagation, ultimately enabling automatic differentiation. This mechanism is fundamental for training Neural Networks.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1032",
    "topic": "Software Engineering",
    "question": "Explain what CUDA is and how it relates to PyTorch.",
    "answer": "CUDA (Compute Unified Device Architecture) is an NVIDIA technology that delivers dramatic performance increases for general-purpose computing on NVIDIA GPUs. In the context of PyTorch, CUDA enables you to leverage GPU acceleration for deep learning tasks, reducing training time from hours to minutes or even seconds. For simple examples, PyTorch automatically selects whether to use the CPU or GPU. However, for more complex work, explicit device configuration may be needed.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ext-1033",
    "topic": "Software Engineering",
    "question": "How does automatic differentiation work in PyTorch using Autograd?",
    "answer": "Automatic differentiation in PyTorch, managed by its autograd engine, simplifies the computation of gradients in neural networks.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1034",
    "topic": "Software Engineering",
    "question": "Describe the steps for creating a neural network model in PyTorch.",
    "answer": "Here are the steps to create a neural network in PyTorch:",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1035",
    "topic": "Software Engineering",
    "question": "What is a Sequential model in PyTorch, and how does it differ from using the Module class?",
    "answer": "Both the Sequential model and the Module class in PyTorch are tools for creating neural network architectures.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1036",
    "topic": "Software Engineering",
    "question": "How do you implement custom layers in PyTorch?",
    "answer": "Custom layers in PyTorch are any module or sequence of operations tailored to unique learning requirements. This may include combining traditional operations in novel ways, introducing custom operations, or implementing specialized constraints for certain layers.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1037",
    "topic": "Software Engineering",
    "question": "What is the role of the forward method in a PyTorch Module?",
    "answer": "The forward method is foundational to PyTorch's Module. It links input data to model predictions, embodying the core concept of computational graphs.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1038",
    "topic": "Software Engineering",
    "question": "In PyTorch, what are optimizers, and how do you use them?",
    "answer": "Optimizers play a pivotal role in guiding gradient-based optimization algorithms. They drive the learning process by adjusting model weights based on computed gradients. In PyTorch, optimizers like Stochastic Gradient Descent (SGD) and its variants, such as Adam and RMSprop, are readily available.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ext-1039",
    "topic": "Software Engineering",
    "question": "What is the purpose of zerograd() in PyTorch, and when is it used?",
    "answer": "In PyTorch, zerograd() is used to reset the gradients of all model parameters to zero. It's typically employed before a new forward and backward pass in training loops, ensuring that any pre-existing gradients don't accumulate. Internally, zerograd() performs backward() on the model to deactivate gradients for all parameters followed by setting them all to zero. This approach is more efficient for many deep learning models since it avoids the overhead of maintaining gradients when unnecessary.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1040",
    "topic": "Software Engineering",
    "question": "How can you implement learning rate scheduling in PyTorch?",
    "answer": "Learning Rate Scheduling in PyTorch adapts the learning rate during training to ensure better convergence and performance. This process is particularly helpful when dealing with non-convex loss landscapes, as well as to balance accuracy and efficiency.",
    "tags": [
      "performance"
    ]
  },
  {
    "id": "q-ext-1041",
    "topic": "Software Engineering",
    "question": "Describe the process of backpropagation in PyTorch.",
    "answer": "Backpropagation is a foundational process in deep learning, enabling neural network models to update their parameters. In PyTorch, backpropagation is implemented with autograd, a fundamental feature that automatically computes gradients.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1042",
    "topic": "Software Engineering",
    "question": "What is a recommendation system and how does it work?",
    "answer": "Recommendation Systems are tools to assist users in filtering through the avalanche of available content and making personalized, informed choices, such as what movie to watch, which product to buy, or where to dine.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1043",
    "topic": "Software Engineering",
    "question": "When to Apply SVD",
    "answer": "- Recommendation Use-Case: Ideal for generic item recommendations rather than niche content. - Sparse Datasets: When user-item interaction data is mostly absent, rendering the dataset sparse, SVD's ability to manage such data adds to its utility.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1044",
    "topic": "Software Engineering",
    "question": "Can you explain the difference between collaborative filtering and content-based recommendations?",
    "answer": "Both Collaborative Filtering and Content-Based Recommendations are widely used in recommendation systems, each with its unique approach.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1045",
    "topic": "Software Engineering",
    "question": "What are the main challenges in building recommendation systems?",
    "answer": "Building recommendation systems comes with its unique set of challenges, requiring strategies that balance complexity and user experience.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1046",
    "topic": "Software Engineering",
    "question": "How do cold start problems impact recommendation systems and how can they be mitigated?",
    "answer": "Cold start in the realm of recommendation systems arises when the system lacks sufficient data to provide accurate suggestions. It's mainly a problem for new items or users.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1047",
    "topic": "Software Engineering",
    "question": "Discuss the importance of serendipity, novelty, and diversity in recommendation systems.",
    "answer": "Recommendation systems, especially in domains like music, books, and movies, aim to do more than just matchmaking based on user preferences and item relevance. They strive to foster user engagement through the notions of serendipity, novelty, and diversity. These characteristics are crucial in countering filter bubbles and ensuring that users encounter new and varied content.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1048",
    "topic": "Software Engineering",
    "question": "How do matrix factorization techniques work in recommendation engines?",
    "answer": "Matrix factorization is a fundamental technique in recommendation systems. At its core, it aims to decompose the user-item interaction matrix into two lower-dimensional matrices, thus identifying latent features that capture users' preferences and items' characteristics.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1049",
    "topic": "Software Engineering",
    "question": "What are the roles of user profiles and item profiles in a recommendation system?",
    "answer": "Both user profiles and item profiles form the foundation of recommendation systems' accuracy and utility. These profiles, often representing users and their preferences and items and their attributes, are derived from historical interaction data between users and items.",
    "tags": [
      "core"
    ]
  },
  {
    "id": "q-ext-1050",
    "topic": "Software Engineering",
    "question": "Describe the concept of implicit versus explicit feedback in the context of recommendation systems.",
    "answer": "When it comes to Recommendation Systems, a key distinction is made between explicit and implicit feedback. This classification determines how the system learns from user behaviors.",
    "tags": [
      "core"
    ]
  }
];

export const questionTopics = ['All', ...Array.from(new Set(questionBank.map((q) => q.topic)))];
