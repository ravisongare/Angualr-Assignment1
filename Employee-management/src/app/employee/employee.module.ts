import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [ EmployeeComponent ]
})
export class EmployeeModule { }
