
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import {ContentListComponent, FilterTypePipe} from './content-list/content-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {CreateComponentComponent, CreateStartComponentComponent} from './create-component/create-component.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    FilterTypePipe,
    MessagesComponent,
    CreateComponentComponent,
    CreateStartComponentComponent,
    ContentDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false,
        delay: 1000 }),
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    NoopAnimationsModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: 'content/:id'
        , component: ContentDetailComponent
      },
      { path: 'content'
        , component: ContentListComponent },
      { path: '**'
        , component: NotFoundComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
