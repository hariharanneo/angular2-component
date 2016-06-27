System.register(['angular2/core', './courses.component', './like.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, like_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.isLike = true;
                    this.likeValue = 12;
                }
                AppComponent.prototype.onChangeLike = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n            <h1>My First Angular 2 App,Hello</h1>\n            <div class=\"row test\">\n              <div class=\"col-sm-3\">\n                <courses></courses>\n              </div>\n              <div class=\"col-sm-1\">\n                <h2> Like </h2>\n                <like [like-value]=\"likeValue\" [is-like]=\"isLike\" (change)=\"onChangeLike($event)\"></like>\n              </div>\n            </div>\n              ",
                        directives: [courses_component_1.CoursesComponent, like_component_1.LikeComponent],
                        styles: ["\n      .test{\n        padding:10px;\n        margin:10px;\n      }\n      "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map