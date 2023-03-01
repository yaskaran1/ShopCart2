import { Component } from '@angular/core';
import { ITEMS } from './component/product-card/product-card.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products=ITEMS;
}
