import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validator, Validators } from "@angular/forms";
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      user_name: new FormControl(null,[Validators.required,Validators.email]),
      user_password: new FormControl(null,Validators.required),
      user_fname:new FormControl(null,Validators.required),
      user_lname:new FormControl(null,Validators.required),
      user_location:new FormControl(null,Validators.required),
      user_phone: new FormControl(null,Validators.required),
 
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    console.log(this.signupForm.get('user_name').value);
    this.service.addUser(this.signupForm.getRawValue());
    this.signupForm.reset();
    }

}
