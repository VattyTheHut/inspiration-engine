angular.module('app').controller('mainCtrl', function($scope, mainServ){
    $scope.goo;
    $scope.submit = () => {
        if($scope.goo){
            console.log($scope.goo);
            mainServ.dataCaller($scope.goo);
        }
    }

   
})