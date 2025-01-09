import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { OtpVerificationComponent } from './components/otp-verification/otp-verification.component';
import { AstrologerComponent } from './components/astrologer/astrologer.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { DiscoverdailyComponent } from './components/discoverdaily/discoverdaily.component';
import { HappycustomerComponent } from './components/happycustomer/happycustomer.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { QdayComponent } from './components/qday/qday.component';
import { GuidComponent } from './components/guid/guid.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'otp', component: OtpVerificationComponent},
  {path: 'About', component: AboutComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'astrologer', component: AstrologerComponent},
  {path: 'discover', component: DiscoverComponent},
  {path: 'discovrydaily', component: DiscoverdailyComponent},
  {path: 'happycustomer', component: HappycustomerComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'qday', component: QdayComponent},
  {path: 'guid', component: GuidComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
