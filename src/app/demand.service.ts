import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demand } from './demand';
import { AngularFireList,AngularFireDatabase } from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class DemandService {

  demandesList: AngularFireList<any>
  constructor(private db:AngularFireDatabase ) { 
    this.demandesList = db.list('Demandes')
  }
  createUser(demand: Demand){
    this.demandesList.push({
      champ1 :  demand.champ1 ,
      champ2 : demand.champ2 ,
      champ3 : demand.champ3  ,
      champ4 :  demand.champ4,
      email : demand.email
    }
    ).catch(error => {console.error(error)}
    )
  }
  getDemandes() : Observable<any>{
    return this.db.list('Demandes').snapshotChanges();
  }
  getDemandesById(id:any) : Observable<any>{
    return this.db.list('Demandes', ref => ref.orderByKey().equalTo(id)).snapshotChanges();
  }
}
