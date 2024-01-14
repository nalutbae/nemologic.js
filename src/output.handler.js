// OutputHandler interface
class OutputHandler {
  print(...objects) {}
  printLine(...objects) {}
  getResult() {}
}

// ConsoleOutput class for console.log
class ConsoleOutput extends OutputHandler {
  print(...objects) {
    console.log(...objects);
  }

  printLine(...objects) {
    console.log(...objects);
  }

  getResult() {
    return undefined; // ConsoleOutput doesn't return a result
  }
}

// OutputCollector class to collect the result as a string
class OutputCollector extends OutputHandler {
  constructor() {
    super();
    this.result = "";
  }

  print(...objects) {
    this.result += objects.join(" ") + " ";
  }

  printLine(...objects) {
    this.result += objects.join(" ") + "\n";
  }

  getResult() {
    return this.result;
  }
}

module.exports = { OutputHandler, ConsoleOutput, OutputCollector };
