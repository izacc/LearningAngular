import { Injectable } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {Observable, of} from 'rxjs';
import {contentList} from '../helper-files/contentDB';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService) { }
  getContentObs(): Observable<Content[]>{
    this.messageService.add('Content Service: Fetched Content');
    return of(contentList);
  }
}
