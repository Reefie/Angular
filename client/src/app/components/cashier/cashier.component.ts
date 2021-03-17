import { Component, OnInit } from '@angular/core';
import { Cake } from 'src/app/models/cake';
import { OrderItem } from 'src/app/models/order';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent implements OnInit {


  public customerName:string;
  public cakes = [
    {name:"cheese", price: 200},
    {name:"chocolate", price: 150},
    {name:"crack", price: 300},
    {name:"birthday", price: 500},
    {name:"wedding", price: 1000}];
  public total: number = 0;


  constructor(public stateService:StateService) { }

  public addToOrder = (cake) => {
    this.stateService.cart.map((currentCake)=> {
      if(currentCake.cake.name == cake.name){
        currentCake.amount++
        currentCake.total += cake.price
      }
    });
    
    this.stateService.total += cake.price;
  }

  ngOnInit(): void {
  }

  // public completeOrder = () => {
  //   let order = new OrderItem(this.stateService, this.customerName,this.total)
  //   console.log(order);
  // }

}
