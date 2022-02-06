import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database';

@Injectable()
export class AlogService {
 
  flag:boolean;
  status:boolean;
  userList:AngularFireList<any>
 
  constructor(private db:AngularFireDatabase) {

    
   }
 
  getusers()
  { 
    this.userList=this.db.list('users')
    return this.userList.snapshotChanges();
  }

  createUser(user)
  {
    const ref=this.db.list('users')
     ref.push(
       {
         
         User_Name:user.uname,
         Password:user.pwd,
       }
     )
  }

  updateUsername(user)
  {
    const ref=this.db.list('users')
    ref.update(user.$key,
      {
        User_Name:user.newUname,
      
      }
    )
  }

  updatePass(user)
  {
    const ref=this.db.list('users')
    ref.update(user.$key,
      {
        Password:user.newPwd,
      })
  }
 
  set()
  { 
    
    if(localStorage.getItem('uid')!=null || localStorage.getItem('adminLog') )
    return this.flag=true;
    
    else
    this.flag=false;
    
  }
   get()
   {return this.flag}

   setStatus()
   {
    if(this.flag)
     return this.status=true;

    else
    return this.status=false;
   }
   getStatus()
   {
     
     return this.status;
   }
   
}
