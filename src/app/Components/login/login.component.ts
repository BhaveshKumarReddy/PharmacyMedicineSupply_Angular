import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagerLogin } from 'src/Models/ManagerLogin';
import { AuthenticationServiceService } from 'src/app/Services/Authentication/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
token=''
invalidCredentialMessage: string="";
loginform:FormGroup= new FormGroup({});
managerlogin:ManagerLogin={email:"bhavesh@gmail.com",password:"Qwerty"};
constructor(private authserviceobj:AuthenticationServiceService, private route:Router, private https:HttpClient){}
ngOnInit(){
  this.loginform= new FormGroup({
    email: new FormControl(this.managerlogin.email,[
      Validators.required
    ]),
    password: new FormControl(this.managerlogin.password,[
      Validators.required
      ])
    });
  }

login(){
  let user={"email":this.loginform.value.email, "password":this.loginform.value.password};
  this.managerlogin.email=user.email;
  this.managerlogin.password=user.password;
  this.authserviceobj.ManagerLogin(this.managerlogin).subscribe({
    next: (data:any)=>{
      console.log(data)
      this.token = data.token
      localStorage.setItem("token",this.token)
      console.log(this.token)
    },
    error: (error) => {
      console.log(error.error);
      this.invalidCredentialMessage="Invalid Credentials"
      this.route.navigateByUrl("/Login")
    }
  })
  
}
 
}


