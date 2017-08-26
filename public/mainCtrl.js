angular.module('app').controller('mainCtrl', function($scope, mainServ){
    $scope.goo;
    $scope.submit = () => {
        if($scope.goo){
            console.log($scope.goo);
            $('#home-intro').addClass('start-search');
            mainServ.dataCaller($scope.goo);
        }
    }

   
})