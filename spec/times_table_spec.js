require('./spec_helper.js');
include('times_table.js');

describe("timesTable", function() {
  // This is a crazy regular expression which matches the output
  // of the 5x5 times table in a way that doesn't care how you
  // separate columns, so long as they're separated by whitespace
  var regexFive = /1\s+2\s+3\s+4\s+5\s*\n2\s+4\s+6\s+8\s+10\s*\n3\s+6\s+9\s+12\s+15\s*\n4\s+8\s+12\s+16\s+20\s*\n5\s+10\s+15\s+20\s+25\s*$/m;

  // Check this out! We're refining your old friend, `console` and creating our
  // own `.log` method, which is now used to capture the output your code prints!
  var output = "";
  console = {
    log: function(text) {
      output = text;
    }
  };

  it("prints nothing when called with 0", function() {
    timesTable(0);
    expect(output.length).toEqual(0);
  });

  it("correctly prints a 1x1 times table", function() {
    timesTable(1);
    expect(output).toMatch(/1\s*$/);
  });

  it("correctly prints a 5x5 times table", function() {
    timesTable(5);
    expect(output).toMatch(regexFive);
  });
});
