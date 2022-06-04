import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {ButtonModule} from 'primeng/button';
;

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() onClickEv = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
onClick(ev){
this.onClickEv.emit(ev)
}
}
