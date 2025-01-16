# MongoDB $inc Operator Bug
This repository demonstrates a common error when using the `$inc` operator in MongoDB. The issue arises when attempting to increment a counter if the document doesn't exist. The `updateOne` method, without the `upsert` option, will not create the document, resulting in an unexpected failure to increment.

## Problem
The provided `bug.js` file shows the incorrect usage of `$inc` which fails if the counter document does not exist.  The solution is shown in `bugSolution.js`.

## Solution
The solution, implemented in `bugSolution.js`, uses the `upsert` option with `updateOne`. This ensures that if the document doesn't exist, it will be created before the increment occurs.
