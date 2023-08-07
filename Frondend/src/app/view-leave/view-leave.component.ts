import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-view-leave',
  templateUrl: './view-leave.component.html',
  styleUrls: ['./view-leave.component.scss']
})

export class ViewLeaveComponent implements OnInit {
  
  leave:any;
  constructor(private dataservice:DataService) { }

  ngOnInit():void{
    this.fetchLeave(); 

  }

  deleteleave(leaveId:any){
    this.dataservice.delLeave(leaveId).subscribe(()=>{
      this.fetchLeave(); 
})
  }
  fetchLeave(){
    this.dataservice.viewleaves().subscribe((data)=>{
      this.leave=data;
    console.log(this.leave);
  })
}
}

