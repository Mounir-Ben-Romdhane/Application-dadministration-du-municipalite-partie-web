import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
 
  id:any
  errorMessage:string ='';
  formGroup: FormGroup;
  errorMessage1:string ='';
 
  userEmail:string 
  userName:string
  userNumber:string
  userPassword:string
  userdetails:any= []
  
  userforupdate: AngularFireList<any>

  data = {
    userEmail : '',
    userName : '' ,
    userNumber :  '' ,
    userPassword :  ''  
   } 
    id1: any;
    
  constructor(private router:Router,private firebase: AngularFireDatabase,
    private route: ActivatedRoute, private userService: UserService) {
    this.route.params.subscribe( params => {
      this.id = params
    });
    this.userforupdate = this.firebase.list('Utilisateur');
    
    this.id1 = this.route.snapshot.paramMap.get('id');
    console.log(this.id1)
   }


  ngOnInit(): void {
    this.formGroup=new FormGroup({
      CIn: new FormControl('',[
        Validators.required,
      
        Validators.minLength(3)
      ]),
      NAme: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(3)
      ]),
      EMail: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      pHone: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ])
    
    });
    this.userService.getUserById(this.id1).subscribe((results: any[]) => {
      
      this.getuser(results)
    
    })

  }

  getuser(entries: any[]){
   
    this.userdetails = [];
  
    entries.forEach(element => {
       
       
      let y = element.payload.toJSON()
      y["$key"] = element.key
      this.userdetails.push(y as User);

      this.data.userEmail  = this.userdetails[0]['userEmail '] 
      this.data.userName = this.userdetails[0]['userName'] 
      this.data.userNumber = this.userdetails[0]['userNumber'] 
      this.data.userPassword = this.userdetails[0]['userPassword'] 
     
   })
   console.log("res");
   console.log(this.data.userName);
   console.log(this.userdetails);
   }

  onSubmit1() {
  
    let create = 'false';
    
     console.log(this.data.userEmail);
     this.userforupdate.update(this.id1 , {
      userEmail :  this.data.userEmail ,
      userName : this.data.userName ,
      userNumber :  this.data.userNumber  ,
      userPassword :  this.data.userPassword
    }).then(added =>{




      
      this.router.navigate(['/peoplelist'])
    
   

}).catch(error=>{
console.error(error)
this.errorMessage1= error.messaage
console.log('error', error)
console.log(error.message)
})
  
  

 
  }

}