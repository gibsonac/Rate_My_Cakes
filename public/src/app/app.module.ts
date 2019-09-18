import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CakeComponent } from './cake/cake.component';
import { RatingComponent } from './rating/rating.component';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CakeComponent,
    RatingComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // Ng2SearchPipeModule
    // Pipe,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
