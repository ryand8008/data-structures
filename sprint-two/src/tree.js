var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me

  extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);

};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  for (let i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};


var extend = function(obj1, obj2) {
  for (let key in obj2) {
    obj1[key] = obj2[key];
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
