import { Component, OnInit } from '@angular/core';
import {DynTitleService} from '../dyn-title.service';

@Component({
  selector: 'app-adashb',
  templateUrl: './adashb.component.html',
  styleUrls: ['./adashb.component.css']
})
export class AdashbComponent implements OnInit {

  constructor(private dynser:DynTitleService) { }

  ngOnInit() {
    this.dynser.setTitle('Dashboard');
  }

}
