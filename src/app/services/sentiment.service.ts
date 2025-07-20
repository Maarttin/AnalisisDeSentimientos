// archivo: src/app/services/sentiment.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SentimentService {
  private apiUrl = 'http://localhost:5000/predict';

  constructor(private http: HttpClient) {}

  analyzeText(text: string) {
    return this.http.post<{ sentiment: string }>(this.apiUrl, { text });
  }
}
