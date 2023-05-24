import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() titolo: String | undefined;
  @Input () autore: String | undefined;
  @Input () img: any | undefined;
}
