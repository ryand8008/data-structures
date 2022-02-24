var Queue = function() {
  var someInstance = {};
  var length = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[length] = value;
    length++;
  };

  someInstance.dequeue = function() {
    if (length > 0) {
      // remove last entry
      delete storage[length - 1];
      // subtract 1 from length
      length--;
      // return storage;
    }
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
