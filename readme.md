
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
    ans- getElementById - gives back a single element by its ID  
    getElementsByClassName - gives a live list of elements updates if DOM changes  
    querySelector - returns the first element that matches a CSS selector
       querySelectorAll - returns all matching elements as a static list doesn’t update 
  
2. How do you **create and insert a new element into the DOM**?
    ans- I use document.createElement() and append it with appendChild() or append().

3. What is **Event Bubbling** and how does it work?
    ans- Event Bubbling means that when an event happens on a child element, it bubbles up through its parent elements until it reaches the root

4. What is **Event Delegation** in JavaScript? Why is it useful?
  ans- event delegation is a technique where you add an event listener to a parent element, and handle events for its child elements using event.target.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
    ans- event.preventDefault() - Prevents the default browser action.
    event.stopPropagation() - Stops the event from bubbling up
---

