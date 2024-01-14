# NemoLogic.js

NemoLogic.js is a Javascript library for solving Nemonemo logic puzzles. It provides a flexible and efficient solution for solving puzzles of this type.

![nemonemologic_screenshot.png](nemonemologic_screenshot.png)

[This Puzzle URL](http://nemonemologic.com/play_logic.php?quid=1)

You can use this library for the above puzzle to get output like this:

```
□■□■□
■□■□■
■□□□■
□■□■□
□□■□□
```

## Features

- Solves Nemonemo logic puzzles with various configurations.

## Getting Started

### Prerequisites

- node.js 14 or later

### Usage

1. Initialize NemoLogicSolver with row and column hints.

For the puzzle example above, you need to pass the following hint parameter:

```js
const rowsHints = [[1, 1], [1, 1, 1], [1, 1], [1, 1], [1]];
const columnHints = [[2], [1, 1], [1, 1], [1, 1], [2]];

const solver = new NemoLogicSolver(rowsHints, columnHints, false);
```

2. Process and solve the puzzle:

```java
solver.process();
```

Check out some additional test examples:
[2Fnemologic.solver.js](__tests__%2Fnemologic.solver.js)

### License

This project is licensed under the [The Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt)
