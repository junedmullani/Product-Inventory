import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Products-Inventory';

  constructor(private service:UserService){}

  checkLoggedIn(){
    //console.log(this.service.checkLoggedIn())
    return this.service.checkLoggedIn();
  }
  logOut(){
    this.service.logOut();
  }
}
