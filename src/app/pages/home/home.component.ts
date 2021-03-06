import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  initialPokemon: any[] = [];
  inputValue: string;
  pokeToFind;

  constructor(private poke: PokeService) {}

  ngOnInit(): void {
    this.pushInitialPoke('bulbasaur');
    this.pushInitialPoke('charmander');
    this.pushInitialPoke('pikachu');

    console.log(this.initialPokemon);
  }
  pushInitialPoke(poke: string) {
    this.poke.getPokemon(poke).subscribe((data: any) => {
      this.initialPokemon.push(data);
    });
  }
  clickHandle() {
    this.poke.getPokemon(this.inputValue).subscribe((data) => {
      this.pokeToFind = data;
    });
  }
  changeInputHandle(ev) {
    this.inputValue = ev;
  }
  onCatch(num) {
    console.log(num);
    console.log(this.initialPokemon);

    this.initialPokemon = this.initialPokemon.filter((pokemon) => {
     return pokemon.order == num;
    });
    this.initialPokemon
  }
}

// img: data.sprites.front_default,
// name: data.name,
// order: data.order
