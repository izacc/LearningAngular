import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {Pipe, PipeTransform} from '@angular/core';
import {ContentService} from '../services/content.service';
import {MessageService} from '../services/message.service';


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
  public contents = ContentListComponent.contentList;
  public title: string;
  public validity = '';
  outputHTML: string;
  constructor(private contentService: ContentService) {
  }
  public idPrint(content: Content): void{
    console.log(content.id);
  }
  public validTitle(title: string): any{
    if (this.contents.filter(t => t.title.toLowerCase().includes(this.title.toLowerCase())).length !== 0){
      this.validity = 'That is a valid title!';
      console.log ('That is a valid title!');
    }else{
      this.validity = 'That is NOT a valid title!';
      console.log ('That is NOT a valid title!');
    }
    this.title = '';
  }
  ngOnInit(): void {
    this.contentService.getContentObs().subscribe(content =>
      this.contents = content);
  }

}

