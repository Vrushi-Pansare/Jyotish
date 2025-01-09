import { Component } from '@angular/core';

@Component({
  selector: 'app-astrologer',
  standalone: false,
  
  templateUrl: './astrologer.component.html',
  styleUrl: './astrologer.component.css'
})
export class AstrologerComponent {
  astrologers = [
    {
      name: 'Saahil Kohli ',
      expertise: 'Vastu Astrologer',
      image: ''
    },
    {
      name: 'Vijaylakshmi Krishnan',
      expertise: 'Vedic Astrology',
      image: ''
    },
    {
      name: 'Dr. Hemant Barua',
      expertise: 'Vedic astrology',
      image: ''
    },
    {
      name: 'Sanjay B. Jumaani',
      expertise: 'Astro Numerologist',
      image: ''
    }
  ];

}
