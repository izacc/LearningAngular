import { Injectable } from '@angular/core';
import {Content} from './helper-files/content-interface';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb(): Content[]{
    const content: Content[] = [{
      id: 0,
      author: 'Izacc Lucas',
      imgUrl: 'https://cdn.britannica.com/s:900x675/09/167709-131-36A6A6E8/butterfly-moth-blue-Lepidoptera-insect.jpg',
      title: 'Item 1',
      type: 'Butterfly',
      body: 'Hello this is item one'
    }, {
      id: 1,
      author: 'John Smith',
      imgUrl: 'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png',
      title: 'Item 2',
      type: 'Flower',
      body: 'Hello this is item two'
    },
      {
        id: 2,
        author: 'Jane Smith',
        imgUrl: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
        title: 'Item 3',
        type: 'Butterfly',
        body: 'Hello this is item three'
      },
      {
        id: 3,
        author: 'Jane Doe',
        imgUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
        title: 'Item 4',
        type: 'Star Wars',
        body: 'This is baby Yoda'
      },
      {
        id: 4,
        author: 'John Doe',
        imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131603.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=1200:*',
        title: 'Item 5',
        type: 'Flower',
        body: 'These are tulips(i think)'
      }];
    return content;
  }
  genId(content: Content[]): number {
    return content.length > 0 ?
      Math.max(...content.map(contents => contents.id)) + 1
      : 2000;
  }
}
