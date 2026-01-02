# Speed js

- call() directly calls the function and .bind() return the new function

# Behind the scene of JS

- JS call stack:
    JS call stack is a stack which javascript uses behind the scene to execute the javascript code.

    JS call stack is imepatiend and it waits for nothing, if it encounter a setTimeout method or something, That code goes into the callBack queue queue.

- Callback queue or Task queue:
    Callback queue is maintained to store the callbackes like setTimeout. 

- Micro Task Queue:
    Micro Task queue is like Task queue but it has higher priority than task queue. Event loop will only pick code from Task queue if Micro Task queue is empty 

- Event loop:
    Event loop is the process which continusly looks for weather or not code exits in the callback queue and if exists and it's ready top executed, it puts the code in JS call stack, It only puts the code in stack if the call stack is empty .

- Starvation:
    It means our Micro Task queue put's one after another code in micro tast queue, means once the promise is resolved another promise is thrown into micro task queue, if that resolve then another promise, this situvation lead to starvation because in this situvation Task queue's code will never be executed.

- hoisting:
    It referece to the process where it apperars that intepeter moves the variables declaration at top of the file. 
    * Function is also hoisted

* let and const variables also get hoisted but we can not access them before the line of  there are declaration, From the top line till the line of declaration we call that zone Temporal dead zone(TDZ)

* Global execution context runs inside call stack

## Promises
* Promise is way to tell that i can't get the data immegetaly but i will promise you that i will get the data later.
* Any async function or fetch returned promise by default.
* Promise has 3 methods .then .catch .finally
* Promise has 3 states pending, fulfilled, rejected, (settled only communication purpose)
* in custom promise resolve function calls the .then method and reject method calls the .catch method   
* callback function is function which is passed as parameter to another function

## Polyfills
* Customised versions of built in javascript features is called polyfills, which is used to give access of latest features to old browsers.
* The base call has the propertie called prototype and object of that call has the __ proto__ property. 
```
for eg:
Array.prototype 
let arr = []
arr.__proto__

```

* ?? nullish cohetion