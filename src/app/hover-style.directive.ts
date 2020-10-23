import {Directive, ElementRef, OnInit, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective implements OnInit{

  constructor(private elm: ElementRef) {
  }

  @HostListener('mouseenter') onEnter(): void{
    this.styleElement();
}
  @HostListener('mouseleave') onExit(): void{
    this.resetElement();
  }
  private styleElement(): void{
    switch (this.elm.nativeElement.id){
      case 'tags':
        this.elm.nativeElement.style.fontWeight = 'bold';
        break;
      case 'title':
        this.elm.nativeElement.style.textDecoration = 'underline';
        break;
      default:
        break;
    }


  }
  private resetElement(): void{
    switch (this.elm.nativeElement.id){
      case 'tags':
        this.elm.nativeElement.style.fontWeight = 'normal';
        break;
      case 'title':
        this.elm.nativeElement.style.textDecoration = 'none';
        break;
      default:
        break;
    }
    }

  ngOnInit(): void {
  }
}
