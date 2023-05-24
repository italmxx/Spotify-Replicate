import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {
  @Input() titolo_song: String | undefined;
  @Input () autore_song: String | undefined;
  @Input () img_song: any | undefined;
  @Input () album_song: String | undefined;
  @Input () len_song: String | undefined;


  mostra: boolean = false;
  nascondi: boolean = true;
  mostraImmagine() {
    this.mostra = true;
    this.nascondi = false;
  }

  nascondiImmagine() {
    this.mostra = false;
    this.nascondi = true;
  }
}


