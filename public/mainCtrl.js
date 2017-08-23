angular.module('app').controller('mainCtrl', function($scope, mainServ){
    $scope.test = "Welcome to Randome quote generator";
    $scope.goo;
    $scope.submit = () =>{
        if($scope.goo){
            console.log($scope.goo);
            $('.chips').on('chip.add', function(e, chip){
                return $scope.goo;
            });
            mainServ.dataCaller($scope.goo);

        }
    }
})