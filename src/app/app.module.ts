import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategorySelectionComponent } from './components/menu-container/components/category-selection/category-selection.component';
import { MenuContainerComponent } from './components/menu-container/menu-container.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './components/homepage/components/introduction/introduction.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CategoryContainerComponent } from './components/menu-container/components/category-container/category-container.component';
import { ProductItemComponent } from './components/menu-container/components/product-item/product-item.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
