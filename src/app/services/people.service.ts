import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API_URI } from '../app.constants';
import { IPerson } from '../models';

@Injectable()
export class PeopleService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getPeople(planetId: string): Observable<IPerson> {
    return this.httpClient.get<IPerson>(`${API_URI}people/${planetId}`);
  }
}
