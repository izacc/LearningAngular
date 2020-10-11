import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  public contentList = new Array <Content>();
  outputHTML: string;
  item1: Content = {
    id: 0,
    author: 'Izacc Lucas',
    imgUrl: 'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png',
    title: 'Item 1',
    type: 'Eyeball',
    body: 'Hello this is item one'
  };

  item2: Content = {
    id: 1,
    author: 'John Smith',
    imgUrl: 'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png',
    title: 'Item 2',
    type: 'Flower',
    body: 'Hello this is item two'
  };

  item3: Content = {
    id: 2,
    author: 'Jane Smith',
    imgUrl: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
    title: 'Item 3',
    type: 'Butterfly',
    body: 'Hello this is item three'
  };

  item4: Content = {
    id: 3,
    author: 'Jane Doe',
    imgUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
    title: 'Item 4',
    type: 'Star Wars',
    body: 'This is baby Yoda'
  };

  item5: Content = {
    id: 4,
    author: 'John Doe',
    imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131603.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=1200:*',
    title: 'Item 5',
    type: 'Flowers',
    body: 'These are tulips(i think)'
  };

  constructor() {
    this.contentList.push(this.item1, this.item2, this.item3, this.item4, this.item5);
  }

  ngOnInit(): void {
  }

}
