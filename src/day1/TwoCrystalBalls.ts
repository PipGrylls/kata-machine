export default function two_crystal_balls(breaks: boolean[]): number {
    let rt_len = Math.sqrt(breaks.length)
    let i = 0

    if (breaks[0]){
        return 0
    }
    do{
        i+=rt_len
    }while(!breaks[i] && i<breaks.length)
    i-=rt_len
    do{
        i+=1
        if (i>breaks.length){
            return -1
        }
    }while(!breaks[i])
    return i
}