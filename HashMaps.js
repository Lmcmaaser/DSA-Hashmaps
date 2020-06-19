class HashMap {
  constructor(initialCapacity=8) {
    this.length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
    this._deleted = 0; // _deleted count
  }

  get(key) {
    const index = this._findSlot(key);
    if (this._hashTable[index] === undefined) {
        throw new Error('Key error');
    }
    return this._hashTable[index].value;
  }

  set(key, value){
    // set() function initially checks whether the load ratio is greater than the given maximum
    // has an O(1) best and average case, and an O(n) worst case (if collision takes place).
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      // Using MAX_LOAD_RATIO to keep track of how full the hashmap is
      // When hashmap is a certain % full, move to a bigger hash table using the SIZE_RATIO, this reduces the number of collisions
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }

    const index = this._findSlot(key); //Find the slot where this key should be in

    if(!this._hashTable[index]){
      this.length++;
    }
    this._hashTable[index] = {
      key,
      value,
      DELETED: false
    };
  }

  delete(key) {
    // finds the correct slot for the key, and sets the DELETED flag to true, decreasing the length and increasing the deleted count
    const index = this._findSlot(key);
    const slot = this._hashTable[index];
    if (slot === undefined) {
        throw new Error('Key error');
    }
    slot.DELETED = true;
    this.length--;
    this._deleted++;
  }

  _findSlot(key) {
    // _findSlot() is an internal private helper function
    // it is used to find the correct slot for a given key
    //The best and average-case performance for _findSlot() is O(1);
    const hash = HashMap._hashString(key);
    const start = hash % this._capacity;

    for (let i=start; i<start + this._capacity; i++) {
      const index = i % this._capacity;
      const slot = this._hashTable[index]; // _hashTable array will never be full due to our maximum load factor, so the function will always return a slot
      if (slot === undefined || (slot.key === key && !slot.DELETED)) {
          return index;
      }
    }
  }

  _resize(size) {
    // recreates the hash map from scratch with larger capacity
    // is O(n) in the best and average case and O(n^2) in the worst case (because you have to call set for each item)
    const oldSlots = this._hashTable;
    this._capacity = size;
    // Reset the length - it will get rebuilt as you add the items back
    this.length = 0;
    this._hashTable = [];

    for (const slot of oldSlots) {
      if (slot !== undefined) {
        this.set(slot.key, slot.value); // you have to call set() 1 time for each item
      }
    }
  }

  static _hashString(string) {
    // _hashString function takes a string and hashes it, outputting a number
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
        //Bitwise left shift with 5 0s - this would be similar to hash*31, 31 being the decent prime number
        // however, bit shifting is a faster way to do this
        // the tradeoff is understandability
        hash = (hash << 5) + hash + string.charCodeAt(i);
        // converting hash to a 32 bit integer
        hash = hash & hash;
    }
    // making sure hash is unsigned - meaning non-negtive number
    return hash >>> 0;
  }
}

module.exports = HashMap
