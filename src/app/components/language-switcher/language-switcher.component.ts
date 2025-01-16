import { Component } from '@angular/core';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: false,
  
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
  constructor(private languageService: LanguageService) {}

  changeLanguage(lang: string) {
      this.languageService.setLanguage(lang);
  }

}
