import { Component } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { error } from 'console';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  imports: [
    FormsModule
  ],
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.css'
})
export class CreateEmployee {
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router){}

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      debugger
      this.goToEmployeeList();
    },
    error => console.log(error));    
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);

  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
    
  }
} 
