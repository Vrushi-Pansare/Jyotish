import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuActive: boolean = false;


  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  showContent(content: string) {
    // this.breadcrumb = `Home > ${page}`;
    console.log(content); // Close the menu after selection
  }

}
