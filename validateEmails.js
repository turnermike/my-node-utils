/**
 * validateEmails.js
 *
 * Validate a comma seperated string of emails.
 *
 * @param String - Email address strings, comma seperated
 *
 * How to use:
 *
 * 1. Import the module at top of file:
 * import addClass from '../utils/addClass.js';
 *
 * 3. Call it:
 * let emailErrors = validateEmails(values || '');
 *
 */

const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // validate email regex

export default (emails) => {

  const invalidEmails = emails
                      .split(',')
                      .map(email => email.trim(','))
                      .filter(email => re.test(email) === false);

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }

  // no invalid emails, return undefined
  return;

};