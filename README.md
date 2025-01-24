
## `wordFrequencerProcess()` Function

### Description:
The `wordFrequencerProcess()` function takes a string as input and processes it to return an array of words along with their frequency (i.e., how many times each word appears in the input). The function handles common punctuation marks and ignores case sensitivity while counting word frequencies.

### Input:
A string that contains a series of words and punctuation.

### Output:
An array of arrays, where each inner array contains a word and its frequency count.

### Example:

```javascript
let input = 'i am text. i am computer beep boop';

let result = wordFrequencerProcess(input);

console.log(result);
// Output: [['i', 2], ['am', 2], ['text', 1], ['computer', 1], ['beep', 1], ['boop', 1]]
```




### Notes:
- The function is case-insensitive, meaning it treats "i" and "I" as the same word.
- **Punctuation Handling**: Common punctuation marks such as `.`, `,`, `!`, `?`, `_`, `@`, `#`, etc., are removed. The hyphen (`-`) is not removed.
- **Edge Case Handling**: Obscure and rarely used symbols in text are not removed.

