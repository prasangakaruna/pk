import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ServicesComponentsComponent } from './services-components/services-components.component';
import { PortfolioComponentsComponent } from './portfolio-components/portfolio-components.component';
import { ContactusComponentComponent } from './contactus-component/contactus-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    ServicesComponentsComponent,
    PortfolioComponentsComponent,
    ContactusComponentComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
