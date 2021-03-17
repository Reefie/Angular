import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class ordersService {

  constructor(private http : HttpClient) { }

  public getAllOrders():Observable<Order[]>{
    return this.http.get<Order[]>("http://localhost:3001/products/");
  }

  // public getOrder(currency):Observable<object>{
  //   return this.http.get("https://api.exchangeratesapi.io/latest?base="+ currency +"&symbols=ILS");
  // }

}
