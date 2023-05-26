import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-playlist',
  templateUrl: './page-playlist.component.html',
  styleUrls: ['./page-playlist.component.css']

})


export class PagePlaylistComponent {
  visibile : boolean = true;
  mostraImmagineCuore() {
    this.visibile = !this.visibile;

  }
  audioFile: string = 'assets/2.mp3';

  playAudioOnClick() {
    const audio = new Audio(this.audioFile);

    audio.play();
  }
  constructor(private titleService: Title) {  }

  ngOnInit() {
    this.titleService.setTitle('Spotify | Playlist');
  }

}
