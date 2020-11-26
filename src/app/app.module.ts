
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import {ContentListComponent, FilterTypePipe} from './content-list/content-list.component';
import {FormsModule} from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import { CreateComponentComponent } from './create-component/create-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    FilterTypePipe,
    MessagesComponent,
    CreateComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false,
        delay: 1000 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
