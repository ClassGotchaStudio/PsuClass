'use strict';

angular.module('core').controller('InputController', ['$scope', 'Authentication', '$http', '$q', '$timeout',
    function($scope, Authentication, $http, $q, $timeout) {
        $scope.push = function() {
            var course_data = [{
                "number": $scope.CourseNum,
                "name": $scope.CourseName,
                "fullName": $scope.CourseFullName,
                "section": $scope.CourseSection,
                "desc": $scope.CourseDesc,
                "instructor1": $scope.CourseInst1,
                "instructor2": $scope.CourseInst2,
                "unit": $scope.CourseUnit,
                "room": $scope.CourseRoom,
                "time": $scope.CourseTime,
                "status": $scope.CourseStatus,
                "capacity": $scope.CourseCapa,
                "enrolled": $scope.CourseCapaEnrolled,
                "waitlist": $scope.CourseWait,
                "waitlistEnrolled": $scope.CourseWaitEnrolled
            }];

            $http({
                    method: 'POST',
                    url: '/course/create',
                    data: course_data,
                    // headers: {
                    //     'Content-Type': 'application/x-www-form-urlencoded'
                    // }
                })
                .success(function(return_data) {
                    console.log(return_data);
                });

        }
    }
]);
