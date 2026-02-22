
function walk(current: BinaryNode<number> | null, visited: number[]): void{
    // base case
    if(!current){
        return
    }
    // pre
    
    // recurse
    walk(current.left, visited)

    walk(current.right, visited)
    
    // post
        visited.push(current.value)
    return

}


export default function post_order_search(head: BinaryNode<number>): number[] {
    let visited: number[] = []
    walk(head, visited)
    return visited
}