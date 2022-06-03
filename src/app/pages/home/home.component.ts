import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pokemon: any = {};
  constructor(private poke: PokeService) {}

  ngOnInit(): void {
    this.poke.getDitto().subscribe((data: any) => (this.pokemon = {
      img: data.sprites.front_default,
      name: data.name,
      order:data.order
    }));
  }
}
