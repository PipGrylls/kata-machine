

class NodeSL<T> {
    value: T;
    next: NodeSL<T> | undefined;

    constructor(value:T){
        this.value = value
    }
}


export default class SinglyLinkedList<T> {
    public length: number;
    head: NodeSL<T> | undefined;
    tail: NodeSL<T> | undefined;

    constructor() {
        this.length = 0
        this.head = this.tail = undefined
    }

    get_node(idx: number): NodeSL<T> | undefined{
        if (idx >= this.length){
            return undefined
        }
        let current = this.head
        let i = 0
        while(idx < i){
            current = current?.next
            i++
        }
        return current
    }

    prepend(item: T): void {
        let node = new NodeSL(item)
        this.length++
        if (this.head){
            node.next = this.head
            this.head = node
        }else{
            this.head = this.tail = node
        }

}
    insertAt(item: T, idx: number): void {
        if (idx == 0){
            this.prepend(item)
        }
        if (idx == this.length){
            this.append(item)
        }

        this.length++
        // this is the node before the position we will insert at
        let node = this.get_node(idx-1) as NodeSL<T>
        let new_node = new NodeSL(item)
        new_node.next = node.next
        node.next = new_node
}
    append(item: T): void {
        let node = new NodeSL(item)
        this.length++
        if(this.tail){
            this.tail.next = node
            this.tail = node
        }else{
            this.tail = this.head = node
        }

}
    remove(item: T): T | undefined {
        let current = this.head as NodeSL<T>
        if (!current){
            return undefined
        }
        for(let i = 0; i<this.length; i++){
            if (current.value == item){
                return this.removeAt(i)
            }
        }
        return undefined

}
    get(idx: number): T | undefined {
        if (idx >= this.length){
            return undefined
        }
        let current = this.head as NodeSL<T> | undefined
        let i = 0
        while(idx > i){
            current = current?.next 
            i++
        }
        return current?.value

}
    removeAt(idx: number): T | undefined {
        if (idx >= this.length){
            return undefined
        }
        let value: T
        this.length--
        if (idx == 0){
            value = this.head?.value as T
            this.head = this.head?.next
            return value
        }
        // this is the node that has the node we want to remove as next
        let node = this.get_node(idx-1) as NodeSL<T>
        value = node?.next?.value as T
        node.next = node?.next?.next
        if (node.next == undefined){
            this.tail = node
        }
        return value
}
}