import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private route: Router){}

  Logout(){
    console.log('logging out');
    localStorage.clear();
    this.route.navigateByUrl("/login");
  }
}
