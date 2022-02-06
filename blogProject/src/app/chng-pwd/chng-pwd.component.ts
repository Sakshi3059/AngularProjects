import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder} from '@angular/forms'
import { AlogService } from '../alog.service';

@Component({
  selector: 'app-chng-pwd',
  templateUrl: './chng-pwd.component.html',
  styleUrls: ['./chng-pwd.component.css']
})
export class ChngPwdComponent implements OnInit {
  users=[]
  uPwd:FormGroup
  uid=localStorage.getItem('uid')
  user=localStorage.getItem('user')
  constructor(private fb:FormBuilder,private ser:AlogService) {
    this.uPwd=this.fb.group(
      { 
        '$key':[this.uid],
        'uname':[this.user],
        'oldPwd':[],
        'newPwd':[]

      }
    )
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
       for(let i=0;i<this.ulen;i++)
    {
      if(this.users[i].$key==this.uPwd.get('$key').value)
       {
         this.uPwd.patchValue({oldPwd:this.users[i].Password})
       } 
    }
 

     
       })
       
   }

   updatePwd(){
    for(let i=0;i<this.ulen;i++)
    {
      if(this.users[i].$key==this.uPwd.get('$key').value)
       {
         this.ser.updatePass(this.uPwd.value)
         alert("password changed")
       } 
    }

   }
}
