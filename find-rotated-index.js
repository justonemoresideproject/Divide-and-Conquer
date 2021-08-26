function findRotatedIndex(arr, num) {
    let left = 0;
    let middle = Math.floor(arr.length / 2)
    let right = arr.length - 1;
    while(left <= right){
        if(arr[middle] == num) {
            return middle;
        } else if(arr[left] == num) {
            return left;
        } else if(arr[right] == num) {
            return right;
        } else if(arr[left] > num) {
            right--;
            left = middle;
            middle = Math.floor((left + right) / 2)
        } else if(arr[left] < num) {
            right = middle;
            left++;
            middle = Math.floor((left + right) / 2)
        }
    }
    return -1;
}

module.exports = findRotatedIndex