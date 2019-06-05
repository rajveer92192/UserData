import { Injectable, Output, EventEmitter } from '@angular/core';
import { UserDetailsService } from './user-details.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChangeUserDetailsService  {

  constructor() { }

  useredit:any[] = [];


}
