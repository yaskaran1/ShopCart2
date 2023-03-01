import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterBtnComponent } from './component/filter-btn/filter-btn.component';
import { HeaderComponent } from './component/header/header.component';
import { NavigationBarComponent } from './component/navigation-bar/navigation-bar.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './component/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterBtnComponent,
    HeaderComponent,
    NavigationBarComponent,
    ProductCardComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
