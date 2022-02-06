import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DynTitleService} from '../dyn-title.service';

@Component({
  selector: 'app-aheader',
  templateUrl: './aheader.component.html',
  styleUrls: ['./aheader.component.css']
})


export class AheaderComponent implements OnInit {
  
  constructor(private dynser:DynTitleService) { }

  title:String;
  ngOnInit() {
    this.dynser.getTitle().subscribe(appTitle=>this.title=appTitle)

  }

}
