import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent {

  constructor(private route: Router,
    private userData: UserDetailsService) { }

  login(value: any) {

    if (value.email === 'admin' && value.password === 'admin') {
      this.route.navigateByUrl('admin');
      sessionStorage.setItem("user", JSON.stringify(value));
    } else {
      for (let user of this.userData.userDetails) {

        if (value.email === user.email && value.password === user.password) {
          sessionStorage.setItem("user", JSON.stringify(user));
          this.route.navigateByUrl('user');
          break;
        }

      }
    }
    if (sessionStorage.getItem("user") === null) {
      alert("Email and Password Does Not Matched");
    }

  }

}
