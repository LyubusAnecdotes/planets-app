import { IPlanet } from './models';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  selectedPlanet: IPlanet;

  planetDataChanged(planetData: IPlanet): void {
    this.selectedPlanet = planetData;
  }
}
