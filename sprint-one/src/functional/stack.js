var Stack = function() {
  var someInstance = {};
  var length = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[length] = value;
    length++;
  };

  someInstance.pop = function() {
    if (length > 0) {
      var item = storage[length - 1];
      delete storage[length - 1];
      length--;
      return item;
    }
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};


