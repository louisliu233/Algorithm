// 方法一

function multiply(array)
{
    // write code here
    let res = []
    for (let i = 0; i<array.length; i++) {
        let arr = array.slice(0, i).concat(array.slice(i + 1))
        res[i] = arr.reduce( (pre, cur) => {
            return pre * cur
        }, 1)
    }
    return res
}

// 方法二

function multiply(array) {
  const result = [];
  if (Array.isArray(array) && array.length > 0) {
    // 计算下三角
    result[0] = 1;
    for (let i = 1; i < array.length; i++) {
      result[i] = result[i - 1] * array[i - 1];
    }
    // 乘上三角
    let temp = 1;
    for (let i = array.length - 2; i >= 0; i--) {
      temp = temp * array[i + 1];
      result[i] = result[i] * temp;
    }
  }
  return result;
}