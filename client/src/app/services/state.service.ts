import { Injectable } from '@angular/core';
import { Cake } from '../models/cake';
import { OrderItem } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class StateService {
    public cart: OrderItem[] = [];
    public total:number = 0;
    constructor(

  ) { }


}
