// You are given an array of logs. Each log is a space-delimited string of words,
// where the first word is the identifier.

// There are two types of logs:

// Letter-logs: All words (except the identifier) consist of lowercase English letters.
// Digit-logs: All words (except the identifier) consist of digits.
// Reorder these logs so that:

// The letter-logs come before all digit-logs.
// The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
// The digit-logs maintain their relative ordering.
// Return the final order of the logs.

const reorderLogFiles = (logs) => {
    const body = s => s.slice(s.indexOf(' ') + 1); // get the body after identifier
    const isNum = c => /\d/.test(c);

    // if body same then compare identifier
    const compare = (a, b) => {
      const n = body(a).localeCompare(body(b));
      if (n !== 0) return n;
      return a.localeCompare(b);
    };

    const digitLogs = [];
    const letterLogs = [];
    for (const log of logs) {
      if (isNum(body(log))) digitLogs.push(log);
      else letterLogs.push(log);
    }
    return [...letterLogs.sort(compare), ...digitLogs];
  };


console.log(reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]))
// ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
console.log(reorderLogFiles(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]))
//  ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
