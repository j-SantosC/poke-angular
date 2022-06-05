import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() img: string = '';
  @Input() name: string = '';
  @Input() number: string = '';
  @Output() catchEv = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  onCatch(ev){
    this.catchEv.emit(ev)
  }

}
