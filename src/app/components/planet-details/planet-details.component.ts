import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PeopleModalComponent } from '../people-modal/people-modal.component';

import { IPlanet } from './../../models';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
})
export class PlanetDetailsComponent {

  displayedColumns: string[] = ['name', 'diameter', 'climate', 'population'];

  @Input()
  planet: IPlanet;

  constructor(
    private readonly dialog: MatDialog,
  ) { }

  showPeopleDetails(): void {
    // As in the test details we had an example with people/id request and in the planet data we have no info about the citizen IDs
    // I just will take an planetId and by thid ID will get people data
    const planetIdMatch = this.planet.url.match(/(\d+)/);

    if (planetIdMatch?.length) {
      this.dialog.open(PeopleModalComponent, {
        data: {
          planetId: planetIdMatch[1]
        },
        width: '50%',
      });
    }
  }
}
