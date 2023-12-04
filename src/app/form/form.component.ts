import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class AttractionFormComponent {
  newAttraction = { name: '', comments: '' };

  @Output() attractionAdded = new EventEmitter<any>();

  addAttraction() {

    console.log('Adding new attraction:', this.newAttraction);
    this.attractionAdded.emit(this.newAttraction);
    this.newAttraction = { name: '', comments: '' };

  }
}
