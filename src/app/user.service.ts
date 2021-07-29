import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userData;
  myUrl;
  isLoggedIn:boolean;
  
  constructor(private http:HttpClient,private route:Router) {  }

  addUser(signupForm: FormGroup) {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(signupForm);
    this.http.post("http://localhost:3000/users",body,{'headers':headers}).subscribe();
    console.log(signupForm);
  }

  getData(){
    this.http.get("http://localhost:3000/users").subscribe(data=>{
      this.userData=data;
    });
   
  }

  login(loginForm:FormGroup) {
    console.log();
    let userName=loginForm.get('user_name').value;
    let user_password=loginForm.get('user_password').value;
    this.myUrl=`http://localhost:3000/users?user_name=${userName}&user_pass=${user_password}`;

    this.http.get(this.myUrl).subscribe(data=>{
      this.userData=data;
      console.log(this.userData.length)
     
      if(this.userData.length==0)
      {
        localStorage.setItem('isLoggedIn','false');
        alert("Invalid UserName or Password");
        this.isLoggedIn=false;
      }
      else if(this.userData[0].user_name==userName && this.userData[0].user_password==user_password)
      {
        localStorage.setItem('isLoggedIn','true');
        localStorage.setItem('user_name',this.userData[0].user_name);
        this.route.navigate(['products']);
      }
      else
      {
        localStorage.setItem('isLoggedIn','false');
        alert("Invalid UserName or Password");
        this.isLoggedIn=false;
      }
     
    });
   console.log(this.myUrl)
  }

  checkLoggedIn(){
    return localStorage.getItem('isLoggedIn');
  }
  logOut(){
    console.log(localStorage.getItem('isLoggedIn'));
    console.log("logging out...");
    localStorage.setItem('isLoggedIn','false');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user_name');
    console.log(localStorage.getItem('isLoggedIn'));
    this.route.navigate(['login']);
  }

  getProfile(user_name){
    return this.http.get(`http://localhost:3000/users?user_name=${user_name}`);
  }

  getProducts(){
    return this.http.get("http://localhost:3001/products");
  }

  addProduct(addProduct: FormGroup) {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(addProduct);
    this.http.post("http://localhost:3001/products",body,{'headers':headers}).subscribe();
    //console.log(signupForm);
  }

  getSingleProduct(id){
    return this.http.get(`http://localhost:3001/products/${id}`);
  }
  editProduct(addProduct: FormGroup,id) {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(addProduct);
    this.http.put(`http://localhost:3001/products/${id}`,body,{'headers':headers}).subscribe();
    //console.log(signupForm);
  }

  deleteProduct(id){
    this.http.delete(`http://localhost:3001/products/${id}`).subscribe();
    
  }
}
