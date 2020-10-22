const shorten = (str, maxLen, separator = " ") => {
  if (str.length <= maxLen) return str;
  // return str.substr(0, str.lastIndexOf(separator, maxLen)) + "...";
  return str.substr(0, 100) + "...";
};
export default shorten;
