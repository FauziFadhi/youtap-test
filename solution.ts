import { createInterface } from 'readline'

export class Solution {
  solve(s: string): boolean {
    const stringLength = s.length;
    let bracketCount  = 0;
    const midPos = Math.floor(stringLength / 2)
    const indexMidPlusOne = midPos
    if(!s.length) return true;
  
    for (let index = 0; index < stringLength; index++) {
      const letter = s[index];
  
      if(letter !== '(' && letter !== ')')
      return false
  
      if(letter === '(') {
        bracketCount++
      }
      if(letter === ')') {
        bracketCount--
      }
  
      if(bracketCount < 0)
        return false
  
      if(index == indexMidPlusOne && bracketCount >= midPos) {
        return false
      }
    }
  
    if(bracketCount == 0) return true;
    else return false
  } 
}

const input = createInterface({
  input: process.stdin,
  output: process.stdout
});

input.question("Please input the string: ", function(answer) {
  const solution = new Solution()
  console.log('result:',solution.solve(answer));
  input.close();
});

