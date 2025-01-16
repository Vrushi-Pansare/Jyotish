import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuActive = false;
  // breadcrumb = 'Home';
  // content = '';

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  showContent(page: string) {
    // this.breadcrumb = `Home > ${page}`;
    this.menuActive = false; // Close the menu after selection
  }

}
