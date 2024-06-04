// merge sorting
export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    let arr: number[] = [...collection_1, ...collection_2, ...collection_3];

    mergeSort(arr, 0, arr.length);

    return arr
}

function mergeSort(arr: number[], left: number, right: number) {
    if (right - left <= 1) return

    let mid: number = Math.floor((left + right) / 2)
    mergeSort(arr, left, mid)
    mergeSort(arr, mid, right)

    mergeProcessing(arr, left, mid, right)
}

function mergeProcessing(arr: number[], left: number, mid: number, right: number) {
    let a: number[] = []
    for (let i = left; i < mid; i++) a.push(arr[i])

    let b: number[] = []
    for (let i = mid; i < right; i++) b.push(arr[i])

    let i = 0, j = 0, k = left
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            arr[k] = a[i]
            i++
        } else {
            arr[k] = b[j]
            j++
        }
        k++
    }

    while (i < a.length) {
        arr[k] = a[i]
        i++
        k++
    }

    while (j < b.length) {
        arr[k] = b[j]
        j++
        k++
    }
}

