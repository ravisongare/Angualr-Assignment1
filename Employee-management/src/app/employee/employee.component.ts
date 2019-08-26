import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  pageTitle = 'employee';
  employee: Employee;
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  get languages(): FormArray {
    return  this.employeeForm.get('languages') as FormArray;
  }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      id: 0,
      name: ['ravi', Validators.required],
      qualification: ['BE', Validators.required],
      experiance: ['1yr', Validators.required],
      languages: new FormArray( [this.buildLanguage()]),
    });
  }

  addLanguages(): void {
   this.languages.push(this.buildLanguage());
  }

  buildLanguage(): FormGroup {

    return this.fb.group({language: ''});
  }


  save() {
    console.log(this.employeeForm);
    console.log('Saved: ' + JSON.stringify(this.employeeForm.value));
  }
}
