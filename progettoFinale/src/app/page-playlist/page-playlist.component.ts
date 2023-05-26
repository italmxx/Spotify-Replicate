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

  playSound(id:number){

    let audioFile : any;
      switch(id){
        case 1:
          console.log(id);
          audioFile = '../../assets/1.mp3';
          var audio = new Audio(audioFile);
          audio.play();
          // audio.pause();
          break;


        case 2:
          audioFile = '../../assets/2.mp3';
          var audio = new Audio(audioFile);
          audio.play();
          // audio.pause();
          break;


      }



  }

  stopSound(id:number){
    let audioFile : any;
    switch(id){
      case 1:
        console.log(id);
        audioFile = '../../assets/1.mp3';
        var audio = new Audio(audioFile);
        audio.pause();

        break;

      case 2:
        audioFile = '../../assets/2.mp3';
        var audio = new Audio(audioFile);
        // audio.play();
        audio.pause();
        break;


    }
  }







  constructor(private titleService: Title) {  }

  ngOnInit() {
    this.titleService.setTitle('Spotify | Playlist');
  }

}
