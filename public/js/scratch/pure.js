// Pure
function add(x, y) {
  return x + y;
}

// Impure
function add2(x, y) {
  console.log(x + y); // external and produces an observable side-effect
  return x + y;
}
