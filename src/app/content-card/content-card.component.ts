import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';



@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent implements OnInit {
 // public contentList = new ContentList();
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



constructor() {
 // this.contentList.addContent(this.item1);
  //this.contentList.addContent(this.item2);
 // this.contentList.addContent(this.item3);
  //this.outputHTML = this.contentList.arrayOutputById(0) + this.contentList.arrayOutputById(1) + this.contentList.arrayOutputById(2);

  }

ngOnInit(): void {
  }

}
