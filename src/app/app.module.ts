import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './pages/about/about.component';
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
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { DailyHoroscopeDetailsComponent } from './pages/daily-horoscope-details/daily-horoscope-details.component';
import { MeetastrologerComponent } from './pages/meetastrologer/meetastrologer.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WelcomeComponent,
    LoginComponent,
    AboutComponent,
    OtpVerificationComponent,
    AstrologerComponent,
    DiscoverComponent,
    DiscoverdailyComponent,
    HappycustomerComponent,
    BlogsComponent,
    QdayComponent,
    GuidComponent,
    WithusComponent,
    DailyhoroscopeComponent,
    TestimonialsComponent,
    KundliComponent,
    KundlidetailsComponent,
    OurastrologersComponent,
    LanguageSwitcherComponent,
    DailyHoroscopeDetailsComponent,
    MeetastrologerComponent,
    CardComponent,
  

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
