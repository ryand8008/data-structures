var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {
    var newNode = Node(value);

    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      // change old tail next pointer to newNode
      list.tail.next = newNode;
      //change tail to the newNode
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var item = list.head.value;
    list.head = list.head.next;
    return item;
  };

  list.contains = function(target) {
    for (let key in list) {
      if (list[key].value === target) {
        return true;
      }

    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
