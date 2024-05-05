import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  constructor(private api: ApiService ){}
  products: any;

  ngOnInit():void{
   this.api.getProduct().subscribe((data: any) => {
   this.products=data;
    
   
  })
   
  }
}
