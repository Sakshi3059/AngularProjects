import { Component, OnInit ,Input} from '@angular/core';
import { AlogService } from '../alog.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-uheader',
  templateUrl: './uheader.component.html',
  styleUrls: ['./uheader.component.css']
})
export class UheaderComponent implements OnInit {

  act_user;
 @Input() User
  constructor(private ser:AlogService,private ro:Router) {
     this.act_user=localStorage.getItem('user');
     
}
  ngOnInit() {
   
  }
  logOut()
{
  localStorage.removeItem('uid')
  localStorage.removeItem('user')
  this.ser.set()
  this.ro.navigateByUrl('')

}
}
