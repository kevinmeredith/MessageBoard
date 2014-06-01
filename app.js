"use strict";

var myApp = angular.module('myApp',[]);

myApp.controller("MessageBoardCtrl", function ($scope) {

    $scope.msg;
    $scope.messages = [];

    $scope.isValid = function(msg) {
    	return (typeof msg !== 'undefined') && msg.trim() !== "";
    }

    $scope.add = function(msg) {
    	$scope.messages = $scope.messages.concat(msg);
    }

    $scope.delete = function(msgs, i) {
    	console.log("deleting index: ", i);
    	msgs.splice(i, 1);
    }

});
