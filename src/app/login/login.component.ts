import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: any;
  succMsg='';
  errMsg='';
  constructor(private fb:FormBuilder,private router:Router,private authservice:AuthService) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm() {
    this.loginForm=this.fb.group( {
      email:new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    }
    )    
  }
  getEmail(){
    return this.loginForm.get('email')
  }
  getPassword(){
    return this.loginForm.get('password')
  }
login(){
  const email=this.loginForm.get('email')?.value;
  const password=this.loginForm.get('password')?.value;
  this.authservice.signInUser(email,password).then(
    () =>{
      this.router.navigate(['/peoplelist']);
    },
    (error) =>{
      this.errorMessage=error
    }
  )
}
}
