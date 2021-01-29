import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FolderPageRoutingModule } from 'src/app/folder/folder-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular/ionic-module';
import { RegisterRoutingModule } from '../register/register-routing.module';
import { LoginPagePageRoutingModule } from './login-page.routing.module';

@NgModule({
  declarations: [LoginPageModule],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPagePageRoutingModule
  ]
})
export class LoginPageModule { }
