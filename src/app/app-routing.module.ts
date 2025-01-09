import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { OtpVerificationComponent } from './components/otp-verification/otp-verification.component';
import { AstrologerComponent } from './components/astrologer/astrologer.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'otp', component: OtpVerificationComponent},
  {path: 'About', component: AboutComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'astrologer', component: AstrologerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
