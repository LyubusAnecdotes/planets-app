import { Observable } from 'rxjs';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PeopleService } from './../../services';
import { IPerson } from './../../models';

@Component({
  selector: 'app-people-modal',
  templateUrl: './people-modal.component.html',
  styleUrls: ['./people-modal.component.scss']
})
export class PeopleModalComponent implements OnInit {

  peopleData$: Observable<IPerson>;
  displayedColumns: string[] = ['name', 'height', 'birth_year'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { planetId: string },
    private readonly peopleService: PeopleService,
  ) { }

  ngOnInit(): void {
    this.peopleData$ = this.peopleService.getPeople(this.data.planetId);
  }
}
