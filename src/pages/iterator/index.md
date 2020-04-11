---
title: Iterator
---

Iterator design pattern can be viewed in two ways:

1. Iterator itself as a mechanism of traversing through the data structure (ex: Symbol.Iterator for Array in JS).
2. A way to separate the iterator mechanism from the consumer class. The class doesn't care what it has to iterate over.

In JS, iterators are build-in for most data structures like arrays, sets... (not objects), so here is the example of iterator design pattern as a way to keep the iterator separate from the class that calls the iterator.  
For more information about iterator mechanism, see resources below:  
[ RefactoringGuru ](https://refactoring.guru/design-patterns/iterator)  
[ DoFactory ](https://www.dofactory.com/javascript/iterator-design-pattern)
