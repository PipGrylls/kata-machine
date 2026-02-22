
function sort(arr: number[]): number[] {
    let lower: number[] = []
    let higher: number[] = []
    let equal: number[] = [arr[0]]
    let current = arr[0]

    for(let i=1; i<arr.length; i++){
        let item = arr[i]
        if (item>current){
            higher.push(item)
        } else
        if (item<current){
            lower.push(item)
        } else {
            equal.push(item)
        }
        
    }
    if (lower.length>0){
        lower = sort(lower)
    }
    if (higher.length>0){
        higher = sort(higher)
    }

    return lower.concat(equal, higher)
}

export default function quick_sort(arr: number[]): void {
    let out = sort(arr)
    for(let i=0; i<arr.length; i++){
        arr[i] = out[i]
    }
}