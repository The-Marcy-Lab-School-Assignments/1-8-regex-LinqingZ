// Q1
const helloWorldRegex = (str) => {
  return /hello\s+world/gi.test(str);
};
// Q2
const hasAVowel = (str) => {
  return /[aeiou]/gi.test(str);
};

// Q3
const hasCatsOrDogs = (str) => {
  return /(cats|dogs)/gi.test(str);
};

// Q4
const hasVowelStart = (str) => {
  return /^[aeiou]/i.test(str);
};

// Q5
const hasPunctuationEnd = (str) => {
  return /[!.?]$/.test(str)
};

// Q6
const hasNothingOrDigits = (str) => {
  // return /^$|^\d+$/.test(str);
  return /^(|\d+)$/.test(str);
};

// Q7
const hasNoFlippers = (str) => {
  return !/[BCcDEHIKOoXxl]/.test(str); // right
  // return /[^BCcDEHIKOoXxl]/.test(str) // wrong
};
// Q8
const isValidEmail = (str) => {
  // only letter a-z, numbers (0-9), and periods(.) are allowed in email
  return /^[\w\.]+@[\w\.]+\.[a-z]{2,4}$/i.test(str);
};
// Q9
const isValidPhoneNumber = (str) => {
  // return /^\+?(\d{1,3})?[-. ]?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/.test(str); // wrong
  // return /^\+?(\d{1,3})?[-. ]?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/.test(str); // wrong
  return /^\+?(\d{1,3})?[-. ]?\(?\d{3}\)?[-. ]?\d{3}[-. ]\d{4}$/.test(str)
};
// Q10
const matchAllNumbers = (str) => {
  return str.match(/\d+/g) || [];

};
// Q11
const matchAllNumbersAsNumbers = (str) => {
  return (str.match(/\d+/g) || []).map((num) => Number(num));
};

// Q12
const matchAllWords = (str) => {
  // return str.match(/\b\w+\b/g) || []; // wrong
  return str.match(/[a-zA-Z']+/g) || [];
};

// Q13
const replaceAllNumbers = (str) => {
  return str.replace(/\d+/g, "???");
};

// Q14
const fixFileName = (str) => {
  return str.replace(/\s+/g, "_")
};
// Q15
const nameRedacter = (str) => {
  // return str.replace(/([^MI][A-Z]+)/g, ' REDACTED'); // wrong
  return str.replace(/\b(?!I\b|A)([A-Z]+)\b/g, "REDACTED"); // "I\b" make sure if"I" is followed by a word character (i.e., a letter, digit, or underscore)
};

// Q16
const camelToSnakeCase = (str) => {
  // return str.replace(/([A-Z])/g, match => `_${match.toLowerCase()}`); // best way
  // return str.replace(/([A-Z])/g, match => `_${match.toLowerCase()}`).trim();
  return str.replace(/([A-Z])/g, "_$1").toLowerCase();


};

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
