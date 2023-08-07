import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Leave } from './leave';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  API_URL='http://127.0.0.1:8000/api/leaves/leave//';
  constructor(private http:HttpClient) { }
  viewleaves(){
    
    return this.http.get<Leave>(this.API_URL);
  }
  delLeave(leaveId:any){
    return this.http.delete<Leave>(this.API_URL+leaveId+'/');
  }
  addLeave(data:any){
    return this.http.post<Leave>(this.API_URL,data);
  }
  getsingleleave(leaveId:any){
    return this.http.get<Leave>(this.API_URL+leaveId+'/');
  }
  
  editLeave(leaveId:number,data:any){
    console.log('AA'+data);
    return this.http.put<Leave>(this.API_URL+leaveId+'/',data);
  }
}

