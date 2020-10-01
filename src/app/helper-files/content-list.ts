

class ContentList{
  private _items: Content[];


  constructor(items: []) {
    this._items = items;
  }


  get items(): [] {
    return this._items;
  }

addContent(content: Content): void{
    this._items.concat(content);
  }

  amountInArray(Array: []): number{
    return Array.length;

  }

  arrayOutputById(id: number, array: []): void{
    //change this to the html
    console.log(array[id]);
  }
}
