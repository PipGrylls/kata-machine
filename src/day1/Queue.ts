
import ArrayList from "./ArrayList";

type QNode<T> = {
    value: T
    previous?: QNode<T>
    next?: QNode <T>
}


export default class Queue<T> {
    public length: number;
    head: QNode<T> | undefined
    tail: QNode<T> | undefined


    constructor() {
        this.length=0
        this.head=this.tail=undefined
    }

    enqueue(item: T): void {
        const node = {value: item} as QNode<T>
        this.length++
        if (!this.tail) {
            this.head = this.tail=node
            return
        }
        node.previous = this.tail
        this.tail.next = node
        this.tail = node
}
    deque(): T | undefined {
        if (!this.head){
            return undefined
        }
        this.length--;
        let value = this.head.value 
        if (this.length == 0) {
            this.head=this.tail=undefined
        }
        this.head = this.head?.next

        return value

}
    peek(): T | undefined {
        return this.tail?.value

}
}