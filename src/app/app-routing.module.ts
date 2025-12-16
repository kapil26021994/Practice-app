import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userGuard } from './guard/user.guard';
const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {
    path:'dashboard',
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule),
    canActivate:[userGuard]
  },
  {path:'product', loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
