import { Component, OnInit } from '@angular/core';
import {DynTitleService} from '../dyn-title.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private dynser:DynTitleService) { }

  ngOnInit() {
    this.dynser.setTitle('Feedback');
  }

}
