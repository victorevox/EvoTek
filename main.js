var app = angular.module('minmax', []);

app.controller('MinMaxCtrl',function($scope, $http) {
   $scope.formModel = {}; 
    
    $scope.onSubmit = function(){
        console.log("Hey Estás registrado");
        console.log($scope.formModel);
        
        $http.post('https://minmax-server.herokuapp.com/register/',$scope.formModel).success(function() {
            console.log(":)");
        }).error(function() {
                console.log(":(");
        });
    };
});