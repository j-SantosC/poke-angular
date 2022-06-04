import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MegaMenuModule } from 'primeng/megamenu';
import { CardModule } from 'primeng/card';
import { NavigationComponent } from './navigation/navigation.component';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [NavigationComponent, CardComponent, InputComponent, ButtonComponent],
  imports: [CommonModule, MegaMenuModule, CardModule, InputTextModule, FormsModule, ButtonModule],
  exports:[NavigationComponent, CardComponent, InputComponent, ButtonComponent], 
})
export class SharedModule {}
