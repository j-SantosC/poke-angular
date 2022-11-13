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
  successArr: any[] = []
  i: number;
  loading: boolean;

  constructor(private poke: PokeService) { }

  ngOnInit(): void {

  }
  clickHandle() {
    this.loading = true;
    this.poke.getPokemon(this.inputValue).subscribe((data) => {
      this.loading = false;
      this.pokeToFind = data;
      if (this.inputValue && !this.successArr.includes(data.name)) {
        this.loading = false;
        this.successArr.push(data.name)
        this.inputValue = '';
      } else if (this.inputValue === '') {
        this.error = 'Escribe algo, no recuerdas ninguno?'
      }
      else {
        this.loading = false;
        this.error = "Este pokemon ya esta en la lista amigo! Has perdido"
      }
    }, () => {
      this.loading = false;
      this.error = "Ese Pokemon no existe, has perdido!"
    });
  }
  changeInputHandle(ev) {
    this.inputValue = ev;
  }
  onRestart() {
    this.pokeToFind = null
    this.successArr = []
    this.error = null;
    this.inputValue = '';
  }
}
