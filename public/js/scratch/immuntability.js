const person = {
  firstName: "Jim",
};

const indexes = Object.freeze([0, 1, 2, 3, 4, 5]);

function addElement(arr) {
  return [...arr, 6];
}

addElement(indexes);
