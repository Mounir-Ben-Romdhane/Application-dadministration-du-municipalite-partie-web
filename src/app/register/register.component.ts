import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  errorMessage: any;
  succMsg='';
  errMsg='';
  constructor(private fb:FormBuilder,private router:Router,private authservice:AuthService) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm() {
    this.registerForm=this.fb.group( {
      name:new  FormControl('',[
        Validators.required
        
      ]),
      numeroTel:new FormControl('',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8)
      ]),
      email:new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
      repeatpassword:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    }
    )    
  }
  getName(){
    return this.registerForm.get('name')
  }
  getNumeroTel(){
    return this.registerForm.get('numeroTel')
  }
  getEmail(){
    return this.registerForm.get('email')
  }
  getPassword(){
    return this.registerForm.get('password')
  }
  getRepeatPassword(){
    return this.registerForm.get('repeatpassword')
  }

  create(){
   
    const email=this.registerForm.get('email')?.value;
    const password=this.registerForm.get('password')?.value;
   
    this.authservice.createNewUser(email,password).then(
      () =>{
        this.router.navigate(['/login']);
        
      },
      (error) =>{
        this.errorMessage=error
        alert("connexion invalide");
      }
    )
  }

}
