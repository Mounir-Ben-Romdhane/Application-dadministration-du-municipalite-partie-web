import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Demand } from '../demand';
import { DemandService } from '../demand.service';
@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  [x: string]: any;
  id:any
  champ1:string 
  champ2:string
  champ3:string
  champ4:string
  email:string
  data = {
    champ1: '',
    champ2 : '' ,

    champ3 :  '' ,
    champ4 :  '' ,
    email : ''  
   } 
    id1: any;

  title = 'Liste des demandes';
  //[x: string]: any;
  public demandes: Observable<any>[]; 
  listdemandes: Demand[] = [];
 
  demandService: any;
  demandesList: AngularFireList<any>
  Constructor(  db: AngularFireDatabase,demandService : DemandService ,
     route: ActivatedRoute) { 
    this.demandesList = db.list('Demandes');
      this.id1 = this.route.snapshot.paramMap.get('id');
      console.log(this.id1)
    }
  ngOnInit(): void {
    this.demandService.getDemandes().subscribe((results: any[]) => {
      this.listDemande(results)
    })
  }
  listDemande(entries: any[]){
    this.listdemandes = [];
    entries.forEach(element => {
     let y = element.payload.toJSON()
     y["$key"] = element.key
     this.listdemandes.push(y as Demand);
  })
  console.log(this.listdemandes);
  }


}
