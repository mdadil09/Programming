/* Write a function createCounter. It should accept an initial integer init. 
It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 

Example 1:

Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
Example 2:

Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
Output: [1,2,1,0,0]
Explanation:
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0
 

Constraints:

-1000 <= init <= 1000
total calls not to exceed 1000 */

//Method 1
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let count = init;

  function increment() {
    return ++count;
  }
  function decrement() {
    return --count;
  }
  function reset() {
    count = init;
    return count;
  }
  return {
    increment,
    decrement,
    reset,
  };
};

//Method 2
class Counter {
  constructor(init) {
    this.init = init;
    this.count = init;
  }
  increment() {
    return ++this.count;
  }
  decrement() {
    return --this.count;
  }
  reset() {
    this.count = this.init;
    return this.count;
  }
}

var createCounter = function (init) {
  return new Counter(init);
};

//Method 3
var createCounter = function (init) {
  let count = init;

  const increment = () => ++count;
  const decrement = () => --count;
  const reset = () => {
    count = init;
    return count;
  };
  return {
    increment,
    decrement,
    reset,
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
