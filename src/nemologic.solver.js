const {
  OutputHandler,
  ConsoleOutput,
  OutputCollector,
} = require("./output.handler");

/**
 * Solving Nemo Logic
 */
class NemoLogicSolver {
  constructor(rowsHints, columnHints, useConsoleOutput = true) {
    this.EMPTY = "□";
    this.FILLED = "■";
    this.rowSize = rowsHints.length;
    this.columnSize = columnHints.length;
    this.rowsHints = rowsHints;
    this.columnHints = columnHints;
    this.grid = new Array(this.rowSize).fill(0);

    this.useConsoleOutput = useConsoleOutput;
    this.outputHandler = useConsoleOutput
      ? new ConsoleOutput()
      : new OutputCollector();
  }

  process() {
    // Initialize and solve the puzzle
    this.initializeRowPermutations();

    this.columnValue = Array.from({ length: this.rowSize }, () =>
      new Array(this.columnSize).fill(0)
    );
    this.columnIndex = Array.from({ length: this.rowSize }, () =>
      new Array(this.columnSize).fill(0)
    );
    this.mask = new Array(this.rowSize).fill(0);
    this.val = new Array(this.rowSize).fill(0);

    if (this.dfs(0)) {
      this.printGrid(this.outputHandler);
      return this.useConsoleOutput ? undefined : this.outputHandler.getResult();
    } else {
      return "Sorry. I can't solve the answer";
    }
  }

  initializeRowPermutations() {
    this.rowPermutations = new Array(this.rowSize);
    for (let r = 0; r < this.rowSize; r++) {
      const resolves = [];
      let spaces = this.columnSize - (this.rowsHints[r].length - 1);
      for (let i = 0; i < this.rowsHints[r].length; i++) {
        spaces -= this.rowsHints[r][i];
      }
      this.calculatePerms(r, 0, spaces, 0, 0, resolves);
      if (resolves.length === 0) {
        throw new Error(`Could not find the solution for ${r}th row.`);
      }

      const size = resolves.length;
      this.rowPermutations[r] = new Array(size);
      const iterator = resolves[Symbol.iterator]();
      for (let i = 0; i < size; i++) {
        this.rowPermutations[r][i] = iterator.next().value;
      }
    }
  }

  dfs(row) {
    if (row === this.rowSize) {
      return true;
    }

    this.rowMask(row);

    for (const permutation of this.rowPermutations[row]) {
      if ((permutation & this.mask[row]) !== this.val[row]) {
        continue;
      }
      this.grid[row] = permutation;
      this.updateColumns(row);
      if (this.dfs(row + 1)) {
        return true;
      }
    }

    return false;
  }

  rowMask(row) {
    this.mask[row] = this.val[row] = 0;
    if (row > 0) {
      let ixc = 1;
      for (let c = 0; c < this.columnSize; c++, ixc <<= 1) {
        if (this.columnValue[row - 1][c] > 0) {
          this.mask[row] |= ixc;
          if (
            this.columnHints[c][this.columnIndex[row - 1][c]] >
            this.columnValue[row - 1][c]
          ) {
            this.val[row] |= ixc;
          }
        } else if (
          this.columnValue[row - 1][c] === 0 &&
          this.columnIndex[row - 1][c] === this.columnHints[c].length
        ) {
          this.mask[row] |= ixc;
        }
      }
    }
  }

  updateColumns(row) {
    let indexColumn = 1;
    for (let c = 0; c < this.columnSize; c++, indexColumn <<= 1) {
      this.columnValue[row][c] = row === 0 ? 0 : this.columnValue[row - 1][c];
      this.columnIndex[row][c] = row === 0 ? 0 : this.columnIndex[row - 1][c];
      if ((this.grid[row] & indexColumn) === 0) {
        if (row > 0 && this.columnValue[row - 1][c] > 0) {
          this.columnValue[row][c] = 0;
          this.columnIndex[row][c]++;
        }
      } else {
        this.columnValue[row][c]++;
      }
    }
  }

  calculatePerms(r, cur, spaces, perm, shift, res) {
    if (cur === this.rowsHints[r].length) {
      if ((this.grid[r] & perm) === this.grid[r]) {
        res.push(perm);
      }
      return;
    }
    while (spaces >= 0) {
      this.calculatePerms(
        r,
        cur + 1,
        spaces,
        perm | (this.bits(this.rowsHints[r][cur]) << shift),
        shift + this.rowsHints[r][cur] + 1,
        res
      );
      shift++;
      spaces--;
    }
  }

  bits(b) {
    return (1 << b) - 1;
  }

  printGrid(out) {
    for (let r = 0; r < this.rowSize; r++) {
      let rowOutput = "";
      for (let c = 0; c < this.columnSize; c++) {
        rowOutput += (this.grid[r] & (1 << c)) === 0 ? this.EMPTY : this.FILLED;
      }
      out.printLine(rowOutput);
    }
  }
}

module.exports = NemoLogicSolver;

// Example usage:
// const rowsHints = [[1, 1], [1, 1, 1], [1, 1], [1, 1], [1]];
// const columnHints = [[2], [1, 1], [1, 1], [1, 1], [2]];

// const solver = new NemoLogicSolver(rowsHints, columnHints);
// solver.process();

// Use console.log for output
// const solverWithConsoleOutput = new NemoLogicSolver(
//   rowsHints,
//   columnHints,
//   true
// );
// solverWithConsoleOutput.process();

// Use OutputCollector for string result
// const solverWithStringResult = new NemoLogicSolver(
//   rowsHints,
//   columnHints,
//   false
// );
// const resultString = solverWithStringResult.process();
// console.log(resultString);
