import {Content} from './content-interface';
import { Component } from '@angular/core';

export class ContentList{
  private _items: Content[];


  constructor() {
    this._items = [];
  }


  get items(): Content[] {
    return this._items;
  }

addContent(content: Content): void{
    this._items.push(content);
  }

  amountInArray(): number{
    return this._items.length;

  }

  arrayOutputById(id: number): string {
    return '<h1>' + this._items[id].title + '</h1>' +
      '<h2> Author: ' + this._items[id].author + '</h2>' +
      '<h2> Type: ' + this._items[id].type + '</h2>' +
      '<h2> Tags: ' + this._items[id].tags + '</h2>' +
      '<p>' + this._items[id].body + '</p>' +
      '<img src="' + this._items[id].imgUrl + '" alt="picture" width="250" height="250">';
  }
}
