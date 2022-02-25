var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(stackMethods);
  someInstance.index = 0;
  someInstance.storage = {};

  // return the new object;
  return someInstance;

};


var stackMethods = {
  push: function(value) {
    this.storage[this.index] = value;
    this.index++;
  },

  pop: function() {
    this.index--;
    var item = this.storage[this.index];
    delete this.storage[this.index];

    return item;
  },

  size: function() {
    if (this.index > 0) {
      return this.index;
    } else {
      return 0;
    }

  }


};


