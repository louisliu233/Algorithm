/**
 * @param {number[]} numbers
 * @return {boolean}
 */
function IsContinuous(numbers) {
    numbers.sort()
    let kingNum = 0
    let spaceNum = 0
    for (let i = 0; i < numbers.length - 1; i++) {
      if(numbers[i] === 0) {
        kingNum++
      } else {
        let space = numbers[i + 1] - numbers[i]
        if(space == 0) {
          return false
        } else {
          spaceNum += space - 1
        }
      }
    }
    return kingNum - spaceNum >= 0
}