import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {LikeComponent} from './like.component';


@Component({
    selector: 'my-app',
    template: `
            <h1>My First Angular 2 App,Hello</h1>
            <div class="row test">
              <div class="col-sm-3">
                <courses></courses>
              </div>
              <div class="col-sm-1">
                <h2> Like </h2>
                <like [like-value]="likeValue" [is-like]="isLike" (change)="onChangeLike($event)"></like>
              </div>
            </div>
              `,
    directives:[CoursesComponent,LikeComponent],
    styles:[`
      .test{
        padding:10px;
        margin:10px;
      }
      `]

})
export class AppComponent {
  isLike=true;
  likeValue=12;
  onChangeLike($event){
    console.log($event);
  }
 }
