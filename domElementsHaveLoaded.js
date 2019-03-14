/**
 * domElementsHaveLoaded.js
 *
 * Checks for loaded DOM elements on a timer.
 *
 * Use case: Previously used this to check if masonary grid items have populated.
 *
 * @param String - The class name selector for the elements.
 * @param Interval - The timer interval, defaults to 500 miliseconds (half second)
 * @param Durration - The max execution time for timer, defaults to 10 seconds
 *
 * @return - Promise
 *              - resolve() will return HTMLCollection of elements
 *              - reject() will return an error
 *
 * How to use:
 * 1. Import the module at top of file:
 *
 * import domElementsHaveLoaded from '../utils/domElementsHaveLoaded.js';
 *
 * 2. Call the module using async and use the elements within the Array.from method.
 *
 * async function checkForAvailableItems(selector) {
 *
 *   var result = domElementsHaveLoaded(selector);                         // returns a promise
 *
 *   result.then(function(data) {                                          // success
 *
 *     Array.from(data).forEach(function(item) {                           // loop each item returned
 *
 *       // do stuff with item
 *
 *     });
 *
 *   }).catch(function(err){                                               // eror
 *
 *     console.log('Error: ', err);
 *
 *   })
 *
 * }
 *
 * checkForAvailableItems('vc_grid-item-mini');
 *
 */
export default (selector, interval = 100, maxDurration = 10000) => {

  // console.log('selector', selector);
  // console.log('interval', interval);
  // console.log('maxDurration', maxDurration);

  return new Promise((resolve, reject) => {

    let durration = 0;                                                        // incremented after each interval to track time

    let timer = setInterval( function() {                                     // init timer

      let elements = document.getElementsByClassName('vc_grid-item-mini');    // get the elements by class name
      // console.log('elements.length', elements.length);

      if(elements.length) {                                                   // handle resolve
        // found the elements
        clearInterval(timer);                                                 // clear the timer
        resolve(elements);                                                    // all done, return the elements

      }

      if(durration >= maxDurration) {                                         // handle reject
        // reached the max execution time
        clearInterval(timer);                                                 // clear the timer
        reject('We have reached the max execution time.');                    // return error

      }

      durration += interval;                                                  // increment durration
      // console.log('durration', durration);

    }, interval);

  });

};