var Queue = function() {
  var someInstance = {};
  var head = 0;
  var tail = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[tail] = value;
    tail++;
  };

  someInstance.dequeue = function() {
    var size = tail - head;
    if (size > 0) {
      var item = storage[head];
      // remove last entry
      delete storage[head];
      // add to head
      head++;
      // return storage;
      return item;
    }
  };

  someInstance.size = function() {
    return tail - head;
  };

  return someInstance;
};
