import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginCallbackComponent } from '../components/login/login-callback.component';
import { PriceComponent } from '../components/price/price.component';

const routes: Routes = [
  {
    path: 'login-callback/:token',
    component: LoginCallbackComponent
  },
  {
    path: 'price/:symbol',
    component: PriceComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
