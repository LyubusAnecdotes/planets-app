import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_URI } from '../app.constants';
import { IPlanetsPagination } from '../models';

@Injectable()
export class PlanetsService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getPlanets(): Observable<IPlanetsPagination> {
    return this.httpClient.get<IPlanetsPagination>(`${API_URI}planets`);
  }
}
