function findMinAndRemoveSorted(arr) {
    return arr.shift()
}

function merge(arr1, arr2) {
    const sorted = []
    while (arr1.length > 0 && arr2.length > 0) {
        sorted.push(arr1[0] > arr2[0] ? findMinAndRemoveSorted(arr2) : findMinAndRemoveSorted(arr1))
    }
    return sorted.concat(arr1).concat(arr2)
}

function mergeSort(arr) {
    let mid = ~~(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    if (arr.length > 1) {
        return merge(mergeSort(left), mergeSort(right))
    } else {
        return arr
    }
}
