
// Linear / Sequential Search
function liSearch(nums, value){
    for( let i =0; i<nums.length; i++){
        if(nums[i] == value) return i
    }
    return -1
   
}
let nums=[1,2,3,4,5]
console.log(liSearch(nums, 3))

// Binary Search


var myList = [1, 3, 5, 7, 9,10,11,12,13,14,15,17,18,19,20,22,24,26];

function binarySearch(myList, itemToFind) {
	var low = 0,
        high = myList.length - 1,
        mid,
        guessed;
	
	while(low <= high) {
	    mid = Math.floor((low + high) / 2),
	    guessed = myList[mid];

	    if(guessed === itemToFind) {
                console.log('Found item at index: ' + mid + ', value is ' + guessed);
		    return;
	    }
	    if(itemToFind < guessed) {
	        high = mid - 1;
            } else {
	        low = mid + 1;
	    }
        }
	
	return null;
}
