import { Component, Input, OnInit } from '@angular/core';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() img: string = '';
  @Input() header: string = '';
  @Input() number: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
