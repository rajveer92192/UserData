import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ChangeDetailsComponent } from './change-details/change-details.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch:"full"
  },
  { 
    path: 'login',
    component: LoggedInComponent 
  },
  { 
    path: 'user',
    component: UserComponent
  },
  { 
    path: 'admin',
    component: AdminComponent
  },
  { 
    path: 'signIn',
    component: SignInComponent
  },
  { 
    path: 'edit',
    component: ChangeDetailsComponent
  },
  { 
    path: 'about',
    component: AboutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
