import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem } from 'primeng/api';
import {MegaMenuModule} from 'primeng/megamenu';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {



  items: MegaMenuItem[] = [];

  ngOnInit() {
      this.items = [
          {
              label: 'Home', routerLink: 'home'
          },
          {
              label: 'Game', routerLink: 'search'
          },
          
      ]
  }
}
