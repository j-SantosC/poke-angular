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
              label: 'Home', icon: 'pi pi-fw pi-video', routerLink: 'home'
          },
          {
              label: 'Search', icon: 'pi pi-fw pi-users', routerLink: 'search'
          },
          {
              label: 'Events', icon: 'pi pi-fw pi-calendar',

          },
          {
              label: 'Settings', icon: 'pi pi-fw pi-cog',
             
          }
      ]
  }
}
