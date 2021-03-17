import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cake } from 'src/app/models/cake';

@Component({
  selector: 'app-cake-card',
  templateUrl: './cake-card.component.html',
  styleUrls: ['./cake-card.component.css']
})
export class CakeCardComponent implements OnInit {
  
  @Input()
  cake:Cake;

  @Output() childEvent = new EventEmitter<Object>();

  purchase(){
    this.childEvent.emit(this.cake);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
