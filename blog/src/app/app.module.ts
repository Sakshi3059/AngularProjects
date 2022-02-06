import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FheaderComponent } from './fheader/fheader.component';
import { BheaderComponent } from './bheader/bheader.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { environment } from 'src/environments/environment';
import { DbserService } from './dbser.service';
import { FfooterComponent } from './ffooter/ffooter.component';
import { BfooterComponent } from './bfooter/bfooter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BhomeComponent } from './bhome/bhome.component';
import { FhomeComponent } from './fhome/fhome.component';
import { AdminComponent } from './admin/admin.component';
import { BcatComponent } from './bcat/bcat.component';
import { BblogComponent } from './bblog/bblog.component';
import { BfeedbackComponent } from './bfeedback/bfeedback.component';

const r:Routes=[
  {path:'',component:IndexComponent,
  children:[ {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'fhome',component:FhomeComponent}]
  },

  {path:'admin',component:AdminComponent,
  children:[
    {path:'',redirectTo:'dash',pathMatch:'full'},
    {path:'dash',component:DashboardComponent,
      children:[
        {path:'',redirectTo:'bblog',pathMatch:'full'},
        {path:'bcategory',component:BcatComponent},
        {path:'bblog',component:BblogComponent},
        {path:'bfeedback',component:BfeedbackComponent},
        
      ]
    },

  ]},

  ]
@NgModule({
  declarations: [
    AppComponent,
    FheaderComponent,
    BheaderComponent,
    LoginComponent,
    IndexComponent,
    FfooterComponent,
    BfooterComponent,
    DashboardComponent,
    BhomeComponent,
    FhomeComponent,
    AdminComponent,
    BcatComponent,
    BblogComponent,
    BfeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(r),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.fb)
  ],
  providers: [DbserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
