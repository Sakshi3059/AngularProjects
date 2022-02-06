import { Component, OnInit } from '@angular/core';
import {DbserService} from '../dbser.service';
import { checkAndUpdateDirectiveDynamic } from '@angular/core/src/view/provider';
@Component({
  selector: 'app-bcat',
  templateUrl: './bcat.component.html',
  styleUrls: ['./bcat.component.css']
})
export class BcatComponent implements OnInit {
  catArr=[];
  newCat;

  constructor(private dbser:DbserService) {
   }
   

  ngOnInit() {
    this.dbser.getBLog().subscribe(
      list => {
        this.catArr = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      })

     }
     addCat()
     {
      
     }

}


