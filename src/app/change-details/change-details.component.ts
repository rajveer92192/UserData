import { Component, OnInit } from '@angular/core';
import { ChangeUserDetailsService } from '../change-user-details.service';
import { Router } from '@angular/router';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-change-details',
  templateUrl: './change-details.component.html',
  styleUrls: ['./change-details.component.css']
})
export class ChangeDetailsComponent implements OnInit {

  data: any[] = [];
  constructor(private getChangeData : ChangeUserDetailsService,
              private route : Router,
              private userData : UserDetailsService ) { }

  ngOnInit() {
    //console.log('edit page loaded');
    this.data=this.getChangeData.useredit;    
  }

  update(userInfo: any){
    console.log(userInfo);
    this.userData.userDetails.push(userInfo);
    this.route.navigateByUrl("admin");
  }

}
