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
managerlogin:ManagerLogin={email:"",password:""};
constructor(private authserviceobj:AuthenticationServiceService, private route:Router, private https:HttpClient){}
ngOnInit(){
  this.loginform= new FormGroup({
    email: new FormControl(this.managerlogin.email,[
      Validators.required, Validators.maxLength(20), Validators.minLength(3), Validators.email
    ]),
    password: new FormControl(this.managerlogin.password,[
      Validators.required, Validators.minLength(6)
      ])
    });
  }

login(){
  let user={"email":this.loginform.value.email, "password":this.loginform.value.password};
  this.managerlogin.email=user.email;
  this.managerlogin.password=user.password;
  this.authserviceobj.ManagerLogin(this.managerlogin).subscribe({
    next: (data:any)=>{
      this.token = data.token
      localStorage.setItem("userName",data.name)
      localStorage.setItem("token",this.token)
      this.route.navigateByUrl("/")
    },
    error: (error) => {
      console.log(error.error);
      this.invalidCredentialMessage="Invalid Credentials"
      this.route.navigateByUrl("/login")
    }
  })
  
}
 
}


