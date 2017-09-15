
export class ArrayHelperUtils<T>  extends Array<T>{
    constructor(){
        super();
    }

    getFirst():T {
        if(this.length == 0)
            throw Error("Empty Array")
        return this[0];
    }
}