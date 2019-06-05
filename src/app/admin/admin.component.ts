import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsService } from '../user-details.service';
import { ChangeUserDetailsService } from '../change-user-details.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user: any[] = [];
  constructor(private route : Router,
              private userData: UserDetailsService,
              private userChangeData : ChangeUserDetailsService) { }

  ngOnInit() {
    this.user = this.userData.userDetails;

  }

  logout(){
    sessionStorage.clear();
    this.route.navigateByUrl("");
  }

  edit(userChangeData : any , index : number ){
    console.log(userChangeData);
    this.userChangeData.useredit=userChangeData;
    this.route.navigateByUrl("edit");
    this.userData.userDetails.splice(index,1);
    
  }

  delete(index: number){
    console.log(index);
    this.userData.userDetails.splice(index,1);
  }
  
}
