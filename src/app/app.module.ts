import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { RegisterComponent } from './register/register.component';
import { PeoplelistComponent } from './peoplelist/peoplelist.component';
import { RouterModule } from '@angular/router';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations' ;
import {ButtonModule} from 'primeng/button';
import { SignalisationComponent } from './signalisation/signalisation.component';
import {FocusTrapModule} from 'primeng/focustrap';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { CalenderComponent } from './calender/calender.component';
import {CommonModule} from '@angular/common';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {TabViewModule} from 'primeng/tabview';
import { SondageComponent } from './sondage/sondage.component';
import { DemandeComponent } from './demande/demande.component';
import {MatCardModule} from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PeoplelistComponent,
    ForgetpasswordComponent,
    SignalisationComponent,
    AdduserComponent,
    UpdateuserComponent,
    ConfirmationDialogComponent,
    CalenderComponent,
    SondageComponent,
    DemandeComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule ,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    ButtonModule,
    FocusTrapModule,
    CascadeSelectModule,
    MatTooltipModule,
    MatBadgeModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    BrowserModule ,
    CommonModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    TabViewModule,
    MatCardModule,
    MatSliderModule,
    MatInputModule 
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
