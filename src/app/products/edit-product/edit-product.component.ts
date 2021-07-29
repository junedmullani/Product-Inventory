import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product_id;
  editProduct;
  addProduct:FormGroup;
  constructor(private route:ActivatedRoute,private service:UserService) { }

  ngOnInit(): void {
    this.product_id=this.route.snapshot.paramMap.get('id');
    this.service.getSingleProduct(this.product_id).subscribe(data=>{
      this.editProduct=data;
      console.log(this.editProduct.quantity)
      this.addProduct = new FormGroup({
        prod_name: new FormControl(this.editProduct.prod_name,[Validators.required]),
        prod_desc: new FormControl(this.editProduct.prod_desc,Validators.required),
        manufacturer:new FormControl(this.editProduct.manufacturer,Validators.required),
        price:new FormControl(this.editProduct.price,Validators.required),
        quantity:new FormControl(this.editProduct.quantity,Validators.required),
        
      });
    });

    
  }

  onSubmit(){

    this.service.editProduct(this.addProduct.getRawValue(),this.editProduct.id);
    this.addProduct.reset();
  }

}
