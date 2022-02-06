import { Component, OnInit } from '@angular/core';
import {DynTitleService} from '../dyn-title.service';

@Component({
  selector: 'app-acategory',
  templateUrl: './acategory.component.html',
  styleUrls: ['./acategory.component.css']
})
export class AcategoryComponent implements OnInit {

  constructor(private dynser:DynTitleService) { }

  ngOnInit() {
    this.dynser.setTitle('Category');
    
  }

}
