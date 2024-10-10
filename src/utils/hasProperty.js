/* eslint-disable no-prototype-builtins */
function hasProperty(obj, property) {
  // Base case: Check if the property exists in the current object
  if (obj.hasOwnProperty(property)) {
    return true;
  }

  // Recursive case: Check deeper levels
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      if (hasProperty(obj[key], property)) {
        return true;
      }
    }
  }

  return false;
}

export default hasProperty;
