import { Component } from '@angular/core';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: false,
  
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
 
  showLanguageButtons: boolean = false;

  toggleLanguageButtons() {
      this.showLanguageButtons = !this.showLanguageButtons;
  }

  changeLanguage(language: string) {
      // Your logic to change the language
  }
  
}
