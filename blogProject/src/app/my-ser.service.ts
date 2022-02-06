import { Injectable } from '@angular/core';
import {AngularFireList,AngularFireDatabase} from '@angular/fire/database';


@Injectable()


export class MySerService {



  blogList:AngularFireList<any>
  constructor(private db:AngularFireDatabase) { }

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
       Category:blog.cat,
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
  
  
}
