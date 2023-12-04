import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedAttraction: any;
  attractions: any[] = [];

  onAttractionSelected(attraction: any) {
    this.selectedAttraction = attraction;
  }

  onAttractionAdded(attraction: any) {
    this.attractions.push(attraction);
  }
}
