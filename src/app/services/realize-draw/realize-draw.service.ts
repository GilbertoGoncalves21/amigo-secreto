import { Injectable } from '@angular/core';
import { Integrant } from 'src/app/shared';

@Injectable({
  providedIn: 'root',
})
export class RealizeDrawService {
  constructor() {}

  realizeDraw(participants: Integrant[]): Integrant[] {
    const shuffled = [...participants];
    const total = shuffled.length;

    for (let i = total - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return participants.map((p, i) => ({
      ...p,
      secretFriend: shuffled[(i + 1) % total].name,
      code: this.generateRandomCode(),
    }));
  }

  private generateRandomCode(): string {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  }
}
