import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-signalisation',
  templateUrl: './signalisation.component.html',
  styleUrls: ['./signalisation.component.css']
})
export class SignalisationComponent implements OnInit {
  title = 'Liste des demandes';
  [x: string]: any;
  //public demandes: Observable<any>[];
  public demandes: Observable<any>[]; 
  //messages: AngularFireList<any>;
  
  Constructor(  db: AngularFireDatabase) { 
    const itemsRef: AngularFireList<any> = db.list('Demandes');

    itemsRef.valueChanges().subscribe(

      x=>{ this.demandes=  x;}

      ); 
    }
  
  ngOnInit(): void {
  }
  }
  

