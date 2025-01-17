import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopeService {
  private apiUrl = ''; // Replace with the actual API endpoint
  private apiKey = ''; // Your API key

  constructor(private http: HttpClient) { }
  getHoroscope(sign: string, type: string): Observable<any> {
    // Set the headers for the request
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': this.apiKey // Include the API key in the headers
    });

    // Construct the API endpoint URL
    const url = `${this.apiUrl}${type}/${sign}`; 

    // Make the GET request to the API and return the Observable
    return this.http.get(url, { headers });
  }

}
