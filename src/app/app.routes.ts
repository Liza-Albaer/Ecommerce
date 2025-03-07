import { AllOrdersComponent } from './pages/components/all-orders/all-orders.component';
import { OrderComponent } from './pages/components/order/order.component';

import { ForgetpasswordComponent } from './pages/components/forgetpassword/forgetpassword.component';
import { DetailsComponent } from './pages/components/details/details.component';
import { Routes } from '@angular/router';
import { AuthComponent } from './layout/components/auth/auth.component';
import { LoginComponent } from './pages/components/login/login.component';
import { RegisterComponent } from './pages/components/register/register.component';
import { MainComponent } from './layout/components/main/main.component';
import { NotfoundComponent } from './pages/components/notfound/notfound.component';
import { authGuard } from './core/guards/auth.guard';
import { loginGuard } from './core/guards/login.guard';


export const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
      },
  {
    path:'',
    component:AuthComponent,
    canActivate:[loginGuard],
    children:[
      {
        path:'login',
        loadComponent:()=>import('./pages/components/login/login.component').then(c=>c.LoginComponent),
        title:'login'
      },
      {
        path:'register',
        loadComponent:()=>import('./pages/components/register/register.component').then(c=>c.RegisterComponent),

        title:'register'
      },
      {
        path:'forgetpassword',
        loadComponent:()=>import('./pages/components/forgetpassword/forgetpassword.component').then(c=>c.ForgetpasswordComponent),

        title:'forget password'
      }
    ]
  },{
    path:'',
    canActivate:[authGuard],
    component:MainComponent,
    children:[
      {
        path: 'home',
        loadComponent:()=>import('./pages/components/home/home.component').then(c=>c.HomeComponent),
        title:'home'
      },{
        path:'products',   loadComponent:()=>import('./pages/components/products/products.component').then(c=>c.ProductsComponent),title:'products'
      }
      ,{
        path:'brands',   loadComponent:()=>import('./pages/components/brands/brands.component').then(c=>c.BrandsComponent) ,title:'brands'
      }
      ,{
        path:'categories',  loadComponent:()=>import('./pages/components/categories/categories.component').then(c=>c.CategoriesComponent) ,title:'categories'
      },{
        path:'cart',  loadComponent:()=>import('./pages/components/cart/cart.component').then(c=>c.CartComponent),title:'cart'
      },{
        path:'details/:id',  loadComponent:()=>import('./pages/components/details/details.component').then(c=>c.DetailsComponent),title:'product Details'
      },{
        path:'order/:id',  loadComponent:()=>import('./pages/components/order/order.component').then(c=>c.OrderComponent),title:'product Details'
      },{
        path:'allorders',  loadComponent:()=>import('./pages/components/all-orders/all-orders.component').then(c=>c.AllOrdersComponent),title:'product Details'
      }
    ]
  },{
    path:'**',
    component:NotfoundComponent,
    title:'not-Found'
  }

];


