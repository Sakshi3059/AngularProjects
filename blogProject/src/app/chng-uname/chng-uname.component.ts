import { Component, OnInit } from '@angular/core';
import{FormGroup,Validators,FormBuilder} from '@angular/forms'
import { AlogService } from '../alog.service';

@Component({
  selector: 'app-chng-uname',
  templateUrl: './chng-uname.component.html',
  styleUrls: ['./chng-uname.component.css']
})
export class ChngUnameComponent implements OnInit {
  users=[]
  updUser:FormGroup
  user=localStorage.getItem('user');
  uid=localStorage.getItem('uid')
  constructor(private fb:FormBuilder,private ser:AlogService) { 
    
    this.updUser=this.fb.group(
      { 
        '$key':[this.uid],
        'uname':[this.user,[Validators.required]],
        'newUname':['',[Validators.required]],
      }
    )
    alert(this.user)
  }
ulen;
  ngOnInit() {
   
    this.ser.getusers().subscribe(
      list=>{
        this.users = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          }
        })
      this.ulen=this.users.length;
      })
      
  }
  updateUname()
  {
  for(let i=0;i<this.ulen;i++)
  {
    if(this.users[i].User_Name==this.updUser.get('uname').value)
     {  
        this.ser.updateUsername(this.updUser.value)
        alert("updated succesfully")
     }

   }
  }
  }


