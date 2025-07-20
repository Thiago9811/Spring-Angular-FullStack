import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployee } from './create-employee/create-employee';
import { FormsModule } from '@angular/forms';
import { UpdateEmployee } from './update-employee/update-employee';
import { EmployeeDetails } from './employee-details/employee-details';


export const routes: Routes = [
    { path: 'employees', component: EmployeeListComponent },
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: 'create-employee', component: CreateEmployee },
    { path: 'update-employee/:id', component: UpdateEmployee },
    { path: 'employee-details/:id', component: EmployeeDetails }
];
