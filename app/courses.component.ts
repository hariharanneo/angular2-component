import {Component} from 'angular2/core';
import {CourseServices} from './courses.service';
import {AutoGrowDirective} from './autogrow.directive';
@Component({
    selector: 'courses',
    template: `
              <h2>Courses</h2>
              {{ title }}
              <input autoGrow/>
              <ul>
                <li *ngFor="#course of courses">
                {{ course }}
                </li>
              </ul>
              `,
    providers: [CourseServices],
    directives: [AutoGrowDirective]
})
export class CoursesComponent {
    title = "Title of the page";
    courses = [];

    constructor(courseServices: CourseServices) {
        this.courses = courseServices.getCourses();
    }
}
