import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage: string = 'en'; // Default language

    setLanguage(lang: string) {
        this.currentLanguage = lang;
        // Logic to update the application language
    }

    getLanguage() {
        return this.currentLanguage;
    }


}
