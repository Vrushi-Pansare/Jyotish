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
import { WithusComponent } from './components/withus/withus.component';
import { DailyhoroscopeComponent } from './pages/dailyhoroscope/dailyhoroscope.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { KundliComponent } from './pages/kundli/kundli.component';
import { KundlidetailsComponent } from './components/kundlidetails/kundlidetails.component';
import { OurastrologersComponent } from './pages/ourastrologers/ourastrologers.component';
import { DailyHoroscopeDetailsComponent } from './pages/daily-horoscope-details/daily-horoscope-details.component';
import { MeetastrologerComponent } from './pages/meetastrologer/meetastrologer.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'meetastrologer', component: MeetastrologerComponent},
  {path: 'login', component: LoginComponent},
  {path: 'otp', component: OtpVerificationComponent},
  {path: 'DailyHoroscope_Details', component: DailyHoroscopeDetailsComponent},
  {path: 'kundli', component: KundliComponent},
  {path: 'kundlidetails', component: KundlidetailsComponent},
  {path: 'ourastrologers', component: OurastrologersComponent},
  {path: 'daliyhoroscope', component: DailyhoroscopeComponent},
  { path: 'testimonials', component: TestimonialsComponent},
  {path: 'About', component: AboutComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'astrologer', component: AstrologerComponent},
  {path: 'discover', component: DiscoverComponent},
  {path: 'discovrydaily', component: DiscoverdailyComponent},
  {path: 'happycustomer', component: HappycustomerComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'qday', component: QdayComponent},
  {path: 'guid', component: GuidComponent},
  {path: 'withus', component: WithusComponent},
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
