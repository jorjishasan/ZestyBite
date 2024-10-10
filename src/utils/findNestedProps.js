/* eslint-disable no-prototype-builtins */
function findNestedProp(obj, keyToFind) {
  if (typeof obj !== "object" || obj === null) return undefined;

  // Check if the key exists in the current object
  if (keyToFind in obj) {
    return obj[keyToFind];
  }

  // Recursively search through each property
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      // If the value is an array, loop through each item
      if (Array.isArray(value)) {
        for (let item of value) {
          const result = findNestedProp(item, keyToFind);
          if (result !== undefined) {
            return result;
          }
        }
      } else {
        // Continue recursion for objects
        const result = findNestedProp(value, keyToFind);
        if (result !== undefined) {
          return result;
        }
      }
    }
  }

  return undefined;
}

export default findNestedProp; // This will output the value of 'groupedCard' if found
