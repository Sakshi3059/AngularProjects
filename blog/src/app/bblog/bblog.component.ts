import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {  DbserService } from '../dbser.service';


@Component({
  selector: 'app-bblog',
  templateUrl: './bblog.component.html',
  styleUrls: ['./bblog.component.css']
})
export class BblogComponent implements OnInit {
 
  showSuccessMessage:boolean
  blogForm:FormGroup;
  patt="^[a-zA-z]{4,30}$";
  blogArr=[];

  constructor(private dbser:DbserService,private fb:FormBuilder) { 
    this.blogForm=this.fb.group(
      {  '$key':[''],
        'cat':['',[Validators.required,Validators.pattern(this.patt)]],
        'Author':['',[Validators.required,Validators.pattern(this.patt)]],
        'des':['',[Validators.required,Validators.pattern(this.patt)]],
        'date':['',[Validators.required]]
        
      })
  }
 

  ngOnInit() {

    this.dbser.getBLog().subscribe(
      list => {
        this.blogArr = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      })
this.dbser.addCat(this.blogForm.value);

  }

  onSubmit()
  {
    this.dbser.addCat(this.blogForm.value);
    this.dbser.insertBlog(this.blogForm.value);
    alert("submitted successfully")
    this.showSuccessMessage=true;


    
      
  }
}


