import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  constructor(private routerId:ActivatedRoute,private api:ApiService){}
  data:any=[];
  ngOnInit(){
    this.api.getProduct().subscribe((res:any)=>{
      let id=this.routerId.snapshot.paramMap.get('id')
      console.log(res);
      let responses=res
      let product=responses.filter((e:any)=>{
        return e.id==id;
      })
      console.log(product);
      
      this.data=product[0];
    })

  }

}
