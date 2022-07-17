import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForkCallsComponent } from './toluca-js/fork-calls/fork-calls.component';
import { PipeCallsComponent } from './toluca-js/pipe-calls/pipe-calls.component';
import { AsyncCallsComponent } from './toluca-js/async-calls/async-calls.component';
import { PokemonApiService } from './shared/apiary/pokemon-api.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ForkCallsComponent,
    PipeCallsComponent,
    AsyncCallsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PokemonApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
