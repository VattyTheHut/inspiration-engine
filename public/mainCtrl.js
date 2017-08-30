angular.module('app').controller('mainCtrl', function($scope, mainServ){
    $scope.goo;
    $scope.chips = [];
    $scope.submit = () => {
        if($scope.goo){
            $scope.showChips = true;
            $scope.noLogo = true;
            $scope.chips.push({text: $scope.goo})
            $('#search').addClass('search-animate');
            mainServ.dataCaller($scope.goo);
            $scope.goo = "";
            
        }
    }

    $scope.killChip = (chip) => {
        $scope.chips.filter(val => {
            if(val.text){} 
        })
    }

   
})