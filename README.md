06-exploring-the-world

What is useEffect()?
It is a hook. And a. Hook is javascript function.

How we call useEffect() function?
We call useEffect() function by giving two parameters. One is the callback function and another one is dependency array.

useEffect( ( ) => { callback function} , [ dependency array ] )
This callback function is called on every re-render. (When state changes in a component re-render occurs in every changes). But I don’t want to call the function in every re-render. To stop this we have empty dependency array. If we want to call the function for a specific changes? We will specify that specific thing in dependency array. After this step we can say my useEffect() is depending on something, and is that something changes, my useEffect() function will be called.
When you have callback function inside useEffect() with a empty dependency array, it will be called once after initial render.

First initial render happens then useEffect() get called then again re-render.
