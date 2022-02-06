import { Component, OnInit } from '@angular/core';
import {MySerService} from '../my-ser.service';

@Component({
  selector: 'app-bcategory',
  templateUrl: './bcategory.component.html',
  styleUrls: ['./bcategory.component.css']
})
export class BcategoryComponent implements OnInit {

  constructor(private ser:MySerService,) {

   }
 blogsArr=[]
 selectedCat=[];

  ngOnInit() {

    
  this.ser.getBLog().subscribe(
      list => {
        this.blogsArr = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      })
      

  }

  dispBlog(catt)
{  

   
    console.log(this.blogsArr.length)
    for(let i=0;i<this.blogsArr.length;i++)
    {
      if(this.blogsArr[i].Category==catt)
      { 
        this.selectedCat=this.blogsArr[i]
      }
    }
    return this.selectedCat;

  }


  }


