Q1: What is microservice architecture?
A: Microservice architecture is a method of developing software applications as a collection of small, independent services that communicate with each other over a network. Each service is responsible for a specific business capability and can be developed, deployed, and scaled independently of the other services. This approach allows for greater flexibility and scalability, as well as easier maintenance and deployment of individual services.

---

Q2: What is monolith architecture?
A: Monolith architecture refers to the traditional approach of building software applications as a single, cohesive unit. In a monolithic architecture, all the different functionalities of an application are tightly coupled and integrated into a single codebase, and are typically deployed together as a single unit. This approach can make it more difficult to scale individual parts of the application, and can also make it harder to make changes or updates to the codebase without affecting the entire application. Monolith architecture is in contrast with Microservice architecture which decompose the application into smaller, independent services.

---

Q3: What is difference between monoloth and microservice?
A: The main difference between monolithic and microservice architecture is the way in which the functionality of an application is divided and organized.

In a monolithic architecture, all the different functionalities of an application are tightly coupled and integrated into a single codebase, and are typically deployed together as a single unit. This approach can make it more difficult to scale individual parts of the application, and can also make it harder to make changes or updates to the codebase without affecting the entire application.

On the other hand, in a microservice architecture, the functionality of an application is divided into small, independent services that communicate with each other over a network. Each service is responsible for a specific business capability and can be developed, deployed, and scaled independently of the other services. This approach allows for greater flexibility and scalability, as well as easier maintenance and deployment of individual services.

## Overall, monolithic architecture is simpler to develop and deploy, but can be harder to scale and maintain over time, while microservices architecture is more complex to develop and deploy, but is more flexible, scalable and resilient in the long run.

Q4: What is optional chaining?
A: Optional chaining is a feature in JavaScript languages that allows for the safe access of an object's properties, even if the object itself is null or undefined.
When using optional chaining, if a reference is null or undefined, the expression short-circuits and returns undefined, instead of throwing a TypeError. This can be useful when working with complex data structures, and can help to prevent runtime errors caused by null or undefined references.

---

Q5: What is shimmer ui?
A: Shimmer UI is a visual design pattern that is used to indicate that data is being loaded or that a user interface element is in a "loading" state. It typically consists of a repeating pattern of thin horizontal lines or a gradient that animates back and forth. The purpose of shimmer UI is to provide visual feedback to the user that something is happening, and to make the interface feel more responsive, even if the data is not yet available.

Shimmer UI is often used in situations where data is being loaded from a remote server, such as in a social media feed, a search results page, or a news feed. It can also be used in situations where a user interface element is being rendered for the first time, such as in a mobile app.

## There are different ways to implement Shimmer UI, some libraries like Facebook's ReboundX provide a way to easily add shimmering effect, while other can be implemented with CSS and JavaScript.

Q6: Js expression vs Js statement.
A: An expression is a snippet of code that evaluates to a value. A statement is a snippet of code that performs an action. Statements, on the other hand, perform actions and do not have a value.

---

Q7: What is conditional Rendering? explain with code.
A: Conditional rendering is a technique in React where the component decides whether to render or not based on certain conditions. This can be achieved using a simple if-else statement or a ternary operator.

---

Q8: What is CORS?
A: CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers. It prevents a web page from making requests to a different domain than the one that served the web page.

For example, if a web page served by "www.example.com" makes a request to "api.example.com", the browser will check if "api.example.com" has CORS enabled and if it has granted access to "www.example.com". If it hasn't, the browser will block the request.

## This is important because it prevents malicious websites from making unauthorized requests to your server.

Q9: What is the use of `const json = await data.json();`?
A: `const json = await data.json();` is used to parse the response of an HTTP request as a JSON object.

data in this example is the response object returned by the fetch() function or any other function that returns a response object. The json() method is a built-in method of the Response object, it reads the response body and parse it as JSON.

By using await keyword, it waits for the json() method to complete its execution, so it will wait for the response to be fully downloaded and parsed as JSON before continuing with the execution of the code.

So, the const json = await data.json(); is used to parse the response of a request as a JSON object and store it in a variable called json. This allows you to easily access the data you need from the response and use it in your application.

It's worth mentioning that this line of code is often used in conjunction with the fetch() function, which is a built-in JavaScript function for making network requests.

`async function getData(){
    const response = await fetch('https://example.com/data');
    const json = await response.json();
    console.log(json);
}`
