angular.module('app').controller('mainCtrl', function($scope, mainServ){
    $scope.test = "Welcome to Randome quote generator";
    $scope.goo = "Tensea";
    $scope.submit = () =>{
        if($scope.goo){
            console.log($scope.goo);
            mainServ.dataCaller($scope.goo)
            $scope.goo = "";

        }
    }
})