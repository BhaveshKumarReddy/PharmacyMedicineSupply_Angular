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
loginForm:FormGroup= new FormGroup({});
managerLogin:ManagerLogin={email:"",password:""};
constructor(private authserviceobj:AuthenticationServiceService, private route:Router, private https:HttpClient){}
ngOnInit(){
  this.loginForm= new FormGroup({
    email: new FormControl(this.managerLogin.email,[
      Validators.required, Validators.maxLength(20), Validators.minLength(3), Validators.email
    ]),
    password: new FormControl(this.managerLogin.password,[
      Validators.required, Validators.minLength(6)
      ])
    });
  }

login(){
  let user={"email":this.loginForm.value.email, "password":this.loginForm.value.password};
  this.managerLogin.email=user.email;
  this.managerLogin.password=user.password;
  this.authserviceobj.ManagerLogin(this.managerLogin).subscribe({
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


