function minNumberInRotateArray(arr)
{
    let len = arr.length;
    if(len == 0)  return 0;
    let low = 0, high = len - 1;
    while(low < high) {
        let mid = low + Math.floor((high-low)/2);
        if(arr[mid] > arr[high]) {
            low = mid + 1;
        } else if(arr[mid] == arr[high]) {
            high = high - 1;
        } else {
            high = mid;
        }
    }
 
    return arr[low];
}

// 扩展 二分查找
function binarySearch(data, arr, start, end) {
  if (start > end) {
      return -1;
  }
  var mid = Math.floor((end + start) / 2);
  if (data == arr[mid]) {
      return mid;
  } else if (data < arr[mid]) {
      return binarySearch(data, arr, start, mid - 1);
  } else {
      return binarySearch(data, arr, mid + 1, end);
  }
}