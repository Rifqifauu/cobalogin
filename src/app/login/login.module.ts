import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module'; // Pastikan path ini sesuai
import { LoginPage } from './login.page'; // Pastikan path ini sesuai

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule // Import modul routing untuk LoginPage
  ],
  declarations: [LoginPage] // Deklarasikan komponen LoginPage
})
export class LoginPageModule {}
