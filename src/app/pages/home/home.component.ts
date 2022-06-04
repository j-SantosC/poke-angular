import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  initialPokemon: any[] = [];
  constructor(private poke: PokeService) {}

  ngOnInit(): void {
    this.pushInitialPoke('bulbasaur');
    this.pushInitialPoke('charmander');
    this.pushInitialPoke('squirtle');
    console.log(this.initialPokemon);
  }
  pushInitialPoke(poke: string) {
    this.poke.getPokemon(poke).subscribe((data: any) => {
      this.initialPokemon.push(data);
    });
    
  }
}

// img: data.sprites.front_default,
// name: data.name,
// order: data.order
