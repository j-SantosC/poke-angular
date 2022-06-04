import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MegaMenuModule } from 'primeng/megamenu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './shared/navigation/navigation.component';

import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './shared/card/card.component';
import { CardModule } from 'primeng/card';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
