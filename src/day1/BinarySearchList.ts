export default function bs_list(haystack: number[], needle: number): boolean {
    let upper = haystack.length
    let lower = 0
    let midpoint = Math.floor(haystack.length/2)
    let current;

    do{
        current = haystack[midpoint]
        if (current == needle){
            return true
        }
        else if (current > needle){
            upper = midpoint
        }
        else(
            lower = midpoint +1
        )
        midpoint = lower + Math.floor((upper - lower)/2)
    } while(upper > lower);
    return false

}