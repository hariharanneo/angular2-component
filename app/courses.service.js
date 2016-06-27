System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CourseServices;
    return {
        setters:[],
        execute: function() {
            CourseServices = (function () {
                function CourseServices() {
                }
                CourseServices.prototype.getCourses = function () {
                    return ["courses1", "courses2", "courses3", "courses4"];
                };
                return CourseServices;
            }());
            exports_1("CourseServices", CourseServices);
        }
    }
});
//# sourceMappingURL=courses.service.js.map