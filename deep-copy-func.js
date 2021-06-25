/* DEEP COPY FUNCTION */

/* initial object */
let obj = { /*properies*/ }

/* target object */
let newObj = {}

function deepClone(obj, newObj) {
  for (let prop in obj) {
    if (typeof obj[prop] === 'object') {
      newObj[prop] = {}
      deepClone(obj[prop], newObj[prop])
      continue
    }

    newObj[prop] = obj[prop];
  }
}