import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wicheck';
  public employees = [];

  // constructor(private _employeeService = EmployeeService){}

  ngOnInIt(){
  
    //  this._employeeService.getEmplyoees().subscribe(data => this.employees = data);
  }
}
