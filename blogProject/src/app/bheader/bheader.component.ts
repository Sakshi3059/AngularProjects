import { Component, OnInit, Input } from '@angular/core';
import { AlogService } from '../alog.service';



@Component({
  selector: 'app-bheader',
  templateUrl: './bheader.component.html',
  styleUrls: ['./bheader.component.css']
})
export class BheaderComponent implements OnInit {

  act_user;
  loggedIn:boolean;
 @Input() User
  constructor(private ser:AlogService) {
     this.act_user=localStorage.getItem('user');
     this.loggedIn=this.ser.getStatus()
     
}
  ngOnInit() {
   
  }
  logOut()
{
  localStorage.removeItem('uid')
  localStorage.removeItem('user')
  this.ser.set()
  this.ser.setStatus();
  this.loggedIn=this.ser.getStatus();

}
}
