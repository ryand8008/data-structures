var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var stack = {
    storage: {},
    length: 0
  };
  // use extend*******
  extend(stack, stackMethods);

  return stack;
};

var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};

var stackMethods = {
  //push
  push: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },

  //pop
  pop: function() {
    if (this.size() > 0) {
      var item = this.storage[this.length - 1];
      delete this.storage[this.length - 1];
      this.length--;
      return item;
    }
  },
  //size
  size: function() {
    return this.length;
  }
};





