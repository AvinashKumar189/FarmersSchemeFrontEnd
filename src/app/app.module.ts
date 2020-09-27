import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AfterLoginFarmerComponent } from './after-login-farmer/after-login-farmer.component';
import { AfterLoginBidderComponent } from './after-login-bidder/after-login-bidder.component';
import { BidderRegistrationComponent } from './bidder-registration/bidder-registration.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FarmerOrBidderComponent } from './farmer-or-bidder/farmer-or-bidder.component';
import { FarmerRegistrationComponent } from './farmer-registration/farmer-registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogoutComponent } from './logout/logout.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { PlaceSellRequestComponent } from './place-sell-request/place-sell-request.component';
import { SoldCropHistoryComponent } from './sold-crop-history/sold-crop-history.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    AfterLoginFarmerComponent,
    AfterLoginBidderComponent,
    BidderRegistrationComponent,
    ContactUsComponent,
    FarmerOrBidderComponent,
    FarmerRegistrationComponent,
    ForgotPasswordComponent,
    LogoutComponent,
    MarketplaceComponent,
    PlaceSellRequestComponent,
    SoldCropHistoryComponent,
    HomeComponent,
    NavigationBarComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
