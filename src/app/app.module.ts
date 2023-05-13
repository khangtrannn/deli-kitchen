import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { firebase } from './../../firebase.config';

import { CategorySelectionComponent } from './components/menu-container/components/category-selection/category-selection.component';
import { MenuContainerComponent } from './components/menu-container/menu-container.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoredProductsComponent } from './components/favored-products/favored-products.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroductionComponent } from './components/homepage/components/introduction/introduction.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CategoryContainerComponent } from './components/menu-container/components/category-container/category-container.component';
import { ProductItemComponent } from './components/menu-container/components/product-item/product-item.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ProductInformationComponent } from './components/product-detail/components/product-information/product-information.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomepageComponent,
    MenuContainerComponent,
    CategorySelectionComponent,
    CategoryContainerComponent,
    ProductItemComponent,
    IntroductionComponent,
    OurServicesComponent,
    FooterComponent,
    FeaturedProductsComponent,
    ProductDetailComponent,
    ProductInformationComponent,
    SideNavComponent,
    PageHeaderComponent,
    MenuPageComponent,
    FavoredProductsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    CarouselModule,
    AngularFireModule.initializeApp(firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
