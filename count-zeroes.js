// function countZeroes(arr) {
//     let zeroIdx = arr.indexOf(0)
//     let newArr = arr.slice(zeroIdx, arr.length)
//     return newArr.length;  
// }

function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((arr.length - 1) / 2)
    while(left <= right){
        if(arr[left] == 0 && arr[right] == 0) {
            return ((right - left) + 1)
        } else if(arr[left] > 0 && arr[middle] == 0 && arr[right] == 0) {
            left = middle;
            while(arr[left] == 0){
                left--;
            }
            left++;
        } else if(arr[left] == 0 && arr[middle] == 0 && arr[right] > 0) {
            right = middle;
            while(arr[right] == 0){
                right++;
            }
            right--;
        } else if(arr[left] > 0 && arr[middle] > 0 && arr[right] == 0) 
        {
            left = middle
            while(arr[left] > 0 && left < right){
                left++;
            }
        } else if(arr[left] == 0 && arr[middle] > 0 && arr[right] > 0) 
        {
            right = middle
            while(arr[right] > 0 && left < right){
                right--;
            }
        } else if(arr[left] > 0 && arr[middle] > 0 && arr[right] > 0){
            left = 1;
            right = 0;            
        }
    }
    return 0
}

module.exports = countZeroes