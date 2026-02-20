
function swap_with_next(i:number, arr: number[]): void {
    let hold: number
    if (i < arr.length){
        hold = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = hold
    } else{
        throw RangeError
    }

}

export default function bubble_sort(arr: number[]): void {
    let end_scan = arr.length
    do{
        for(let i=0; i<end_scan-1; i++){
            if (arr[i] > arr[i+1]){
                swap_with_next(i, arr)
            }
        }
    end_scan--
    }while(end_scan>0)

}