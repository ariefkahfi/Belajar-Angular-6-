import {Directive , ElementRef , HostListener , Input} from "@angular/core";


@Directive({
    selector : '[hover-color]'
})
export class HoverColor {
    
    @Input('hover-color')
    myColor : string;
   
    constructor(private elementRef : ElementRef){}



    @HostListener('mouseenter') onMouserEnter(){
        this.doHover(this.myColor);
    }
    @HostListener('mouseleave') onmouseleave(){
        this.doHover(null);
    }

   

    doHover(color : string){
        this.elementRef.nativeElement.style.backgroundColor = color;
    }
}
