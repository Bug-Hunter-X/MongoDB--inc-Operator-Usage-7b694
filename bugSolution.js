```javascript
// Correct usage of $inc operator with upsert option
db.collection('counters').updateOne( { _id: 'myCounter' }, { $inc: { sequence: 1 } }, { upsert: true } );
// Now, if the document for _id: 'myCounter' does not exist, updateOne will create it and then increment the sequence.
```