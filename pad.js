Array.prototype.pad = function(minSize, val) {
  new_arr = this
  if (val === undefined) { val = null; };
  if (minSize <= this.length) {
    return this;
  } else {
    for (i = new_arr.length; i < minSize; i++) {
      new_arr.push(val);
    }
    return new_arr;
  }

};
