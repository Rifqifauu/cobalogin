import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login.page'; // Pastikan path ini sesuai dengan lokasi LoginPage

const routes: Routes = [
  {
    path: '',
    component: LoginPage // Komponen yang ditampilkan untuk route ini
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] // Ekspor RouterModule agar dapat digunakan di LoginPageModule
})
export class LoginPageRoutingModule {}
