import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.component.html',
  styleUrls: ['./info-product.component.css']
})
export class InfoProductComponent implements OnInit {

  id;
  productData;
  constructor(private route:ActivatedRoute,private service:UserService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.service.getSingleProduct(this.id).subscribe(data=>{
      this.productData=data;
    })
  }

}
