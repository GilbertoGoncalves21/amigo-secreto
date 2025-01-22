import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of as observableOf } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RealizeDrawService {
  private apiUrl = 'http://localhost:3000/draws';  // URL do seu servidor JSON

  constructor(private http: HttpClient) {}

  // Método para realizar o sorteio
  performDraw(names: string[]): { giver: string; receiver: string }[] {
    const shuffledNames = [...names];
    for (let i = shuffledNames.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledNames[i], shuffledNames[j]] = [shuffledNames[j], shuffledNames[i]];
    }

    // Retorna o sorteio
    return shuffledNames.map((name, index) => {
      return {
        giver: names[index],
        receiver: shuffledNames[(index + 1) % shuffledNames.length],
      };
    });
  }

  // Método para salvar o sorteio no banco de dados
  saveDraw(groupName: string, results: any[]): Observable<any> {
    const drawData = {
      groupName,
      results,
    };

    // Realiza uma requisição POST para salvar o sorteio no JSON server
    return this.http.post(this.apiUrl, drawData);
  }
}

