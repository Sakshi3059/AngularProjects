import { Component, OnInit } from '@angular/core';
import { MySerService} from '../my-ser.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  
 
  blogsArr=[];
  showDeletedMessage:boolean
  constructor(private ser:MySerService) {        
  }

  ngOnInit() {
    this.ser.getBLog().subscribe(
      list => {
        this.blogsArr = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          }
        })
     //  console.log(this.blogsArr.length)

      })
    }

  onDelete($key)
  {
    
    console.log($key);
    if (confirm('Are you sure to delete this record ?')) {
      this.ser.deleteBlog($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }

}
