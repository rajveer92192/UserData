import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsService } from '../user-details.service'; 

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private route: Router,
              private userData : UserDetailsService) { }

  ngOnInit() {
  }

  signUp(userInfo : any)
  {
    if(userInfo.password === userInfo.reenterpassword){
      this.userData.userDetails.push(userInfo);
      alert(userInfo.firstname+" " + userInfo.lastname + " have been Registered Successfully!!");
      this.route.navigateByUrl('');
    }else{
        alert("Password and Confirm Password Not Matched");
    }
  }

}
