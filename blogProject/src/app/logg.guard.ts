import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import{AlogService} from './alog.service';


@Injectable({
  providedIn: 'root'
})
export class LoggGuard implements CanActivate {



  constructor(private ro:Router,private ser:AlogService){}
  canActivate()
   {
  if(this.ser.get())
  {
    return true;
  }
    else
    { 
      alert("Page Doesn't exist");
      this.ro.navigateByUrl('');
    }
  }
  
}
