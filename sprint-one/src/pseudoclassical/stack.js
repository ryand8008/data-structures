var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {},
  this.index = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Stack.prototype.pop = function() {
  var item = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index--;
  return item;
};

Stack.prototype.size = function() {
  if (this.index > 0) {
    return this.index;
  }
  return 0;
};

