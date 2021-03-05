import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule,AlertConfig } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


import { EmployeeService } from './_services/employee.service';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [			
    AppComponent,
      EmployeeComponent,
      NavMenuComponent,
      HomeComponent
   ],
  imports: [
      BrowserAnimationsModule,
      BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      HttpClientModule,
      AccordionModule,
      AlertModule,
      ButtonsModule,
      FormsModule,
      CarouselModule,
      CollapseModule,
      BsDatepickerModule.forRoot(),
      RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'fetch-employee-data', component: EmployeeComponent },
      ],

    )
  ],
  providers: [EmployeeService,AlertConfig,BsDatepickerConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
