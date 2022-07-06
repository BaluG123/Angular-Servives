import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  Users:any;
  constructor(private userdata:UserDataService) { 
   this.Users=userdata.users()
   console.warn(userdata)
  }

  ngOnInit(): void {
  }

}
