import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Manager } from 'src/Models/Manager';
import { AuthenticationServiceService } from 'src/app/Services/Authentication/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  submitted=false
  registerform:FormGroup=new FormGroup({});
  manager:Manager={name:"Bhavesh",email:"bhavesh@gmail.com",password:"Qwerty"};
  confirmpassword=""
  ngOnInit(){
    this.submitted=false
    this.registerform=new FormGroup({
      name:new FormControl(this.manager.name,[
        Validators.required
      ]),
      email:new FormControl(this.manager.email,[
        Validators.required
      ]),
      password:new FormControl(this.manager.password,[
        Validators.required
      ]),
      confirmpassword:new FormControl(this.confirmpassword,[
        Validators.required
      ])
    });

  }
  constructor(private authserviceobj:AuthenticationServiceService,private route:Router){}

  register(){
    this.submitted=true
    let user={"name":this.registerform.value.name,"email":this.registerform.value.email,"password":this.registerform.value.password,"confirmpassword":this.registerform.value.confirmpassword};
    this.manager.name=user.name;
    this.manager.email=user.email;
    this.manager.password=user.password;
    this.authserviceobj.createManagerDetails(this.manager).subscribe(data=>{
      this.manager=data;
      console.log(data)
    })

  }
}
