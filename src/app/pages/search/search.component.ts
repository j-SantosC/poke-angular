import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  pokeToFind;
  inputValue: string;

  constructor(private poke: PokeService) {}

  ngOnInit(): void {

  }
  clickHandle() {
    this.poke.getPokemon(this.inputValue).subscribe((data) => {
      this.pokeToFind = data
    });
  }
  changeInputHandle(ev) {
    this.inputValue = ev;
  }
}
