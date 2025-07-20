// archivo: src/app/components/form.component.ts
import { Component } from '@angular/core';
import { SentimentService } from '../services/sentiment.service';

@Component({
  selector: 'app-form',
  standalone: true,
  template: `
    <input [(ngModel)]="text" placeholder="Escribe algo" />
    <button (click)="analyze()">Analizar</button>
    <p *ngIf="result">Sentimiento: {{ result }}</p>
  `
})
export class FormComponent {
  text = '';
  result: string | null = null;

  constructor(private sentimentService: SentimentService) {}

  analyze() {
    this.sentimentService.analyzeText(this.text).subscribe(
      res => this.result = res.sentiment,
      err => console.error('Error:', err)
    );
  }
}
