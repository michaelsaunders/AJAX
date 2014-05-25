/**
 * Created by michaelsaunders on 5/23/2014.
 */

var ProfileApp = angular.module('ProfileApp',[]);



//phoneCatApp.controller('PhoneListCtl',function($scope, $http){



ProfileApp.controller('ProfileCtrl', function ($scope, $http) {
    $http.get('/stub/singlegirl.json').
        success(function(data, status, headers, config) {
            console.log('Hello');
            $scope.profiles = data;
            console.log(data);
        }).
        error(function(data, status, headers, config) {
            // log error
        });
});
