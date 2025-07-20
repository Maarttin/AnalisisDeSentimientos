import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sentiment-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, MatButtonModule],
  templateUrl: './sentiment-form.component.html',
})



export class SentimentFormComponent {
  text = '';
  result = '';

  constructor(private http: HttpClient) { }

  analyzeSentiment() {
    if (!this.text.trim()) {
    this.result = 'Por favor escribe algo antes de analizar.';
    return;
  }
    this.http.post<{ sentiment: string }>('http://localhost:5000/predict', { text: this.text })
      .subscribe(response => {
        this.result = response.sentiment;
      });

      
  }

  clearForm() {
  this.text = '';
  this.result = '';
}
}
