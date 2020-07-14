
function findMinAndRemoveSorted(array) {
    let min = array[0]
    let index = 0
    for (let i = 0; array.length > 1; i++) {
        if (array[0] < min) {
            min = array[0]
            index = i
        }
        array.splice(index, 1)
        return min
    }
}

function merge(array1, array2) {
    let sortedArray = []
    while (array1.length >= 1 && array2.length >= 1) {
        if (array1[0] < array2[0]) {
            sortedArray.push(array1[0])
            array1.shift()
        }
        else {
            sortedArray.push(array2[0])
            array2.shift()
        }
    }
    return sortedArray.concat(array1).concat(array2)
}

function mergeSort(array) {
    let midpoint= array.length/2
    let firstHalf= array.slice(0, midpoint)
    let secondHalf= array.slice(midpoint, array.length)
    if(array.length < 2){
        return array
    } else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}