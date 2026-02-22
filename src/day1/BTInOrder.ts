function walk(current: BinaryNode<number> | null, visited: number[]): void{
    // base case
    if(!current){
        return
    }
    // pre
    
    // recurse
    walk(current.left, visited)
    visited.push(current.value)
    walk(current.right, visited)
    
    // post
    return

}


export default function in_order_search(head: BinaryNode<number>): number[] {
    let visited: number[] = []
    walk(head, visited)
    return visited

}