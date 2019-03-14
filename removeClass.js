/**
 * removeClass.js
 *
 * Removes css class names from elements.
 *
 * @param Array - HTML elements
 * @param String - The class name.
 *
 * How to use:
 * 1. Import the module at top of file:
 * import addClass from '../utils/removeClassClass.js';
 *
 * 2. Create instance of element to add class to:
 * let bodyEl = document.getElementsByTagName('body')[0];
 *
 * 3. Add class to element:
 * removeClass(bodyEl, 'small');
 *
 */
export default (elements, myClass) => {

  // if there are no elements, we're done
  if (!elements) { return; }

  // if we have a selector, get the chosen elements
  if (typeof(elements) === 'string') {
    elements = document.querySelectorAll(elements);
  }

  // if we have a single DOM element, make it an array to simplify behavior
  else if (elements.tagName) { elements=[elements]; }

  // create pattern to find class name
  var reg = new RegExp('(^| )'+myClass+'($| )','g');

  // remove class from all chosen elements
  for (var i=0; i<elements.length; i++) {
    elements[i].className = elements[i].className.replace(reg,'');
  }

}
