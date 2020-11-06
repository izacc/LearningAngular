import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {Pipe, PipeTransform} from '@angular/core';
import {CreateContentComponent} from '../create-content/create-content.component';


@Pipe({name: 'filterType'})
export class FilterTypePipe implements PipeTransform{
  transform(contentList: Content[], type: string): any{
    return contentList.filter(t => t.type.includes(type));
  }
}

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})



export class ContentListComponent implements OnInit {
  public static contentList = new Array <Content>();
  public localContentList = ContentListComponent.contentList
  public title: string;
  public validity = '';
  outputHTML: string;
  item1: Content = {
    id: 0,
    author: 'Izacc Lucas',
    imgUrl: 'https://cdn.britannica.com/s:900x675/09/167709-131-36A6A6E8/butterfly-moth-blue-Lepidoptera-insect.jpg',
    title: 'Item 1',
    tags: ['Butterfly', 'Leaf', 'Green'],
    type: 'Butterfly',
    body: 'Hello this is item one'
  };

  item2: Content = {
    id: 1,
    author: 'John Smith',
    imgUrl: '',
    title: 'Item 2',
    tags: ['Flower', 'Color', 'Green'],
    type: 'Flower',
    body: 'Hello this is item two'
  };

  item3: Content = {
    id: 2,
    author: 'Jane Smith',
    imgUrl: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
    title: 'Item 3',
    tags: ['Butterfly', 'Flower', 'Purple'],
    type: 'Butterfly',
    body: 'Hello this is item three'
  };

  item4: Content = {
    id: 3,
    author: 'Jane Doe',
    imgUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
    title: 'Item 4',
    tags: ['Star Wars', 'Baby Yoda', 'Tea'],
    type: 'Star Wars',
    body: 'This is baby Yoda'
  };

  item5: Content = {
    id: 4,
    author: 'John Doe',
    imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131603.jpg?crop=1.00xw:0.798xh;0,0.202xh&resize=1200:*',
    title: 'Item 5',
    type: 'Flower',
    body: 'These are tulips(i think)'
  };
  constructor() {
    ContentListComponent.contentList.push(this.item1, this.item2, this.item3, this.item4, this.item5);
  }
  public idPrint(content: Content): void{
    console.log(content.id);
  }
  public validTitle(title: string): any{
    if (this.localContentList.filter(t => t.title.toLowerCase().includes(this.title.toLowerCase())).length !== 0){
      this.validity = 'That is a valid title!';
      console.log ('That is a valid title!');
    }else{
      this.validity = 'That is NOT a valid title!';
      console.log ('That is NOT a valid title!');
    }
    this.title = '';
  }
  ngOnInit(): void {
  }

}

