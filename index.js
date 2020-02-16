module.exports = function tiny(string)
{
  // Function to remove all spaces from string.
  if (typeof string !== "string")
  throw new TypeError("Only strings allowed here!");
  return string.replace(/\s/g, "");
};
