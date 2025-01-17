import { Component } from '@angular/core';
import { HoroscopeService } from '../../service/horoscope.service';

@Component({
  selector: 'app-daily-horoscope',
  standalone: false,

  templateUrl: './daily-horoscope.component.html',
  styleUrl: './daily-horoscope.component.css'
})
export class DailyHoroscopeComponent {
  signs: { name: string, image: string }[] = [
    { name: 'Aries', image: '../../../assets/signs/Zodiac Ornament.png' },
    { name: 'Taurus', image: '../../../assets/signs/Zodiac Ornament (1).png'},
    { name: 'Gemini', image: '../../../assets/signs/Zodiac Ornament (2).png' },
    { name: 'Cancer', image: '../../../assets/signs/Zodiac Ornament (3).png'},
    { name: 'Leo', image: '../../../assets/signs/Zodiac Ornament (4).png' },
    { name: 'Virgo', image: '../../../assets/signs/Zodiac Ornament (5).png' },
    { name: 'Libra', image: '../../../assets/signs/libra.png' },
    { name: 'Scorpio', image: '../../../assets/signs/scorpio.png' },
    { name: 'Sagittarius', image: '../../../assets/signs/icon (7).png' },
    { name: 'Capricorn', image: '../../../assets/signs/capricon.png' },
    { name: 'Aquarius', image: '../../../assets/signs/aquarius.png' },
    { name: 'Pisces', image: '../../../assets/signs/pisces.png' }
  ];
  selectedSign: string = '';
  selectedType: string = 'daily'; // Default to daily
  horoscopeData: any;

  constructor(private horoscopeService: HoroscopeService) { }

  // Method to set the selected sign
  selectSign(sign: string) {
    this.selectedSign = sign;
    this.getHoroscope(); // Fetch horoscope data immediately after selecting a sign
  }

  // Method to fetch horoscope data based on selected sign and type
  getHoroscope() {
    if (this.selectedSign) {
      this.horoscopeService.getHoroscope(this.selectedSign.toLowerCase(), this.selectedType).subscribe(
        response => {
          this.horoscopeData = response;
 console.log(this.horoscopeData); // Log the response to see the result
        },
        error => {
          console.error('Error fetching horoscope:', error);
        }
      );
    }
  }

  // Method to change the horoscope type and fetch data
  changeType(type: string) {
    this.selectedType = type;
    this.getHoroscope(); // Fetch horoscope data based on the new type
  }
  activeButton: string = ''; // Track the active button

  setActiveButton(button: string) {
    this.activeButton = button; // Set the active button
  }
}
