import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AheaderComponent } from './aheader/aheader.component';
import { AfooterComponent } from './afooter/afooter.component';
import { AcategoryComponent } from './acategory/acategory.component';
import { AblogComponent } from './ablog/ablog.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdashbComponent } from './adashb/adashb.component';
import { AdminComponent } from './admin/admin.component';
import {AloginComponent} from  './alogin/alogin.component';
import { AlogService } from './alog.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoggGuard } from './logg.guard';
import { BheaderComponent } from './bheader/bheader.component';
import { BhomeComponent } from './bhome/bhome.component';
import { BfooterComponent } from './bfooter/bfooter.component';
import { BcategoryComponent } from './bcategory/bcategory.component';
import { BaboutComponent } from './babout/babout.component';
import { BcontactComponent } from './bcontact/bcontact.component';
import {SiteComponent} from './site/site.component';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { DynTitleService } from './dyn-title.service';
import { environment } from 'src/environments/environment';
import { MySerService } from './my-ser.service';
import { BsettingsComponent } from './bsettings/bsettings.component';
import { UheaderComponent } from './uheader/uheader.component';
import { UfrontComponent } from './ufront/ufront.component';
import { ChngPwdComponent } from './chng-pwd/chng-pwd.component';
import { ChngUnameComponent } from './chng-uname/chng-uname.component';
import { RegisterationComponent } from './front/registeration/registeration.component';



const r:Routes=[  

                   {path:'',component:SiteComponent,
                    children:[ {path:'',redirectTo:'bhome',pathMatch:'full'},
                               {path:'bhome',component:BhomeComponent},
                               {path:'babout',component:BaboutComponent},
                               {path:'bcategory',component:BcategoryComponent},
                               {path:'bcontact',component:BcontactComponent},
                               {path:'alogin',component:AloginComponent},
                               
                            ]},
                    {path:'admin',component:AdminComponent,canActivate:[LoggGuard],
                             children:[
                                 {path:'',redirectTo:'alogin',pathMatch:'full'},
            
                                   {path:'welcome',component:WelcomeComponent},
                                   {path:'adashb',component:AdashbComponent,
                                   children:[ 
                                     {path:'',redirectTo:'acategory',pathMatch:'full'},
                                     {path:'acategory',component:AcategoryComponent},
                                    {path:'ablog',component:AblogComponent},
                                    {path:'feedback',component:FeedbackComponent},]
                                   }]
                            },
                      
                   {path:'ufront',component:UfrontComponent,canActivate:[LoggGuard],
                   children:[ {path:'',redirectTo:'bhome',pathMatch:'full'},
                              {path:'bhome',component:BhomeComponent},
                              {path:'babout',component:BaboutComponent},
                              {path:'bcategory',component:BcategoryComponent},
                              {path:'bcontact',component:BcontactComponent},
                              {path:'alogout',component:SiteComponent},
                              {path:'bsettings',component:BsettingsComponent,
                            children:[
                              {path:'',redirectTo:"chngPwd",pathMatch:'full'},
                              {path:'chngPwd',component:ChngPwdComponent},
                              {path:'chngUname',component:ChngUnameComponent}
                            ]},
                           ]},
                                  
                           
                          

                 
               ];
@NgModule({
  declarations: [
    AppComponent,
    AheaderComponent,
    AfooterComponent,
    AcategoryComponent,
    AblogComponent,
    FeedbackComponent,
    AdashbComponent,
    AdminComponent,
    AloginComponent,
    WelcomeComponent,
    BheaderComponent,
    BhomeComponent,
    BfooterComponent,
    BcategoryComponent,
    BaboutComponent,
    BcontactComponent,
    SiteComponent,
    BlogComponent,
    BlogListComponent,
    BsettingsComponent,
    UheaderComponent,
    UfrontComponent,
    ChngPwdComponent,
    ChngUnameComponent,
    RegisterationComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,RouterModule.forRoot(r),
    AngularFireModule.initializeApp(environment.fireCon),
    AngularFireDatabaseModule,
    NgxPaginationModule,

  ],
  providers: [AlogService,LoggGuard,DynTitleService,MySerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
