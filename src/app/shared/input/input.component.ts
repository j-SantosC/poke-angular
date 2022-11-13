import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() value1: string;
  @Input() disabled = false;
  @Output() value1Change = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  valueChange(ev) {
    this.value1Change.emit(ev);
  }
}
