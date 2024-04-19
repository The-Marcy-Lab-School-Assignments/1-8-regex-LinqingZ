/* eslint-disable no-unused-vars, no-useless-escape */

const isValidCompanyUsername = (username, firstName, lastName) => {
  const regex = new RegExp(`^(sales|tech)\\d\\w-${firstName[0]}${lastName}\\d?$`);
  // console.log(regex) // to help you debug, look at the final regex
  // console.log(username.match(regex))
  return regex.test(username);
};
// console.log(isValidCompanyUsername('sales9b-ajohnson1', 'albert', 'johnson'))
module.exports = {
  isValidCompanyUsername,
};
