import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,AbstractControl, ValidatorFn, ValidationErrors} from '@angular/forms';
import { Manager } from 'src/Models/Manager';
import { AuthenticationServiceService } from 'src/app/Services/Authentication/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  mailerrormsg=""
  nameerrormsg=""
  submitted=false
  registerform:FormGroup=new FormGroup({});
  manager:Manager={name:"Temporary",email:"temp@gmail.com",password:"123456"};
  confirmpassword="123456"
  constructor(private authserviceobj:AuthenticationServiceService,private route:Router){}
  
  
  ngOnInit(){
    this.submitted=false
    this.registerform=new FormGroup({
      name:new FormControl(this.manager.name,[
        Validators.required
      ]),
      email:new FormControl(this.manager.email,[
        Validators.required, Validators.email
      ]),
      password:new FormControl(this.manager.password,[
        Validators.required
      ]),
      confirmpassword:new FormControl(this.confirmpassword,[
        Validators.required
      ])
    });
    

  }
  
  clearerrormsgformail(){
    this.mailerrormsg=""
  }
  clearerrormsgforname(){
    this.nameerrormsg=""
  }
  
  register(){
  
    this.submitted=true
    let user={"name":this.registerform.value.name,"email":this.registerform.value.email,"password":this.registerform.value.password,"confirmpassword":this.registerform.value.confirmpassword};
    this.manager.name=user.name;
    this.manager.email=user.email;
    this.manager.password=user.password;
    this.authserviceobj.checkMail(this.manager.email).subscribe(data=>{
      if(data){
        this.authserviceobj.checkUniqueName(this.manager.name).subscribe(data=>{
          if(data){
            this.authserviceobj.createManagerDetails(this.manager).subscribe({
              next: (data:any)=>{
                localStorage.setItem("token",data.token)
                this.manager=data;
                this.route.navigateByUrl("/")
              },
              error: (error) => {
                console.log(error.error);
              }
            })
          }
          else{
            this.nameerrormsg="Username Should be unique";
          }
        })
        
      }
      else{
        this.authserviceobj.checkUniqueName(this.manager.name).subscribe(data=>{
          if(!data){
            this.nameerrormsg="Username Should be unique";

          }
        this.mailerrormsg="Mail Already Exists";
      })
      
    }
  })

    

  }
}
