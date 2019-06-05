import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../user-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userData: UserDetailsService, private route: Router) { }
  data: any;
  ngOnInit() {

    this.data = JSON.parse(sessionStorage.getItem("user"));
    // console.log(this.data);

  }

  logout() {
    sessionStorage.clear();
    this.route.navigateByUrl("");
  }

}
