
export const filterByTemplate = (template, source) => Object.keys(template).reduce((destination, key) => {
  if (source[key] !== undefined) { // eslint-disable-line no-undefined
    destination[key] = source[key];
  }
  return destination;
}, {});

export const oneOf = (template, source) => Object.keys(template).reduce(() => {

}, );