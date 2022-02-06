import { Injectable } from '@angular/core';
import {AngularFireList,AngularFireDatabase} from '@angular/fire/database';

@Injectable()
export class DbserService {

 userList:AngularFireList<any>
 blogList:AngularFireList<any>
 catList:AngularFireList<any>
 bArr=[];
 constructor(private db:AngularFireDatabase) { }
  
  getUser()
  {
    this.userList=this.db.list('Users')
    return this.userList.snapshotChanges();
  }

  createUser(userInfo)
  {
    const ref=this.db.list('Users')
     ref.push(
       { 
         'User':userInfo.uname,
         'Password':userInfo.pwd
       }
     )
  }


  
  
    getBLog()
    {
      this.blogList=this.db.list('blogs')
      return this.blogList.snapshotChanges()
    }
  
    insertBlog(blog)
    {
      const ref=this.db.list('blogs')
      ref.push(
        {
         Name:blog.cat,
         Author:blog.Author,
         Description:blog.des,
         Date:blog.date 
        }
      )
    }
  
    deleteBlog($key:string)
    {
      console.log($key);
      this.blogList.remove($key);
    }
    
    addCat(catt)
    {
      this.getBLog().subscribe(
        list => {
          this.bArr = list.map(item => {
            return {
              $key: item.key,
              ...item.payload.val()
            };
          });
        })
  console.log(this.blogList[1].val())
  
  for(let i=0;i<this.bArr.length;i++)
  { 
  
if(this.bArr[i].Name==catt.cat)
  continue
  else
      {
        const ref=this.db.list('Category')
        ref.push(
        {
          Category:catt.cat
        }
      )
      }
    }
    }
    
}