const {
  OutputHandler,
  ConsoleOutput,
  OutputCollector,
} = require("../src/output.handler");

describe("OutputHandler", () => {
  it("should not throw an error when calling methods on OutputHandler", () => {
    const outputHandler = new OutputHandler();
    expect(() => outputHandler.print("test")).not.toThrow();
    expect(() => outputHandler.printLine("test")).not.toThrow();
    expect(outputHandler.getResult()).toBeUndefined();
  });
});

describe("ConsoleOutput", () => {
  it("should log to the console when calling methods on ConsoleOutput", () => {
    const consoleOutput = new ConsoleOutput();
    console.log = jest.fn();

    consoleOutput.print("test");
    expect(console.log).toHaveBeenCalledWith("test");

    consoleOutput.printLine("test");
    expect(console.log).toHaveBeenCalledWith("test");

    expect(consoleOutput.getResult()).toBeUndefined();
  });
});

describe("OutputCollector", () => {
  it("should collect output as a string when calling methods on OutputCollector", () => {
    const outputCollector = new OutputCollector();

    outputCollector.print("test");
    expect(outputCollector.getResult()).toBe("test ");

    outputCollector.printLine("test");
    expect(outputCollector.getResult()).toBe("test test\n");
  });
});
