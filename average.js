Array.prototype.total = function() {
  var sum = this.reduce(function(a, b) {return a + b}, 0);
  return sum;
};

Array.prototype.mean = function() {
  return this.total() / this.length;
};

Array.prototype.median = function() {
  var halfIndex = Math.floor(this.length/2);
  if (this.length % 2 ) {
    return this[halfIndex]; 
  } else {
    return (this[halfIndex - 1] + this[halfIndex]) / 2;
  }
};

Array.prototype.mode = function() {
  var possibleModes = {}
  var count = 0

  this.forEach(function(num) {
    if (possibleModes[num]) {
      possibleModes[num]++;
    } else {
      possibleModes[num] = 1;
    }
  });

  total = 0
  Object.keys(possibleModes).forEach(function(key) {
    n = possibleModes[key];
    if (total < n) { total = 0; total += n }; 
  });

  Object.keys(possibleModes).forEach(function(key) {
    if (possibleModes[key] !== total) {delete possibleModes[key]};
  });

  return possibleModes;
};
