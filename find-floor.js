function findFloor(arr, num) {
    let left = 0;
    let middle = Math.floor(arr.length / 2)
    let right = arr.length - 1;
    let floor = -1;
    while(left <= right) {
        if(arr[middle] < num){
            if(floor < arr[middle] && arr[middle] <= num){
                floor = arr[middle]
            }
            left = middle;
            left++      
            middle = Math.floor((left + right) / 2);     
        } else if(arr[middle] > num){
            if(floor < arr[middle] && arr[middle] <= num){
                floor = arr[middle]
            }
            right = middle;
            right--;
            middle = Math.floor((left + right) / 2);
        } if(arr[middle] == num){
            floor = arr[middle]
        }
    }
    return floor;
}

module.exports = findFloor