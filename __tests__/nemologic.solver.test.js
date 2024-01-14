const NemoLogicSolver = require("../src/nemologic.solver");

// Example rows and columns hints for testing
describe("NemoLogicSolver", () => {
  it("should solve Nemo Logic 5x5 puzzle", () => {
    const rowsHints = [[1, 1], [1, 1, 1], [1, 1], [1, 1], [1]];
    const columnHints = [[2], [1, 1], [1, 1], [1, 1], [2]];
    const solver = new NemoLogicSolver(rowsHints, columnHints, false);

    const resultOut = solver.process();

    expect(resultOut.trim()).toBe("□■□■□\n■□■□■\n■□□□■\n□■□■□\n□□■□□");
  });

  it("should solve Nemo Logic 10x10 puzzle", () => {
    const rowsHints = [
      [10],
      [2, 3, 3],
      [2, 3, 3],
      [1, 1],
      [1, 1, 1, 1],
      [2, 2],
      [4, 4],
      [4, 4],
      [3, 3],
      [3, 3],
    ];

    const columnHints = [
      [10],
      [3, 5],
      [1, 4],
      [3, 1, 2],
      [3],
      [3],
      [1, 1, 2],
      [3, 4],
      [3, 5],
      [10],
    ];

    const solver = new NemoLogicSolver(rowsHints, columnHints, false);
    const resultOut = solver.process();

    const expectedOutput =
      "■■■■■■■■■■\n" +
      "■■□■■■□■■■\n" +
      "■■□■■■□■■■\n" +
      "■□□□□□□□□■\n" +
      "■□□■□□■□□■\n" +
      "■■□□□□□□■■\n" +
      "■■■■□□■■■■\n" +
      "■■■■□□■■■■\n" +
      "■■■□□□□■■■\n" +
      "■■■□□□□■■■";

    expect(resultOut.trim()).toBe(expectedOutput);
  });

  it("should solve Nemo Logic 20x20 puzzle", () => {
    const rowsHints = [
      [3, 3],
      [10],
      [2, 4, 2],
      [2, 2, 2],
      [2],
      [2],
      [10],
      [2, 2],
      [2, 2, 2, 1],
      [2, 3, 6],
      [1, 5, 1, 1],
      [1, 3, 1, 2],
      [1, 1, 1, 3, 1],
      [1, 3, 2, 1],
      [1, 1],
      [1, 1],
      [17, 2],
      [2, 3],
      [15],
      [12],
    ];

    const columnHints = [
      [8],
      [2, 2],
      [2, 3],
      [3, 2, 3, 1, 2],
      [4, 1, 3, 1, 1, 2],
      [2, 1, 3, 1, 1, 2],
      [3, 1, 2, 1, 1, 2],
      [6, 3, 1, 2],
      [6, 1, 2],
      [3, 1, 1, 2],
      [2, 1, 1, 2],
      [4, 1, 1, 2],
      [3, 2, 1, 2],
      [2, 1, 2],
      [2, 1, 2],
      [4, 1, 1],
      [2, 3, 3],
      [2, 2, 1],
      [2, 2],
      [2, 5],
    ];

    const solver = new NemoLogicSolver(rowsHints, columnHints, false);

    const resultOut = solver.process();

    const expectedOutput =
      "□□□□■■■□□■■■□□□□□□□□\n" +
      "□□□■■■■■■■■■■□□□□□□□\n" +
      "□□□■■□■■■■□■■□□□□□□□\n" +
      "□□□■■□□■■□□■■□□□□□□□\n" +
      "□□□□□□□■■□□□□□□□□□□□\n" +
      "□□□□□□□■■□□□□□□□□□□□\n" +
      "□□□■■■■■■■■■■□□□□□□□\n" +
      "□□■■□□□□□□□□■■□□□□□□\n" +
      "□■■□□□□□□□□□□■■□■■□■\n" +
      "■■□□■■■□□□□□□□■■■■■■\n" +
      "■□□■■■■■□□□□□□□■□□■□\n" +
      "■□□■■■□■□□□□□□□■■□□□\n" +
      "■□□■□□□■□□□□□□□■■■□■\n" +
      "■□□□■■■□□□□□□□□□■■□■\n" +
      "■□□□□□□□□□□□□□□□□□□■\n" +
      "■□□□□□□□□□□□□□□□□□□■\n" +
      "■■■■■■■■■■■■■■■■■□■■\n" +
      "□■■□□□□□□□□□□□□□■■■□\n" +
      "□□■■■■■■■■■■■■■■■□□□\n" +
      "□□□■■■■■■■■■■■■□□□□□";

    expect(resultOut.trim()).toBe(expectedOutput);
  });
});
