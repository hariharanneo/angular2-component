System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1, core_2;
    var LikeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            LikeComponent = (function () {
                function LikeComponent(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                    this.likeValue = 10;
                    this.isLike = false;
                    this.change = new core_1.EventEmitter();
                }
                LikeComponent.prototype.onClick = function () {
                    this.isLike = !this.isLike;
                    this.likeValue += this.isLike ? 1 : -1;
                    this.change.emit({ newValue: this.isLike, totalValue: this.likeValue });
                };
                LikeComponent.prototype.onHover = function () {
                    console.log("getting");
                    this.renderer.setElementStyle(this.el.nativeElement, 'cursor', 'pointer');
                };
                __decorate([
                    core_1.Input('like-value'), 
                    __metadata('design:type', Object)
                ], LikeComponent.prototype, "likeValue", void 0);
                __decorate([
                    core_1.Input('is-like'), 
                    __metadata('design:type', Object)
                ], LikeComponent.prototype, "isLike", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], LikeComponent.prototype, "change", void 0);
                LikeComponent = __decorate([
                    core_1.Component({
                        selector: 'like',
                        templateUrl: 'app/like.template.html',
                        styles: [
                            "\n    .glyphicon-heart{\n      color:orange;\n      color:#ccc;\n      cursor:pointer\n    }\n    .highlighted{\n      color:deeppink;\n    }\n    "
                        ]
                    }), 
                    __metadata('design:paramtypes', [core_2.ElementRef, core_2.Renderer])
                ], LikeComponent);
                return LikeComponent;
            }());
            exports_1("LikeComponent", LikeComponent);
        }
    }
});
//# sourceMappingURL=like.component.js.map