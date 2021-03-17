import { Cake } from "./cake";

export class OrderItem {
    constructor(
        public cake:Cake,
        public amount,
        public total? : number
    ){}
}