import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PokeService } from 'src/app/services/poke.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    pokeToFind;
    inputValue: string;
    error: any;
    successArr: any[] = [];
    i: number;
    loading: boolean;

    record: any;

    constructor(
        private poke: PokeService,
        private storage: LocalStorageService
    ) {}

    ngOnInit(): void {
        this.record = this.storage.getItem('record') ?? 0;
    }
    clickHandle() {
        this.loading = true;
        this.poke.getPokemon(this.inputValue).subscribe(
            (data) => {
                this.loading = false;
                this.pokeToFind = {
                    img: data?.sprites?.front_default,
                    name: data?.name,
                    order: data?.order,
                };
                if (
                    this.inputValue &&
                    !this.successArr.some((item) => item.name === data.name)
                ) {
                    this.loading = false;
                    this.poke.pokeArr.push({
                        img: data?.sprites?.front_default,
                        name: data?.name,
                        order: data?.order,
                    });
                    this.successArr = this.poke.pokeArr;
                    this.inputValue = '';
                } else if (this.inputValue === '') {
                    this.error = 'Escribe algo, no recuerdas ninguno?';
                } else {
                    this.loading = false;
                    this.error =
                        'Este pokemon ya esta en la lista amigo! Has perdido';
                }
            },
            () => {
                this.loading = false;
                this.error = 'Ese Pokemon no existe, has perdido!';
                this.record = this.successArr.length;
                this.storage.setItem('record', this.record);
            }
        );
    }
    changeInputHandle(ev) {
        this.inputValue = ev;
    }
    onRestart() {
        this.pokeToFind = null;
        this.successArr = [];
        this.error = null;
        this.inputValue = '';
    }

    handleListClick(pokeName) {
        this.poke.pokeArr.forEach((poke) => {
            if (poke.name === pokeName) this.pokeToFind = poke;
        });
    }
}
