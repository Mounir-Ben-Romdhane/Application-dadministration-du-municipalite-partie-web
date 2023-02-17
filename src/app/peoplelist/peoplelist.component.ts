import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { User } from '../user';
import { UserService } from '../user.service';
import {MatDialog} from '@angular/material/dialog';
import { FirebaseOperation } from '@angular/fire/compat/database/interfaces';

@Component({
  selector: 'app-peoplelist',
  templateUrl: './peoplelist.component.html',
  styleUrls: ['./peoplelist.component.css']
})
export class PeoplelistComponent implements OnInit {
  displayUpdate: boolean = false;
 
  id:any
  errorMessage:string ='';
  errorMessage1:string =''; 
  userEmail:string 
  userName:string
  userNumber:string
  userPassword:string
  
  userforupdate: AngularFireList<any>
  data = {
    userEmail : '',
    userName : '' ,
    userNumber  :  '' ,
    userPassword :  ''  
   } 
    id1: any;

userfordelete : AngularFireList<any>; 
listuser: User[] = [];

displayAdd: boolean = false;




userList: AngularFireList<any>

  constructor(private router:Router, public dialog: MatDialog,
    private firebase: AngularFireDatabase,  private userService: UserService,
    private route: ActivatedRoute , 
      private db:AngularFireDatabase ,private fire:AngularFireAuth) {
      this.userList = db.list('Utilisateur');

      this.userfordelete = this.firebase.list('Utilisateur');
      this.route.params.subscribe( params => {
        this.id = params
      });
      this.userforupdate = this.firebase.list('Utilisateur');
      this.id1 = this.route.snapshot.paramMap.get('id');
      console.log(this.id1)
    }


  ngOnInit(): void {
    this.userService.getUsers().subscribe((results) => {
      
      this.listUser(results)
   
    })
    
  
  }
  

  listUser(entries: any[]){
    this.listuser = [];
    entries.forEach(element => {
     let y = element.payload.toJSON()
     y["$key"] = element.key
     this.listuser.push(y as User);
  })
  console.log(this.listuser);
  }

  openDialog(key: FirebaseOperation): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "voulez-vous vraiment supprimer ces données?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
      
        this.userfordelete.remove(key);
      
     
      }
    });   
  } 
  





  
  edit(key: string){
    
    this.router.navigate(['update-user/'+key])
  
  }

}