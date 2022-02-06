import { Component, OnInit } from '@angular/core';
import {DbserService} from '../dbser.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 log:FormGroup; 
 userArr=[];

  constructor(private dbser:DbserService,private fb:FormBuilder,private ro:Router) { 
    this.log=this.fb.group(
      {
        'uname':['',[Validators.required]],
        'pwd':['',[Validators.required]]
      }
    )
  }
 
  signUp()
  {
    this.dbser.createUser(this.log.value);
    alert('welcome'+' '+this.log.get('uname').value);
    this.ro.navigateByUrl('/fhome')

  }

  login()
  {
    if(this.log.get('uname').value=="admin" && this.log.get('pwd').value=="password")
     {
       alert('welcome Admin!!!')
       this.ro.navigateByUrl('/admin')
     }

      else
      {
        this.dbser.getUser().subscribe(
          list => {
            this.userArr = list.map(item => {
              return {
                $key: item.key,
                ...item.payload.val()
              };
            });
          })

        
      for(let i=0;i<this.userArr.length;i++)
      {
        if(this.userArr[i].User==this.log.get('uname').value && this.userArr[i].Password==this.log.get('pwd').value)
        {
          alert("logged in");
          this.ro.navigateByUrl('/fhome');
          break;
        }

      else
       {
         alert("wrong credetniALS");
         this.ro.navigateByUrl('/login')
        } 

     
       
      }
    }
  }



  ngOnInit() {
  }

}
