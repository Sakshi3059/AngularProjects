import { Component, OnInit } from '@angular/core';
import {DynTitleService} from '../dyn-title.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { MySerService } from '../my-ser.service';

@Component({
  selector: 'app-ablog',
  templateUrl: './ablog.component.html',
  styleUrls: ['./ablog.component.css']
})
export class AblogComponent implements OnInit {
  
  showSuccessMessage:boolean
  blogForm:FormGroup;
  patt="^[a-zA-z ]{4,30}$";

  constructor(private dynser:DynTitleService,private fb:FormBuilder, private ser:MySerService) {
    this.blogForm=this.fb.group(
      {  '$key':[''],
        'cat':['',[Validators.required,Validators.pattern(this.patt)]],
        'Author':['',[Validators.required,Validators.pattern(this.patt)]],
        'des':['',[Validators.required,Validators.pattern(this.patt)]],
        'date':['',[Validators.required]]
        
      })


   }

   onSubmit()
   {
     this.ser.insertBlog(this.blogForm.value);
     this.showSuccessMessage=true;
     alert("submitted successfully")
      this.blogForm.reset();
   }

  ngOnInit() {
    this.dynser.setTitle('Blog');
  }

}
