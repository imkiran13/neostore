import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ShopByDepartmentComponent } from './components/home/shop-by-department/shop-by-department.component';
import { HomeComponent } from './components/home/home.component';
import { TrendingComponent } from './components/home/trending/trending.component';
import { SpecialOfferComponent } from './components/home/special-offer/special-offer.component';
import { NeedItFastComponent } from './components/home/need-it-fast/need-it-fast.component';
import { FurnitureForBudgetComponent } from './components/home/furniture-for-budget/furniture-for-budget.component';
import { BestSellersComponent } from './components/home/best-sellers/best-sellers.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'shop-by-department', component: ShopByDepartmentComponent },
  { path: 'trending', component: TrendingComponent },
  { path: 'special-offer', component: SpecialOfferComponent },
  { path: 'need-it-fast', component: NeedItFastComponent },
  { path: 'furniture-for-budget', component: FurnitureForBudgetComponent },
  { path: 'best-sellers', component: BestSellersComponent },
  { path: 'nav-menu', component: NavMenuComponent },
  { path: 'products', component: ProductsComponent },
  // { path: '', component: LoginComponent },
  // { path: '', component: LoginComponent },


 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
