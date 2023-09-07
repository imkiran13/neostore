import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ShopByDepartmentComponent } from './components/home/shop-by-department/shop-by-department.component';
import { TrendingComponent } from './components/home/trending/trending.component';
import { SpecialOfferComponent } from './components/home/special-offer/special-offer.component';
import { NeedItFastComponent } from './components/home/need-it-fast/need-it-fast.component';
import { FurnitureForBudgetComponent } from './components/home/furniture-for-budget/furniture-for-budget.component';
import { BestSellersComponent } from './components/home/best-sellers/best-sellers.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { NewArrivalsComponent } from './components/home/new-arrivals/new-arrivals.component';
import { FromOurBlogComponent } from './components/home/from-our-blog/from-our-blog.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NeostoreFurnitureComponent } from './components/home/neostore-furniture/neostore-furniture.component';
import { SignupForComponent } from './components/home/signup-for/signup-for.component';
import { ProductsComponent } from './components/products/products.component';

import { SortByComponent } from './components/products/sort-by/sort-by.component';
import { BreadcrumbComponent } from './components/products/breadcrumb/breadcrumb.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ShopByDepartmentComponent,
    TrendingComponent,
    SpecialOfferComponent,
    NeedItFastComponent,
    FurnitureForBudgetComponent,
    BestSellersComponent,
    NavMenuComponent,
    NewArrivalsComponent,
    FromOurBlogComponent,
    BannerComponent,
    NeostoreFurnitureComponent,
    SignupForComponent,
    ProductsComponent,
    BreadcrumbComponent,
        SortByComponent
  ],
  imports: [
  
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CarouselModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
