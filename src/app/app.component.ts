import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularService';
  Users:any;
  constructor(private userdata:UserDataService){
    this.Users=userdata.users()
    console.warn(userdata)
  }
}
