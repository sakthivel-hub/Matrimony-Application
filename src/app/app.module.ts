import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { MatchesComponent } from './matches/matches.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { UpgradenowComponent } from './upgradenow/upgradenow.component';
import { BannerAreaComponent } from './banner-area/banner-area.component';
import { ProductAreaComponent } from './product-area/product-area.component';
import { ServiceAreaComponent } from './service-area/service-area.component';
import { OfferAreaComponent } from './offer-area/offer-area.component';
import { DiscountAreaComponent } from './discount-area/discount-area.component';
import { SubscribeAreaComponent } from './subscribe-area/subscribe-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    MatchesComponent,
    MailboxComponent,
    UpgradenowComponent,
    BannerAreaComponent,
    ProductAreaComponent,
    ServiceAreaComponent,
    OfferAreaComponent,
    DiscountAreaComponent,
    SubscribeAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
