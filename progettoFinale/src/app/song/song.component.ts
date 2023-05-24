import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {
  @Input() titolo: String | undefined;
  @Input () autore: String | undefined;
  @Input () img: any | undefined;
}
