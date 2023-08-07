import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-leave',
  templateUrl: './edit-leave.component.html',
  styleUrls: ['./edit-leave.component.scss']
})
export class EditLeaveComponent implements OnInit {
  
  angForm:FormGroup
  constructor(private fb:FormBuilder,private dataService:DataService,private route:Router,private ActivatedRoute:ActivatedRoute) { 
    this.angForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      leaveReason:['',Validators.required],
      date_from:['',Validators.required],
      date_to:['',Validators.required],
      status:['',Validators.required],
    })
  }
  leaveId: any;
  ngOnInit():void{
   this.ActivatedRoute.paramMap.subscribe(paramId=>{
      this.leaveId=paramId.get('leaveId');
      console.log(this.leaveId)

      this.dataService.getsingleleave(this.leaveId).subscribe(data=>{
        this.angForm.patchValue(data);

      })
   })

  }
  postdata(data:any){
    this.dataService.editLeave(this.leaveId,this.angForm.value).subscribe(data=>{
      this.route.navigate(['view-leave']);
    })
  }

}


