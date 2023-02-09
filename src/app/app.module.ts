import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { PeopleModalComponent, PlanetDetailsComponent, PlanetsSelectComponent } from './components';
import { PeopleService, PlanetsService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsSelectComponent,
    PlanetDetailsComponent,
    PeopleModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  providers: [PeopleService, PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
