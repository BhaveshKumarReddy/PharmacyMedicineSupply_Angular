import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Manager } from 'src/Models/Manager';
import { AuthenticationServiceService } from 'src/app/Services/Authentication/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  mailErrorMessage = ""
  nameErrorMessage = ""
  submitted = false
  registerForm: FormGroup = new FormGroup({});
  manager: Manager = { name: "", email: "", password: "" };
  confirmPassword = ""
  constructor(private authserviceobj: AuthenticationServiceService, private route: Router) { }


  ngOnInit() {
    this.submitted = false
    this.registerForm = new FormGroup({
      name: new FormControl(this.manager.name, [
        Validators.required
      ]),
      email: new FormControl(this.manager.email, [
        Validators.required, Validators.email
      ]),
      password: new FormControl(this.manager.password, [
        Validators.required, Validators.minLength(6)
      ]),
      confirmpassword: new FormControl(this.confirmPassword, [
        Validators.required
      ])
    });


  }

  clearerrormsgformail() {
    this.mailErrorMessage = ""
  }
  clearerrormsgforname() {
    this.nameErrorMessage = ""
  }

  register() {

    this.submitted = true
    let user = { "name": this.registerForm.value.name, "email": this.registerForm.value.email, "password": this.registerForm.value.password, "confirmpassword": this.registerForm.value.confirmpassword };
    this.manager.name = user.name;
    this.manager.email = user.email;
    this.manager.password = user.password;
    this.authserviceobj.checkMail(this.manager.email).subscribe(data => {
      if (data) {
        this.authserviceobj.checkUniqueName(this.manager.name).subscribe(data => {
          if (data) {
            this.authserviceobj.createManagerDetails(this.manager).subscribe({
              next: (data: any) => {
                localStorage.setItem("userName", data.name)
                localStorage.setItem("token", data.token)
                this.manager = data;
                this.route.navigateByUrl("/")
              },
              error: (error) => {
                console.log(error.error);
              }
            })
          }
          else {
            this.nameErrorMessage = "Username Should be unique";
          }
        })

      }
      else {
        this.authserviceobj.checkUniqueName(this.manager.name).subscribe(data => {
          if (!data) {
            this.nameErrorMessage = "Username Should be unique";
          }
          this.mailErrorMessage = "Mail Already Exists";
        },
          error => {
            console.log(error);
          })

      }
    })



  }
}
