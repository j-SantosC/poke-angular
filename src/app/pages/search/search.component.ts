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
  error: any;

  constructor(private poke: PokeService) {}

  ngOnInit(): void {

  }
  clickHandle() {
    this.poke.getPokemon(this.inputValue).subscribe((data) => {
      this.pokeToFind = data
    }, (err)=>{
      this.error = "Este pokemon no existe joputa, has perdido!"
    });
  }
  changeInputHandle(ev) {
    this.inputValue = ev;
  }
}
