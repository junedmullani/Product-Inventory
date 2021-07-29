import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service:UserService) { }
  myProfile;
  k=0;
  ngOnInit(): void {
    this.service.getProfile(localStorage.getItem('user_name')).subscribe(
      data=>{
        this.myProfile=data;
      }
    )
  }

  
}
