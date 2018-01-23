import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { StarsComponent } from './stars/stars.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import {ProductService} from './shared/product.service';
import {Routes, RouterModule} from '@angular/router';
import { MulitipePipe } from './pipe/mulitipe.pipe';
import { FilterPipe } from './pipe/filter.pipe';
const routeConfig:Routes=[
{path:'',component:HomeComponent},
{path:'product/:productId',component:ProductDetailComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    StarsComponent,
    ProductComponent,
    ProductDetailComponent,
    HomeComponent,
    MulitipePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
      FormsModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
