// Bubble sort
function bubbleSort(arr){
    for(let i=0; i < arr.length; i++){
        for(let j=0; j < (arr.length-i-1); j++){
            if(arr[j] > arr[j+1]){
                var swap = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = swap
            }
        }
    }
    console.log(arr)
}
let ascend = [5,4,3,2,1]
bubbleSort(ascend)
// Selection sort
function selectionSort(arr){
    for(let i = 1; i < arr.length; i++){
        for(let j = i-1; j > -1; j--){
            if(arr[j-1] > arr[j]){
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
            }
        }
    }
    console.log(arr)
}
selectionSort(ascend)
// Insertion sort
function insertionSort(arr){
    let min;
    for(let i = 0; i < arr.length; i++){
        min = i
        for(let j = 1; j<arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        if (min !== i){
            [arr[min], arr[i]] = [arr[i], arr[min]] 
        }

    }
    console.log(arr)
}
insertionSort(ascend)