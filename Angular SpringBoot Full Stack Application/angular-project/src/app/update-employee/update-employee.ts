import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './update-employee.html',
  styleUrl: './update-employee.css'
})
export class UpdateEmployee implements OnInit{
  id!: number;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router){
    
  }
  
  ngOnInit(): void {
    //this.employee: Employee = new Employee();
    this.id = this.route.snapshot.params['id'];
    //this.employeeService.getEmployeeById(this.id).subscribe(data => {this.employee = data;}, error => console.log(error));
    this.employeeService.getEmployeeById(this.id)
        .subscribe({
          next: (data) => {
            console.log(data)
            this.employee = data
          },
          error: (error) => console.log(error),
          complete: () => console.log("Data init completed!")
        })
  
  }
  
  onSubmit(){
    //console.log("Sending Updated Form", this.employee);
    this.updateEmployee();
    console.log("Employee Updated")
  }

  updateEmployee(){
    //this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      //console.log(data);
      //this.employee = new Employee();
      //this.goToList();
    //}, error => console.log(error));
   
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe({
        next: (data) => console.log(data),
        error: (error) => console.log(error),
        complete: () => this.goToEmployeeList()
      })
  
  }
  goToEmployeeList(){
    this.router.navigate(['/employees'])
  };


}
