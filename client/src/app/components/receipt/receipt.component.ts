import { Component, OnInit } from '@angular/core';
import { Cake } from 'src/app/models/cake';
import { OrderItem } from 'src/app/models/Order';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  public cart:OrderItem[] = this.stateService.cart;

  constructor(public stateService:StateService) { }
  ngOnInit(): void {
  }

  public removeFromCart = (cake) => {
    this.stateService.cart.map((currentCake)=> {
      if(currentCake.cake.name = cake.name){
        currentCake.amount--
        currentCake.total -= cake.price
      }
    });
  }
}
