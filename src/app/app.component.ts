import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  audio: any = {};
  constructor() {
    this.audio.c = new Audio();
    this.audio.c.src = './assets/C1.mp3';
    this.audio.c.load();
    this.audio.cs = new Audio();
    this.audio.cs.src = './assets/Cs1.mp3';
    this.audio.cs.load();
    this.audio.d = new Audio();
    this.audio.d.src = './assets/D1.mp3';
    this.audio.d.load();
    this.audio.ds = new Audio();
    this.audio.ds.src = './assets/Ds1.mp3';
    this.audio.ds.load();
    this.audio.e = new Audio();
    this.audio.e.src = './assets/E1.mp3';
    this.audio.e.load();
    this.audio.f = new Audio();
    this.audio.f.src = './assets/F1.mp3';
    this.audio.f.load();
    this.audio.fs = new Audio();
    this.audio.fs.src = './assets/Fs1.mp3';
    this.audio.fs.load();
    this.audio.g = new Audio();
    this.audio.g.src = './assets/G1.mp3';
    this.audio.g.load();
    this.audio.gs = new Audio();
    this.audio.gs.src = './assets/Gs1.mp3';
    this.audio.gs.load();
    this.audio.a = new Audio();
    this.audio.a.src = './assets/A1.mp3';
    this.audio.a.load();
    this.audio.as = new Audio();
    this.audio.as.src = './assets/As1.mp3';
    this.audio.as.load();
    this.audio.b = new Audio();
    this.audio.b.src = './assets/B1.mp3';
    this.audio.b.load();
  }

  ngOnInit() {
    // window.prompt('passons en plein écran').subscribe((resp: any) => {
    //   this.toggleFullScreen();
    // })
  }

  play(note: string): void {
    console.log('play ', note);
    switch (note) {
      case 'C':
        this.audio.c.play();
        break;
      case 'Cs':
        this.audio.cs.play();
        break;
      case 'D':
        this.audio.d.play();
        break;
      case 'Ds':
        this.audio.ds.play();
        break;
      case 'E':
        this.audio.e.play();
        break;
      case 'F':
        this.audio.f.play();
        break;
      case 'Fs':
        this.audio.fs.play();
        break;
      case 'G':
        this.audio.g.play();
        break;
      case 'Gs':
        this.audio.gs.play();
        break;
      case 'A':
        this.audio.a.play();
        break;
      case 'As':
        this.audio.as.play();
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
      case 'Cs':
        this.audio.cs.pause();
        this.audio.cs.currentTime = 0;
        break;
      case 'D':
        this.audio.d.pause();
        this.audio.d.currentTime = 0;
        break;
      case 'Ds':
        this.audio.ds.pause();
        this.audio.ds.currentTime = 0;
        break;
      case 'E':
        this.audio.e.pause();
        this.audio.e.currentTime = 0;
        break;
      case 'F':
        this.audio.f.pause();
        this.audio.f.currentTime = 0;
        break;
      case 'Fs':
        this.audio.fs.pause();
        this.audio.fs.currentTime = 0;
        break;
      case 'G':
        this.audio.g.pause();
        this.audio.g.currentTime = 0;
        break;
      case 'G':
        this.audio.gs.pause();
        this.audio.gs.currentTime = 0;
        break;
      case 'A':
        this.audio.a.pause();
        this.audio.a.currentTime = 0;
        break;
      case 'As':
        this.audio.as.pause();
        this.audio.as.currentTime = 0;
        break;
      case 'B':
        this.audio.b.pause();
        this.audio.b.currentTime = 0;
        break;

      default:
        break;
    }
  }


  toggleFullScreen(): void {
    console.log('clicked');
    const doc: any = window.document;
    const docEl: any = doc.documentElement;

    const requestFullScreen = docEl.requestFullscreen
    || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    const cancelFullScreen: any = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
      requestFullScreen.call(docEl);
    }
    else {
      cancelFullScreen.call(doc);
    }
  }
}
