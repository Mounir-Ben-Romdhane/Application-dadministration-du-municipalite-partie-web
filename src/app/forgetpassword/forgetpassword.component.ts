import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  email:string
  errorMessage: string;
  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  forgetPassword(email: string){
    
    this.authservice.forgetPassword(email).then(
      () => {
        this.router.navigate(['/']);
      },
      (error) => {
        this.errorMessage=error
       
      }
    )
    
    }
}
