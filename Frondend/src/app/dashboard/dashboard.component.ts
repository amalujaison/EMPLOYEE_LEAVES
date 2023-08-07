import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../auth/auth.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,OnDestroy {
  user: User;
  userSub: Subscription;
  leave:any;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  
    this.userSub = this.authService.user.subscribe(
      (data: User) => {
        this.user = data
      }
    )
  }
  ngOnDestroy(){
    this.userSub.unsubscribe()
  }
 

}
