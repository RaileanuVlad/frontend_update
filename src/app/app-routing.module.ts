import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UnitatiComponent } from './unitati/unitati.component';
import { AuthGuard } from './shared/auth.guard' 

const routes: Routes = [
  { path: 'unitati', component: UnitatiComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
