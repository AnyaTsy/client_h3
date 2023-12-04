import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class AttractionListComponent {
  @Output() attractionSelected = new EventEmitter<any>();

  attractions = [
    { name: 'Big Ben', comments: ['British culture', 'Wonderful'] },
    { name: 'Arcadia', comments: ['ODESA, UKRAINE!!!', 'SEA!', 'WOW'] },
    { name: 'Independent Square', comments: ['Glory to Ukraine!'] },
  ];

  showAttractionDetails(attraction: any) {
    this.attractionSelected.emit(attraction);
  }
}
