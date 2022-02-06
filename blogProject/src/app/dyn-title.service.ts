import { Injectable } from '@angular/core';
import {Observable,BehaviorSubject} from 'rxjs/index';

@Injectable()
export class DynTitleService {
  private title=new BehaviorSubject<String>('Dashboard');
  private title$=this.title.asObservable();

  constructor() { }

  setTitle(title:String)
  {this.title.next(title);}

  getTitle():Observable<String>
  { return this.title$}
}
