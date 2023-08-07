import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.scss']
})
export class AddLeaveComponent implements OnInit {
  
  angForm:FormGroup
  constructor(private fb:FormBuilder,private dataService:DataService,private route:Router) { 
    this.angForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      leaveReason:['',Validators.required],
      date_from:['',Validators.required],
      date_to:['',Validators.required],
      status:['',Validators.required],
    })
  }

  ngOnInit():void{
   

  }
  postdata(data:any){
    this.dataService.addLeave(this.angForm.value).subscribe(data=>{
      this.route.navigate(['view-leave']);
    })
  }

}
