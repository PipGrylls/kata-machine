function walk(current: BinaryNode<number> | null, visited: number[]): void{
    // base case
    if(!current){
        return
    }
    // pre
    visited.push(current.value)   
    // recurse
    walk(current.left, visited)

    walk(current.right, visited)
    
    // post

    return

}


export default function pre_order_search(head: BinaryNode<number>): number[] {
    let visited: number[] = []
    walk(head, visited)
    return visited
}