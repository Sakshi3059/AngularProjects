import { Component, OnInit, Input } from '@angular/core';
import {AlogService} from '../alog.service';
import {Router} from '@angular/router';
import {MySerService} from '../my-ser.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})



export class AloginComponent implements OnInit {
 

 userArr=[];
 log:FormGroup;
// uname="abc";
 
  constructor(private ser:AlogService,private ro:Router,private mser:MySerService,private fb:FormBuilder) { 
   
   
    this.log=this.fb.group(
      { 
        '$key':[''],
        'uname':['',Validators.required],
        'pwd':['',Validators.required]
      }
    )
  
  }




login()
{
  
  if(this.log.get('uname').value=="admin" && this.log.get('pwd').value=="password")
     { 
       this.ser.set();
       this.ro.navigateByUrl('/admin/welcome')
     }

      else
      {
       
            
            for(let i=0;i<this.userArr.length;i++)
            {
              if(this.userArr[i].User_Name==this.log.get('uname').value && this.userArr[i].Password==this.log.get('pwd').value  )
              {
                localStorage.setItem('user',this.log.get('uname').value);
                localStorage.setItem('uid',this.userArr[i].$key);
                this.ser.set();
                this.ser.setStatus();
                this.ro.navigateByUrl('/ufront')
              
                break;
              }
          
           if(this.userArr.length-1==i)
             {  
                alert("wrong credentials")
                this.log.reset();
                this.ro.navigateByUrl('/alogin')
             } 
            

             }
        
          
      }

}

signUp()
{
  {
   this.ser.createUser(this.log.value);
   
   localStorage.setItem('uid',this.log.get('$key').value)
   localStorage.setItem('user',this.log.get('uname').value) 
   alert("Welcome"+" "+this.log.get('uname').value)
   this.ser.set();
   this.ser.setStatus();
   this.ro.navigateByUrl('/ufront')
  }
}

  ngOnInit() {                                                                                                                
  
    this.ser.getusers().subscribe(
      list => {
        this.userArr = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      })
}



}
