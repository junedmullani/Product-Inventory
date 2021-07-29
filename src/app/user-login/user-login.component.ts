import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";
import { UserService } from "../user.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm: FormGroup;
  userData;
  constructor(private service:UserService) { }

  ngOnInit(): void {
    /*this.service.getData().subscribe(data=>{
      this.userData=data;
    })*/
    this.loginForm = new FormGroup({
      user_name: new FormControl(null,[Validators.required,Validators.email]),
      user_password: new FormControl(null,Validators.required),
      
 
    });
  }

  onSubmit() {
    this.service.login(this.loginForm);
    //this.service.addUser(this.signupForm.getRawValue());
    //this.loginForm.reset();
    }
}
