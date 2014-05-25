/**
 * Created by michaelsaunders on 5/23/2014.
 */

var AdditionalPhotosApp = angular.module('AdditionalPhotosApp',[]);



//phoneCatApp.controller('PhoneListCtl',function($scope, $http){



AdditionalPhotosApp.controller('PhotoListCtrl', function ($scope, $http) {
    $http.get('/stub/additionalphotos.json').
        success(function(data, status, headers, config) {
            console.log('Hello');
            $scope.photos = data;
            console.log(data);
        }).
        error(function(data, status, headers, config) {
            // log error
        });
});
