```javascript
// Incorrect usage of $inc operator
db.collection('counters').updateOne( { _id: 'myCounter' }, { $inc: { sequence: 1 } } );
// Problem: If the document for _id: 'myCounter' does not exist, updateOne will not create it.
// Solution: Use upsert option.
db.collection('counters').updateOne( { _id: 'myCounter' }, { $inc: { sequence: 1 } }, { upsert: true } );
```