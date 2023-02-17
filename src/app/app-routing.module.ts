import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PeoplelistComponent } from './peoplelist/peoplelist.component';
import { RegisterComponent } from './register/register.component';
import{ForgetpasswordComponent}from './forgetpassword/forgetpassword.component';
import { SignalisationComponent } from './signalisation/signalisation.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { CalenderComponent } from './calender/calender.component';
import { SondageComponent } from './sondage/sondage.component';
import { DemandeComponent } from './demande/demande.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'peoplelist',component:PeoplelistComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'',component:SignalisationComponent},
  { path:'add-user', component:AdduserComponent },
  { path:'update-user/:id', component:UpdateuserComponent },
  { path:'calender', component:CalenderComponent },
  { path:'sondage', component:SondageComponent },
  { path:'demande', component:DemandeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
