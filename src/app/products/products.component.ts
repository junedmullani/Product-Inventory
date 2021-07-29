import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { GraphComponent } from './graph/graph.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  allProducts;
  searchText;
  constructor(private service:UserService,private route:Router,private dialog:MatDialog) { }

  ngOnInit(){
    this.service.getProducts().subscribe(data=>{
      this.allProducts=data;
      console.log(this.allProducts)
    });
    
  }

  checkLoggedIn(){
    return this.service.checkLoggedIn();
  }

  delete(id){
   
    this.service.deleteProduct(id);
    this.route.navigate(['/']);
  }
  
  graphDialog(){
    // this.service.editDialog(item,i);
     this.dialog.open(GraphComponent);
   }

}
