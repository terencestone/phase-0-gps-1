function validTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0 || (a === b && b !== c) || (b === c && c !== a) || (c === a && a !== b)) {
    return false;
  } else {
    return true;
  }
};
