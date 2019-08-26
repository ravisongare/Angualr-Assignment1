import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeModule } from './employee/employee.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
   // EmployeeComponent
  ],
  imports: [
    BrowserModule,
    EmployeeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
