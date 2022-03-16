import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './modals/client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from "@angular/material/select";
import { Globals } from './global';
@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    [
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatDialogModule,
      MatListModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSelectModule
    ]
  ],
  providers: [
    Globals
  ],

  entryComponents: [ClientComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
