import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSelectChange } from '@angular/material/select';

import { IPlanet, IPlanetsPagination } from './../../models';
import { PlanetsService } from './../../services';

@Component({
  selector: 'app-planets-select',
  templateUrl: './planets-select.component.html',
  styleUrls: ['./planets-select.component.scss']
})
export class PlanetsSelectComponent implements OnInit {

  planets$: Observable<IPlanetsPagination>;

  @Output()
  planetSelected = new EventEmitter<IPlanet>();

  constructor(
    private readonly planetsService: PlanetsService,
  ) { }

  ngOnInit(): void {
    this.planets$ = this.planetsService.getPlanets();
  }

  changePlanetDetails(planetData: MatSelectChange): void {
    if (planetData?.value) {
      this.planetSelected.emit(planetData.value);
    }
  }
}
