import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  audio: any = {};
  constructor() {
    this.audio.c = new Audio();
    this.audio.c.src = './assets/C1.mp3';
    this.audio.c.load();
    this.audio.d = new Audio();
    this.audio.d.src = './assets/D1.mp3';
    this.audio.d.load();
    this.audio.e = new Audio();
    this.audio.e.src = './assets/E1.mp3';
    this.audio.e.load();
    this.audio.f = new Audio();
    this.audio.f.src = './assets/F1.mp3';
    this.audio.f.load();
    this.audio.g = new Audio();
    this.audio.g.src = './assets/G1.mp3';
    this.audio.g.load();
    this.audio.a = new Audio();
    this.audio.a.src = './assets/A1.mp3';
    this.audio.a.load();
    this.audio.b = new Audio();
    this.audio.b.src = './assets/B1.mp3';
    this.audio.b.load();
  }

  play(note: string): void {
    console.log('play ', note);
    switch (note) {
      case 'C':
        this.audio.c.play();
        break;
      case 'D':
        this.audio.d.play();
        break;
      case 'E':
        this.audio.e.play();
        break;
      case 'F':
        this.audio.f.play();
        break;
      case 'G':
        this.audio.g.play();
        break;
      case 'A':
        this.audio.a.play();
        break;
      case 'B':
        this.audio.b.play();
        break;

      default:
        break;
    }
  }
  stop(note: string): void {
    console.log('stop ', note);
    switch (note) {
      case 'C':
        this.audio.c.pause();
        this.audio.c.currentTime = 0;
        break;
      case 'D':
        this.audio.d.pause();
        this.audio.d.currentTime = 0;
        break;
      case 'E':
        this.audio.e.pause();
        this.audio.e.currentTime = 0;
        break;
      case 'F':
        this.audio.f.pause();
        this.audio.f.currentTime = 0;
        break;
      case 'G':
        this.audio.g.pause();
        this.audio.g.currentTime = 0;
        break;
      case 'A':
        this.audio.a.pause();
        this.audio.a.currentTime = 0;
        break;
      case 'B':
        this.audio.b.pause();
        this.audio.b.currentTime = 0;
        break;

      default:
        break;
    }
  }
}
