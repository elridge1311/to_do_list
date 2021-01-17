var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope){
  
  $scope.form = {};

  $scope.addTask = function(){
     
     $scope.task_list.push($scope.form);
     $scope.form = {};
  };

  $scope.task_list = [
   {
      task : 'shopping', 
   },
   {
   	  task : 'movie',
   }
  ];

  $scope.deleteTask = function(index){

    $scope.task_list.splice(index,1);
  };

}]);