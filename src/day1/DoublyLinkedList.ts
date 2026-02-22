
class NodeDL<T> {
    value: T;
    next: NodeDL<T> | undefined;
    previous: NodeDL<T> | undefined;

    constructor(value:T){
        this.value = value
    }
}



export default class DoublyLinkedList<T> {
    public length: number;
    head: NodeDL<T> | undefined;
    tail: NodeDL<T> | undefined;

    constructor() {
        this.length=0
        this.head=this.tail=undefined
    }

    get_node(idx: number): NodeDL<T> | undefined{
        if (idx >= this.length){
            return undefined
        }
        let current: NodeDL<T>
        if (this.head){
            current = this.head 
        }else{
            return undefined
        }
        let i=0
        while(i<idx){
            if(current.next){
                current = current.next
            }
            i++
        }
        return current
    }

    drop_node(node: NodeDL<T>): T {
        if (!node.previous && !node.next){
            this.head=this.tail=undefined
        } else
        if (!node.previous && node.next) {
            node.next.previous = undefined
            this.head = node.next
            node.next = undefined
        } else
        if (!node.next && node.previous){
            node.previous.next = undefined
            this.tail = node.previous
            node.previous = undefined
        } else 
        if (node.next && node.previous) {
            node.previous.next = node.next
            node.next.previous = node.previous
            node.next = node.previous = undefined
        }
        return node.value
    }

    prepend(item: T): void {
        let node = new NodeDL(item)
        this.length++
        if (!this.head) {
            this.head = this.tail = node
            return
        }
        node.next = this.head
        this.head.previous = node
        this.head = node
}
    insertAt(item: T, idx: number): void {
        if (idx === 0){
            this.prepend(item)
            return
        }
        if (idx === this.length){
            this.append(item)
            return
        } 
        if (idx > this.length){
            throw RangeError("List index out of range")
        }
        let node = new NodeDL(item)
        let current = this.get_node(idx)
        this.length++
        if (current && current.previous){
            current.previous.next = node
            node.previous = current.previous
            current.previous = node
            node.next = current
        }

}
    append(item: T): void {
        let node = new NodeDL(item)
        this.length++
        if(!this.tail){
            this.head=this.tail=node
            return
        }
        node.previous = this.tail
        this.tail.next = node
        this.tail = node

}
    remove(item: T): T | undefined {
        let current = this.head
        let i = 0
        if(!current){
            return undefined
        }
        while(current && current.value != item){
            current = current?.next
            i++
        }
        if(!current){
            return undefined
        }
        this.length--
        return this.drop_node(current)

}
    get(idx: number): T | undefined {
        let node = this.get_node(idx)
        return node?.value

}
    removeAt(idx: number): T | undefined {
        let current = this.get_node(idx)
        if (!current){
            return undefined
        }
        this.length--
        return this.drop_node(current)

}
}