
type StackNode<T> = {
    value: T
    //previous?: QNode<T>
    next?: StackNode <T>
}



export default class Stack<T> {
    public length: number;
    head?: StackNode<T>

    

    constructor() {
        this.length = 0
        this.head = undefined
    }

    push(item: T): void {
        const node = {value: item} as StackNode<T>
        this.length++
        if(this.head){
            node.next = this.head
        }
        this.head = node


}
    pop(): T | undefined {
        if(!this.head){
            return undefined
        }
        this.length--
        const value = this.head.value
        this.head = this.head.next
        return value

}
    peek(): T | undefined {
        return this.head?.value

    }
}