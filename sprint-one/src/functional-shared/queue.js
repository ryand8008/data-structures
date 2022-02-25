var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance.storage = {};
  someInstance.head = 0;
  someInstance.tail = 0;

  extend(someInstance, queueMethods);
  return someInstance;
};

//extend
var extend = function(obj1, obj2) {
  for (let key in obj2) {
    obj1[key] = obj2[key];
  }
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.tail] = value;
    this.tail++;
  },

  dequeue: function() {
    var size = this.tail - this.head;
    if (size > 0) {
      var item = this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
      return item;
    }
  },

  size: function() {
    return this.tail - this.head;
  }
};


