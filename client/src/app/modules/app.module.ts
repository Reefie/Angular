import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from '../components/layout/layout.component';
import { CashierComponent } from '../components/cashier/cashier.component';
import { KitchenComponent } from '../components/kitchen/kitchen.component';
import { FormsModule } from '@angular/forms';
import { CakeCardComponent } from '../components/cake-card/cake-card.component';
import { ReceiptComponent } from '../components/receipt/receipt.component';
import { StateService } from '../services/state.service';

@NgModule({
  declarations: [
    LayoutComponent,
    CashierComponent,
    KitchenComponent,
    CakeCardComponent,
    ReceiptComponent,
    CakeCardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StateService],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
