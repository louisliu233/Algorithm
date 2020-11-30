// 不保证相对位置
function reOrderArray(array) {
  if (Array.isArray(array)) {
    let start = 0;
    let end = array.length - 1;
    while (start < end) {
      while (array[start] % 2 === 1) {
        start++;
      }
      while (array[end] % 2 === 0) {
        end--;
      }
      if (start < end) {
        [array[start], array[end]] = [array[end], array[start]]
      }
    }
  }
  return array;
}

// 保证相对位置
function reOrderArray(array)
{
    // write code here
    const len = array.length
    if (len <= 1){
        return array
    }
    var i = 0
    while (i < len) {
        var j = i + 1
        if(array[i] %2 === 0) {
            while (array[j] %2 === 0) {
                if(j == len-1) {
                    return array
            }
                j++
        }
            var count = j - i
            var temp = array[i]
            array[i] = array[j]
            while (count > 1) {
                array[i + count] = array[i + count - 1]
                count--
            }
            array[i + 1] = temp
    }
        i++
  }
}

function reOrderArray(array)
{
    // write code here
    var arr1 = [];
    var arr2 = [];
    array.forEach(function(item){
        if(item % 2 === 0){
            arr2.push(item);
        }else{
            arr1.push(item);
        }
    })
    return arr1.concat(arr2)
}
