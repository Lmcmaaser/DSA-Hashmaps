
Hash maps: unordered associations between keys and values. Sounds pretty similar to a JavaScript object right? That's because objects are just hash maps, with some additional prototype cleverness thrown in for good measure. Has a length and capacity.

Hashing: It is the process of mapping a key to a position in the hash table.

Hash Table: A hash table is a storage that holds the records (the key and any value associated with the key). Hash maps require a hash-table. The hash-table is usually implemented internally using an array. Each slot in the array holds a key-value pair or is empty (null).

Hash Function: A hash function maps keys to positions in the hash table.

MAX_LOAD_RATIO: In a hash map, this is the highest that the ratio between the length and the capacity will be allowed to reach.

Collisions: When a new entry hashes to a location in the hash table that is already occupied, it is said to collide with the existing entry. You can't just replace the 1st value, because then you'd be losing a key/value pair.

Open addressing: a way to resolve collisions. When you have a collision, you hash the key to the empty slot nearest to where it should live.

Separate chaining: a way to resolve collisions. Uses linked lists to hash the keys that run into collision. The first slot contains the pointer to the head of the list. When a key collides with another, we use the next pointers to put the keys in a linked list.
