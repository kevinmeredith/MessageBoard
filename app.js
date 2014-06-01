"use strict";

var myApp = angular.module('myApp',[]);

myApp.controller("MessageBoardCtrl", function ($scope) {

    $scope.msg;
    $scope.messages = [];

    $scope.isValid = function(msg) {
    	return (typeof msg !== 'undefined');
    }

    $scope.addMessage = function(msg) {
    	$scope.messages = $scope.messages.concat(msg);
    }

});
