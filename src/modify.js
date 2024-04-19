const swapAllCases = (str) => {
  return str.replace(/[a-z]/gi, function(match) {
    return /[a-z]/.test(match) ? match.toUpperCase() : match.toLowerCase();
  });
};

module.exports = {
  swapAllCases,
};
