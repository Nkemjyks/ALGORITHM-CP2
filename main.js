// insertion sort using JS


// function to perform insertion sort on array of numbers

function insSort(arr){
    // var declaration
    let n =arr.length;
    let key = 0;
    // loop through arrays
    for(i=1;i<n;i++){
        key = arr[i];
        // loop through sorted arrays and insert
        for(j=0;j<i;j++){
            arr[j]>key?[arr[j], key] = [key, arr[j]]:0;
            j==i-1?arr[i]=key:0;
        }
    }
    return arr;
    
}
// testing
let ray = [1,2,4,5,9,3,6]
console.log(ray);
console.log(insSort(ray));
