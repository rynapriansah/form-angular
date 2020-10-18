import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService) { }

  departments = [
    {
      id: 1,
      value: 'Dep 1'
    },
    {
      id: 2,
      value: 'Dep 2'
    },
    {
      id: 3,
      value: 'Dep 3'
    }
  ];

  ngOnInit(): void {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

}
