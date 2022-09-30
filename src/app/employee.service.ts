import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  static getEmplyoees() {
    throw new Error('Method not implemented.');
  }
  
  // private _url: string = "/assets/data/employee.json";
  
  
  constructor( private http: HttpClient) { }

  getEmplyoees():Observable<IEmployee[]>{
 
    return this.http.get<IEmployee[]>("/assets/data/employee.json");
    
   
  }
}
