/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
// var eyes = require('eyes')

function linkedListGenerator() {
  var train = {
    getHead : _getHead,
    getTail : _getTail,
    add : _add,
    get : _get,
    remove : _remove,
    insert : _insert
  };

  var head = null;
  var tail = null;
  var list = null;

  var length = 0;

  function createNode(value) {
    return {
      value : value,
      next : null
    };
  }

  function _getHead() {

    return head;

  }

  function _getTail() {

    return tail;
  }


  //get text from the user
  //link to the save button
  function _add(value) {
    var newNode = createNode(value);

    if (list === null) {
      head = newNode;
      tail = newNode;
      list = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }

    length = length + 1;
    return newNode;

  }

  function _get(number) {
    var current = _getHead();

    //return false if no node is found'
    //link to the dump button
    if (number > length) {
      return false;
    }

    for (var i = 0; i < length; i++) {
      if ( i === number) {
        return current;
      }
      current = current.next;

    }
    return false;
  }

  //remove text from the user
  function _remove(number) {
    var previous = _get(number - 1);
    var currNode = _get(number);
    var next = _get(number + 1);

    // if the number is greater then the length of nodes
    if (number > length - 1) {
      return false;
    } else if (length === 1 && number === 1) {
      // if only have one node
      head = null;
      tail = null;
    } else {
      if ( number === 0) {// if remove the head
        head = head.next;
      } else if ( number === length - 1) {
        // if remove the tail
        tail = previous;
        previous.next = null;
      } else if ( number < length) {
        // if remove the middle
        previous.next = currNode.next;
      }
    }
    length = length - 1;
  }


  function _insert(value,number) {
    var newNode = createNode(value);
    var currNode = _get(number);
    var prevNode = _get(number - 1);

    // if there are no nodes
    if (number < 0 || number >= length) {
      // if number is negative or number is greater then length
      return false;
    }else if ( number === 0) {
      // insert node above the head
      newNode.next = head;
      head = newNode;
      length = length + 1;
    }else {
      newNode.next = currNode;
      prevNode.next = newNode;
      length = length + 1;
    }
    return newNode;
  }
  return train;
}

  function _hasNext() {

  }

var ll = linkedListGenerator();

ll.add('cat');
console.log(ll.add);
ll.add('dog');
ll.add('monkey');
ll.add('chicken');

