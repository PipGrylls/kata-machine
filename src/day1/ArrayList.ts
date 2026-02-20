export default class ArrayList<T> {
    public length: number;
    public capacity: number;
    private high: number;
    private low: number;
    private data: T[];

    constructor(capacity:number) {
        this.capacity=capacity
        this.length=0
        this.data = new Array<T>(this.capacity)
        this.high=this.low=0
    }

    range_check(idx: number): boolean{
        return (idx >= this.length)
    }

    shift(distance: number, direction: number=1): void {
        if (distance < 0){
            distance = Math.abs(distance)
            direction = -direction
        }

        if (direction == 1){
            if (this.capacity > this.high+distance){
                for(let i=this.high; i>=this.low; i--){
                    this.data[i+distance] = this.data[i]
                }
                this.high += distance
                this.low += distance
            } else{
                this.grow()
                this.shift(distance, direction)
            }
        } else if (direction == -1){
            if(this.low - distance >= 0){
                for(let i=this.low; i<=this.high; i++){
                    this.data[i-distance] = this.data[i]
                }
                this.high -= distance
                this.low -= distance
            } else {
                throw new RangeError("Cannot shift low below 0")
            }
        }

}

    grow(): void {
        let old_data = this.data
        this.capacity = Math.floor(this.capacity*1.5)
        this.data = new Array<T>(this.capacity*1.5)
        for(let i=this.low; i<=this.high; i++){
            this.data[i]=old_data[i]
        }

}

    prepend(item: T): void {
        if (this.length == this.capacity){
            this.grow()
        }
        if (this.low == 0){
            this.shift(1)
        }
        this.length++
        this.low--
        this.data[this.low] = item

}
    insertAt(item: T, idx: number): void {
        if(this.range_check(idx)){
            throw new RangeError("Index out of range")
        }
        if(this.length == this.capacity){
            this.grow()
        }
        if (this.high+1 <= this.capacity){
            let actual_low = this.low
            this.low += idx
            this.shift(1)
            this.data[this.low-1] = item
            this.low = actual_low
            this.length++
        } else {
            let actual_high = this.high
            this.high = this.low + idx -1
            this.shift(-1)
            this.data[this.high+1]
            this.high = actual_high
            this.length++
        }

}
    append(item: T): void {
        if (this.length == this.capacity){
            this.grow()
        }
        if (this.high+1 == this.capacity){
            this.shift(1, -1)
        }
        this.length++
        this.high = this.low + this.length - 1
        this.data[this.high] = item
        return

}
    remove(item: T): T | undefined {
        for(let i = this.low; i<=this.high; i++){
            if (item == this.data[i]){
                return this.removeAt(i)
            }
        }
        return undefined

}
    get(idx: number): T | undefined {
        if(this.range_check(idx)){
            return undefined
        }
        return this.data[this.low+idx]

}
    removeAt(idx: number): T | undefined {
        if(this.range_check(idx)){
            return undefined
        }
        let value = this.data[this.low+idx]
        if (idx > Math.floor(this.high - this.low)){
            let true_low = this.low
            this.low+=idx
            this.shift(-1)
            this.low = true_low
            this.length--
        } else {
            let true_high = this.high
            this.high = this.low+idx-1
            this.shift(1)
            this.high = true_high
            this.length--
        }
        return(value)
}
}