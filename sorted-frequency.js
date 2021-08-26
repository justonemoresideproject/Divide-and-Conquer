function sortedFrequency(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((arr.length - 1) / 2)
    while(left <= right){
        if(arr[left] == num && arr[right] == num) {
            return ((right - left) + 1)
        } else if(arr[middle] == num ) {
            left = middle;
            right = middle;
            while(arr[left] == num) {
                left--;
            }
            left++;
            while(arr[right] == num) {
                right++;
            }
            right--;
        } else if(arr[middle] > num) {
            right--
            middle = Math.floor((right + left) / 2)
        } else if(arr[middle] < num) {
            left++
            middle = Math.floor((right + left) / 2)
        }
    }
    return -1;
}

module.exports = sortedFrequency