import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProduct: FormGroup;
  constructor(private service:UserService,private route:Router) { }

  ngOnInit(): void {
    this.addProduct = new FormGroup({
      prod_name: new FormControl(null,[Validators.required]),
      prod_desc: new FormControl(null,Validators.required),
      manufacturer:new FormControl(null,Validators.required),
      price:new FormControl(null,Validators.required),
      quantity:new FormControl(null,Validators.required),
      
    });
  }

  onSubmit() {
    console.log(this.addProduct);
    console.log(this.addProduct.get('prod_name').value);
    this.service.addProduct(this.addProduct.getRawValue());
    this.addProduct.reset();
    this.route.navigate(['products']);
    }
}
