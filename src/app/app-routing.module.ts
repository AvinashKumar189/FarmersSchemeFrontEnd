import { SellRequestSuccessComponent } from './sell-request-success/sell-request-success.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { BidderRegistrationComponent } from './bidder-registration/bidder-registration.component';
import { FarmerRegistrationComponent } from './farmer-registration/farmer-registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LogoutComponent } from './logout/logout.component';
import { AfterLoginNavbarComponent } from './after-login-navbar/after-login-navbar.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { SoldCropHistoryComponent } from './sold-crop-history/sold-crop-history.component';
import { PlaceSellRequestComponent } from './place-sell-request/place-sell-request.component';
import { AfterLoginFarmerComponent } from './after-login-farmer/after-login-farmer.component';
import { FarmerOrBidderComponent } from './farmer-or-bidder/farmer-or-bidder.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { AfterLoginBidderComponent } from './after-login-bidder/after-login-bidder.component';
import { FarmerAdminDashboardComponent } from './farmer-admin-dashboard/farmer-admin-dashboard.component';
import { BiddingRequestAdminDashboardComponent } from './bidding-request-admin-dashboard/bidding-request-admin-dashboard.component';
import { SellRequestAdminDashboardComponent } from './sell-request-admin-dashboard/sell-request-admin-dashboard.component';
import { BidderAdminDashboardComponent } from './bidder-admin-dashboard/bidder-admin-dashboard.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'farmer-or-bidder', component: FarmerOrBidderComponent },
  { path: 'after-login-farmer', component: AfterLoginFarmerComponent },
  { path: 'place-sell-request', component: PlaceSellRequestComponent },
  { path: 'sold-crop-history', component: SoldCropHistoryComponent },
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'after-login-navbar', component: AfterLoginNavbarComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'farmer-registration', component: FarmerRegistrationComponent },
  { path: 'bidder-registration', component: BidderRegistrationComponent },
  { path: 'register-success', component: RegisterSuccessComponent },
  { path: 'after-login-bidder', component: AfterLoginBidderComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'sell-request-success', component: SellRequestSuccessComponent },
  { path: 'farmer-admin-dashboard', component: FarmerAdminDashboardComponent },
  { path: 'bidder-admin-dashboard', component: BidderAdminDashboardComponent },
  { path: 'sell-request-admin-dashboard', component: SellRequestAdminDashboardComponent },
  { path: 'bidding-request-admin-dashboard', component: BiddingRequestAdminDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
