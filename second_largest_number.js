function compare(a, b){
    return a-b
}
function finSecondLargest(arr, n){
    arr.sort((a, b)=>a-b)
    
    let second_largest = 0
    for(let i = n-2; i >= 0; i--){
        if(arr[i] != arr[n-1]){
            second_largest = arr[i]
            break
        }
    }
    return second_largest
}

let a = [1,3,11,21,23,2,4,6,5,9,9,7,6,8]
let n = a.length
let ans = finSecondLargest(a, n)
console.log(ans)


function findSecondLargest(arr, na){
    let largest = Number.MIN_SAFE_INTEGER

    for(let i = 0; i < na; i++){
        if(largest < arr[i]){
            largest = arr[i]
        }
    } 

        let second_largest = Number.MIN_SAFE_INTEGER

        for(let i = 0; i < na; i++){
            if(arr[i] < largest && arr[i] > second_largest){
                second_largest = arr[i]
            }
        }
        return second_largest
}

let arr = [1,4,5,8,9,10,12,11,75,86,99]
let na = arr.length
let answ = findSecondLargest(arr, na)
console.log(answ)