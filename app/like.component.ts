import {Component,Input,Output,EventEmitter} from 'angular2/core';
import {Directive,Renderer,ElementRef} from 'angular2/core';
@Component({
  selector:'like',
  templateUrl:'app/like.template.html',
  styles:[
    `
    .glyphicon-heart{
      color:orange;
      color:#ccc;
      cursor:pointer
    }
    .highlighted{
      color:deeppink;
    }
    `
  ]
})

export class LikeComponent{
  @Input('like-value') likeValue=10;
  @Input('is-like') isLike=false;
  @Output() change = new EventEmitter();

  onClick(){
    this.isLike=!this.isLike;
    this.likeValue +=this.isLike ? 1 : -1 ;
    this.change.emit({newValue:this.isLike,totalValue:this.likeValue});
  }
  constructor(private el:ElementRef,private renderer:Renderer){
  }
  onHover(){
    console.log("getting");
      this.renderer.setElementStyle(this.el.nativeElement,'cursor','pointer');
  }
}
