import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: false,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
 
  menuActive = false;
 

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  showContent(page: string) {
    this.menuActive = false; // Close the menu after selection
  }

}
