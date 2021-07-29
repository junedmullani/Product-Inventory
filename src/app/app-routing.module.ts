import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  {
    path:"register",component:UserRegistrationComponent
  },
  {
    path:"login",component:UserLoginComponent
  },
  {
    path:"products",loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path:"profile",component:ProfileComponent
  },
  {
    path:"about",component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
