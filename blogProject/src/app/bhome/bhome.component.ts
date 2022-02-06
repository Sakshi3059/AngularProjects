import { Component, OnInit } from '@angular/core';
import { MySerService} from '../my-ser.service';


@Component({
  selector: 'app-bhome',
  templateUrl: './bhome.component.html',
  styleUrls: ['./bhome.component.css']
})
export class BhomeComponent implements OnInit {
 
  blogArr=[];

  constructor(private ser:MySerService) {  
 
     
  }

  ngOnInit() {
    this.ser.getBLog().subscribe(
      list => {
        this.blogArr = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      })
    

     
  }

}
